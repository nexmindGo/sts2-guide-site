'use client';

import { useState } from 'react';
import { Database, Mail, Lock, Sword, Shield, Skull, Send, CheckCircle } from 'lucide-react';

export function ComingSoonSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate form submission - replace with actual ConvertKit integration
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');
  };

  const upcomingFeatures = [
    {
      icon: <Sword className="w-6 h-6" />,
      title: 'Complete Card Database',
      description: 'Every Necrobinder card with ratings, synergies, and tier rankings.',
      status: 'In Progress',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Relic Tier List',
      description: 'Comprehensive guide to all relics with pick recommendations.',
      status: 'Coming Soon',
    },
    {
      icon: <Skull className="w-6 h-6" />,
      title: 'Boss Strategies',
      description: 'Detailed boss mechanics and counter-strategies for each act.',
      status: 'Coming Soon',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Interactive Deck Builder',
      description: 'Build and share your own Necrobinder decks with the community.',
      status: 'Planned',
    },
  ];

  return (
    <section id="subscribe" className="py-16 md:py-24 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full mb-4">
            <Database className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">More Coming</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            More Content <span className="gradient-text">Coming Soon: Card Database & Boss Guides</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto text-lg">
            We&apos;re working hard to bring you comprehensive guides for everything 
            Slay the Spire 2 Early Access has to offer.
          </p>
        </div>

        {/* Upcoming Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {upcomingFeatures.map((feature, index) => (
            <div
              key={index}
              className="relative bg-[#1a1a1d] border border-[#333] rounded-xl p-6 opacity-75"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 text-xs bg-[#262626] text-[#a3a3a3] rounded">
                  {feature.status}
                </span>
              </div>
              
              <div className="w-12 h-12 bg-[#262626] rounded-lg flex items-center justify-center text-[#666] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#666] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#666]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Email Subscription */}
        <div className="bg-gradient-to-br from-[#1a1a1d] to-[#0d0d0d] border border-[#333] rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get the Free Strategy PDF
            </h3>
            <p className="text-[#a3a3a3] max-w-lg mx-auto">
              Subscribe to get <span className="text-green-400 font-semibold">Top 10 Necrobinder Tips PDF</span> delivered 
              instantly to your inbox. Plus, be the first to know when new guides go live.
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">You&apos;re In!</h4>
              <p className="text-[#a3a3a3] mb-4">
                Your free strategy PDF is ready!
              </p>
              <a
                href="/pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-[#121212] font-semibold rounded-lg transition-colors"
              >
                Download PDF Now
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-[#262626] border border-[#333] rounded-xl text-white placeholder-[#666] focus:outline-none focus:border-green-500 transition-colors"
                  required
                />
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow w-full py-4 bg-green-500 hover:bg-green-400 text-[#121212] font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#121212]/30 border-t-[#121212] rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Get Free PDF
                  </>
                )}
              </button>
              <p className="text-xs text-center text-[#666]">
                No spam, ever. Unsubscribe anytime. Your email is safe with us.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
