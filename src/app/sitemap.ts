import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://squadicsolutions.online';

    // Base routes
    const routes = [
        '',
        '/about-squadicsolutions',
        '/services',
        '/contact',
        '/blog',
        '/case-studies',
        '/industries',
        '/solutions',
        // Services details
        '/services/web-development',
        '/services/ai-solutions',
        '/services/data-analytics',
        '/services/custom-software',
        '/services/automation-systems',
        '/services/cloud-engineering',
        // Case studies details
        '/case-studies/fintech-analytics-engine',
        '/case-studies/diagnostic-neural-net',
        '/case-studies/global-supply-chain-router',
        '/case-studies/erp-cluster-migration',
        // Blog details
        '/blog/why-squadicsolutions-builds-scalable-software-systems',
        '/blog/how-squadicsolutions-uses-ai-for-business-automation',
        '/blog/future-of-data-analytics-with-squadicsolutions',
    ];

    // Map routes to sitemap format
    const sitemapEntries = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    return sitemapEntries;
}
