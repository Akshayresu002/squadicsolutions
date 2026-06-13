'use client';

import { useEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles as SparklesIcon } from 'lucide-react';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button';
import { Canvas } from '@react-three/fiber';
import { Sparkles, Environment } from '@react-three/drei';
import dynamic from 'next/dynamic';

const AbstractSStructure = dynamic(() => import('./3d/AbstractSStructure'), { ssr: false });

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // GSAP Title Reveal
            const words = textRef.current?.querySelectorAll('.reveal-word');
            if (words) {
                gsap.from(words, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.08,
                    ease: "power4.out",
                    delay: 0.1
                });
            }

            // Reveal other elements
            gsap.from(".hero-reveal", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.6
            });

            // Parallax scroll effect for 3D container
            gsap.to(canvasContainerRef.current, {
                y: 120,
                opacity: 0.1,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });

        }, heroRef);
        return () => ctx.revert();
    }, []);

    const headline = "Building Intelligent Software Systems For Modern Businesses";

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center bg-[#030712] overflow-hidden py-20" id="hero">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-grid-lines opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none" />

            {/* Glowing Studio Lights */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#2563EB] rounded-full blur-[200px] opacity-[0.08] pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#06B6D4] rounded-full blur-[200px] opacity-[0.06] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[30%] w-[50%] h-[50%] bg-[#7C3AED] rounded-full blur-[200px] opacity-[0.08] pointer-events-none" />

            <div className="max-w-container w-full relative z-10 pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">

                    {/* Left content (7 cols) */}
                    <div className="lg:col-span-7 pr-0 lg:pr-6 relative z-20 flex flex-col items-start text-left">
                        {/* Glass Badge */}
                        <div className="hero-reveal mb-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                            <SparklesIcon size={12} className="text-[#06B6D4]" />
                            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#94A3B8]">
                                Engineering Digital Excellence
                            </span>
                        </div>

                        {/* Title with overflow-hidden word containers for reveal */}
                        <h1
                            ref={textRef}
                            className="text-hero text-white mb-6 font-black tracking-tighter leading-[1.02]"
                        >
                            {headline.split(' ').map((word, i) => (
                                <span key={i} className="inline-block overflow-hidden mr-3 py-1">
                                    <span className="reveal-word inline-block origin-left">{word}</span>
                                </span>
                            ))}
                        </h1>

                        <p className="hero-reveal text-lg md:text-xl leading-relaxed text-[#94A3B8] mb-10 max-w-2xl font-medium">
                            We help organizations scale through software engineering, AI solutions, data analytics, automation, and digital transformation.
                        </p>

                        <div className="hero-reveal flex flex-wrap items-center gap-6">
                            <PrimaryButton href="/contact">
                                Start Your Project
                                <ArrowRight size={14} />
                            </PrimaryButton>
                            <SecondaryButton href="/case-studies">
                                View Our Work
                            </SecondaryButton>
                        </div>
                    </div>

                    {/* Right 3D S Structure (5 cols) */}
                    <div
                        ref={canvasContainerRef}
                        className="lg:col-span-5 w-full h-[400px] md:h-[550px] lg:h-[650px] flex items-center justify-center relative pointer-events-auto"
                        style={{ perspective: '1200px' }}
                    >
                        {/* Decorative Glowing Rings behind canvas */}
                        <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none" />
                        <div className="absolute w-[400px] h-[400px] border border-white/5 border-dashed rounded-full animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />

                        <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }} className="w-full h-full">
                            <Suspense fallback={null}>
                                <ambientLight intensity={0.15} />
                                <spotLight position={[8, 8, 8]} angle={0.25} penumbra={1} intensity={2.5} color="#2563EB" />
                                <spotLight position={[-8, -8, -8]} angle={0.25} penumbra={1} intensity={1.5} color="#7C3AED" />
                                <pointLight position={[0, 0, 4]} intensity={0.8} color="#06B6D4" distance={8} />

                                <Environment preset="night" />

                                <Sparkles count={80} scale={8} size={2.2} speed={0.25} opacity={0.4} color="#06B6D4" />

                                <AbstractSStructure />
                            </Suspense>
                        </Canvas>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hero-reveal opacity-50">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#94A3B8]">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-[#2563EB] to-transparent animate-pulse" />
            </div>
        </section>
    );
}
