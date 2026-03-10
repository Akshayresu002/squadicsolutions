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
        '/services/web-development',
        '/services/ai-solutions',
        '/services/data-analytics',
        '/services/custom-software',
        '/services/automation-systems',
        '/services/cloud-engineering',
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
