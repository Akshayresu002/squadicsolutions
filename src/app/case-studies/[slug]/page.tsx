import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PrimaryButton } from '@/components/ui/Button';
import { ShieldCheck, ArrowRight, HelpCircle, BarChart3, ListTodo, Layers, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudyDetail {
    title: string;
    client: string;
    industry: string;
    challenge: string;
    challengeDetails: string;
    solution: string;
    solutionDetails: string;
    results: string;
    resultsDetails: string;
    metrics: string[];
    techStack: string[];
    image: string;
}

const studiesDetails: Record<string, CaseStudyDetail> = {
    'fintech-analytics-engine': {
        title: 'FinTech Analytics Engine',
        client: 'GlobalTech Corp',
        industry: 'Financial Infrastructure',
        challenge: 'Legacy database scaling issues and high query latency over 10M+ daily transactional writes.',
        challengeDetails: 'GlobalTech legacy systems were experiencing severe write saturation during peak trading hours, raising query latency past 2.5 seconds. The relational datastore could not index real-time transaction streams fast enough, leading to database queue blockages and reporting siloes.',
        solution: 'Deployed a distributed column-store ledger, Snowflake data pipelines, and Apache Kafka real-time queue structures.',
        solutionDetails: 'We designed an asynchronous ingestion mesh utilizing Apache Kafka to buffer incoming writes. The data is parsed, validated, and streamed into a Snowflake cluster for cold analytics, while Golang microservices serve live transaction queries out of a highly-indexed, read-replicated PostgreSQL store.',
        results: 'Sub-millisecond latency on high-frequency transactions with 99.999% uptime.',
        resultsDetails: 'The new architecture successfully reduced API read latency to under 35ms globally. Database write lockups were eliminated completely, saving GlobalTech estimated thousands in daily system outage risks.',
        metrics: [
            '98.5% reduction in read latency (from 2.5s to 35ms)',
            'Zero transaction packet loss during peak spikes',
            'Sustained load indexing of 120,000 writes/sec'
        ],
        techStack: ['Apache Kafka', 'Snowflake', 'Golang', 'PostgreSQL', 'Docker', 'AWS'],
        image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=1200'
    },
    'diagnostic-neural-net': {
        title: 'Diagnostic Neural Net',
        client: 'HealthCore Systems',
        industry: 'Healthcare AI',
        challenge: 'Manually categorizing patient metrics led to delays in clinical diagnostics and higher error rates.',
        challengeDetails: 'Pathologists at HealthCore spent hours manually auditing complex cellular structures, leading to turnaround delays of up to 5 business days. The manual process increased diagnostic bottleneck risk and limited the hospital group output capacity.',
        solution: 'Designed a customized convolutional neural network trained on secure, HIPAA-regulated clinical metrics.',
        solutionDetails: 'We engineered a convolutional neural network (CNN) optimized for clinical image pattern classification. Operating entirely inside HealthCore secure private-cloud VPC, the model parses image slides, extracts feature representations, and flags potential anomalies for medical review.',
        results: '99.8% precision rate across 50,000 patient records, lowering diagnostic times by 84%.',
        resultsDetails: 'Pathologists can now audit cases in under 4 hours on average. System accuracy is verified at 99.8%, significantly improving diagnostic confidence and allowing clinicians to prioritize critical patients.',
        metrics: [
            '84% decrease in diagnostic turnaround times',
            '99.8% model classification precision rate',
            'Fully HIPAA and GDPR compliant architecture'
        ],
        techStack: ['Python', 'PyTorch', 'FastAPI', 'Pinecone', 'Docker', 'Google Cloud Platform'],
        image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1200'
    },
    'global-supply-chain-router': {
        title: 'Global Supply Chain Router',
        client: 'LogiLink Logistics',
        industry: 'Enterprise Logistics',
        challenge: 'Massive transit delays across international ports due to inefficient route calculation and weather silos.',
        challengeDetails: 'LogiLink fleet operators were adjusting shipping schedules manually based on siloed weather logs, leading to massive detours and fuel waste across major maritime corridors.',
        solution: 'Built an algorithmic pathfinding middleware cluster utilizing multi-agent AI and live telemetry feeds.',
        solutionDetails: 'We engineered a real-time routing engine that ingests port telemetries, tidal records, and weather API feeds. Using a customized A* pathfinding model built in Python, the system calculates optimal coordinates dynamically and delivers updates directly to cargo ship nav units.',
        results: 'Fully automated 12,000 daily routes with a 38% reduction in fuel and transportation expenses.',
        resultsDetails: 'Manual scheduling delays were eliminated. LogiLink recorded a 38% drop in fleet fuel consumption during the first quarter of deployment and shortened ship routing steps by 12 hours on average.',
        metrics: [
            '38% drop in overall maritime fuel expenses',
            '12,000 active routes computed dynamically daily',
            'Under 5-minute routing updates globally'
        ],
        techStack: ['TypeScript', 'Kubernetes', 'Redis', 'Python', 'FastAPI', 'AWS'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200'
    },
    'erp-cluster-migration': {
        title: 'ERP Cluster Migration',
        client: 'Titan Industrial',
        industry: 'Manufacturing Grid',
        challenge: 'Replacing a legacy mainframe with zero database downtime, avoiding manufacturing queue losses.',
        challengeDetails: 'Titan Industrial ran its inventory logic on an aged mainframe that could not interface with modern logistics software. Replacing it carried the threat of halting steel manufacturing lines, costing estimated thousands per hour in idle machinery loss.',
        solution: 'Orchestrated an asynchronous blue-green database swap utilizing Docker container clusters.',
        solutionDetails: 'We configured a blue-green shadow DB cluster on AWS that synchronized transactions in real-time from the on-premise system. When data parity was verified, we switched the DNS gateway to the cloud environment, achieving zero downtime.',
        results: 'Zero-packet-loss migration, protecting active assembly schedules.',
        resultsDetails: 'The mainframe was decommissioned with zero active assembly disruption. The new cloud ERP links seamlessly with Titan suppliers and reduces order-reconciliation times by 90%.',
        metrics: [
            '100% database parity achieved before DNS swap',
            'Zero hours of factory line shutdown downtime',
            '90% speedup in supply-chain order validation'
        ],
        techStack: ['Docker', 'AWS VPC', 'Terraform', 'GitHub Actions', 'PostgreSQL', 'Ansible'],
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200'
    }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const study = studiesDetails[slug];
    if (!study) return { title: 'Project Audit Not Found | SquadicSolutions' };
    return {
        title: `${study.title} Deployment Audit | SquadicSolutions`,
        description: study.challenge,
        alternates: {
            canonical: `https://squadicsolutions.online/case-studies/${slug}`,
        },
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = studiesDetails[slug];

    if (!study) notFound();

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#030712] pt-40 pb-24 relative overflow-hidden">
                {/* Background Details */}
                <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
                <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] bg-[#2563EB] rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[180px] opacity-[0.03] pointer-events-none" />

                <div className="max-w-container relative z-10">
                    
                    {/* Header back-link */}
                    <Link href="/case-studies" className="text-xs font-extrabold uppercase tracking-widest text-[#06B6D4] hover:text-white mb-6 transition-colors inline-block">
                        &larr; Back to Case Studies
                    </Link>

                    {/* Banner Image */}
                    <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 bg-[#0B1120] mb-16 shadow-2xl">
                        <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            priority
                            className="object-cover brightness-[0.8]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent opacity-85" />
                        
                        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
                            <div>
                                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#06B6D4] block mb-2">
                                    {study.industry}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
                                    {study.title}
                                </h1>
                            </div>
                            <div className="px-4 py-2 bg-[#030712]/75 backdrop-blur border border-white/10 rounded-xl text-xs font-extrabold uppercase text-[#94A3B8] tracking-widest">
                                Client: {study.client}
                            </div>
                        </div>
                    </div>

                    {/* Breakdown Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
                        
                        {/* Writeup text (8 cols) */}
                        <div className="lg:col-span-8 space-y-12 text-left">
                            
                            {/* Challenge */}
                            <div>
                                <h2 className="text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-3">
                                    <ListTodo className="text-[#2563EB]" /> The Challenge
                                </h2>
                                <p className="text-base text-[#94A3B8] leading-relaxed font-medium">
                                    {study.challengeDetails}
                                </p>
                            </div>

                            {/* Solution */}
                            <div>
                                <h2 className="text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-3">
                                    <Layers className="text-[#06B6D4]" /> The Solution
                                </h2>
                                <p className="text-base text-[#94A3B8] leading-relaxed font-medium">
                                    {study.solutionDetails}
                                </p>
                            </div>

                            {/* Results */}
                            <div>
                                <h2 className="text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-3">
                                    <Activity className="text-[#7C3AED]" /> The Results
                                </h2>
                                <p className="text-base text-[#94A3B8] leading-relaxed font-medium">
                                    {study.resultsDetails}
                                </p>
                            </div>

                        </div>

                        {/* Sidebar Metrics (4 cols) */}
                        <div className="lg:col-span-4 space-y-8">
                            
                            {/* Metrics achieved */}
                            <div className="glass-panel rounded-2xl p-8 border border-white/10">
                                <h3 className="text-lg font-black text-white tracking-tight mb-6 flex items-center gap-2.5">
                                    <BarChart3 className="text-[#22C55E]" /> Metrics Log
                                </h3>
                                <ul className="space-y-4">
                                    {study.metrics.map((m, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-xs text-white/95 font-bold leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0 mt-1.5" />
                                            <span>{m}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech stack badges */}
                            <div className="glass-panel rounded-2xl p-8 border border-white/10">
                                <h3 className="text-lg font-black text-white tracking-tight mb-6">
                                    Technologies Used
                                </h3>
                                <div className="flex flex-wrap gap-2.5">
                                    {study.techStack.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-3 py-1.5 bg-[#030712] border border-white/5 rounded-lg text-[10px] font-bold text-white/80 uppercase tracking-widest"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Bottom CTA */}
                    <div className="glass-panel rounded-3xl p-10 md:p-16 border border-white/10 text-center max-w-4xl mx-auto flex flex-col items-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#06B6D4] mb-4">Ready to Optimize Your Infrastructure?</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                            Let’s discuss your technical bottlenecks.
                        </h2>
                        <p className="text-sm text-[#94A3B8] max-w-xl mb-8 font-semibold">
                            Get in touch with our engineering team to conduct a diagnostic review of your databases, API layers, and deployment setup.
                        </p>
                        <PrimaryButton href="/contact">
                            Initialize Project Interface
                            <ArrowRight size={14} />
                        </PrimaryButton>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
