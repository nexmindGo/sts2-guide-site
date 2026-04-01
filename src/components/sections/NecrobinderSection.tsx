import { Skull, Zap, Heart, Shield, Sparkles, ArrowRight } from 'lucide-react';

export function NecrobinderSection() {
  const mechanics = [
    {
      icon: <Skull className="w-5 h-5" />,
      title: 'Soul Binding',
      description: 'Bind defeated enemies to fight for you. Each bound soul provides unique bonuses and can be sacrificed for powerful effects.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Death Energy',
      description: 'Accumulate death energy when creatures die. Spend it to amplify card effects or unlock devastating abilities.',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Undying Resolve',
      description: 'The Necrobinder can cheat death once per combat. Master the timing of this passive to survive otherwise fatal encounters.',
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Life Drain',
      description: 'Many Necrobinder cards restore HP when dealing damage. Sustain through long fights by aggressively draining enemy health.',
    },
  ];

  const statusEffects = [
    { name: 'Poison', description: 'Deals damage at the end of each turn. Stacks infinitely and cannot be blocked.' },
    { name: 'Soulbound', description: 'When this enemy dies, a soul fragment is added to your collection.' },
    { name: 'Decaying', description: 'Enemy loses Strength each turn. Great for weakening bosses over time.' },
    { name: 'Undead', description: 'Minions fight on your side. They block and attack automatically each turn.' },
  ];

  const starterTips = [
    'Pick card draw options early - the Necrobinder needs to find key combo pieces',
    'Prioritize block cards in the first act - survival is more important than damage',
    'Look for poison synergy cards in shops - they scale extremely well',
    'Don&apos;t ignore basic attacks - you need consistent damage while building your engine',
  ];

  return (
    <section id="necrobinder" className="py-16 md:py-24 px-4 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full mb-4">
            <Skull className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">New Class</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            The <span className="gradient-text">Necrobinder</span> Guide
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto text-lg">
            Master Slay the Spire 2&apos;s newest class. The Necrobinder commands the dead, 
            poisons enemies, and cheats death itself. Learn the mechanics that make this class unique.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Class Overview */}
          <div className="bg-[#1a1a1d] border border-[#333] rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Skull className="w-5 h-5 text-green-400" />
              </div>
              Class Overview
            </h3>
            <p className="text-[#a3a3a3] mb-6 leading-relaxed">
              The Necrobinder is a master of death and decay. This class excels at long, 
              grinding fights where poison and summon mechanics can reach their full potential. 
              Unlike the Ironclad or Silent, the Necrobinder relies on building up powerful 
              synergies rather than burst damage.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#262626] rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-green-400">Poison</div>
                <div className="text-xs text-[#a3a3a3] mt-1">Primary Damage</div>
              </div>
              <div className="bg-[#262626] rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-green-400">Summons</div>
                <div className="text-xs text-[#a3a3a3] mt-1">Secondary Mechanic</div>
              </div>
              <div className="bg-[#262626] rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-green-400">Medium</div>
                <div className="text-xs text-[#a3a3a3] mt-1">Difficulty</div>
              </div>
              <div className="bg-[#262626] rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-green-400">Scaling</div>
                <div className="text-xs text-[#a3a3a3] mt-1">Playstyle</div>
              </div>
            </div>
          </div>

          {/* Core Mechanics */}
          <div className="bg-[#1a1a1d] border border-[#333] rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-green-400" />
              </div>
              Core Mechanics
            </h3>
            <div className="space-y-4">
              {mechanics.map((mechanic, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-[#262626] rounded-lg flex items-center justify-center text-green-400 flex-shrink-0">
                    {mechanic.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{mechanic.title}</h4>
                    <p className="text-sm text-[#a3a3a3]">{mechanic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Effects & Starter Tips */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Status Effects */}
          <div className="bg-[#1a1a1d] border border-[#333] rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Unique Status Effects</h3>
            <div className="space-y-3">
              {statusEffects.map((effect, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-[#262626] rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-green-400">{effect.name}</span>
                    <span className="text-[#a3a3a3]"> - {effect.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Starter Tips */}
          <div className="bg-[#1a1a1d] border border-[#333] rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Starting Card Picks</h3>
            <div className="space-y-3">
              {starterTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500/20 rounded flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-green-400" />
                  </div>
                  <p className="text-[#a3a3a3]">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
