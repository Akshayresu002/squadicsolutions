'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
    {
        id: '1',
        title: 'FinTech Analytics Engine',
        slug: 'fintech-analytics-engine',
        industry: 'Financial Infrastructure',
        challenge: 'Legacy database scaling issues and high query latency over 10M+ daily transactional writes.',
        solution: 'Deployed a distributed column-store ledger, Snowflake data pipelines, and Apache Kafka real-time queue structures.',
        results: 'Sub-millisecond latency on high-frequency transactions with 99.999% uptime.',
        color: '#2563EB',
        image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '2',
        title: 'Diagnostic Neural Net',
        slug: 'diagnostic-neural-net',
        industry: 'Healthcare AI',
        challenge: 'Manually categorizing patient metrics led to delays in clinical diagnostics and higher error rates.',
        solution: 'Designed a customized convolutional neural network trained on secure, HIPAA-regulated clinical metrics.',
        results: '99.8% precision rate across 50,000 patient records, lowering diagnostic times by 84%.',
        color: '#06B6D4',
        image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '3',
        title: 'Global Supply Chain Router',
        slug: 'global-supply-chain-router',
        industry: 'Enterprise Logistics',
        challenge: 'Massive transit delays across international ports due to inefficient route calculation and weather silos.',
        solution: 'Built an algorithmic pathfinding middleware cluster utilizing multi-agent AI and live telemetry feeds.',
        results: 'Fully automated 12,000 daily routes with a 38% reduction in fuel and transportation expenses.',
        color: '#7C3AED',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: '4',
        title: 'ERP Cluster Migration',
        slug: 'erp-cluster-migration',
        industry: 'Manufacturing Grid',
        challenge: 'Replacing a legacy mainframe with zero database downtime, avoiding manufacturing queue losses.',
        solution: 'Orchestrated an asynchronous blue-green database swap utilizing Docker container clusters.',
        results: 'Zero-packet-loss migration, protecting active assembly schedules.',
        color: '#2563EB',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
    },
];

export default function CaseStudies() {
    return (
        <section className="section-padding bg-[#030712] relative overflow-hidden" id="case-studies">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none" />
            <div className="absolute top-[30%] right-[-20%] w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[220px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-container">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-24">
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#7C3AED] text-xs font-extrabold uppercase tracking-[0.2em] mb-4">
                        Case Studies
                    </span>
                    <h2 className="text-fluid-h2 font-black text-white tracking-tight mb-6 leading-none">
                        Proven Production Architectures
                    </h2>
                    <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl font-medium">
                        Explore instances where our high-performance infrastructure methodologies have radically transformed enterprise outcomes.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {caseStudies.map((study, index) => (
                        <div
                            key={study.id}
                            className="group relative w-full aspect-[4/3] rounded-3xl border border-white/10 bg-[#0B1120] overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-end p-8"
                        >
                            {/* Visual background image with hover zoom */}
                            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover brightness-[0.75] transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Dark radial shade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-[#030712]/50 opacity-90" />
                            </div>

                            {/* Base Content Visible at Start */}
                            <div className="relative z-10 transition-all duration-500 group-hover:translate-y-[-180px] group-hover:opacity-0">
                                <span
                                    className="text-xs font-black uppercase tracking-[0.25em] mb-3 inline-block"
                                    style={{ color: study.color }}
                                >
                                    {study.industry}
                                </span>
                                <h3 className="text-3xl font-black text-white tracking-tight mb-3">
                                    {study.title}
                                </h3>
                                <p className="text-sm text-[#94A3B8] font-medium leading-relaxed max-w-md">
                                    {study.results}
                                </p>
                            </div>

                            {/* Sliding Glassmorphic Detailed Overlay */}
                            <div className="absolute inset-x-0 bottom-0 z-20 h-[80%] rounded-b-3xl bg-[#111827]/85 backdrop-blur-xl border-t border-white/10 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-between">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#06B6D4] block mb-2">
                                        {study.industry}
                                    </span>
                                    <h4 className="text-2xl font-black text-white tracking-tight mb-5">
                                        {study.title}
                                    </h4>

                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8]/60">Challenge</span>
                                            <p className="text-xs md:text-sm text-white/90 font-medium leading-relaxed mt-0.5">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8]/60">Solution</span>
                                            <p className="text-xs md:text-sm text-white/90 font-medium leading-relaxed mt-0.5">{study.solution}</p>
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8]/60">Results</span>
                                            <p className="text-xs md:text-sm text-[#22C55E] font-extrabold leading-relaxed mt-0.5">{study.results}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-wider text-white">Explore Full Case Study</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#06B6D4] group-hover:border-[#06B6D4] transition-colors">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Link */}
                <div className="mt-20 flex justify-center text-center">
                    <Link
                        href="/case-studies"
                        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#06B6D4] hover:text-white transition-colors duration-300"
                    >
                        View Full Case Studies Portfolio
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
