import { useEffect, useRef } from 'react';

// Portrait that "denoises" in like a diffusion model: coarse noisy blocks
// refine step by step into the photo. On hover, a small region re-tokenizes
// under the pointer. Respects reduced motion (draws the final frame at once).
const STEPS = [40, 28, 20, 14, 10, 7, 5, 3.5, 2.5, 1.6, 1];
const STEP_MS = 115;

const DiffusionPortrait = ({ src, alt, className = '', delay = 600 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const img = new Image();
        let gray; // pre-rendered greyscale source, cropped to the canvas aspect
        let raf;
        let timers = [];
        let done = false;
        const pointer = { x: -1, y: -1, active: false };
        const small = document.createElement('canvas');
        const sctx = small.getContext('2d');

        const setup = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(rect.width * dpr);
            canvas.height = Math.round(rect.height * dpr);
            // cover-crop the source into a greyscale buffer of canvas size
            gray = document.createElement('canvas');
            gray.width = canvas.width;
            gray.height = canvas.height;
            const g = gray.getContext('2d');
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const w = img.width * scale;
            const h = img.height * scale;
            g.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) * 0.3, w, h);
            const data = g.getImageData(0, 0, gray.width, gray.height);
            const px = data.data;
            for (let i = 0; i < px.length; i += 4) {
                const l = px[i] * 0.299 + px[i + 1] * 0.587 + px[i + 2] * 0.114;
                // gentle S-curve for a printed, slightly contrasty feel
                const v = 255 / (1 + Math.exp(-(l - 128) / 46));
                px[i] = px[i + 1] = px[i + 2] = v;
            }
            g.putImageData(data, 0, 0);
        };

        // Draw `gray` pixelated at block size `b` (in CSS px) into the given clip
        const pixelate = (b, noise) => {
            const dpr = canvas.width / canvas.getBoundingClientRect().width || 1;
            const block = Math.max(1, b * dpr);
            small.width = Math.max(1, Math.ceil(canvas.width / block));
            small.height = Math.max(1, Math.ceil(canvas.height / block));
            sctx.imageSmoothingEnabled = true;
            sctx.drawImage(gray, 0, 0, small.width, small.height);
            if (noise > 0) {
                const d = sctx.getImageData(0, 0, small.width, small.height);
                for (let i = 0; i < d.data.length; i += 4) {
                    const n = (Math.random() - 0.5) * 255 * noise;
                    d.data[i] = d.data[i + 1] = d.data[i + 2] = Math.min(255, Math.max(0, d.data[i] + n));
                }
                sctx.putImageData(d, 0, 0);
            }
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(small, 0, 0, small.width, small.height, 0, 0, small.width * block, small.height * block);
        };

        const drawFinal = () => {
            ctx.drawImage(gray, 0, 0);
            if (!pointer.active) return;
            const dpr = canvas.width / canvas.getBoundingClientRect().width || 1;
            ctx.save();
            ctx.beginPath();
            ctx.arc(pointer.x * dpr, pointer.y * dpr, 56 * dpr, 0, Math.PI * 2);
            ctx.clip();
            pixelate(9, 0.12);
            ctx.restore();
        };

        const run = () => {
            setup();
            if (reduce) {
                done = true;
                drawFinal();
                return;
            }
            STEPS.forEach((b, i) => {
                timers.push(
                    setTimeout(() => {
                        const noise = Math.max(0, 0.9 - i * 0.12);
                        if (b <= 1) {
                            done = true;
                            drawFinal();
                        } else pixelate(b, noise);
                    }, delay + i * STEP_MS),
                );
            });
            // first frame immediately so the box is never empty
            pixelate(STEPS[0], 0.9);
        };

        const onMove = (e) => {
            if (!done) return;
            const r = canvas.getBoundingClientRect();
            pointer.x = e.clientX - r.left;
            pointer.y = e.clientY - r.top;
            pointer.active = true;
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(drawFinal);
        };
        const onLeave = () => {
            pointer.active = false;
            if (done) {
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(drawFinal);
            }
        };
        const onResize = () => {
            if (!gray) return;
            setup();
            if (done) drawFinal();
        };

        img.onload = run;
        img.src = src;
        canvas.addEventListener('pointermove', onMove);
        canvas.addEventListener('pointerleave', onLeave);
        window.addEventListener('resize', onResize);
        return () => {
            timers.forEach(clearTimeout);
            cancelAnimationFrame(raf);
            canvas.removeEventListener('pointermove', onMove);
            canvas.removeEventListener('pointerleave', onLeave);
            window.removeEventListener('resize', onResize);
        };
    }, [src, delay]);

    return <canvas ref={canvasRef} role="img" aria-label={alt} className={`block w-full h-full bg-paper-2 ${className}`} />;
};

export default DiffusionPortrait;
