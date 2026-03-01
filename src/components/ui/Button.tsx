import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    href?: string;
    classNameStr?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ href, classNameStr, children, onClick }) => {
    const content = (
        <div className="relative inline-flex h-12 items-center justify-center overflow-hidden rounded bg-[#000000] px-8 py-3 text-sm font-bold text-white transition-all duration-300 group-hover:scale-[1.04] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] z-10">
            <span className="relative z-20">{children}</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[rgba(124,58,237,0.3)] to-transparent group-hover:animate-[light-sweep_1.5s_ease-in-out_infinite] z-10" />
        </div>
    );

    const wrapperClass = `group relative inline-flex p-[1px] overflow-hidden rounded focus:outline-none ${classNameStr || ''}`;

    const borderAnimated = (
        <span className="absolute inset-[-1000%] animate-[border-trace_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#2563EB_50%,#7C3AED_100%)] z-0" />
    );

    if (href) {
        if (href.startsWith('#')) {
            return (
                <button onClick={onClick} className={wrapperClass}>
                    {borderAnimated}
                    {content}
                </button>
            );
        }
        return (
            <Link href={href} className={wrapperClass}>
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
    const baseClass = `relative inline-flex items-center justify-center text-sm font-bold text-white group outline-none ${classNameStr || ''}`;

    const content = (
        <>
            <span className="transition-all duration-300 group-hover:tracking-widest relative z-10">{children}</span>
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#06B6D4] transition-all duration-300 group-hover:w-full" />
        </>
    );

    if (href) {
        if (href.startsWith('#')) {
            return (
                <button onClick={onClick} className={baseClass}>
                    {content}
                </button>
            );
        }
        return (
            <Link href={href} className={baseClass}>
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
