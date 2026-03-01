'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PrimaryButton } from '@/components/ui/Button';

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
        <section className="relative py-32 md:py-48 bg-[#000000] overflow-hidden flex items-center justify-center min-h-[70vh]" id="cta">

            {/* Animated Gradient Wave Background */}
            <div
                ref={bgRef}
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    background: "linear-gradient(90deg, #000000 0%, #2563EB 25%, #7C3AED 50%, #06B6D4 75%, #000000 100%)",
                    backgroundSize: "200% auto"
                }}
            />

            {/* Central content */}
            <div className="max-w-container relative z-10 text-center flex flex-col items-center">

                <span className="text-sm font-bold uppercase tracking-[0.4em] text-[#06B6D4] mb-6 block drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                    Initiate Deployment
                </span>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] max-w-4xl leading-[1.05]">
                    Build the Future With SquadicSolutions
                </h2>

                <p className="text-xl text-[#A1A1AA] mb-16 max-w-2xl font-medium">
                    Partner with our engineering team to architect, develop, and scale intelligent infrastructure built for absolute resilience.
                </p>

                <div className="animate-pulse duration-3000 hover:animate-none">
                    <PrimaryButton href="mailto:contact@squadicsolutions.store" classNameStr="scale-110">
                        Initialize Project Interface
                    </PrimaryButton>
                </div>

            </div>
        </section>
    );
}
