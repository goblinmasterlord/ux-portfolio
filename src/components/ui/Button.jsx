import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    href,
    to,
    className = '',
    icon: Icon
}) => {
    const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 overflow-hidden group";

    const variants = {
        primary: "bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5",
        secondary: "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5",
        outline: "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40"
    };

    const content = (
        <>
            {/* Hover Shine Effect for Primary */}
            {variant === 'primary' && (
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            )}

            <span className="relative z-10 flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4" />}
                {children}
            </span>
        </>
    );

    // Render as Link (React Router)
    if (to) {
        return (
            <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
                {content}
            </Link>
        );
    }

    // Render as Anchor (External)
    if (href) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.98 }}
                className={`${baseStyles} ${variants[variant]} ${className}`}
            >
                {content}
            </motion.a>
        );
    }

    // Render as Button
    return (
        <motion.button
            onClick={onClick}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {content}
        </motion.button>
    );
};

export default Button;
