import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight, Sparkles, Terminal, Cpu, BarChart3, Cloud, Compass, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Enterprise Software Services | SquadicSolutions',
    description: 'Explore SquadicSolutions core capabilities including Web Development, Custom Software Engineering, AI Solutions, Data Analytics, and Cloud Infrastructure.',
    alternates: {
        canonical: 'https://squadicsolutions.online/services',
    },
};

const servicesList = [
    {
        title: 'Web Engineering',
        slug: 'web-development',
        desc: 'High-performance web applications built on modern frameworks, optimized for edge-delivery, core web vitals, and B2B velocity.',
        icon: Compass,
        color: '#2563EB',
    },
    {
        title: 'Custom Systems',
        slug: 'custom-software',
        desc: 'Bespoke microservices, typed architectures, and microservice integration schemes built to eliminate legacy technical debt.',
        icon: Terminal,
        color: '#06B6D4',
    },
    {
        title: 'AI Infrastructure',
        slug: 'ai-solutions',
        desc: 'Custom neural integrations, model fine-tuning, and contextual vector search engines housed in secure private cloud boundaries.',
        icon: Cpu,
        color: '#7C3AED',
    },
    {
        title: 'Data Intelligence',
        slug: 'data-analytics',
        desc: 'Real-time telemetry feeds, Kafka message queues, and high-frequency analytical dashboards rendering direct business insights.',
        icon: BarChart3,
        color: '#2563EB',
    },
    {
        title: 'Business Automation',
        slug: 'automation-systems',
        desc: 'Intelligent process orchestration, robotic workflows, and custom middleware grids connecting key business systems.',
        icon: Shield,
        color: '#06B6D4',
    },
    {
        title: 'Resilient Cloud & DevOps',
        slug: 'cloud-engineering',
        desc: 'Zero-downtime blue-green deployments, autoscaling container architectures, and real-time infrastructure logging.',
        icon: Cloud,
        color: '#7C3AED',
    },
];

export default function ServicesPage() {
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
                    <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
                        <div className="mb-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                            <Sparkles size={12} className="text-[#06B6D4]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#94A3B8]">
                                Core Capabilities
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                            Architectural Solutions
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed font-medium">
                            SquadicSolutions delivers full-stack software engineering and machine learning workflows designed for B2B scale and absolute runtime safety.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((s, index) => {
                            const Icon = s.icon;
                            return (
                                <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    className="group relative rounded-2xl bg-[#111827]/40 border border-white/5 p-8 flex flex-col justify-between overflow-hidden shadow-2xl glass-panel-hover"
                                >
                                    {/* Accent tag in card top */}
                                    <div 
                                        className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r transition-all duration-500 opacity-50 group-hover:w-full"
                                        style={{ backgroundImage: `linear-gradient(to right, ${s.color}, transparent)` }}
                                    />

                                    <div>
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 border border-white/10 text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                                            style={{
                                                backgroundColor: `${s.color}20`,
                                                borderColor: `${s.color}40`,
                                            }}
                                        >
                                            <Icon size={20} style={{ color: s.color }} />
                                        </div>

                                        <h2 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#06B6D4] transition-colors">
                                            {s.title}
                                        </h2>

                                        <p className="text-sm text-[#94A3B8] leading-relaxed mb-8 font-medium">
                                            {s.desc}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                                        <span className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#06B6D4] transition-colors">
                                            Explore Architecture
                                        </span>
                                        <ArrowRight size={14} className="text-[#94A3B8] group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
