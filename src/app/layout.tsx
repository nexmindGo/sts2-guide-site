import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Builds & Tier List | Necrobinder Guide',
  description: 'Updated daily! Find the best Slay the Spire 2 builds, Necrobinder starter decks, and Early Access tier lists. Get your free strategy PDF now.',
  keywords: [
    'Slay the Spire 2',
    'STS2',
    'Necrobinder',
    'builds',
    'tier list',
    'deck guide',
    'Early Access',
    'strategy',
    'tips',
    'best decks',
  ],
  authors: [{ name: 'Slay the Spire 2 Guide' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Slay the Spire 2 Builds & Tier List | Necrobinder Guide',
    description: 'Updated daily! Find the best Slay the Spire 2 builds, Necrobinder starter decks, and Early Access tier lists. Get your free strategy PDF now.',
    url: 'https://slaythespire2.me',
    siteName: 'Slay the Spire 2 Guide',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Slay the Spire 2 Builds & Tier List | Necrobinder Guide',
    description: 'Updated daily! Find the best Slay the Spire 2 builds, Necrobinder starter decks, and Early Access tier lists.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://slaythespire2.me',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="antialiased bg-[#121212] text-[#f5f5f5]">
        <JsonLd />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
