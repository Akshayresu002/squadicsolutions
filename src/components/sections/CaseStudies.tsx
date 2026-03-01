'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SecondaryButton } from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        id: '1',
        title: 'FinTech Analytics Engine',
        industry: 'Financial Infrastructure',
        result: 'Sub-millisecond latency on 10M+ daily transactions',
        color: '#2563EB',
    },
    {
        id: '2',
        title: 'Diagnostic Neural Net',
        industry: 'Healthcare AI',
        result: '99.8% precision rate across 50k patient metrics',
        color: '#06B6D4',
    },
    {
        id: '3',
        title: 'Global Supply Chain Router',
        industry: 'Enterprise Logistics',
        result: 'Automated 12,000 daily routes via algorithmic pathing',
        color: '#7C3AED',
    },
    {
        id: '4',
        title: 'ERP Cluster Migration',
        industry: 'Manufacturing Grid',
        result: 'Zero-packet-loss asynchronous database swap',
        color: '#2563EB',
    },
];

export default function CaseStudies() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax entrance for panels
            const panels = gsap.utils.toArray('.study-panel');

            panels.forEach((panel: any, i) => {
                gsap.fromTo(panel,
                    { opacity: 0, y: 100, rotationX: 15, rotationY: i % 2 === 0 ? 10 : -10, translateZ: -100 },
                    {
                        opacity: 1,
                        y: 0,
                        rotationX: 10,
                        rotationY: i % 2 === 0 ? 5 : -5,
                        translateZ: 0,
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: panel,
                            start: "top 85%",
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        // Calculate rotation based on cursor position (-5 to 5 degrees)
        const xRotation = ((y - rect.height / 2) / rect.height) * -10;
        const yRotation = ((x - rect.width / 2) / rect.width) * 10;

        gsap.to(e.currentTarget, {
            rotationX: xRotation,
            rotationY: yRotation,
            transformPerspective: 1000,
            ease: "power2.out",
            duration: 0.5
        });

        // Move the light reflection
        const reflection = e.currentTarget.querySelector('.reflection');
        if (reflection) {
            gsap.to(reflection, {
                x: x - rect.width / 2,
                y: y - rect.height / 2,
                opacity: 0.8,
                ease: "power2.out",
                duration: 0.2
            });
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const index = e.currentTarget.getAttribute('data-index');
        const defaultY = Number(index) % 2 === 0 ? 5 : -5;

        gsap.to(e.currentTarget, {
            rotationX: 10,
            rotationY: defaultY,
            transformPerspective: 1000,
            ease: "power3.out",
            duration: 1
        });

        const reflection = e.currentTarget.querySelector('.reflection');
        if (reflection) {
            gsap.to(reflection, {
                opacity: 0,
                ease: "power2.out",
                duration: 0.5
            });
        }
    };

    return (
        <section ref={sectionRef} className="section-padding bg-[#0A0A0A] overflow-hidden" id="case-studies">
            <div className="max-w-container">

                <div className="flex flex-col items-center text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Proven Architectures
                    </h2>
                    <p className="text-xl text-[#A1A1AA] max-w-2xl">
                        Explore instances where our high-performance infrastructure methodologies have radically transformed enterprise outcomes.
                    </p>
                </div>

                {/* 3D Tilted Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 perspective-[2000px]">
                    {caseStudies.map((study, index) => (
                        <div
                            key={study.id}
                            data-index={index}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="study-panel relative w-full aspect-[4/3] rounded border border-white/10 bg-[#000000] cursor-pointer"
                            style={{ transformStyle: 'preserve-3d', boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 20px ${study.color}20` }}
                        >
                            {/* Inner abstract geometric wireframe / texture representing the project */}
                            <div className="absolute inset-0 overflow-hidden rounded opacity-[0.15]">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id={`grid-${study.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={study.color} strokeWidth="0.5" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill={`url(#grid-${study.id})`} />
                                </svg>
                            </div>

                            {/* Volumetric glow based on project category */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[100px] opacity-[0.05] pointer-events-none" style={{ backgroundColor: study.color }} />

                            {/* Cursor Tracker Light Reflection */}
                            <div className="reflection absolute top-1/2 left-1/2 w-[300px] h-[300px] -ml-[150px] -mt-[150px] rounded-full blur-[60px] opacity-0 pointer-events-none mix-blend-screen" style={{ background: `radial-gradient(circle, ${study.color}60 0%, transparent 70%)` }} />

                            {/* Panel Content (Popped out in Z space) */}
                            <div className="absolute inset-x-8 bottom-8 z-10" style={{ transform: 'translateZ(50px)' }}>
                                <span className="text-xs font-bold uppercase tracking-[0.3em] inline-block mb-3" style={{ color: study.color }}>
                                    {study.industry}
                                </span>
                                <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                    {study.title}
                                </h3>
                                <div className="h-[1px] w-12 bg-white/20 mb-4" />
                                <p className="text-[#A1A1AA] font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-6 max-w-sm">
                                    {study.result}
                                </p>

                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center pointer-events-none bg-black/50 backdrop-blur-sm">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 flex justify-center text-center">
                    <SecondaryButton href="/services">View Full Architecture Directory</SecondaryButton>
                </div>

            </div >
        </section >
    );
}
