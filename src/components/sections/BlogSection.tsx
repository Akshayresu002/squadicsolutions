'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Search, Calendar, Clock } from 'lucide-react';

const categories = ['All', 'Software', 'AI', 'Cloud', 'DevOps'];

const blogPosts = [
    {
        id: '1',
        title: 'Engineering Low-Latency APIs with Next.js 15 and Edge Middleware',
        desc: 'Deep dive into optimizing database queries, utilizing edge middleware caching strategies, and resolving cold starts to achieve sub-50ms API responses globally.',
        category: 'Software',
        date: 'June 10, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
        slug: 'optimizing-edge-api-latency',
        featured: true
    },
    {
        id: '2',
        title: 'Private-Cloud LLMs: Training Models on Proprietary Enterprise Data',
        desc: 'How to build, fine-tune, and deploy custom large language models inside secure private cloud boundaries, satisfying HIPAA and GDPR.',
        category: 'AI',
        date: 'June 05, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
        slug: 'secure-private-cloud-llms',
        featured: false
    },
    {
        id: '3',
        title: 'Migrating to Kubernetes: A Blueprint for Zero-Downtime Microservices',
        desc: 'A complete operational guide to decoupling monolithic systems into secure Kubernetes clusters without breaking database states.',
        category: 'Cloud',
        date: 'May 28, 2026',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
        slug: 'kubernetes-microservices-migration-blueprint',
        featured: false
    },
    {
        id: '4',
        title: 'Secure CI/CD Pipelines: Shielding the Software Supply Chain',
        desc: 'Implementing automated vulnerability scanning, strict dependency auditing, and signed binary hashes in GitHub Actions.',
        category: 'DevOps',
        date: 'May 15, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800',
        slug: 'secure-cicd-pipeline-hardening',
        featured: false
    }
];

export default function BlogSection() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
    const secondaryPosts = filteredPosts.filter(p => p.id !== (featuredPost?.id || ''));

    return (
        <section className="section-padding bg-[#030712] relative overflow-hidden" id="blog">
            {/* Background Atmosphere */}
            <div className="absolute top-[10%] left-[-20%] w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-20%] w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-container relative z-10">
                
                {/* Header and Filter Controls */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
                    <div className="flex flex-col items-start text-left max-w-xl">
                        <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#06B6D4] text-xs font-extrabold uppercase tracking-[0.2em] mb-4">
                            Engineering Log
                        </span>
                        <h2 className="text-fluid-h2 font-black text-white tracking-tight mb-4 leading-none">
                            Technical Insights & Blueprints
                        </h2>
                        <p className="text-[#94A3B8] font-medium text-base">
                            In-depth articles written by our engineering team covering systems, scale, and artificial intelligence.
                        </p>
                    </div>

                    {/* Search Field */}
                    <div className="relative w-full lg:w-80">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#111827]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/60 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] focus:outline-none transition-all pl-11"
                        />
                        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]/60" />
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2.5 mb-12">
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

                {/* Blog Posts Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                        
                        {/* Featured Post (7 columns) */}
                        {featuredPost && (
                            <motion.div
                                layout
                                className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0B1120]/60 p-6 md:p-8 shadow-2xl hover:border-white/20 transition-all duration-300 group cursor-pointer"
                            >
                                <Link href={`/blog/${featuredPost.slug}`} className="flex flex-col h-full justify-between">
                                    <div>
                                        {/* Image wrapper */}
                                        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/5 bg-[#030712]">
                                            <Image
                                                src={featuredPost.image}
                                                alt={featuredPost.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 60vw"
                                                className="object-cover transition-transform duration-750 group-hover:scale-103"
                                            />
                                        </div>

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 text-xs text-[#94A3B8] font-bold uppercase tracking-wider mb-4">
                                            <span className="text-[#06B6D4]">{featuredPost.category}</span>
                                            <div className="flex items-center gap-1.5"><Calendar size={12} /> {featuredPost.date}</div>
                                            <div className="flex items-center gap-1.5"><Clock size={12} /> {featuredPost.readTime}</div>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4 leading-tight group-hover:text-[#06B6D4] transition-colors">
                                            {featuredPost.title}
                                        </h3>

                                        <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-medium">
                                            {featuredPost.desc}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                                        <span className="text-xs font-bold uppercase tracking-wider text-white">Read Article</span>
                                        <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#06B6D4] group-hover:border-[#06B6D4] transition-all">
                                            <ArrowUpRight size={14} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )}

                        {/* Secondary Posts list (5 columns) */}
                        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
                            <AnimatePresence mode="popLayout">
                                {secondaryPosts.map((post) => (
                                    <motion.div
                                        key={post.id}
                                        layout
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.4 }}
                                        className="rounded-2xl border border-white/10 bg-[#0B1120]/40 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group cursor-pointer"
                                    >
                                        <Link href={`/blog/${post.slug}`} className="flex flex-col justify-between h-full">
                                            <div>
                                                {/* Meta */}
                                                <div className="flex items-center gap-4 text-[10px] text-[#94A3B8] font-extrabold uppercase tracking-wider mb-3">
                                                    <span className="text-[#06B6D4]">{post.category}</span>
                                                    <div className="flex items-center gap-1"><Calendar size={10} /> {post.date}</div>
                                                </div>

                                                <h4 className="text-lg font-extrabold text-white tracking-tight leading-snug group-hover:text-[#06B6D4] transition-colors mb-2">
                                                    {post.title}
                                                </h4>
                                            </div>

                                            <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between">
                                                <span className="text-[10px] font-black uppercase tracking-wider text-white">Read Article</span>
                                                <ArrowUpRight size={12} className="text-[#94A3B8] group-hover:text-white transition-colors" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            
                            {/* Fallback if no secondary articles after filter */}
                            {secondaryPosts.length === 0 && filteredPosts.length > 0 && (
                                <div className="h-full flex items-center justify-center rounded-2xl border border-dashed border-white/10 p-8 text-center text-xs text-[#94A3B8]/60">
                                    No other articles match current filter criteria.
                                </div>
                            )}
                        </div>

                    </div>
                ) : (
                    <div className="py-24 text-center rounded-3xl border border-dashed border-white/10 bg-[#0B1120]/20 flex flex-col items-center justify-center">
                        <span className="text-sm font-semibold text-[#94A3B8]/80 mb-2">No articles found</span>
                        <p className="text-xs text-[#94A3B8]/50">Try refining your search keyword or selected category tab.</p>
                    </div>
                )}

                {/* Footer Link */}
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#06B6D4] hover:text-white transition-colors duration-300"
                    >
                        Browse All Articles
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
