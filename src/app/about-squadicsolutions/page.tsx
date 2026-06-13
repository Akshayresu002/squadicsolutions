import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield, Sparkles, Code2, Users, Target, Rocket } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About SquadicSolutions | Enterprise Technology Experts',
    description: 'Learn about SquadicSolutions, our engineering methodologies, and our mission to build intelligent, scalable software systems for modern businesses.',
    alternates: {
        canonical: 'https://squadicsolutions.online/about-squadicsolutions',
    },
};

const values = [
    {
        title: 'Architectural Safety First',
        desc: 'We enforce strict typing, comprehensive integration testing, and blue-green release isolation. We build systems that perform securely under peak load.',
        icon: Shield,
        color: '#2563EB'
    },
    {
        title: 'Technical Transparency',
        desc: 'We deliver clear code blueprints, direct pipeline telemetry, and open developer access logs. We operate as an integrated technical extension of your team.',
        icon: Users,
        color: '#06B6D4'
    },
    {
        title: 'Data-Driven Telemetry',
        desc: 'We design systems that log transaction parameters and track user interactions. Every capability we engineer is built to deliver measurable operational ROI.',
        icon: Target,
        color: '#7C3AED'
    }
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#030712] pt-44 pb-28 relative overflow-hidden">
                {/* Background Details */}
                <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#7C3AED] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />
                <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#2563EB] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

                <div className="max-w-container relative z-10">
                    
                    {/* Hero Section */}
                    <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
                        <div className="mb-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                            <Sparkles size={12} className="text-[#06B6D4]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#94A3B8]">
                                Company Overview
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                            Our Mission & Philosophy
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed font-medium">
                            SquadicSolutions was founded on a simple principle: software engineering should be treated as high-precision digital architecture. We eliminate technical debt and build resilient systems for enterprise growth.
                        </p>
                    </div>

                    {/* Split Narrative Block */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 pb-16 border-b border-white/5">
                        {/* Left Statement (6 cols) */}
                        <div className="lg:col-span-6 flex flex-col items-start text-left">
                            <span className="text-xs font-black uppercase tracking-widest text-[#06B6D4] mb-3">Our Core Intent</span>
                            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6 leading-tight">
                                Delivering Structured Systems for B2B Scale
                            </h2>
                            <p className="text-base text-[#94A3B8] leading-relaxed mb-6 font-medium">
                                We partner with fast-growing companies and enterprise organizations to modernize legacy systems, automate back-office operations, and launch secure SaaS platforms. 
                            </p>
                            <p className="text-base text-[#94A3B8] leading-relaxed font-medium">
                                Our development methodology focuses on modular codebases, clean databases, and automated testing, allowing your technical stack to grow with your business.
                            </p>
                        </div>

                        {/* Right Stats panel (6 cols) */}
                        <div className="lg:col-span-6 grid grid-cols-2 gap-6">
                            <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                                <span className="text-4xl font-black text-white block mb-1">50+</span>
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8]/60">Projects Deployed</span>
                            </div>
                            <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                                <span className="text-4xl font-black text-white block mb-1">99.8%</span>
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8]/60">System Precision</span>
                            </div>
                            <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                                <span className="text-4xl font-black text-white block mb-1">24/7</span>
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8]/60">Telemetry Support</span>
                            </div>
                            <div className="glass-panel rounded-2xl p-6 border border-white/10 text-center">
                                <span className="text-4xl font-black text-white block mb-1">100%</span>
                                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#94A3B8]/60">Bespoke Codebases</span>
                            </div>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div>
                        <h2 className="text-3xl font-black text-white tracking-tight mb-12 text-center">
                            Core Engineering Guidelines
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {values.map((v) => {
                                const Icon = v.icon;
                                return (
                                    <div
                                        key={v.title}
                                        className="group relative rounded-2xl bg-[#111827]/40 border border-white/5 p-8 flex flex-col justify-between overflow-hidden shadow-2xl glass-panel-hover"
                                    >
                                        <div 
                                            className="absolute top-0 left-0 w-20 h-[2px] bg-gradient-to-r transition-all duration-500 opacity-60 group-hover:w-full"
                                            style={{ backgroundImage: `linear-gradient(to right, ${v.color}, transparent)` }}
                                        />
                                        
                                        <div>
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 border border-white/10 text-white shadow-lg"
                                                style={{
                                                    backgroundColor: `${v.color}15`,
                                                    borderColor: `${v.color}35`,
                                                }}
                                            >
                                                <Icon size={20} style={{ color: v.color }} />
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                                                {v.title}
                                            </h3>

                                            <p className="text-sm text-[#94A3B8] leading-relaxed font-medium">
                                                {v.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
