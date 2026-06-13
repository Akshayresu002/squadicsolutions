'use client';

import { useState } from 'react';
import { ArrowUpRight, Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
    company: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about-squadicsolutions' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Industries', href: '/industries' },
    ],
    services: [
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'Custom Software', href: '/services/custom-software' },
        { label: 'AI Solutions', href: '/services/ai-solutions' },
        { label: 'Data Analytics', href: '/services/data-analytics' },
        { label: 'Cloud Engineering', href: '/services/cloud-engineering' },
        { label: 'Business Automation', href: '/services/automation-systems' },
    ],
    resources: [
        { label: 'Blog', href: '/blog' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'Contact', href: '/contact' },
    ],
};

const socialLinks = [
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Twitter', href: '#', icon: Twitter },
    { label: 'GitHub', href: '#', icon: Github },
];

export default function Footer() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <footer className="relative bg-[#030712] text-white pt-28 pb-10 border-t border-white/5 overflow-hidden">
            {/* Atmospheric Background Glows */}
            <div className="absolute bottom-[-100px] left-[10%] w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[150px] opacity-[0.04] pointer-events-none" />
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#7C3AED] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-3 mb-6 outline-none">
                            <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-white/5 border border-white/10 p-0.5 flex items-center justify-center">
                                <Image 
                                    src="/logo.jpeg" 
                                    alt="SquadicSolutions Logo" 
                                    width={32} 
                                    height={32} 
                                    className="object-contain w-full h-full rounded-md"
                                />
                            </div>
                            <span className="font-black text-lg text-white tracking-tight">
                                Squadic<span className="text-[#06B6D4]">Solutions</span>
                            </span>
                        </Link>

                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 max-w-sm">
                            We design, engineer, and deploy high-performance software systems. Our cloud-native architectures are built for enterprise resilience and B2B velocity.
                        </p>

                        <div className="flex gap-3 mt-2">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="w-10 h-10 rounded-xl bg-[#111827]/60 border border-white/5 hover:border-[#06B6D4] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                                        aria-label={social.label}
                                    >
                                        <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-5 grid grid-cols-3 gap-4">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className="flex flex-col items-start">
                                <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] mb-6 text-white">
                                    {category}
                                </h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-[#94A3B8] hover:text-white hover:translate-x-1 inline-block transition-all duration-200 font-medium"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter & Contact */}
                    <div className="lg:col-span-3 flex flex-col items-start">
                        <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] mb-6 text-white">
                            Newsletter
                        </h4>
                        <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                            Receive core architectural teardowns and engineering insights from our developers.
                        </p>
                        
                        <form onSubmit={handleSubscribe} className="w-full relative flex items-center mb-6">
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#111827]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/60 focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none transition-all pr-12"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#2563EB] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-colors cursor-pointer"
                                >
                                    {submitted ? <span className="text-xs font-bold">✓</span> : <Send size={14} />}
                                </button>
                            </div>
                        </form>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-2.5 text-[#94A3B8] hover:text-white text-sm font-semibold transition-colors duration-300">
                                <Mail size={16} />
                                <a href="mailto:info@squadicsolutions.online">info@squadicsolutions.online</a>
                            </div>
                            <div className="text-xs text-[#94A3B8] leading-relaxed">
                                <p className="font-extrabold uppercase tracking-wider text-white mb-1">HQ Operations</p>
                                <p>040-71328183</p>
                                <p className="mt-1 opacity-80">9JX6+GM3, Ln 1, Parvathapur, Peerzadiguda, Hyderabad, Telangana 500098</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[#94A3B8]/60 font-medium">
                        © {new Date().getFullYear()} SquadicSolutions. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs text-[#94A3B8]/60 hover:text-white transition-colors font-medium">Privacy Policy</a>
                        <a href="#" className="text-xs text-[#94A3B8]/60 hover:text-white transition-colors font-medium">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
