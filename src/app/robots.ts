import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const domain = process.env.COZE_PROJECT_DOMAIN_DEFAULT || 'https://slaythespire2.me';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
