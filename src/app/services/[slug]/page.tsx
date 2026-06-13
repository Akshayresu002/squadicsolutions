import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PrimaryButton } from '@/components/ui/Button';
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Code2, Network, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetail {
    title: string;
    headline: string;
    desc: string;
    techStack: string[];
    benefits: string[];
    methodology: { step: string; detail: string }[];
    faqs: { q: string; a: string }[];
}

const servicesDetails: Record<string, ServiceDetail> = {
    'web-development': {
        title: 'Web Engineering',
        headline: 'Sub-second page speeds. Highly structured layouts. Scaled interfaces.',
        desc: 'We design and build high-performance web systems optimized for massive user concurrency. By utilizing Next.js, Server-Side edge rendering, and optimized caching layers, we push your application closer to your users, guaranteeing sub-second load times globally.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Vercel Edge Platform'],
        benefits: [
            'Sub-second page load times globally',
            'Optimized for Core Web Vitals and Search Engines',
            'Sleek and interactive glassmorphic UI designs',
            'Fully typed systems preventing production crashes'
        ],
        methodology: [
            { step: '01. Telemetry Audit', detail: 'We profile existing layouts and APIs to locate performance bottlenecks.' },
            { step: '02. Component Design', detail: 'We build modular, reusable React UI components styled using Tailwind.' },
            { step: '03. Edge Strategy', detail: 'We deploy middleware and API caching to speed up data delivery.' },
            { step: '04. Deployment', detail: 'Asynchronous deployments to production with real-time logging.' }
        ],
        faqs: [
            { q: 'Why do you choose Next.js?', a: 'Next.js provides server-side rendering, static site generation, and edge routing out-of-the-box, ensuring top-tier performance and SEO optimization.' },
            { q: 'How do you guarantee site security?', a: 'We implement strict Content Security Policies (CSP), sanitize all inputs, and use fully typed API interfaces to prevent cross-site scripting (XSS).' }
        ]
    },
    'custom-software': {
        title: 'Custom Systems',
        headline: 'Bespoke microservices built to handle massive operational complexity.',
        desc: 'We engineer highly structured microservices and modular monoliths designed to eliminate legacy technical debt. Our custom architectures scale horizontally, coordinate database queries efficiently, and integrate seamlessly with third-party software.',
        techStack: ['TypeScript', 'Go', 'Node.js', 'PostgreSQL', 'Docker', 'REST/gRPC APIs'],
        benefits: [
            'Modular microservices decoupled to scale',
            'Automated integration pipelines preventing downtime',
            'Optimized database indexes and query caching',
            'Clean architectural separation of logic and database'
        ],
        methodology: [
            { step: '01. System Assessment', detail: 'We model data entities and system dependency maps.' },
            { step: '02. API Design', detail: 'We write schema-first contracts using OpenAPI or gRPC specs.' },
            { step: '03. Logic Coding', detail: 'We build test-driven business services with structured models.' },
            { step: '04. Integration', detail: 'We stitch services together with telemetry and message queues.' }
        ],
        faqs: [
            { q: 'Do you help with database migration?', a: 'Yes, we design automated data mapping and extraction scripts to safely migrate databases with zero operational downtime.' },
            { q: 'What architecture do you recommend?', a: 'We select either a modular monolith or microservices depending on team size, transaction frequency, and resource boundaries.' }
        ]
    },
    'ai-solutions': {
        title: 'AI Infrastructure',
        headline: 'Context-aware intelligence embedded in your business applications.',
        desc: 'We design custom machine learning workflows and large language model integrations trained on your proprietary data. By implementing vector databases and custom neural networks inside your private cloud boundary, we ensure total privacy.',
        techStack: ['Python', 'PyTorch', 'OpenAI API', 'Pinecone / Milvus', 'FastAPI', 'LangChain'],
        benefits: [
            'Proprietary data secured inside private cloud VPCs',
            'Low-latency semantic text searches and match engines',
            'Automated content synthesis and data parsing',
            'Continuous model refinement based on production logs'
        ],
        methodology: [
            { step: '01. Data Gathering', detail: 'We ingest, clean, and structure raw business documentation.' },
            { step: '02. Model Selection', detail: 'We pick open-source or commercial models based on your cost constraints.' },
            { step: '03. RAG Engineering', detail: 'We index documents into vector databases with advanced embeddings.' },
            { step: '04. API Wrap', detail: 'We build secure API endpoints to feed models back to your frontend.' }
        ],
        faqs: [
            { q: 'How do you secure model training data?', a: 'We host models within isolated, private-network VPCs, ensuring no data ever leaks to public API logs or third-party training.' },
            { q: 'What is Retrieval-Augmented Generation (RAG)?', a: 'RAG is a technique that supplies custom files to LLMs during queries, preventing model hallucinations and giving up-to-date answers.' }
        ]
    },
    'data-analytics': {
        title: 'Data Intelligence',
        headline: 'Telemetry pipelines mapping raw data into real-time business telemetry.',
        desc: 'We transform siloed transactional data into clean, interactive, and structured analytics dashboards. Our real-time data lakes ingest telemetry feeds asynchronously, giving executives immediate insights via interactive dashboards.',
        techStack: ['Python', 'Apache Kafka', 'PostgreSQL', 'Snowflake', 'Power BI / Tableau', 'GraphQL Streams'],
        benefits: [
            'Real-time streaming queries via WebSocket connections',
            'Siloed database consolidation in centralized data lakes',
            'Executive charts with customizable data filters',
            'Predictive scheduling based on historical charts'
        ],
        methodology: [
            { step: '01. Telemetry Hook', detail: 'We tap database CDC logs or system telemetry feeds.' },
            { step: '02. Lakehouse Design', detail: 'We structure dimensional tables and analytics schemas.' },
            { step: '03. ETL Pipeline', detail: 'We write low-latency spark/python extraction routines.' },
            { step: '04. Dashboard Build', detail: 'We assemble interactive glassmorphic BI charts for users.' }
        ],
        faqs: [
            { q: 'Can you handle unstructured data?', a: 'Yes, we parse unstructured text and images using custom OCR and NLP engines, turning them into structured data rows.' },
            { q: 'How low is your pipeline latency?', a: 'Our streaming pipelines utilize Apache Kafka and WebSockets to deliver data under 500ms from database write to UI render.' }
        ]
    },
    'automation-systems': {
        title: 'Business Automation',
        headline: 'Automating repetitive operational tasks with zero user interaction.',
        desc: 'Eliminate manual errors and back-office bottlenecks. We build custom orchestration middleware connecting ERPs, CRMs, and payment systems, allowing transactions and tasks to trigger asynchronously.',
        techStack: ['Node.js', 'Python', 'Redis Queues', 'REST Integrations', 'Stripe API', 'Webhooks'],
        benefits: [
            '80%+ reduction in manual operations',
            'Instant document generation and ledger reconciliation',
            'Automated SMS, email, and task escalation triggers',
            'Strict error tracking with failover recovery schemes'
        ],
        methodology: [
            { step: '01. Flow Auditing', detail: 'We document manual routines and identify optimization targets.' },
            { step: '02. Integration Mapping', detail: 'We verify API documentation for all target platforms.' },
            { step: '03. Queue Coding', detail: 'We write robust worker jobs backed by Redis memory queues.' },
            { step: '04. Telemetry Hook', detail: 'We configure error monitors and logging alert grids.' }
        ],
        faqs: [
            { q: 'What happens if an external API crashes?', a: 'Our worker queues utilize exponential backoff retries and dead-letter queues to prevent job loss during API failures.' },
            { q: 'Do you integrate legacy CRMs?', a: 'Yes, we write custom API wrappers or utilize database hooks to connect legacy enterprise databases.' }
        ]
    },
    'cloud-engineering': {
        title: 'Resilient Cloud & DevOps',
        headline: 'Fault-tolerant multi-tenant architectures engineered to handle traffic spikes.',
        desc: 'We plan, configure, and manage cloud infrastructures. By implementing infrastructure-as-code (IaC), container orchestration, and automated blue-green deployments, we ensure your services stay online 24/7.',
        techStack: ['AWS / GCP', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Prometheus & Grafana'],
        benefits: [
            '99.99% system availability SLA guarantees',
            'Automated scaling parameters preventing resource saturation',
            'One-click sandbox deployments using Terraform scripts',
            'Isolated VPC firewalls protecting internal network traffic'
        ],
        methodology: [
            { step: '01. Architecture Review', detail: 'We draw secure VPC networking maps and cluster sizing.' },
            { step: '02. IaC Configuration', detail: 'We write modular Terraform scripts for cloud resources.' },
            { step: '03. Pipeline Build', detail: 'We set up automated CI/CD checks, testing, and builds.' },
            { step: '04. Monitor Launch', detail: 'We connect Grafana telemetry dashboards and paging alerts.' }
        ],
        faqs: [
            { q: 'Which cloud providers do you support?', a: 'We primarily engineer on AWS and GCP, but we also design hybrid and multi-cloud solutions matching client demands.' },
            { q: 'How do you prevent data loss?', a: 'We implement automated database snapshots, write-ahead-logging replication, and cross-region recovery backups.' }
        ]
    }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesDetails[slug];
    if (!service) return { title: 'Service Not Found | SquadicSolutions' };
    return {
        title: `${service.title} | SquadicSolutions`,
        description: service.headline,
        alternates: {
            canonical: `https://squadicsolutions.online/services/${slug}`,
        },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesDetails[slug];

    if (!service) notFound();

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#030712] pt-40 pb-24 relative overflow-hidden">
                {/* Background Details */}
                <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
                <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] bg-[#2563EB] rounded-full blur-[200px] opacity-[0.04] pointer-events-none" />
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[180px] opacity-[0.03] pointer-events-none" />

                <div className="max-w-container relative z-10">
                    
                    {/* Hero Area */}
                    <div className="flex flex-col items-start text-left mb-20 max-w-4xl">
                        <Link href="/services" className="text-xs font-extrabold uppercase tracking-widest text-[#06B6D4] hover:text-white mb-6 transition-colors inline-block">
                            &larr; Back to Services
                        </Link>
                        
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-bold leading-normal mb-8 text-gradient-primary">
                            {service.headline}
                        </p>
                        <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed mb-10">
                            {service.desc}
                        </p>

                        <PrimaryButton href="/contact">
                            Discuss Infrastructure With Engineers
                            <ArrowRight size={14} />
                        </PrimaryButton>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
                        
                        {/* Benefits & Tech Stack (7 cols) */}
                        <div className="lg:col-span-7 space-y-12">
                            {/* Benefits */}
                            <div className="glass-panel rounded-2xl p-8 md:p-10 border border-white/10">
                                <h2 className="text-2xl font-black text-white tracking-tight mb-6 flex items-center gap-3">
                                    <ShieldCheck className="text-[#06B6D4]" /> Core Benefits
                                </h2>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3.5 text-sm text-[#94A3B8] font-semibold leading-relaxed">
                                            <CheckCircle2 size={16} className="text-[#06B6D4] shrink-0 mt-0.5" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="glass-panel rounded-2xl p-8 md:p-10 border border-white/10">
                                <h2 className="text-2xl font-black text-white tracking-tight mb-6 flex items-center gap-3">
                                    <Cpu className="text-[#7C3AED]" /> Technology Stack
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {service.techStack.map((tech, i) => (
                                        <span 
                                            key={i} 
                                            className="px-4 py-2 bg-[#111827]/80 rounded-xl border border-white/5 text-xs font-bold text-white/90 uppercase tracking-widest shadow-md hover:border-[#06B6D4]/30 transition-all cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Methodology Timeline (5 cols) */}
                        <div className="lg:col-span-5 glass-panel rounded-2xl p-8 md:p-10 border border-white/10">
                            <h2 className="text-2xl font-black text-white tracking-tight mb-8 flex items-center gap-3">
                                <Network className="text-[#2563EB]" /> Integration Lifecycle
                            </h2>
                            <div className="relative pl-6 border-l border-white/10 space-y-8">
                                {service.methodology.map((m, i) => (
                                    <div key={i} className="relative">
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                        <h3 className="text-sm font-extrabold uppercase tracking-wider text-white mb-1">
                                            {m.step}
                                        </h3>
                                        <p className="text-xs text-[#94A3B8] leading-relaxed font-semibold">
                                            {m.detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* FAQ Area */}
                    <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/10 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black text-white tracking-tight mb-10 text-center flex items-center justify-center gap-3">
                            <HelpCircle className="text-[#06B6D4]" /> Frequently Answered Queries
                        </h2>
                        <div className="space-y-6">
                            {service.faqs.map((faq, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5">
                                    <h3 className="text-base font-extrabold text-white mb-2 tracking-tight">
                                        Q: {faq.q}
                                    </h3>
                                    <p className="text-sm text-[#94A3B8] leading-relaxed font-medium">
                                        {faq.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
