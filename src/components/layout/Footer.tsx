'use client';

import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
    company: [
        { label: 'About Us', href: '#about' },
        { label: 'Our Process', href: '#process' },
        { label: 'Case Studies', href: '#case-studies' },
        { label: 'Careers', href: '#' },
    ],
    services: [
        { label: 'Web Development', href: '#services' },
        { label: 'Custom Software', href: '#services' },
        { label: 'AI Solutions', href: '#services' },
        { label: 'Cloud Engineering', href: '#services' },
    ],
    resources: [
        { label: 'Blog', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Contact', href: '#cta' },
    ],
};

const socialLinks = [
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'GitHub', href: '#' },
];

export default function Footer() {
    const scrollToSection = (href: string) => {
        if (href === '#') return;
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#111827] text-white pt-24 pb-8 border-t-[8px] border-[#4F46E5]">
            <div className="max-w-container">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6 outline-none">
                            <div className="w-8 h-8 flex items-center justify-center bg-[#4F46E5] text-white font-bold text-sm rounded">
                                S
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">
                                Squadic<span className="text-[#06B6D4]">Solutions</span>
                            </span>
                        </div>

                        <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs mb-6">
                            Building Intelligent Software Systems. We deliver structured, high-performance enterprise architecture for B2B scale.
                        </p>

                        <p className="text-[#9CA3AF] text-xs leading-relaxed max-w-sm mb-8 italic">
                            SquadicSolutions is a technology company specializing in web development, AI-powered software, data analytics and enterprise digital transformation solutions.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm font-semibold flex items-center gap-1 text-[#D1D5DB] hover:text-[#06B6D4] transition-colors outline-none"
                                    aria-label={link.label}
                                >
                                    {link.label}
                                    <ArrowUpRight size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <div className="text-sm font-bold capitalize mb-6 text-white tracking-wide">
                                {category}
                            </div>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="text-sm text-[#9CA3AF] hover:text-[#06B6D4] transition-colors duration-200 font-medium outline-none"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[#374151] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[#9CA3AF] font-medium">
                        © {new Date().getFullYear()} SquadicSolutions. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-sm text-[#9CA3AF] hover:text-white transition-colors font-medium outline-none">Privacy Policy</a>
                        <a href="#" className="text-sm text-[#9CA3AF] hover:text-white transition-colors font-medium outline-none">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
