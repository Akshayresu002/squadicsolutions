import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'About SquadicSolutions | Enterprise Technology Experts',
    description: 'Learn about SquadicSolutions, our engineering methodologies, and our mission to build intelligent, scalable software systems for modern businesses.',
    alternates: {
        canonical: 'https://squadicsolutions.store/about-squadicsolutions',
    },
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-24 bg-[#F3F4F6]">
                <div className="max-w-container w-full text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#111827] mb-6">
                        About <span className="text-[#4F46E5]">SquadicSolutions</span>
                    </h1>
                    <p className="text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed mb-12">
                        SquadicSolutions is a premier technology firm specializing in enterprise-grade web development, custom software engineering, AI systems, and automated data analytics. We partner with fast-growing companies to architect resilient digital solutions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
                        <div className="bg-white p-8 rounded border border-gray-200 shadow-sm">
                            <h2 className="text-xl font-bold text-[#111827] mb-4">Our Methodology</h2>
                            <p className="text-[#4B5563]">Strict CI/CD pipelines, modular monoliths, and fault-tolerant cloud architecture designed for scale.</p>
                        </div>
                        <div className="bg-white p-8 rounded border border-gray-200 shadow-sm">
                            <h2 className="text-xl font-bold text-[#111827] mb-4">Our Team</h2>
                            <p className="text-[#4B5563]">A collective of top-tier software engineers, AI researchers, and digital strategists.</p>
                        </div>
                        <div className="bg-white p-8 rounded border border-gray-200 shadow-sm">
                            <h2 className="text-xl font-bold text-[#111827] mb-4">Our Mission</h2>
                            <p className="text-[#4B5563]">To eliminate technical debt and provide robust, intelligent software that drives immediate ROI.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
