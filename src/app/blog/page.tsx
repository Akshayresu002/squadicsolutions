'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, Calendar, Clock, Sparkles } from 'lucide-react';

const categories = ['All', 'Systems', 'AI', 'Analytics'];

const postsList = [
    {
        slug: 'why-squadicsolutions-builds-scalable-software-systems',
        title: 'Why SquadicSolutions Builds Scalable Software Systems',
        excerpt: 'Discover the core architectural principles that allow SquadicSolutions to deliver high-performance enterprise applications without technical debt.',
        category: 'Systems',
        date: 'March 01, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
    },
    {
        slug: 'how-squadicsolutions-uses-ai-for-business-automation',
        title: 'How SquadicSolutions Uses AI for Business Automation',
        excerpt: 'Learn how we implement predictive models and intelligent workflows to streamline operations and maximize ROI for our enterprise partners.',
        category: 'AI',
        date: 'February 25, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800'
    },
    {
        slug: 'future-of-data-analytics-with-squadicsolutions',
        title: 'The Future of Data Analytics with SquadicSolutions',
        excerpt: 'An inside look at how SquadicSolutions builds interactive, low-latency data pipelines that transform raw telemetry into actionable business intelligence.',
        category: 'Analytics',
        date: 'February 18, 2026',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800'
    }
];

export default function BlogIndex() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = postsList.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#030712] pt-44 pb-28 relative overflow-hidden">
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
                                Engineering Log
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                            Technical Insights
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed font-medium">
                            Architectural reviews, telemetry strategies, and development logs written directly by our software engineers.
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
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#111827]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/60 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] focus:outline-none transition-all pl-11"
                            />
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]/60" />
                        </div>
                    </div>

                    {/* Blog posts list */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredPosts.map((post) => (
                                <div
                                    key={post.slug}
                                    className="group relative rounded-3xl bg-[#111827]/40 border border-white/10 overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20 flex flex-col justify-between cursor-pointer"
                                >
                                    <Link href={`/blog/${post.slug}`} className="flex flex-col h-full justify-between">
                                        <div>
                                            {/* Cover image */}
                                            <div className="relative aspect-[16/10] w-full bg-[#030712] overflow-hidden border-b border-white/5">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                    className="object-cover transition-transform duration-750 group-hover:scale-103 brightness-[0.85]"
                                                />
                                            </div>

                                            {/* Details */}
                                            <div className="p-8">
                                                <div className="flex items-center gap-4 text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-4">
                                                    <span className="text-[#06B6D4]">{post.category}</span>
                                                    <div className="flex items-center gap-1.5"><Calendar size={10} /> {post.date}</div>
                                                    <div className="flex items-center gap-1.5"><Clock size={10} /> {post.readTime}</div>
                                                </div>

                                                <h2 className="text-xl md:text-2xl font-black text-white tracking-tight mb-4 group-hover:text-[#06B6D4] transition-colors leading-snug">
                                                    {post.title}
                                                </h2>

                                                <p className="text-sm text-[#94A3B8] leading-relaxed font-medium">
                                                    {post.excerpt}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="px-8 pb-8 pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                                            <span className="text-xs font-bold uppercase tracking-wider text-white">Read Article</span>
                                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#06B6D4] group-hover:border-[#06B6D4] transition-all">
                                                <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-24 text-center rounded-3xl border border-dashed border-white/10 bg-[#0B1120]/20 flex flex-col items-center justify-center">
                            <span className="text-sm font-semibold text-[#94A3B8]/80 mb-2">No articles found</span>
                            <p className="text-xs text-[#94A3B8]/50">Try checking another category tab or modify your search text.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
