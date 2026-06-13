'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const industries = [
    {
        id: 'healthcare',
        num: '01',
        name: 'Healthcare',
        tagline: 'Fault-tolerant telemetry & patient networks.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'finance',
        num: '02',
        name: 'Finance',
        tagline: 'High-frequency transactions & analytics engines.',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'education',
        num: '03',
        name: 'Education',
        tagline: 'Interactive virtual portals & campus management.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'real-estate',
        num: '04',
        name: 'Real Estate',
        tagline: 'Virtual property matching & automated contracting.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'retail',
        num: '05',
        name: 'Retail & E-commerce',
        tagline: 'Scalable multi-tenant checkout & analytics pipelines.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'manufacturing',
        num: '06',
        name: 'Manufacturing',
        tagline: 'Robotic assembly pipelines & IoT logging systems.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'technology',
        num: '07',
        name: 'Technology',
        tagline: 'Core cloud nodes, AI clusters, & platform security.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    },
];

export default function Industries() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="section-padding bg-[#030712] relative overflow-hidden" id="industries">
            {/* Background Spotlights */}
            <div className="absolute top-1/2 left-[-20%] w-[50%] h-[50%] bg-[#06B6D4] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#7C3AED] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-container relative z-10">
                {/* Header */}
                <div className="flex flex-col items-start text-left mb-20 max-w-2xl">
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#2563EB] text-xs font-extrabold uppercase tracking-[0.2em] mb-4">
                        Industry Expertise
                    </span>
                    <h2 className="text-fluid-h2 font-black text-white tracking-tight mb-6 leading-none">
                        Tailored Software for Enterprise Sectors
                    </h2>
                    <p className="text-lg text-[#94A3B8] font-medium">
                        We deploy industry-specific solutions architected to satisfy complex regulations and deliver immediate business ROI.
                    </p>
                </div>

                {/* Interactive Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left list (5 columns) */}
                    <div className="lg:col-span-6 flex flex-col gap-1 w-full">
                        {industries.map((industry, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={industry.id}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`relative py-5 px-6 rounded-2xl cursor-pointer border transition-all duration-300 flex items-center justify-between ${
                                        isActive
                                            ? 'bg-[#111827]/60 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
                                            : 'bg-transparent border-transparent'
                                    }`}
                                >
                                    {/* Active Background Glow Pill */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndustryBg"
                                            className="absolute inset-0 bg-[#111827]/60 border border-white/10 rounded-2xl z-0 pointer-events-none"
                                            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                                        />
                                    )}

                                    <div className="relative z-10 flex items-center gap-6">
                                        <span className={`text-sm font-black transition-colors ${
                                            isActive ? 'text-[#06B6D4]' : 'text-white/20'
                                        }`}>
                                            {industry.num}
                                        </span>
                                        <div className="flex flex-col">
                                            <h3 className={`text-xl font-black tracking-tight transition-colors ${
                                                isActive ? 'text-white' : 'text-white/50'
                                            }`}>
                                                {industry.name}
                                            </h3>
                                            <p className={`text-xs font-medium mt-1 leading-none transition-opacity ${
                                                isActive ? 'text-[#94A3B8] opacity-100' : 'opacity-0 h-0 overflow-hidden'
                                            }`}>
                                                {industry.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`relative z-10 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                                        isActive ? 'bg-[#06B6D4] border-[#06B6D4] text-white scale-110' : 'text-white/20 bg-transparent'
                                    }`}>
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Visual Window (6 columns) */}
                    <div className="lg:col-span-6 w-full aspect-[4/3] relative rounded-3xl border border-white/10 bg-[#0B1120] overflow-hidden p-2 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none rounded-3xl z-10" />

                        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#030712]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        src={industries[activeIndex].image}
                                        alt={industries[activeIndex].name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover brightness-[0.8]"
                                        priority
                                    />
                                    {/* Overlay dark shade */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/50 opacity-60" />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Footer Link */}
                <div className="mt-20 flex justify-center w-full">
                    <Link
                        href="/industries"
                        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#06B6D4] hover:text-white transition-colors duration-300"
                    >
                        View Sector Architectures Directory
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
