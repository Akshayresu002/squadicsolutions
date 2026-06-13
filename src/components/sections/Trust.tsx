'use client';

import { motion } from 'framer-motion';

const clientLogos = [
    {
        name: 'Quantum Systems',
        svg: (
            <svg className="h-7 text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-300" viewBox="0 0 150 40" fill="currentColor">
                <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
                <circle cx="20" cy="20" r="5" />
                <text x="42" y="25" fontFamily="var(--font-inter), sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.15em">QUANTUM</text>
            </svg>
        ),
    },
    {
        name: 'Apex Digital',
        svg: (
            <svg className="h-7 text-[#94A3B8] hover:text-[#2563EB] transition-colors duration-300" viewBox="0 0 150 40" fill="currentColor">
                <path d="M 20 8 L 32 30 L 8 30 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="20" cy="18" r="3.5" fill="currentColor" />
                <text x="42" y="25" fontFamily="var(--font-inter), sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.15em">APEX</text>
            </svg>
        ),
    },
    {
        name: 'Intellisys AI',
        svg: (
            <svg className="h-7 text-[#94A3B8] hover:text-[#7C3AED] transition-colors duration-300" viewBox="0 0 150 40" fill="currentColor">
                <rect x="8" y="8" width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <line x1="12" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="12" x2="20" y2="28" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="20" r="2" fill="currentColor" />
                <text x="42" y="25" fontFamily="var(--font-inter), sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.1em">INTELLISYS</text>
            </svg>
        ),
    },
    {
        name: 'Cloudify Grid',
        svg: (
            <svg className="h-7 text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-300" viewBox="0 0 150 40" fill="currentColor">
                <path d="M 12 26 A 6 6 0 0 1 18 14 A 8 8 0 0 1 32 18 A 6 6 0 0 1 30 26 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <text x="44" y="25" fontFamily="var(--font-inter), sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.1em">CLOUDIFY</text>
            </svg>
        ),
    },
    {
        name: 'ByteScale DevOps',
        svg: (
            <svg className="h-7 text-[#94A3B8] hover:text-[#2563EB] transition-colors duration-300" viewBox="0 0 150 40" fill="currentColor">
                <line x1="10" y1="30" x2="10" y2="10" stroke="currentColor" strokeWidth="3" />
                <line x1="18" y1="30" x2="18" y2="16" stroke="currentColor" strokeWidth="3" />
                <line x1="26" y1="30" x2="26" y2="22" stroke="currentColor" strokeWidth="3" />
                <text x="40" y="25" fontFamily="var(--font-inter), sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.15em">BYTESCALE</text>
            </svg>
        ),
    },
    {
        name: 'TechCorp SaaS',
        svg: (
            <svg className="h-7 text-[#94A3B8] hover:text-[#7C3AED] transition-colors duration-300" viewBox="0 0 150 40" fill="currentColor">
                <path d="M 10 10 L 30 10 L 30 22 L 20 22 L 20 30 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <text x="42" y="25" fontFamily="var(--font-inter), sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.15em">TECHCORP</text>
            </svg>
        ),
    },
];

export default function Trust() {
    // Duplicate the logos array to make a continuous loop
    const doubleLogos = [...clientLogos, ...clientLogos, ...clientLogos];

    return (
        <section className="py-14 bg-[#030712] border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0B1120]/20 pointer-events-none" />

            <div className="max-w-container relative z-10 flex flex-col items-center">
                <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#94A3B8]/60 mb-8 text-center">
                    Trusted by Growing Businesses and Enterprises Worldwide
                </h3>

                {/* Marquee Wrapper */}
                <div className="w-full relative flex overflow-hidden mask-gradient">
                    {/* CSS Fade mask at left and right edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

                    <div className="animate-marquee flex gap-16 md:gap-24 items-center">
                        {doubleLogos.map((logo, index) => (
                            <div
                                key={`${logo.name}-${index}`}
                                className="flex items-center justify-center grayscale hover:grayscale-0 opacity-55 hover:opacity-100 transition-all duration-300 cursor-default"
                            >
                                {logo.svg}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <style jsx global>{`
                .mask-gradient {
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }
            `}</style>
        </section>
    );
}
