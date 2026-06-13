'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { target: 50, suffix: '+', label: 'Projects Delivered' },
    { target: 99, suffix: '%', label: 'Client Satisfaction' },
    { target: 24, suffix: '/7', label: 'Telemetry Support' },
    { target: 100, suffix: '%', label: 'Bespoke Solutions' },
];

export default function Results() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stats count up
            const statItems = gsap.utils.toArray('.stat-item');

            statItems.forEach((item: any) => {
                const numberEl = item.querySelector('.stat-number');
                const targetVal = parseFloat(numberEl?.getAttribute('data-target') || '0');

                gsap.fromTo(item,
                    { opacity: 0, y: 40, filter: 'blur(10px)' },
                    {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                        }
                    }
                );

                if (targetVal > 0) {
                    gsap.fromTo(numberEl,
                        { innerText: 0 },
                        {
                            innerText: targetVal,
                            duration: 2.2,
                            ease: "power2.out",
                            snap: { innerText: 1 },
                            scrollTrigger: {
                                trigger: item,
                                start: "top 85%",
                            }
                        }
                    );
                }
            });

            // Gentle parallax for the background glow
            gsap.to(".results-glow", {
                y: 50,
                opacity: 0.15,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-28 bg-[#030712] relative overflow-hidden" id="results">
            {/* Animated Volumetric Glow */}
            <div className="results-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7C3AED] rounded-full blur-[180px] opacity-[0.07] pointer-events-none" />
            <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none" />

            <div className="max-w-container relative z-10">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item flex flex-col items-center justify-center">
                            {/* Number Container */}
                            <div className="flex items-baseline text-6xl md:text-7xl lg:text-8vw font-black text-white tracking-tighter leading-none mb-4 drop-shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                                <span className="stat-number bg-gradient-to-b from-white to-[#A1A1AA] bg-clip-text text-transparent" data-target={stat.target}>
                                    0
                                </span>
                                <span className="bg-gradient-to-r from-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
                                    {stat.suffix}
                                </span>
                            </div>
                            
                            {/* Stat Label */}
                            <div className="h-[2px] w-8 bg-white/10 mb-4" />
                            
                            <span className="text-xs md:text-sm font-extrabold uppercase tracking-[0.3em] text-[#94A3B8]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
