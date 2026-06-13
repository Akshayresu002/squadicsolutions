import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, ShieldCheck, Heart, Landmark, GraduationCap, Building2, ShoppingBag, Factory, Cpu, Sparkles } from 'lucide-react';
import Link from 'next/link';

const sectors = [
    {
        name: 'Healthcare',
        icon: Heart,
        desc: 'Security-hardened systems processing medical records and diagnostic metrics. We design HIPAA-compliant architectures with strict database access logs.',
        solution: 'Custom neural classifiers for pathologist imaging, secure HL7/FHIR microservice gateways, and private VPC networks.',
        metric: 'Under 4 hours clinical turnaround times.',
        color: '#2563EB'
    },
    {
        name: 'Finance',
        icon: Landmark,
        desc: 'Distributed transaction ledgers and high-frequency analytical queries. We build systems meeting PCI-DSS standards for transactional durability.',
        solution: 'Apache Kafka queuing, PostgreSQL read-replica scaling, and column-store analytical warehouses.',
        metric: 'Sub-millisecond write processing latency.',
        color: '#06B6D4'
    },
    {
        name: 'Education',
        icon: GraduationCap,
        desc: 'Multi-tenant school management software and virtual learning portals. We construct portals that scale to handle simultaneous student spikes.',
        solution: 'Asynchronous course distribution networks, serverless user sessions, and consolidated document libraries.',
        metric: '100% data access resilience.',
        color: '#7C3AED'
    },
    {
        name: 'Real Estate',
        icon: Building2,
        desc: 'Interactive property catalogs and automated contracting. We build geographic search algorithms matching users with property listings.',
        solution: 'Elasticsearch spatial searches, automated PDF contracting, and real-time messaging services.',
        metric: '90% speedup in contract generation.',
        color: '#2563EB'
    },
    {
        name: 'Retail & E-commerce',
        icon: ShoppingBag,
        desc: 'Scalable shopping engines, cart synchronization, and payment systems. We optimize checkout processes to increase purchase conversion.',
        solution: 'Redis session caching, Stripe API payment gateways, and automated logistics telemetry.',
        metric: 'Sustained load of 15,000 requests/sec.',
        color: '#06B6D4'
    },
    {
        name: 'Manufacturing',
        icon: Factory,
        desc: 'IoT telemetry collection and automated assembly systems. We deploy local database buffers that prevent data loss during network failures.',
        solution: 'Asynchronous database logs, machine status monitors, and supplier ERP synchronizations.',
        metric: 'Zero records lost on line disconnect.',
        color: '#7C3AED'
    },
    {
        name: 'Technology & SaaS',
        icon: Cpu,
        desc: 'Core developer platforms, API gateways, and multi-tenant applications. We write clean, typed APIs with auto-generated schemas.',
        solution: 'Next.js edge middleware, gRPC internal service grids, and automated Terraform deployments.',
        metric: '99.999% platform availability SLA.',
        color: '#2563EB'
    }
];

export default function IndustriesIndex() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#030712] pt-44 pb-28 relative overflow-hidden">
                {/* Background Details */}
                <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#06B6D4] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />
                <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#7C3AED] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

                <div className="max-w-container relative z-10">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
                        <div className="mb-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                            <Sparkles size={12} className="text-[#2563EB]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#94A3B8]">
                                Sectors
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                            Industry Architectures
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed font-medium">
                            Explore the custom technical structures and integrations we deploy to satisfy specific regulatory parameters and scale profiles.
                        </p>
                    </div>

                    {/* Sectors Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {sectors.map((s) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={s.name}
                                    className="group relative rounded-2xl bg-[#111827]/40 border border-white/5 p-8 flex flex-col justify-between overflow-hidden shadow-2xl glass-panel-hover"
                                >
                                    {/* Accent strip on card top */}
                                    <div 
                                        className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r transition-all duration-500 opacity-60 group-hover:w-full"
                                        style={{ backgroundImage: `linear-gradient(to right, ${s.color}, transparent)` }}
                                    />

                                    <div>
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 border border-white/10 text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                                            style={{
                                                backgroundColor: `${s.color}15`,
                                                borderColor: `${s.color}35`,
                                            }}
                                        >
                                            <Icon size={20} style={{ color: s.color }} />
                                        </div>

                                        <h2 className="text-2xl font-black text-white mb-4 tracking-tight">
                                            {s.name}
                                        </h2>

                                        <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-medium">
                                            {s.desc}
                                        </p>

                                        {/* Deployment info */}
                                        <div className="p-4 rounded-xl bg-[#030712]/50 border border-white/5 mb-6 space-y-2">
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/50 block">Deployment Blueprint</span>
                                            <p className="text-xs text-white/95 font-semibold leading-relaxed">{s.solution}</p>
                                        </div>
                                    </div>

                                    {/* Metrics & Action Link */}
                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#94A3B8]/60">Target SLA Metric</span>
                                            <span className="text-xs font-black text-[#22C55E]">{s.metric}</span>
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="group/btn flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#06B6D4] hover:text-white transition-colors"
                                        >
                                            Consult Architect <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
