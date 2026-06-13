'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the background gradient wave slowly
            gsap.to(bgRef.current, {
                backgroundPosition: "200% center",
                duration: 20,
                repeat: -1,
                ease: "none"
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative py-36 md:py-48 bg-[#030712] overflow-hidden flex items-center justify-center min-h-[70vh]" id="cta">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-lines opacity-20 pointer-events-none" />

            {/* Animated Gradient Wave Background */}
            <div
                ref={bgRef}
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    background: "linear-gradient(90deg, #030712 0%, #2563EB 25%, #7C3AED 50%, #06B6D4 75%, #030712 100%)",
                    backgroundSize: "200% auto"
                }}
            />

            {/* Central content */}
            <div className="max-w-container relative z-10 text-center flex flex-col items-center">

                <span className="text-xs font-extrabold uppercase tracking-[0.4em] text-[#06B6D4] mb-6 block drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                    Initiate Deployment
                </span>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 max-w-4xl leading-[1.05]">
                    Ready to Build Something Extraordinary?
                </h2>

                <p className="text-lg md:text-xl text-[#94A3B8] mb-14 max-w-2xl font-medium leading-relaxed">
                    Partner with our engineering team to architect, develop, and scale intelligent infrastructure built for absolute resilience.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6">
                    <PrimaryButton href="/contact" classNameStr="scale-110">
                        Start Your Project
                        <ArrowRight size={14} />
                    </PrimaryButton>
                    <SecondaryButton href="/contact" classNameStr="text-base">
                        Book Consultation
                    </SecondaryButton>
                </div>

            </div>
        </section>
    );
}
