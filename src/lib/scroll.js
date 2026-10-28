import Lenis from 'lenis';

// One Lenis instance for the whole app. Falls back to native scrolling when the
// user prefers reduced motion (lenis stays null and helpers use window APIs).
let lenis = null;

export const initSmoothScroll = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
    lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4), autoRaf: true });
    return () => {
        lenis.destroy();
        lenis = null;
    };
};

export const scrollToTarget = (target, { offset = 0, immediate = false } = {}) => {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (target !== 0 && !el) return;
    if (lenis) {
        lenis.scrollTo(target === 0 ? 0 : el, { offset, immediate, force: true });
        return;
    }
    const top = target === 0 ? 0 : el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: immediate ? 'auto' : 'smooth' });
};

export const resetScroll = (y = 0) => {
    window.scrollTo(0, y);
    if (lenis) lenis.scrollTo(y, { immediate: true, force: true });
};

export const stopScroll = () => lenis?.stop();
export const startScroll = () => lenis?.start();
