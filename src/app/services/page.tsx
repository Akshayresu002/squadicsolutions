import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Enterprise Software Services | SquadicSolutions',
    description: 'Explore SquadicSolutions core capabilities including Web Development, Custom Software Engineering, AI Solutions, Data Analytics, and Cloud Infrastructure.',
    alternates: {
        canonical: 'https://squadicsolutions.store/services',
    },
};

export default function ServicesPage() {
    const services = [
        { title: 'Web Development', slug: 'web-development' },
        { title: 'Custom Software', slug: 'custom-software' },
        { title: 'AI Solutions', slug: 'ai-solutions' },
        { title: 'Data Analytics', slug: 'data-analytics' },
        { title: 'Automation Systems', slug: 'automation-systems' },
        { title: 'Cloud Engineering', slug: 'cloud-engineering' },
    ];

    return (
        <>
            <Navbar />
            <main className="flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-24 bg-[#E5E7EB]">
                <div className="max-w-container w-full text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#111827] mb-6">
                        Core <span className="text-[#4F46E5]">Capabilities</span>
                    </h1>
                    <p className="text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed mb-16">
                        SquadicSolutions delivers full-stack engineering excellence tailored for B2B scale and absolute technical resilience.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s) => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="bg-white p-8 rounded border border-gray-200 hover:border-[#4F46E5] shadow-sm hover:shadow-md transition-all text-left group">
                                <h2 className="text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#4F46E5]">{s.title}</h2>
                                <span className="text-sm font-semibold text-[#4F46E5]">Learn more &rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
