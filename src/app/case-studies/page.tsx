'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, Sparkles, Code, Brain, Cloud, Database, BarChart3 } from 'lucide-react';

const categories = ['All', 'Web Development', 'Software', 'AI', 'Analytics', 'Cloud'];

const caseStudiesList = [
    {
        id: 'fintech-analytics-engine',
        title: 'FinTech Analytics Engine',
        category: 'Analytics',
        client: 'GlobalTech Corp',
        desc: 'Replacing legacy database schemas with distributed column-store indexes and stream ingestion models to decrease pipeline latency.',
        challenge: 'Legacy database scaling issues and high query latency over 10M+ daily transactional writes.',
        solution: 'Deployed a distributed column-store ledger, Snowflake data pipelines, and Apache Kafka real-time queue structures.',
        results: 'Sub-millisecond latency on high-frequency transactions with 99.999% uptime.',
        tech: ['Apache Kafka', 'Snowflake', 'Golang', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'diagnostic-neural-net',
        title: 'Diagnostic Neural Net',
        category: 'AI',
        client: 'HealthCore Systems',
        desc: 'Developing an isolated Convolutional Neural Network trained on secure HIPAA clinical metrics to assist pathologists.',
        challenge: 'Manually categorizing patient metrics led to delays in clinical diagnostics and higher error rates.',
        solution: 'Designed a customized convolutional neural network trained on secure, HIPAA-regulated clinical metrics.',
        results: '99.8% precision rate across 50,000 patient records, lowering diagnostic times by 84%.',
        tech: ['Python', 'PyTorch', 'FastAPI', 'Pinecone'],
        image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'global-supply-chain-router',
        title: 'Global Supply Chain Router',
        category: 'Software',
        client: 'LogiLink Logistics',
        desc: 'Engineering pathfinding algorithm modules running on multi-agent cloud nodes to optimize cargo ship coordinates.',
        challenge: 'Massive transit delays across international ports due to inefficient route calculation and weather silos.',
        solution: 'Built an algorithmic pathfinding middleware cluster utilizing multi-agent AI and live telemetry feeds.',
        results: 'Fully automated 12,000 daily routes with a 38% reduction in fuel and transportation expenses.',
        tech: ['TypeScript', 'Kubernetes', 'Redis', 'Python'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'erp-cluster-migration',
        title: 'ERP Cluster Migration',
        category: 'Cloud',
        client: 'Titan Industrial',
        desc: 'Planning and executing zero-downtime asynchronous blue-green database migration from on-premise hardware to cloud clusters.',
        challenge: 'Replacing a legacy mainframe with zero database downtime, avoiding manufacturing queue losses.',
        solution: 'Orchestrated an asynchronous blue-green database swap utilizing Docker container clusters.',
        results: 'Zero-packet-loss migration, protecting active assembly schedules.',
        tech: ['Docker', 'AWS VPC', 'Terraform', 'GitHub Actions'],
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
    }
];

export default function CaseStudiesIndex() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredStudies = caseStudiesList.filter(study => {
        const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
        const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.client.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center pt-44 pb-28 bg-[#030712] relative overflow-hidden">
                {/* Background Details */}
                <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[180px] opacity-[0.05] pointer-events-none" />
                <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#7C3AED] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

                <div className="max-w-container w-full relative z-10">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
                        <div className="mb-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                            <Sparkles size={12} className="text-[#06B6D4]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#94A3B8]">
                                Portfolio
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                            Production Proofs
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed font-medium">
                            A historical audit of our system deployments. We design and deliver custom platforms built to run securely at scale.
                        </p>
                    </div>

                    {/* Filter Controls */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16 border-b border-white/5 pb-8">
                        {/* Categories Tabs */}
                        <div className="flex flex-wrap gap-2.5">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 outline-none cursor-pointer ${
                                        selectedCategory === cat
                                            ? 'bg-[#06B6D4] border-[#06B6D4] text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                                            : 'bg-white/5 border-white/5 text-[#94A3B8] hover:border-white/10 hover:text-white'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search field */}
                        <div className="relative w-full lg:w-80">
                            <input
                                type="text"
                                placeholder="Search case studies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#111827]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/60 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] focus:outline-none transition-all pl-11"
                            />
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]/60" />
                        </div>
                    </div>

                    {/* Portfolio Grid */}
                    {filteredStudies.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {filteredStudies.map((study) => (
                                <div
                                    key={study.id}
                                    className="group relative rounded-3xl bg-[#111827]/40 border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20 flex flex-col justify-between"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/9] w-full bg-[#030712] overflow-hidden border-b border-white/5">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-750 group-hover:scale-103 brightness-[0.85]"
                                        />
                                        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-[#030712]/85 backdrop-blur border border-white/10 text-[10px] font-black uppercase tracking-widest text-[#06B6D4]">
                                            {study.category}
                                        </span>
                                    </div>

                                    {/* Info Panel */}
                                    <div className="p-8 flex flex-col justify-between flex-grow">
                                        <div>
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8]/50 block mb-2">
                                                Client: {study.client}
                                            </span>
                                            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 group-hover:text-[#06B6D4] transition-colors leading-none">
                                                {study.title}
                                            </h2>
                                            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-medium">
                                                {study.desc}
                                            </p>

                                            {/* Tech badges */}
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {study.tech.map((t) => (
                                                    <span key={t} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] font-bold text-white/80 uppercase tracking-widest">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <Link
                                            href={`/case-studies/${study.id}`}
                                            className="pt-5 border-t border-white/5 flex items-center justify-between mt-auto group/btn"
                                        >
                                            <span className="text-xs font-bold uppercase tracking-wider text-white group-hover/btn:text-[#06B6D4] transition-colors">
                                                Read Deployment Audit
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover/btn:bg-[#06B6D4] group-hover/btn:border-[#06B6D4] transition-all">
                                                <ArrowRight size={14} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-24 text-center rounded-3xl border border-dashed border-white/10 bg-[#0B1120]/20 flex flex-col items-center justify-center">
                            <span className="text-sm font-semibold text-[#94A3B8]/80 mb-2">No projects found</span>
                            <p className="text-xs text-[#94A3B8]/50">Try checking another category tab or modify your search text.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
