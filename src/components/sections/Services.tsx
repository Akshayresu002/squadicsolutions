'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PrimaryButton } from '@/components/ui/Button';

const services = [
    {
        id: 'web-dev',
        title: 'Web Engineering',
        subtitle: 'High-performance web apps built for B2B scale.',
        desc: 'We engineer high-performance web applications designed for massive user concurrency, sub-second loads, and absolute security. Using Next.js, React, and server-side edge rendering, we push computing closer to the user to maximize retention and conversion rates.',
        image: '/images/web-development.png',
        slug: 'web-development',
        color: 'from-[#2563EB] to-[#06B6D4]',
        features: ['Server-Side Edge Rendering', 'High Concurrency Optimizations', 'Strict Content Security Policies']
    },
    {
        id: 'custom-software',
        title: 'Custom Systems',
        subtitle: 'Bespoke architectures for operational complexity.',
        desc: 'Tailored architectural solutions to solve your most complex operational challenges. We design secure, scalable microservices and modular monoliths that eliminate technical debt and integrate seamlessly with your existing infrastructure.',
        image: '/images/custom-software.png',
        slug: 'custom-software',
        color: 'from-[#06B6D4] to-[#7C3AED]',
        features: ['Orchestrated Microservices (Kubernetes)', 'Fault-Tolerant System Failovers', 'Clean Typed Architecture (TypeScript/Go)']
    },
    {
        id: 'ai-solutions',
        title: 'AI Infrastructure',
        subtitle: 'Context-aware models embedded in operations.',
        desc: 'Integrate custom predictive models, large language models, and machine learning workflows into your enterprise. We train custom models on your proprietary data, securing data privacy through isolated private-cloud deployments.',
        image: '/images/ai-solutions.png',
        slug: 'ai-solutions',
        color: 'from-[#7C3AED] to-[#2563EB]',
        features: ['Custom Neural Networks', 'Explainable AI Dashboards', 'HIPAA & GDPR Compliant Data Seals']
    },
    {
        id: 'data-analytics',
        title: 'Data Intelligence',
        subtitle: 'Structured real-time business telemetry.',
        desc: 'Transform raw, siloed telemetry into clean, interactive, and structured real-time analytics. We build low-latency data pipelines and interactive executive dashboards featuring live WebSocket updates and predictive trend lines.',
        image: '/images/data-analytics.png',
        slug: 'data-analytics',
        color: 'from-[#2563EB] to-[#7C3AED]',
        features: ['Data Lakehouse Deployments', 'Kafka Real-Time Streams', 'Bespoke React BI Dashboards']
    },
    {
        id: 'cloud-solutions',
        title: 'Resilient Cloud & DevOps',
        subtitle: 'Fault-tolerant serverless deployments.',
        desc: 'Deploy resilient scale with cloud-native, multi-tenant architectures. We enforce automated CI/CD pipelines, containerized deployments, and automatic load scaling to handle traffic surges without degradation.',
        image: '/images/cloud-engineering.png',
        slug: 'cloud-engineering',
        color: 'from-[#06B6D4] to-[#2563EB]',
        features: ['Automated Blue-Green Deployments', 'Serverless Scaled Clusters', 'Real-Time Telemetry & Alert Grids']
    },
    {
        id: 'automation-systems',
        title: 'Business Automation',
        subtitle: 'Hyper-automation workflows maximizing ROI.',
        desc: 'Eliminate manual workflows and operational bottlenecks using advanced hyper-automation systems. We connect disparate ERP, CRM, and financial pipelines with secure intelligent middleware to streamline operations.',
        image: '/images/automation-systems.png',
        slug: 'automation-systems',
        color: 'from-[#7C3AED] to-[#06B6D4]',
        features: ['Bespoke Integration Middleware', 'Automated Inventory & Forecasting', 'Intelligent Robotic Process Loops']
    }
];

export default function Services() {
    return (
        <section className="section-padding bg-[#030712] relative overflow-hidden" id="services">
            {/* Background Grid & Spotlights */}
            <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
            <div className="absolute top-[15%] left-[-20%] w-[60%] h-[40%] bg-[#2563EB] rounded-full blur-[220px] opacity-[0.03] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-20%] w-[60%] h-[40%] bg-[#7C3AED] rounded-full blur-[220px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-container relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-28">
                    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#06B6D4] text-xs font-extrabold uppercase tracking-[0.2em] mb-4">
                        Core Capabilities
                    </span>
                    <h2 className="text-fluid-h2 font-black text-white tracking-tight mb-6 max-w-3xl leading-none">
                        Architecting High-Performance Enterprise Solutions
                    </h2>
                    <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl font-medium">
                        We deliver technical excellence tailored for massive B2B velocity and absolute system stability.
                    </p>
                </div>

                {/* Services List (Alternating Layouts) */}
                <div className="flex flex-col gap-36 md:gap-48">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                isEven={isEven}
                                index={index}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

interface CardProps {
    service: typeof services[0];
    isEven: boolean;
    index: number;
}

function ServiceCard({ service, isEven, index }: CardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Subtly move image on scroll for a premium parallax effect
    const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
        <div
            ref={cardRef}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center`}
        >
            {/* Text Side */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`lg:col-span-6 flex flex-col items-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            >
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-black text-white/30 tracking-widest">0{index + 1}</span>
                    <div className={`h-[1px] w-8 bg-gradient-to-r ${service.color}`} />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#06B6D4]">{service.subtitle}</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-none">
                    {service.title}
                </h3>

                <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed mb-8 font-medium">
                    {service.desc}
                </p>

                {/* Feature Bullets */}
                <ul className="space-y-3.5 mb-10 w-full">
                    {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-white/95 font-semibold">
                            <CheckCircle2 size={16} className="text-[#06B6D4] shrink-0" />
                            <span>{feat}</span>
                        </li>
                    ))}
                </ul>

                <PrimaryButton href={`/services/${service.slug}`}>
                    Explore Capabilities
                    <ArrowRight size={14} />
                </PrimaryButton>
            </motion.div>

            {/* Image Side */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl border border-white/10 bg-[#0B1120]/80 p-2 overflow-hidden shadow-2xl group ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
            >
                {/* Glowing border outline */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none rounded-2xl" />

                {/* Parallax Image container */}
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <motion.div style={{ y: imageY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority={index < 2}
                        />
                    </motion.div>
                </div>

                {/* Soft glow in corner */}
                <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-[#06B6D4]/15 rounded-full blur-2xl group-hover:bg-[#06B6D4]/25 transition-all duration-500 pointer-events-none" />
            </motion.div>
        </div>
    );
}
