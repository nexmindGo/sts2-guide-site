import { Metadata } from 'next';
import { Skull, Zap, Shield, Heart, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 10 Necrobinder Tips | Free Strategy PDF | Slay the Spire 2 Guide',
  description: 'Download our free Necrobinder strategy guide! Master poison synergy, block priority, campfire strategy, and more essential tips for Slay the Spire 2 Early Access.',
  openGraph: {
    title: 'Top 10 Necrobinder Tips | Free Strategy PDF',
    description: 'Download our free Necrobinder strategy guide! Master poison synergy, block priority, campfire strategy, and more essential tips for Slay the Spire 2 Early Access.',
    url: 'https://slaythespire2.me/pdf',
    type: 'article',
  },
  twitter: {
    card: 'summary',
    title: 'Top 10 Necrobinder Tips | Free Strategy PDF',
    description: 'Download our free Necrobinder strategy guide for Slay the Spire 2 Early Access.',
  },
};

export default function PDFPage() {
  const tips = [
    {
      title: 'Master Poison Synergy',
      description: 'Poison is your primary damage source. Stack Catalyst and Deadly Poison for massive damage over time.',
    },
    {
      title: 'Prioritize Block Early',
      description: 'The Necrobinder takes more damage in Act 1. Draft at least 3-4 block cards to survive.',
    },
    {
      title: 'Campfire Strategy',
      description: 'Rest more often than Smith in early acts. HP is precious for the Necrobinder\'s scaling playstyle.',
    },
    {
      title: 'Energy Relics Are Gold',
      description: 'With fewer energy generation options, any relic that gives +1 energy is top priority.',
    },
    {
      title: 'Soul Binding Timing',
      description: 'Don\'t waste soul binds on weak enemies. Save them for elites and bosses for maximum value.',
    },
    {
      title: 'Card Draw Is Critical',
      description: 'Your deck needs to find combo pieces. Prioritize card draw options in shops and rewards.',
    },
    {
      title: 'Embrace Attrition',
      description: 'Unlike other classes, you win through long fights. Don\'t panic if battles take longer.',
    },
    {
      title: 'Avoid Trap Cards',
      description: 'Soul Harvest and expensive summons look tempting but can brick your hand early.',
    },
    {
      title: 'Relic Synergies',
      description: 'Snecko Skull, The Specimen, and Twisted Funnel are game-changers for poison builds.',
    },
    {
      title: 'Practice Makes Perfect',
      description: 'The Necrobinder has a high skill ceiling. Don\'t get discouraged by early losses.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 print:bg-white">
      {/* Print Header */}
      <div className="hidden print:block text-center py-8 border-b-2 border-gray-200 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Top 10 Necrobinder Tips</h1>
        <p className="text-gray-600 mt-2">Slay the Spire 2 Early Access Strategy Guide</p>
        <p className="text-sm text-gray-400 mt-1">slaythespire2.me</p>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12 print:py-0">
        {/* Non-print header */}
        <div className="print:hidden mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
            <Skull className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-medium">Free Strategy Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top 10 Necrobinder Tips
          </h1>
          <p className="text-gray-600 text-lg">
            Master the Necrobinder class in Slay the Spire 2 Early Access
          </p>
          <button
            onClick={() => window.print()}
            className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors"
          >
            Print / Save as PDF
          </button>
        </div>

        {/* Tips Grid */}
        <div className="grid gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl print:bg-gray-50 print:border print:border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 print:bg-green-100">
                <span className="text-xl font-bold text-green-600">{index + 1}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h2>
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center print:mt-8">
          <p className="text-gray-500 text-sm">
            Get more builds and strategies at <span className="font-semibold">slaythespire2.me</span>
          </p>
          <p className="text-gray-400 text-xs mt-2">
            © 2024 Slay the Spire 2 Guide. Not affiliated with MegaCrit.
          </p>
        </div>
      </div>
    </div>
  );
}
