'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "SquadicSolutions executed our migration flawlessly. The new infrastructure is highly structured, secure, and performs substantially faster under heavy enterprise loads.",
        author: "Jonathan Miles",
        role: "VP of Engineering, GlobalTech",
        color: "#2563EB"
    },
    {
        quote: "Their AI integration radically transformed our analytical pipelines. Absolute precision and unparalleled scalable performance.",
        author: "Sarah Jenkins",
        role: "Chief Data Officer, HealthCore",
        color: "#06B6D4"
    },
    {
        quote: "The cloud architecture they deployed allowed us to effortlessly handle a 500% spike in global traffic with zero latency degradation.",
        author: "David Chen",
        role: "CTO, NexusRetail",
        color: "#7C3AED"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const textRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const animateTransition = (nextIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Fade out current
        gsap.to(textRef.current, {
            opacity: 0,
            y: -20,
            filter: 'blur(10px)',
            duration: 0.4,
            onComplete: () => {
                setActiveIndex(nextIndex);
                // Fade in next
                gsap.fromTo(textRef.current,
                    { opacity: 0, y: 20, filter: 'blur(10px)' },
                    { 
                        opacity: 1, 
                        y: 0, 
                        filter: 'blur(0px)', 
                        duration: 0.6, 
                        ease: "power2.out",
                        onComplete: () => setIsAnimating(false)
                    }
                );
            }
        });
    };

    const handleNext = () => {
        const next = (activeIndex + 1) % testimonials.length;
        animateTransition(next);
        resetAutoPlay();
    };

    const handlePrev = () => {
        const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
        animateTransition(prev);
        resetAutoPlay();
    };

    const resetAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
        autoPlayRef.current = setInterval(handleNext, 7000);
    };

    useEffect(() => {
        autoPlayRef.current = setInterval(handleNext, 7000);
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [activeIndex, isAnimating]);

    const current = testimonials[activeIndex];

    return (
        <section className="section-padding bg-[#0B1120] relative overflow-hidden" id="testimonials">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#06B6D4] rounded-full blur-[180px] opacity-[0.03] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
                
                {/* Testimonial Glass Panel */}
                <div className="glass-panel rounded-3xl p-10 md:p-16 relative shadow-2xl overflow-hidden border border-white/10">
                    {/* Glowing highlight tag inside card */}
                    <div 
                        className="absolute top-0 left-0 w-[30%] h-[3px] bg-gradient-to-r transition-all duration-700" 
                        style={{
                            backgroundImage: `linear-gradient(to right, ${current.color}, transparent)`
                        }}
                    />

                    <div className="flex flex-col items-center text-center" ref={textRef}>
                        <Quote className="w-12 h-12 mb-8 opacity-25" style={{ color: current.color }} />

                        <blockquote className="text-xl md:text-3xl font-extrabold text-white leading-relaxed mb-10 tracking-tight max-w-3xl">
                            "{current.quote}"
                        </blockquote>

                        <div className="flex flex-col items-center justify-center">
                            <span className="text-lg font-bold text-white mb-1">{current.author}</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
                                {current.role}
                            </span>
                        </div>
                    </div>

                    {/* Navigation Buttons and Indicators */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-14 pt-8 border-t border-white/5 relative z-30">
                        {/* Slide Indicators */}
                        <div className="flex gap-2.5">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => animateTransition(idx)}
                                    className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer outline-none ${
                                        idx === activeIndex 
                                            ? 'w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                                            : 'w-2 bg-white/20 hover:bg-white/40'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-3">
                            <button
                                onClick={handlePrev}
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors cursor-pointer outline-none"
                            >
                                <ArrowLeft size={16} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-[#94A3B8] hover:text-white flex items-center justify-center transition-colors cursor-pointer outline-none"
                            >
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
