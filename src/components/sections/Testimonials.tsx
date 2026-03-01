'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const testimonials = [
    {
        quote: "SquadicSolutions executed our migration flawlessly. The new infrastructure is highly structured, secure, and performs substantially faster under heavy enterprise loads.",
        author: "Jonathan Miles",
        role: "VP of Engineering, GlobalTech"
    },
    {
        quote: "Their AI integration radically transformed our analytical pipelines. Absolute precision and unparalleled scalable performance.",
        author: "Sarah Jenkins",
        role: "Chief Data Officer, HealthCore"
    },
    {
        quote: "The cloud architecture they deployed allowed us to effortlessly handle a 500% spike in global traffic with zero latency degradation.",
        author: "David Chen",
        role: "CTO, NexusRetail"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // Fade out current
            gsap.to(textRef.current, {
                opacity: 0,
                y: -20,
                filter: 'blur(10px)',
                duration: 0.5,
                onComplete: () => {
                    setActiveIndex((prev) => (prev + 1) % testimonials.length);
                    // Fade in next
                    gsap.fromTo(textRef.current,
                        { opacity: 0, y: 20, filter: 'blur(10px)' },
                        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: "power2.out" }
                    );
                }
            });
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const current = testimonials[activeIndex];

    return (
        <section className="section-padding bg-[#0A0A0A] relative overflow-hidden flex items-center min-h-[60vh]" id="testimonials">

            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full" ref={textRef}>

                <svg className="w-10 h-10 text-[#2563EB] opacity-50 mx-auto mb-10 drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <blockquote className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-12 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    "{current.quote}"
                </blockquote>

                <div className="flex flex-col items-center justify-center">
                    <div className="text-xl font-bold text-white mb-2">{current.author}</div>
                    <div className="relative inline-block pb-2">
                        <p className="text-sm font-semibold tracking-widest text-[#A1A1AA] uppercase">{current.role}</p>
                        {/* Soft glowing underline */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1 transition-all duration-500 rounded-full ${idx === activeIndex ? 'w-8 bg-[#2563EB] shadow-[0_0_10px_rgba(37,99,235,0.8)]' : 'w-2 bg-white/20'}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
