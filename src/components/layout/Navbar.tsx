'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PrimaryButton } from '@/components/ui/Button';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about-squadicsolutions' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        // Trigger initially
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Magnetic interaction helper
    const magneticRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4 pointer-events-none">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`max-w-7xl mx-auto w-full rounded-2xl pointer-events-auto transition-all duration-500 ${
                        isScrolled
                            ? 'bg-[#030712]/70 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_20px_rgba(37,99,235,0.05)] py-3 px-6'
                            : 'bg-transparent border border-transparent py-5 px-4'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group outline-none">
                            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white/5 border border-white/10 p-0.5 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                                <Image 
                                    src="/logo.jpeg" 
                                    alt="SquadicSolutions Logo" 
                                    width={40} 
                                    height={40} 
                                    className="object-contain w-full h-full rounded-md"
                                />
                            </div>
                            <span className="font-black text-xl text-white tracking-tight">
                                Squadic<span className="bg-gradient-to-r from-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">Solutions</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation Menu (Center) */}
                        <nav className="hidden xl:flex items-center gap-1 bg-[#111827]/40 border border-white/5 rounded-full px-2 py-1.5 backdrop-blur-md relative">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 rounded-full z-10 ${
                                            isActive ? 'text-white' : 'text-white/60 hover:text-white'
                                        }`}
                                        onMouseEnter={() => setHoveredIndex(i)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        {/* Animated underline / glow background pill */}
                                        {hoveredIndex === i && (
                                            <motion.span
                                                layoutId="navHoverBackground"
                                                className="absolute inset-0 bg-white/5 rounded-full z-0 border border-white/5"
                                                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                                                style={{
                                                    boxShadow: '0 0 15px rgba(6,182,212,0.1)',
                                                }}
                                            />
                                        )}
                                        {isActive && (
                                            <motion.span
                                                layoutId="navActiveLine"
                                                className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.8)] z-20"
                                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Right CTA Button */}
                        <div className="hidden xl:block">
                            <PrimaryButton href="/contact">
                                Start Your Project
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </PrimaryButton>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="xl:hidden p-2.5 text-white/80 hover:text-white bg-white/5 rounded-xl border border-white/10 outline-none transition-all duration-300 cursor-pointer"
                        >
                            <Menu size={22} />
                        </button>
                    </div>
                </motion.div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-[#030712]/98 backdrop-blur-2xl xl:hidden flex flex-col"
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                             <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
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
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2.5 text-white/80 hover:text-white bg-white/5 border border-white/10 rounded-xl outline-none transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col gap-6">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.label}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.05, duration: 0.4 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`text-2xl font-black uppercase tracking-wider transition-colors duration-300 block ${
                                                isActive
                                                    ? 'text-[#06B6D4] drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                                                    : 'text-white/60 hover:text-white'
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Mobile Footer CTA */}
                        <div className="p-8 border-t border-white/5 bg-[#0B1120]/50 flex flex-col gap-4">
                            <p className="text-sm text-white/40 text-center font-medium">
                                Ready to build something extraordinary?
                            </p>
                            <PrimaryButton href="/contact" onClick={() => setIsMobileMenuOpen(false)} classNameStr="w-full justify-center">
                                Start Project
                                <ArrowRight size={14} />
                            </PrimaryButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
