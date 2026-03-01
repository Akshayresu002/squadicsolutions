import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
    title: 'Contact SquadicSolutions | Start a Project',
    description: 'Get in touch with SquadicSolutions to discuss your structural web development, custom AI software, or enterprise data analytics needs.',
    alternates: {
        canonical: 'https://squadicsolutions.store/contact',
    },
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-24 bg-[#F3F4F6]">
                <div className="max-w-container w-full text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#111827] mb-6">
                        Contact <span className="text-[#4F46E5]">SquadicSolutions</span>
                    </h1>
                    <p className="text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed mb-12">
                        Ready to scale your architecture? Reach out to our engineering directors to schedule a technical discovery session.
                    </p>

                    <div className="max-w-lg mx-auto bg-white p-8 rounded border border-gray-200 shadow-sm text-left">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-1">Full Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#4F46E5] focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-1">Work Email</label>
                                <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#4F46E5] focus:outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#111827] mb-1">Project Details</label>
                                <textarea rows={4} className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-[#4F46E5] focus:outline-none"></textarea>
                            </div>
                            <button type="button" className="w-full py-3 bg-[#4F46E5] text-white font-bold rounded hover:bg-[#4338CA] transition-colors">
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
