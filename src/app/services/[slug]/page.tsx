import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const servicesData = {
    'web-development': {
        title: 'Enterprise Web Development Services',
        desc: 'SquadicSolutions engineers high-performance web applications designed for B2B scale, massive user concurrency, and absolute security.',
    },
    'custom-software': {
        title: 'Custom Software Engineering',
        desc: 'Bespoke architectural solutions by SquadicSolutions to solve your most complex operational challenges.',
    },
    'ai-solutions': {
        title: 'Artificial Intelligence Systems',
        desc: 'Integrate SquadicSolutions predictive models and machine learning workflows into your enterprise.',
    },
    'data-analytics': {
        title: 'Advanced Data Analytics',
        desc: 'Transform raw telemetry into structured, real-time business intelligence with SquadicSolutions data pipelines.',
    },
    'automation-systems': {
        title: 'Enterprise Automation Systems',
        desc: 'SquadicSolutions hyper-automation techniques eliminate manual workflows and maximize ROI.',
    },
    'cloud-engineering': {
        title: 'Resilient Cloud Engineering',
        desc: 'Deploy fault-tolerant scale with SquadicSolutions cloud-native architectures.',
    }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = servicesData[params.slug as keyof typeof servicesData];
    if (!service) return { title: 'Service Not Found | SquadicSolutions' };
    return {
        title: `${service.title} | SquadicSolutions`,
        description: service.desc,
        alternates: {
            canonical: `https://squadicsolutions.store/services/${params.slug}`,
        },
    };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = servicesData[params.slug as keyof typeof servicesData];

    if (!service) notFound();

    return (
        <>
            <Navbar />
            <main className="flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-24 bg-[#E5E7EB]">
                <div className="max-w-container w-full text-center">
                    <span className="inline-block px-4 py-1.5 rounded bg-[#111827] text-white text-xs font-bold uppercase mb-6">Service Area</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#111827] mb-6">
                        {service.title} by <span className="text-[#4F46E5]">SquadicSolutions</span>
                    </h1>
                    <p className="text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed mb-12">
                        {service.desc} We utilize precision engineering to deliver robust systems that outperform competitors and scale seamlessly.
                    </p>

                    <div className="mt-8">
                        <Link href="/contact" className="px-8 py-4 bg-[#4F46E5] text-white text-base font-bold rounded hover:bg-[#4338CA] transition-colors inline-block">
                            Discuss This Service with our Engineers
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
