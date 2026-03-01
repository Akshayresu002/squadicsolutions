import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog | SquadicSolutions Engineering Insights',
    description: 'Read the latest technical insights, AI strategies, and engineering methodologies from the team at SquadicSolutions.',
    alternates: {
        canonical: 'https://squadicsolutions.store/blog',
    },
};

export default function BlogIndex() {
    const posts = [
        {
            slug: 'why-squadicsolutions-builds-scalable-software-systems',
            title: 'Why SquadicSolutions Builds Scalable Software Systems',
            excerpt: 'Discover the core architectural principles that allow SquadicSolutions to deliver high-performance enterprise applications without technical debt.',
            date: 'March 1, 2026'
        },
        {
            slug: 'how-squadicsolutions-uses-ai-for-business-automation',
            title: 'How SquadicSolutions Uses AI for Business Automation',
            excerpt: 'Learn how we implement predictive models and intelligent workflows to streamline operations and maximize ROI for our enterprise partners.',
            date: 'February 25, 2026'
        },
        {
            slug: 'future-of-data-analytics-with-squadicsolutions',
            title: 'The Future of Data Analytics with SquadicSolutions',
            excerpt: 'An inside look at how SquadicSolutions builds interactive, low-latency data pipelines that transform raw telemetry into actionable business intelligence.',
            date: 'February 18, 2026'
        }
    ];

    return (
        <>
            <Navbar />
            <main className="flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-24 bg-[#E5E7EB]">
                <div className="max-w-container w-full">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#111827] mb-4">
                            Engineering <span className="text-[#4F46E5]">Insights</span>
                        </h1>
                        <p className="text-xl text-[#4B5563] max-w-2xl mx-auto">
                            Technical articles, architectural teardowns, and strategic thinking from SquadicSolutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="bg-white p-8 rounded border border-gray-200 hover:border-[#4F46E5] shadow-sm flex flex-col group transition-all">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#4B5563] mb-3 block">{post.date}</span>
                                <h2 className="text-2xl font-bold text-[#111827] mb-4 group-hover:text-[#4F46E5]">{post.title}</h2>
                                <p className="text-[#4B5563] leading-relaxed flex-grow mb-6">{post.excerpt}</p>
                                <span className="text-sm font-bold text-[#4F46E5]">Read Article &rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
