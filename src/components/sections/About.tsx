'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
    { target: 50, suffix: '+', label: 'Projects Delivered' },
    { target: 99, suffix: '%', label: 'Client Satisfaction' },
    { isText: true, text: 'Scalable', label: 'Architectures' },
    { isText: true, text: 'Enterprise', label: 'Performance' },
];

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Particle floating animation
            gsap.to(".particle", {
                y: "random(-100, 100)",
                x: "random(-100, 100)",
                opacity: "random(0.1, 0.5)",
                duration: "random(3, 6)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.1
            });

            // Count Up & Fade reveal
            const metricItems = gsap.utils.toArray('.metric-item');

            metricItems.forEach((item: any) => {
                const numberEl = item.querySelector('.metric-number');
                const targetVal = parseFloat(numberEl?.getAttribute('data-target') || '0');

                // Reveal container with blur
                gsap.fromTo(item,
                    { opacity: 0, y: 50, filter: 'blur(10px)' },
                    {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                        }
                    }
                );

                // Run count-up if it's a number
                if (targetVal > 0) {
                    gsap.fromTo(numberEl,
                        { innerText: 0 },
                        {
                            innerText: targetVal,
                            duration: 2.5,
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

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Generate static particle divs for the background
    const renderParticles = () => {
        return Array.from({ length: 40 }).map((_, i) => (
            <div
                key={i}
                className="particle absolute rounded-full bg-white opacity-0"
                style={{
                    width: Math.random() * 4 + 1 + 'px',
                    height: Math.random() * 4 + 1 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    boxShadow: '0 0 10px rgba(255,255,255,0.8)'
                }}
            />
        ));
    };

    return (
        <section ref={sectionRef} className="relative min-h-screen py-32 flex items-center bg-[#000000] overflow-hidden" id="about">
            {/* Dark Studio Soft Rim Light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-[#2563EB] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

            {/* Particle Field */}
            <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
                {renderParticles()}
            </div>

            <div className="max-w-container w-full relative z-10">
                <div className="flex flex-col items-center justify-center gap-24">
                    {metrics.map((metric, index) => (
                        <div key={index} className="metric-item flex flex-col items-center justify-center text-center">
                            {metric.isText ? (
                                <span className="text-6xl md:text-8xl lg:text-[120px] font-extrabold text-white tracking-tighter leading-none mb-4 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                                    {metric.text}
                                </span>
                            ) : (
                                <div className="flex items-baseline text-6xl md:text-8xl lg:text-[120px] font-extrabold text-white tracking-tighter leading-none mb-4 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                                    <span className="metric-number" data-target={metric.target}>0</span>
                                    <span className="text-[#06B6D4]">{metric.suffix}</span>
                                </div>
                            )}
                            <span className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-[#A1A1AA]">
                                {metric.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
