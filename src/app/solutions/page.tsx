import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { PrimaryButton } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Workflow, Landmark, Route } from 'lucide-react';

const solutionsList = [
    {
        title: 'Enterprise Automation Systems',
        icon: Workflow,
        subtitle: 'Hyper-automation workflows connecting core platforms.',
        desc: 'We map manual back-office tasks, database synchronizations, and reporting pipelines into fully automated async worker threads. By linking your CRM, financial software, and supplier APIs with structured middleware, we eliminate manual entry delays and decrease operational error rates.',
        capabilities: [
            'Bespoke integration middleware connecting siloed systems',
            'Queue worker threads with automatic retry failover logic',
            'Automated inventory forecasting and order routing log systems',
            'Real-time Slack, Discord, and email telemetry reporting alerts'
        ],
        color: '#2563EB'
    },
    {
        title: 'Legacy Monolith Modernization',
        icon: Landmark,
        desc: 'Converting aged mainframes and databases into low-latency cloud architectures without database write loss.',
        subtitle: 'Replacing technical debt with modern typed microservices.',
        capabilities: [
            'Asynchronous blue-green database migration parameters',
            'Slicing relational database bottlenecks into column-store structures',
            'Converting legacy routines into high-performance TypeScript/Go APIs',
            'Dockerizing microservices coordinated via Kubernetes clusters'
        ],
        color: '#06B6D4'
    },
    {
        title: 'Digital Product Transformation',
        icon: Route,
        subtitle: 'Engineering custom SaaS platforms built for B2B scale.',
        desc: 'We partner with enterprise organizations to conceptualize, prototype, develop, and deploy scalable SaaS platforms. We implement modern, sub-second web dashboards backed by serverless cloud hosting and explainable analytics pipelines.',
        capabilities: [
            'Next.js Server-Side Edge rendering for search engine optimization',
            'Sleek glassmorphism UI mockups styled using responsive Tailwind',
            'Custom authentication configurations (OAuth2, SAML single sign-on)',
            'Continuous telemetry checks monitoring query execution speeds'
        ],
        color: '#7C3AED'
    }
];

export default function SolutionsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#030712] pt-44 pb-28 relative overflow-hidden">
                {/* Background Details */}
                <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />
                <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#2563EB] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

                <div className="max-w-container relative z-10">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
                        <div className="mb-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                            <Sparkles size={12} className="text-[#06B6D4]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#94A3B8]">
                                Solutions
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                            Enterprise Architectures
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed font-medium">
                            Explore our structured solutions engineered to modernize legacy code, automate workflows, and deploy high-performance applications.
                        </p>
                    </div>

                    {/* Solutions Listing */}
                    <div className="space-y-24">
                        {solutionsList.map((sol, index) => {
                            const Icon = sol.icon;
                            return (
                                <div
                                    key={sol.title}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t border-white/5 pt-16"
                                >
                                    {/* Left text (5 columns) */}
                                    <div className="lg:col-span-5 flex flex-col items-start text-left">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/10 text-white shadow-lg"
                                            style={{
                                                backgroundColor: `${sol.color}15`,
                                                borderColor: `${sol.color}35`,
                                            }}
                                        >
                                            <Icon size={20} style={{ color: sol.color }} />
                                        </div>

                                        <h2 className="text-3xl font-black text-white tracking-tight mb-4 leading-none">
                                            {sol.title}
                                        </h2>
                                        <p className="text-sm font-extrabold uppercase tracking-widest text-[#06B6D4] mb-6">
                                            {sol.subtitle}
                                        </p>
                                        <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
                                            {sol.desc}
                                        </p>

                                        <PrimaryButton href="/contact">
                                            Initiate Consultation
                                            <ArrowRight size={14} />
                                        </PrimaryButton>
                                    </div>

                                    {/* Right capabilities list (7 columns) */}
                                    <div className="lg:col-span-7 glass-panel rounded-2xl p-8 md:p-10 border border-white/10">
                                        <h3 className="text-lg font-black text-white tracking-tight mb-6">
                                            Target Deliverables
                                        </h3>
                                        <ul className="space-y-4">
                                            {sol.capabilities.map((c, i) => (
                                                <li key={i} className="flex items-start gap-3.5 text-sm text-[#94A3B8] font-semibold leading-relaxed">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shrink-0 mt-2" />
                                                    <span>{c}</span>
                                                </li>
                                            ))}
                                        </ul>
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
