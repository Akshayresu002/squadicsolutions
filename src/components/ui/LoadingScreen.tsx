'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center"
                    style={{ background: '#0B0F19' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    {/* Background gradient blobs */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
                            style={{ background: 'radial-gradient(circle, #3B82F6, transparent 70%)' }}
                        />
                    </div>

                    {/* Logo */}
                    <motion.div
                        className="relative flex flex-col items-center gap-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        {/* Animated logo mark */}
                        <motion.div
                            className="relative w-16 h-16"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        >
                            <div
                                className="absolute inset-0 rounded-xl"
                                style={{
                                    background: 'linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)',
                                }}
                            />
                            <div
                                className="absolute inset-[3px] rounded-[10px]"
                                style={{ background: '#0B0F19' }}
                            />
                            <motion.div
                                className="absolute inset-[6px] rounded-lg"
                                style={{
                                    background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                                }}
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        {/* Company name */}
                        <motion.span
                            className="text-xl font-bold tracking-wider"
                            style={{ color: '#E5E7EB' }}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            SQUADICSOLUTIONS
                        </motion.span>

                        {/* Loading bar */}
                        <div className="w-48 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                            <motion.div
                                className="h-full rounded-full"
                                style={{ background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)' }}
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
