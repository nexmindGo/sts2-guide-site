import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top 10 Necrobinder Tips | Free Strategy PDF | Slay the Spire 2 Guide',
  description: 'Download our free Necrobinder strategy guide! Master poison synergy, block priority, campfire strategy, and more essential tips for Slay the Spire 2 Early Access.',
};

export default function PDFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
