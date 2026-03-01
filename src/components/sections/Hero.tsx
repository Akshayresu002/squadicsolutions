'use client';

import { useEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button';
import { Canvas } from '@react-three/fiber';
import { Sparkles, Environment } from '@react-three/drei';
import dynamic from 'next/dynamic';

// Force client-side rendering for Three.js components to avoid SSR 'window' errors
const AbstractSStructure = dynamic(() => import('./3d/AbstractSStructure'), { ssr: false });

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // GSAP Word Stagger Animation
            const words = textRef.current?.querySelectorAll('.word');
            if (words) {
                gsap.from(words, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.08,
                    ease: "power3.out",
                    delay: 0.2
                });
            }

            // Subtext & Buttons Fade
            gsap.from(".hero-fade", {
                y: 20,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                delay: 1
            });

            // Parallax scroll effect for the 3D canvas container
            gsap.to(canvasContainerRef.current, {
                y: 100, // Move down slightly as user scrolls down
                opacity: 0.2, // Fade out on scroll
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                }
            });

        }, heroRef);
        return () => ctx.revert();
    }, []);

    const headline = "Engineering Intelligent Digital Systems";

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center bg-[#000000] overflow-hidden" id="hero">
            {/* Dark Grid Parallax Background */}
            <div className="absolute inset-0 bg-grid-lines opacity-20" />

            {/* Volumetric Dark Studio Lights built into the DOM behind the canvas */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#2563EB] rounded-full blur-[150px] opacity-10 pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#06B6D4] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#7C3AED] rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <div className="max-w-container w-full pt-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">

                    {/* Left Text (7 cols) */}
                    <div className="lg:col-span-7 pr-0 lg:pr-8 relative z-20">
                        <h1
                            ref={textRef}
                            className="text-hero text-white mb-6 flex flex-wrap gap-x-4 gap-y-2 relative"
                        >
                            {headline.split(' ').map((word, i) => (
                                <span key={i} className="word inline-block opacity-100 transform-none">{word}</span>
                            ))}
                        </h1>

                        <p className="hero-fade opacity-100 transform-none text-xl leading-relaxed text-[#A1A1AA] mb-12 max-w-2xl font-medium">
                            We build scalable AI infrastructure, custom enterprise systems, and automation architecture designed for massive velocity and absolute precision.
                        </p>

                        <div className="hero-fade opacity-100 transform-none flex flex-wrap items-center gap-8">
                            <PrimaryButton href="#cta">Start a Project</PrimaryButton>
                            <SecondaryButton href="#case-studies">View Our Work</SecondaryButton>
                        </div>
                    </div>

                    {/* Right Cinematic 3D Neural Mesh (5 cols) */}
                    <div
                        ref={canvasContainerRef}
                        className="lg:col-span-5 absolute lg:relative inset-0 lg:inset-auto w-full h-full lg:h-[600px] lg:flex items-center justify-center opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
                        style={{ perspective: '1000px' }}
                    >
                        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                            <Suspense fallback={null}>
                                {/* Studio Lighting Setup */}
                                <ambientLight intensity={0.1} />
                                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#2563EB" />
                                <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} color="#7C3AED" />
                                <pointLight position={[0, 0, 5]} intensity={0.5} color="#06B6D4" distance={10} />

                                <Environment preset="night" />

                                {/* Drifting Atmospheric Particles */}
                                <Sparkles count={100} scale={10} size={2} speed={0.2} opacity={0.3} color="#2563EB" />

                                {/* The Modular S Structure */}
                                <AbstractSStructure />
                            </Suspense>
                        </Canvas>
                    </div>

                </div>
            </div>

            {/* Smooth Scroll Indicator pulse */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hero-fade">
                <span className="text-xs uppercase tracking-[0.2em] text-[#A1A1AA]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#2563EB] to-transparent animate-pulse" />
            </div>
        </section>
    );
}
