export default function JsonLd() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Slay the Spire 2 Guide',
    url: 'https://slaythespire2.me',
    description: 'Your go-to resource for Slay the Spire 2 Early Access guides, builds, and strategies.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://slaythespire2.me/?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Slay the Spire 2 Guide',
    url: 'https://slaythespire2.me',
    logo: 'https://slaythespire2.me/logo.png',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([websiteSchema, organizationSchema]),
      }}
    />
  );
}
