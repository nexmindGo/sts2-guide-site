'use client';

import { Sword, Zap, Heart, Shield, Skull, Sparkles, ChevronDown, ChevronUp, CheckCircle, XCircle } from 'lucide-react';
import { builds, Build } from '@/data/builds';
import { useState } from 'react';

const iconMap = {
  skull: Skull,
  zap: Zap,
  heart: Heart,
  shield: Shield,
  sword: Sword,
};

function BuildCard({ build }: { build: Build }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[build.icon];

  return (
    <div className="card-hover bg-[#1a1a1d] border border-[#333] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">{build.title}</h3>
              <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded mt-1 ${
                build.tier === 'S' ? 'bg-yellow-500/20 text-yellow-400' :
                build.tier === 'A' ? 'bg-green-500/20 text-green-400' :
                build.tier === 'B' ? 'bg-blue-500/20 text-blue-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {build.tier}-Tier
              </span>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <div className="text-xs text-[#a3a3a3]">Difficulty</div>
            <div className={`text-sm font-medium ${
              build.difficulty === 'Easy' ? 'text-green-400' :
              build.difficulty === 'Medium' ? 'text-yellow-400' :
              'text-red-400'
            }`}>
              {build.difficulty}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#a3a3a3] mb-6 leading-relaxed">{build.description}</p>

        {/* Core Cards */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Core Cards ({build.coreCards.length})
          </h4>
          <div className="grid gap-2">
            {build.coreCards.map((card, index) => (
              <div key={index} className="bg-[#262626] rounded-lg p-3 border border-[#333]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-white">{card.name}</span>
                </div>
                <p className="text-xs text-[#a3a3a3] mb-1">{card.effect}</p>
                <p className="text-xs text-green-400">💡 {card.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Relics */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Key Relics ({build.keyRelics.length})
          </h4>
          <div className="flex flex-wrap gap-2">
            {build.keyRelics.map((relic, index) => (
              <div key={index} className="group relative">
                <span className="px-3 py-1.5 bg-[#262626] rounded-md text-sm text-[#a3a3a3] border border-[#333] cursor-help">
                  {relic.name}
                </span>
                <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-[#333] rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  {relic.effect}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Playstyle */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-[#333]">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#a3a3a3]">Playstyle:</span>
            <span className="text-sm text-white">{build.playstyle}</span>
          </div>
          <div className="flex items-center gap-2 sm:hidden">
            <span className="text-xs text-[#a3a3a3]">Difficulty:</span>
            <span className={`text-sm ${
              build.difficulty === 'Easy' ? 'text-green-400' :
              build.difficulty === 'Medium' ? 'text-yellow-400' :
              'text-red-400'
            }`}>{build.difficulty}</span>
          </div>
        </div>

        {/* Expandable Details */}
        {(build.tips || build.pros || build.cons) && (
          <div className="mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm text-[#a3a3a3] hover:text-green-400 transition-colors"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Hide Details
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show Tips & Analysis
                </>
              )}
            </button>

            {isExpanded && (
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                {/* Tips */}
                {build.tips && build.tips.length > 0 && (
                  <div className="bg-[#0d0d0d] rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-green-400 mb-2">💡 Tips</h5>
                    <ul className="space-y-2">
                      {build.tips.map((tip, index) => (
                        <li key={index} className="text-xs text-[#a3a3a3]">• {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pros */}
                {build.pros && build.pros.length > 0 && (
                  <div className="bg-[#0d0d0d] rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-green-400 mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Pros
                    </h5>
                    <ul className="space-y-2">
                      {build.pros.map((pro, index) => (
                        <li key={index} className="text-xs text-[#a3a3a3]">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Cons */}
                {build.cons && build.cons.length > 0 && (
                  <div className="bg-[#0d0d0d] rounded-lg p-4">
                    <h5 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> Cons
                    </h5>
                    <ul className="space-y-2">
                      {build.cons.map((con, index) => (
                        <li key={index} className="text-xs text-[#a3a3a3]">• {con}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function BuildsSection() {
  return (
    <section id="builds" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full mb-4">
            <Sword className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Best Builds</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Necrobinder <span className="gradient-text">Meta Builds</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto text-lg">
            Battle-tested deck archetypes for the Necrobinder class. 
            These builds are optimized for Early Access content and will carry you through the spire.
          </p>
        </div>

        {/* Build Cards */}
        <div className="grid gap-6 md:gap-8">
          {builds.map((build) => (
            <BuildCard key={build.id} build={build} />
          ))}
        </div>

        {/* Call for Contributions */}
        <div className="mt-12 text-center">
          <p className="text-[#a3a3a3] text-sm">
            Have a build that works well? 
            <a href="mailto:contact@slaythespire2.me" className="text-green-400 hover:underline ml-1">
              Share it with us!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
