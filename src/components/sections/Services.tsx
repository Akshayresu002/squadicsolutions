'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PrimaryButton } from '@/components/ui/Button';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: 'Web Engineering',
        desc: 'High-performance applications engineered for speed, scalability, and absolute precision inside enterprise environments.',
        action: '/services/web-development',
        color: '#2563EB'
    },
    {
        title: 'Custom Systems',
        desc: 'Tailored architectural solutions that solve complex enterprise challenges with robust scalable infrastructure.',
        action: '/services/custom-software',
        color: '#06B6D4'
    },
    {
        title: 'AI Infrastructure',
        desc: 'Intelligent integrations, predictive models, and sophisticated automation workflows for absolute business efficiency.',
        action: '/services/ai-solutions',
        color: '#7C3AED'
    },
    {
        title: 'Data Intelligence',
        desc: 'Transforming raw telemetry into actionable, interactive, and cleanly structured enterprise data insights.',
        action: '/services/data-analytics',
        color: '#2563EB'
    },
    {
        title: 'Cloud & DevOps',
        desc: 'Resilient cloud-native architectures that are secure, multi-tenant capable, and heavily fault-tolerant.',
        action: '/services/cloud-engineering',
        color: '#7C3AED'
    }
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sections = gsap.utils.toArray('.service-slide');

        const ctx = gsap.context(() => {
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + (wrapperRef.current?.offsetWidth || 0)
                }
            });

            // Wireframe rotation
            gsap.to(".wireframe-obj", {
                rotationY: 360,
                rotationX: 180,
                duration: 20,
                ease: "none",
                repeat: -1,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen bg-[#000000] overflow-hidden" id="services">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />

            <div
                ref={wrapperRef}
                className="flex w-[500vw] h-full"
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-slide w-screen h-full flex flex-col md:flex-row items-center justify-center px-8 md:px-24 relative"
                    >
                        {/* Background Light Shift on Scroll per slide */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[200px] rounded-full opacity-10 pointer-events-none"
                            style={{ backgroundColor: service.color }}
                        />

                        {/* Left Side: Massive Typography */}
                        <div className="w-full md:w-1/2 z-10 flex flex-col justify-center max-w-2xl pr-0 md:pr-12">
                            <span className="text-sm uppercase tracking-[0.3em] font-bold text-[#A1A1AA] mb-4">0{index + 1} / 0{services.length}</span>
                            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
                                {service.title}
                            </h2>
                            <p className="text-xl leading-relaxed text-[#A1A1AA] mb-12">
                                {service.desc}
                            </p>
                            <div className="flex">
                                <PrimaryButton href={service.action}>Explore Infrastructure</PrimaryButton>
                            </div>
                        </div>

                        {/* Right Side: Animated 3D Wireframe */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center relative z-10 mt-12 md:mt-0 perspective-1000">
                            <svg className="wireframe-obj w-64 h-64 md:w-96 md:h-96 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-visible" viewBox="0 0 200 200" style={{ transformStyle: 'preserve-3d' }}>
                                {/* Abstract Geometric Wireframe representing the service */}
                                <g stroke={service.color} strokeWidth="1" fill="none" opacity="0.6">
                                    <polygon points="100,20 180,60 180,140 100,180 20,140 20,60" />
                                    <polygon points="100,40 160,70 160,130 100,160 40,130 40,70" />
                                    <polygon points="100,60 140,80 140,120 100,140 60,120 60,80" />
                                    <line x1="100" y1="20" x2="100" y2="180" />
                                    <line x1="20" y1="60" x2="180" y2="140" />
                                    <line x1="20" y1="140" x2="180" y2="60" />
                                </g>
                                {/* Glowing internal node */}
                                <circle cx="100" cy="100" r="4" fill="#FFFFFF" className="animate-pulse" style={{ filter: `drop-shadow(0 0 10px ${service.color})` }} />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
