'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ButtonProps {
    href?: string;
    classNameStr?: string;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ href, classNameStr, children, onClick }) => {
    const pathname = usePathname();

    const handleAnchorClick = (e: React.MouseEvent<HTMLElement>, targetHref: string) => {
        if (onClick) {
            onClick(e);
        }
        if (targetHref.startsWith('#')) {
            if (pathname === '/') {
                e.preventDefault();
                const el = document.querySelector(targetHref);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const content = (
        <div className="relative inline-flex h-12 items-center justify-center overflow-hidden rounded bg-[#030712] px-8 py-3 text-sm font-bold text-white transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_35px_rgba(37,99,235,0.35)] z-10">
            <span className="relative z-20 flex items-center gap-2">{children}</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[rgba(6,182,212,0.25)] to-transparent group-hover:animate-[light-sweep_1.5s_ease-in-out_infinite] z-10" />
        </div>
    );

    const wrapperClass = `group relative inline-flex p-[1px] overflow-hidden rounded focus:outline-none transition-transform cursor-pointer ${classNameStr || ''}`;

    const borderAnimated = (
        <span className="absolute inset-[-1000%] animate-[border-trace_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#030712_0%,#2563EB_50%,#7C3AED_100%)] z-0" />
    );

    if (href) {
        const isAnchor = href.startsWith('#');
        const finalHref = isAnchor && pathname !== '/' ? `/${href}` : href;

        return (
            <Link 
                href={finalHref} 
                onClick={(e) => handleAnchorClick(e, href)}
                className={wrapperClass}
            >
                {borderAnimated}
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={wrapperClass}>
            {borderAnimated}
            {content}
        </button>
    );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ href, classNameStr, children, onClick }) => {
    const pathname = usePathname();

    const handleAnchorClick = (e: React.MouseEvent<HTMLElement>, targetHref: string) => {
        if (onClick) {
            onClick(e);
        }
        if (targetHref.startsWith('#')) {
            if (pathname === '/') {
                e.preventDefault();
                const el = document.querySelector(targetHref);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const baseClass = `relative inline-flex items-center justify-center text-sm font-bold text-white/90 hover:text-white transition-colors py-2 group outline-none cursor-pointer ${classNameStr || ''}`;

    const content = (
        <>
            <span className="transition-all duration-300 group-hover:tracking-wider relative z-10 flex items-center gap-1.5">{children}</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#06B6D4] to-[#2563EB] transition-all duration-300 group-hover:w-full" />
        </>
    );

    if (href) {
        const isAnchor = href.startsWith('#');
        const finalHref = isAnchor && pathname !== '/' ? `/${href}` : href;

        return (
            <Link 
                href={finalHref} 
                onClick={(e) => handleAnchorClick(e, href)}
                className={baseClass}
            >
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={baseClass}>
            {content}
        </button>
    );
};
