'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, BarChart3, Clock, Compass } from 'lucide-react';

const benefits = [
    {
        title: 'Enterprise Security',
        desc: 'Military-grade encryption, strict CI/CD security audits, and multi-layered access tokens to shield core business data.',
        icon: Shield,
        color: 'rgba(37, 99, 235, 0.15)',
        borderColor: 'group-hover:border-[#2563EB]/40',
        glowColor: '#2563EB',
        graphic: (
            <svg className="w-full h-24 text-[#2563EB] overflow-visible" viewBox="0 0 100 60" fill="none">
                {/* Security shield and key locks */}
                <path d="M50 10 L80 20 L80 40 C80 50 50 55 50 55 C50 55 20 50 20 40 L20 20 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40 30 L47 37 L60 25" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
                <circle cx="50" cy="30" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="animate-[spin_20s_linear_infinite]" />
            </svg>
        )
    },
    {
        title: 'Fast Delivery',
        desc: 'Rigorous engineering sprints, automated code orchestration, and pre-configured deployment matrices for fast releases.',
        icon: Zap,
        color: 'rgba(6, 182, 212, 0.15)',
        borderColor: 'group-hover:border-[#06B6D4]/40',
        glowColor: '#06B6D4',
        graphic: (
            <svg className="w-full h-24 text-[#06B6D4] overflow-visible" viewBox="0 0 100 60" fill="none">
                {/* Speed pipelines progressing */}
                <path d="M10 20 H90 M10 40 H90" stroke="rgba(255,255,255,0.05)" strokeWidth="4" strokeLinecap="round" />
                <path d="M10 20 H50 M10 40 H80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-[marquee_2s_linear_infinite]" />
                <circle cx="50" cy="20" r="3" fill="#FFFFFF" className="animate-ping" />
                <circle cx="80" cy="40" r="3" fill="#FFFFFF" className="animate-ping" />
                <path d="M30 10 L45 30 L35 30 L50 50" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: 'Scalable Architecture',
        desc: 'Cloud-native clusters, serverless computing grids, and microservice decoupling engineered to scale effortlessly.',
        icon: Cpu,
        color: 'rgba(124, 58, 237, 0.15)',
        borderColor: 'group-hover:border-[#7C3AED]/40',
        glowColor: '#7C3AED',
        graphic: (
            <svg className="w-full h-24 text-[#7C3AED] overflow-visible" viewBox="0 0 100 60" fill="none">
                {/* 3D connected grid */}
                <rect x="15" y="15" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <rect x="65" y="15" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <rect x="40" y="38" width="20" height="15" rx="3" stroke="#06B6D4" strokeWidth="2" />
                <path d="M25 30 V35 H40 M75 30 V35 H60 M50 38 V30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="25" cy="30" r="2" fill="currentColor" />
                <circle cx="75" cy="30" r="2" fill="currentColor" />
                <circle cx="50" cy="30" r="2.5" fill="#FFFFFF" className="animate-ping" />
            </svg>
        )
    },
    {
        title: 'AI Integration',
        desc: 'Contextual, custom ML models and neural integrations trained on proprietary data to automate complex decisions.',
        icon: BarChart3,
        color: 'rgba(37, 99, 235, 0.15)',
        borderColor: 'group-hover:border-[#2563EB]/40',
        glowColor: '#2563EB',
        graphic: (
            <svg className="w-full h-24 text-[#2563EB] overflow-visible" viewBox="0 0 100 60" fill="none">
                {/* Synapse nodes pulsing */}
                <circle cx="30" cy="20" r="4" fill="currentColor" />
                <circle cx="70" cy="20" r="4" fill="currentColor" />
                <circle cx="50" cy="40" r="5" fill="#06B6D4" className="animate-pulse" />
                <path d="M34 20 L46 36 M66 20 L54 36 M30 20 H70" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <path d="M30 20 H70" stroke="currentColor" strokeWidth="1.5" className="animate-pulse" />
                <line x1="50" y1="40" x2="50" y2="55" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        )
    },
    {
        title: 'Dedicated Support',
        desc: 'Direct communication channels with our engineering leads, offering 24/7 telemetry monitoring and response pipelines.',
        icon: Clock,
        color: 'rgba(6, 182, 212, 0.15)',
        borderColor: 'group-hover:border-[#06B6D4]/40',
        glowColor: '#06B6D4',
        graphic: (
            <svg className="w-full h-24 text-[#06B6D4] overflow-visible" viewBox="0 0 100 60" fill="none">
                {/* 24/7 pulse and radar ping */}
                <circle cx="50" cy="30" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 3" className="animate-[spin_40s_linear_infinite]" />
                <circle cx="50" cy="30" r="12" stroke="currentColor" strokeWidth="1" />
                <line x1="50" y1="30" x2="50" y2="18" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" className="origin-[50px_30px] animate-[spin_5s_linear_infinite]" />
                <line x1="50" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="origin-[50px_30px] animate-[spin_60s_linear_infinite]" />
                <circle cx="50" cy="30" r="2.5" fill="#FFFFFF" />
            </svg>
        )
    },
    {
        title: 'Innovation Focus',
        desc: 'Pioneering edge infrastructures, low-latency computing models, and modern design standards for digital products.',
        icon: Compass,
        color: 'rgba(124, 58, 237, 0.15)',
        borderColor: 'group-hover:border-[#7C3AED]/40',
        glowColor: '#7C3AED',
        graphic: (
            <svg className="w-full h-24 text-[#7C3AED] overflow-visible" viewBox="0 0 100 60" fill="none">
                {/* Atom rings revolving */}
                <ellipse cx="50" cy="30" rx="22" ry="7" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 50 30)" />
                <ellipse cx="50" cy="30" rx="22" ry="7" stroke="currentColor" strokeWidth="1.5" transform="rotate(-30 50 30)" />
                <ellipse cx="50" cy="30" rx="22" ry="7" stroke="#06B6D4" strokeWidth="1.5" transform="rotate(90 50 30)" />
                <circle cx="50" cy="30" r="5" fill="currentColor" />
                <circle cx="68" cy="20" r="2" fill="#FFFFFF" className="animate-pulse" />
            </svg>
        )
    }
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-[#0B1120] relative overflow-hidden" id="why-choose-us">
            {/* Background Details */}
            <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7C3AED] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-container relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-24">
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#7C3AED] text-xs font-extrabold uppercase tracking-[0.2em] mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="text-fluid-h2 font-black text-white tracking-tight mb-6 leading-none">
                        Eliminating Risk. Multiplying Velocity.
                    </h2>
                    <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl font-medium">
                        Our engineering methods are focused entirely on business scalability and absolute system security.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                                className="group relative rounded-2xl bg-[#111827]/40 border border-white/5 p-8 flex flex-col justify-between overflow-hidden shadow-2xl glass-panel-hover"
                            >
                                {/* Glow element */}
                                <div
                                    className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
                                    style={{ backgroundColor: benefit.glowColor }}
                                />

                                {/* Icon and Text */}
                                <div>
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 border border-white/10 text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                                        style={{ backgroundColor: benefit.color }}
                                    >
                                        <Icon size={22} style={{ color: benefit.glowColor }} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-white transition-colors">
                                        {benefit.title}
                                    </h3>

                                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-8 font-medium">
                                        {benefit.desc}
                                    </p>
                                </div>

                                {/* Animated Visual Graphic (Storytelling) */}
                                <div className="mt-auto pt-4 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                                    {benefit.graphic}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
