'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Compass, Lightbulb, PenTool, Terminal, Cloud, BarChart3 } from 'lucide-react';

const steps = [
    {
        id: '01',
        title: 'Discovery',
        desc: 'We perform a deep technical audit, telemetry assessment, and operational analysis of your legacy system.',
        icon: Compass,
        color: '#2563EB',
    },
    {
        id: '02',
        title: 'Strategy',
        desc: 'Our architects outline custom microservices, database schemas, and scalability blueprints.',
        icon: Lightbulb,
        color: '#06B6D4',
    },
    {
        id: '03',
        title: 'Design',
        desc: 'We model data flows, user experiences, APIs, and security structures with precision.',
        icon: PenTool,
        color: '#7C3AED',
    },
    {
        id: '04',
        title: 'Development',
        desc: 'Our engineers build clean, highly-typed software utilizing automated CI/CD configurations.',
        icon: Terminal,
        color: '#2563EB',
    },
    {
        id: '05',
        title: 'Deployment',
        desc: 'We release the code asynchronously into containerized, zero-downtime staging and production.',
        icon: Cloud,
        color: '#06B6D4',
    },
    {
        id: '06',
        title: 'Scale & telemetry',
        desc: 'We integrate advanced logging and monitoring systems to continuously optimize query latency.',
        icon: BarChart3,
        color: '#7C3AED',
    },
];

export default function Process() {
    const sectionRef = useRef<HTMLDivElement>(null);
    
    // Track scroll position inside section to animate connection line
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={sectionRef} className="section-padding bg-[#0B1120] relative overflow-hidden" id="process">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
            <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#2563EB] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-container relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-32">
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#06B6D4] text-xs font-extrabold uppercase tracking-[0.2em] mb-4">
                        Our Process
                    </span>
                    <h2 className="text-fluid-h2 font-black text-white tracking-tight mb-6 leading-none">
                        Precision Engineering Lifecycle
                    </h2>
                    <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl font-medium">
                        A strictly structured workflow designed to eliminate technical debt and ensure absolute runtime safety.
                    </p>
                </div>

                {/* Timeline wrapper */}
                <div className="relative">
                    {/* Animated Connection Line for Desktop (horizontal) */}
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/5 -translate-y-1/2 hidden xl:block z-0">
                        <motion.div
                            style={{ scaleX }}
                            className="h-full bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#7C3AED] origin-left shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                        />
                    </div>

                    {/* Timeline Nodes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-12 xl:gap-8 relative z-10">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    {/* Timeline Node Ring */}
                                    <div className="relative mb-8 flex items-center justify-center">
                                        <div
                                            className="w-16 h-16 rounded-full bg-[#030712] border-2 flex items-center justify-center z-10 transition-all duration-500 group-hover:scale-110 shadow-lg"
                                            style={{
                                                borderColor: step.color,
                                                boxShadow: `0 0 15px ${step.color}30`
                                            }}
                                        >
                                            <Icon size={20} style={{ color: step.color }} />
                                        </div>
                                        
                                        {/* Outer pulse */}
                                        <div
                                            className="absolute w-20 h-20 rounded-full border border-dashed opacity-0 group-hover:opacity-30 group-hover:animate-[spin_12s_linear_infinite] pointer-events-none"
                                            style={{ borderColor: step.color }}
                                        />
                                    </div>

                                    {/* Step ID Badge */}
                                    <span
                                        className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded bg-white/5 border border-white/10 mb-4 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white"
                                        style={{ color: step.color }}
                                    >
                                        Step {step.id}
                                    </span>

                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm text-[#94A3B8] leading-relaxed font-medium px-4">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
