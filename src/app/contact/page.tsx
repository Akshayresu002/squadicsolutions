'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) return;
        
        setLoading(true);
        // Simulate API write pipeline latency
        setTimeout(() => {
            setLoading(false);
            setIsSubmitted(true);
        }, 1200);
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#030712] pt-44 pb-28 relative overflow-hidden">
                {/* Background Details */}
                <div className="absolute inset-0 bg-grid-lines opacity-10 pointer-events-none" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" />
                <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#7C3AED] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

                <div className="max-w-container relative z-10 w-full">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
                        <div className="mb-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
                            <Sparkles size={12} className="text-[#06B6D4]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#94A3B8]">
                                Contact Portal
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
                            Start Your Project
                        </h1>
                        <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed font-medium">
                            Ready to scale your architecture? Reach out to our engineering directors to schedule a technical discovery session.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
                        
                        {/* Contact Form Container (7 cols) */}
                        <div className="lg:col-span-7 glass-panel rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-[#06B6D4] to-transparent opacity-60" />
                            
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form 
                                        key="contact-form"
                                        onSubmit={handleSubmit} 
                                        className="space-y-6"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Full Name</label>
                                            <input 
                                                required
                                                type="text" 
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full bg-[#030712]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/40 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] focus:outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Work Email</label>
                                            <input 
                                                required
                                                type="email" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full bg-[#030712]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/40 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] focus:outline-none transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-white mb-2">Project Details</label>
                                            <textarea 
                                                required
                                                rows={5} 
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                className="w-full bg-[#030712]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#94A3B8]/40 focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] focus:outline-none transition-all"
                                                placeholder="Tell us about your systems, user load, and technical bottlenecks..."
                                            ></textarea>
                                        </div>
                                        
                                        <button 
                                            disabled={loading}
                                            type="submit" 
                                            className="w-full py-4 bg-[#06B6D4] hover:bg-[#0891B2] text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 cursor-pointer outline-none"
                                        >
                                            {loading ? 'Transmitting...' : 'Send Inquiry'}
                                            <Send size={12} />
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div 
                                        key="success-message"
                                        className="py-12 text-center flex flex-col items-center justify-center"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <CheckCircle2 size={48} className="text-[#22C55E] mb-6 animate-pulse" />
                                        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Transmission Secured</h3>
                                        <p className="text-sm text-[#94A3B8] max-w-sm mb-6 leading-relaxed font-semibold">
                                            Thank you, {name}. Your inquiry has been routed to our engineering pipeline. We will follow up under 12 hours.
                                        </p>
                                        <button 
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setName('');
                                                setEmail('');
                                                setMessage('');
                                            }}
                                            className="text-xs font-bold uppercase tracking-wider text-[#06B6D4] hover:text-white transition-colors cursor-pointer outline-none"
                                        >
                                            Submit Another Inquiry
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Sidebar Info (5 cols) */}
                        <div className="lg:col-span-5 space-y-8">
                            <div className="glass-panel rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-[#7C3AED] to-transparent opacity-60" />
                                <h3 className="text-xl font-black text-white tracking-tight mb-8">Technical Desk</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#06B6D4]">
                                            <Mail size={16} />
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#94A3B8]/60">Email Channels</span>
                                            <a href="mailto:info@squadicsolutions.online" className="text-sm font-extrabold text-white hover:text-[#06B6D4] transition-colors mt-0.5">
                                                info@squadicsolutions.online
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7C3AED]">
                                            <Phone size={16} />
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#94A3B8]/60">Telemetry Center</span>
                                            <span className="text-sm font-extrabold text-white mt-0.5">
                                                040-71328183
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2563EB]">
                                            <MapPin size={16} />
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#94A3B8]/60">Headquarters</span>
                                            <span className="text-sm font-extrabold text-white mt-0.5 leading-relaxed">
                                                9JX6+GM3, Ln 1, Parvathapur,<br />
                                                Peerzadiguda, Hyderabad,<br />
                                                Telangana 500098
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
