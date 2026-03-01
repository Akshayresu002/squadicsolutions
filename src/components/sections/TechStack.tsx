'use client';

import { motion } from 'framer-motion';

const techCategories = [
    {
        label: 'Frontend',
        items: [
            { name: 'React', color: '#61DAFB' },
            { name: 'Next.js', color: '#000000' },
            { name: 'TypeScript', color: '#3178C6' },
            { name: 'Tailwind CSS', color: '#06B6D4' },
        ],
    },
    {
        label: 'Backend',
        items: [
            { name: 'Node.js', color: '#339933' },
            { name: 'Express', color: '#000000' },
            { name: 'Python', color: '#3776AB' },
        ],
    },
    {
        label: 'Database',
        items: [
            { name: 'PostgreSQL', color: '#4169E1' },
            { name: 'MongoDB', color: '#47A248' },
        ],
    },
    {
        label: 'Cloud & DevOps',
        items: [
            { name: 'AWS', color: '#FF9900' },
            { name: 'Vercel', color: '#000000' },
            { name: 'Docker', color: '#2496ED' },
        ],
    },
    {
        label: 'Data & AI',
        items: [
            { name: 'OpenAI', color: '#10A37F' },
            { name: 'TensorFlow', color: '#FF6F00' },
            { name: 'Power BI', color: '#F2C811' },
        ],
    },
];

export default function TechStack() {
    return (
        <section className="section-padding relative overflow-hidden bg-[#F8FAFC]" id="tech-stack">
            {/* Background Soft Mesh for Depth */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full mix-blend-multiply blur-[120px]"
                    style={{ background: 'radial-gradient(circle, #E0E7FF, transparent 70%)' }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 text-[#EC4899] text-xs font-bold uppercase tracking-widest mb-6">
                        Future Wall
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] mb-6 tracking-tight">
                        The <span className="gradient-text">Architecture</span><br /> Behind the Magic.
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-[#6B7280] font-medium">
                        We leverage industry-leading, enterprise-grade technologies to build robust, scalable solutions.
                    </p>
                </div>

                {/* Floating Space Wall */}
                <div className="relative w-full min-h-[600px] rounded-[48px] bg-white border border-gray-100 shadow-[0_20px_80px_rgba(99,102,241,0.05)] overflow-hidden flex flex-wrap content-center justify-center p-8 md:p-16 gap-8">

                    {techCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.label}
                            className="flex flex-col items-center bg-[#F8FAFC] rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                // Add subtle continuous floating motion
                                y: 0
                            }}
                            animate={{
                                y: [0, Math.random() * -15 - 5, 0]
                            }}
                            // @ts-ignore - Framer motion type issue with transition inside animate block vs prop
                            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
                        >
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#9CA3AF]">
                                {category.label}
                            </h3>

                            <div className="flex flex-wrap justify-center gap-4">
                                {category.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default"
                                    >
                                        {/* Abstract representation of the tech via colored glowing dot */}
                                        <div
                                            className="w-4 h-4 rounded-full transition-all duration-300 group-hover:scale-150"
                                            style={{
                                                background: item.color,
                                                boxShadow: `0 0 15px ${item.color}80, inset 0 0 5px rgba(255,255,255,0.8)`,
                                            }}
                                        />

                                        {/* Tooltip on hover */}
                                        <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1.5 rounded-lg bg-[#111827] text-white text-xs font-bold shadow-lg pointer-events-none whitespace-nowrap z-20">
                                            {item.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Decorative floating blurred orbs within the container */}
                    <motion.div
                        className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-[#6366F1] mix-blend-multiply opacity-5 blur-[40px]"
                        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className="absolute bottom-[20%] right-[10%] w-40 h-40 rounded-full bg-[#EC4899] mix-blend-multiply opacity-5 blur-[50px]"
                        animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>
            </div>
        </section>
    );
}
