'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PrimaryButton, SecondaryButton } from '@/components/ui/Button';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#cta' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setIsMobileMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? 'h-[70px] bg-[#0A0A0A]/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/10'
                    : 'h-[90px] bg-transparent border-b border-transparent'
                    }`}
            >
                <div className="max-w-container h-full flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group outline-none">
                        <div className="relative w-10 h-10 overflow-hidden rounded">
                            <Image
                                src="/logo.jpeg"
                                alt="SquadicSolutions Logo"
                                fill
                                className="object-cover brightness-110"
                                priority
                            />
                        </div>
                        <span className="font-extrabold text-2xl text-white tracking-tight">
                            Squadic<span className="text-[#2563EB]">Solutions</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">
                        <SecondaryButton href="/">Home</SecondaryButton>
                        <SecondaryButton href="/services">Services</SecondaryButton>
                        <SecondaryButton href="/blog">Blog</SecondaryButton>
                        <SecondaryButton href="/about-squadicsolutions">About</SecondaryButton>
                    </div>

                    {/* Right CTA */}
                    <div className="hidden md:block">
                        <PrimaryButton href="/contact">
                            Start a Project
                        </PrimaryButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="md:hidden p-2 text-white hover:text-[#06B6D4] outline-none transition-colors"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-[#0A0A0A]/95 backdrop-blur-xl md:hidden flex flex-col"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                <div className="relative w-8 h-8 overflow-hidden rounded">
                                    <Image src="/logo.jpeg" alt="SquadicSolutions Logo" fill className="object-cover" />
                                </div>
                                <span className="font-extrabold text-xl text-white tracking-tight">
                                    Squadic<span className="text-[#2563EB]">Solutions</span>
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-white hover:text-[#06B6D4] bg-white/5 rounded outline-none transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col p-8 gap-8 items-start">
                            <SecondaryButton href="/" onClick={() => setIsMobileMenuOpen(false)} classNameStr="text-2xl">Home</SecondaryButton>
                            <SecondaryButton href="/services" onClick={() => setIsMobileMenuOpen(false)} classNameStr="text-2xl">Services</SecondaryButton>
                            <SecondaryButton href="/blog" onClick={() => setIsMobileMenuOpen(false)} classNameStr="text-2xl">Blog</SecondaryButton>
                            <SecondaryButton href="/about-squadicsolutions" onClick={() => setIsMobileMenuOpen(false)} classNameStr="text-2xl">About</SecondaryButton>
                        </div>

                        <div className="mt-auto p-6 border-t border-white/10 flex justify-center">
                            <PrimaryButton href="/contact" onClick={() => setIsMobileMenuOpen(false)} classNameStr="w-full">
                                Start a Project
                            </PrimaryButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
