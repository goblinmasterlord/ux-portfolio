import { Link } from 'react-router-dom';

// Text link with an arrow that swaps out on hover. Internal paths use the router.
const ArrowLink = ({ to, href, children, className = '', arrow = '→', ...rest }) => {
    const inner = (
        <>
            <span className="link-draw pb-0.5">{children}</span>
            <span className="relative inline-block overflow-hidden w-[1em] h-[1.1em] leading-[1.1em]" aria-hidden="true">
                <span className="absolute inset-0 transition-transform duration-500 ease-expo group-hover:translate-x-full">{arrow}</span>
                <span className="absolute inset-0 -translate-x-full transition-transform duration-500 ease-expo group-hover:translate-x-0">{arrow}</span>
            </span>
        </>
    );
    const cls = `group inline-flex items-center gap-2 ${className}`;
    if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
    return <a href={href} className={cls} {...rest}>{inner}</a>;
};

export default ArrowLink;
