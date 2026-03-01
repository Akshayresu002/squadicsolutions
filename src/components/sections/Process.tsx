'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { id: '01', title: 'Architecture Blueprint', desc: 'Deep-system structural analysis and robust cluster mapping.' },
    { id: '02', title: 'Intelligence Integration', desc: 'Embedding neural networks and automated logic pipelines.' },
    { id: '03', title: 'High-Velocity Coding', desc: 'Secure, scalable execution executing strict automated CI/CD.' },
    { id: '04', title: 'Zero-Downtime Deploy', desc: 'Asynchronous release into isolated cloud-native environments.' },
    { id: '05', title: 'Telemetry Scaling', desc: 'Continuous performance optimization and live data monitoring.' },
];

export default function Process() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom 80%",
                    scrub: 1,
                }
            });

            // Draw the SVG glowing line
            tl.fromTo(".process-line path",
                { strokeDasharray: "1000", strokeDashoffset: "1000" },
                { strokeDashoffset: "0", ease: "none", duration: 1 }
            );

            // Pop in the nodes sequentially along the scroll
            const nodes = gsap.utils.toArray('.process-node');
            nodes.forEach((node: any, index) => {
                tl.fromTo(node,
                    { scale: 0, opacity: 0, filter: 'blur(10px)' },
                    {
                        scale: 1,
                        opacity: 1,
                        filter: 'blur(0px)',
                        ease: "back.out(1.7)",
                        duration: 0.2
                    },
                    index * 0.2 // Sequence them along the total duration
                );

                // Add a continuous slow pulse to the node circles after they appear
                gsap.to(node.querySelector('.node-circle'), {
                    boxShadow: "0 0 30px rgba(37,99,235,0.6)",
                    scale: 1.05,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-[#000000] relative overflow-hidden" id="process">
            {/* Dark Grid Background */}
            <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />

            <div className="max-w-container relative z-10 pt-12">

                <div className="flex flex-col items-center text-center mb-32">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] inline-block mb-4 text-[#2563EB]">
                        Phase Progression
                    </span>
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Deployment Matrix
                    </h2>
                    <p className="text-xl text-[#A1A1AA] max-w-2xl">
                        A strictly linear, mathematically precise lifecycle designed to eliminate technical debt and ensure flawless production resilience.
                    </p>
                </div>

                <div className="relative mt-24 mb-16">
                    {/* SVG Connecting Line */}
                    <svg className="process-line absolute top-6 left-0 w-full h-8 z-0 hidden md:block" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
                                <stop offset="50%" stopColor="#06B6D4" stopOpacity="1" />
                                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
                            </linearGradient>
                            <filter id="glow-filter">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <path d={`M 0 16 L \${window.innerWidth > 0 ? window.innerWidth : 2000} 16`} stroke="url(#line-glow)" strokeWidth="3" fill="none" filter="url(#glow-filter)" />
                    </svg>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={step.id} className="process-node relative flex flex-row md:flex-col items-start gap-6 md:gap-8">

                                {/* Timeline Node */}
                                <div className="node-circle relative w-12 h-12 rounded-full bg-[#0A0A0A] border-2 border-[#2563EB] flex items-center justify-center shrink-0 z-10 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                    <span className="text-[#06B6D4] font-bold text-sm tracking-widest">{step.id}</span>
                                    {/* Inner glowing core */}
                                    <div className="absolute inset-2 rounded-full bg-[#2563EB] opacity-20 blur-[2px]" />
                                </div>

                                {/* Vertical Line for Mobile */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute left-6 top-12 bottom-[-3rem] w-[2px] bg-gradient-to-b from-[#2563EB] to-[#0A0A0A] md:hidden opacity-50" />
                                )}

                                {/* Card Content */}
                                <div className="pt-1 md:pt-0 pb-8 md:pb-0">
                                    <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#A1A1AA] text-sm leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
