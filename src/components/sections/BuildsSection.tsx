import { Sword, Zap, Heart, Shield, Skull, Sparkles } from 'lucide-react';

interface BuildCardProps {
  title: string;
  tier: string;
  description: string;
  coreCards: string[];
  keyRelics: string[];
  playstyle: string;
  difficulty: string;
  icon: React.ReactNode;
}

function BuildCard({ title, tier, description, coreCards, keyRelics, playstyle, difficulty, icon }: BuildCardProps) {
  return (
    <div className="card-hover bg-[#1a1a1d] border border-[#333] rounded-xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400">
            {icon}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
            <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded mt-1 ${
              tier === 'S' ? 'bg-yellow-500/20 text-yellow-400' :
              tier === 'A' ? 'bg-green-500/20 text-green-400' :
              'bg-blue-500/20 text-blue-400'
            }`}>
              {tier}-Tier
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#a3a3a3] mb-6 leading-relaxed">{description}</p>

      {/* Core Cards */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Core Cards
        </h4>
        <div className="flex flex-wrap gap-2">
          {coreCards.map((card, index) => (
            <span key={index} className="px-3 py-1.5 bg-[#262626] rounded-md text-sm text-[#e5e5e5] border border-[#333]">
              {card}
            </span>
          ))}
        </div>
      </div>

      {/* Key Relics */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Key Relics
        </h4>
        <div className="flex flex-wrap gap-2">
          {keyRelics.map((relic, index) => (
            <span key={index} className="px-3 py-1.5 bg-[#262626] rounded-md text-sm text-[#a3a3a3] border border-[#333]">
              {relic}
            </span>
          ))}
        </div>
      </div>

      {/* Playstyle & Difficulty */}
      <div className="flex flex-wrap gap-4 pt-4 border-t border-[#333]">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a3a3a3]">Playstyle:</span>
          <span className="text-sm text-white">{playstyle}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#a3a3a3]">Difficulty:</span>
          <span className="text-sm text-white">{difficulty}</span>
        </div>
      </div>
    </div>
  );
}

export function BuildsSection() {
  const builds: BuildCardProps[] = [
    {
      title: 'Poison Control Deck',
      tier: 'S',
      description: 'The most powerful build in Early Access. Stack poison rapidly and watch enemies melt while you stay safe behind layers of block. Perfect for learning the Necrobinder.',
      coreCards: ['Deadly Poison', 'Catalyst', 'Burst', 'Noxious Fumes', 'Crippling Poison'],
      keyRelics: ['Snecko Skull', 'The Specimen', 'Twisted Funnel'],
      playstyle: 'Defensive / Scaling',
      difficulty: 'Easy',
      icon: <Skull className="w-6 h-6" />,
    },
    {
      title: 'Summon Swarm Build',
      tier: 'A',
      description: 'Command an army of undead minions to overwhelm your enemies. This build excels in longer fights and scales beautifully into the late game.',
      coreCards: ['Raise Dead', 'Army of One', 'Bone Swarm', 'Grave Calling'],
      keyRelics: ['Lizard Tail', 'Mummified Hand', 'Strange Spoon'],
      playstyle: 'Swarm / Scaling',
      difficulty: 'Medium',
      icon: <Zap className="w-6 h-6" />,
    },
  ];

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
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {builds.map((build, index) => (
            <BuildCard key={index} {...build} />
          ))}
        </div>

        {/* Pro Tips Banner */}
        <div className="mt-12 bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-1">Pro Tip</h3>
              <p className="text-[#a3a3a3]">
                The Poison Control Deck is the most beginner-friendly build. Start with this one to learn the Necrobinder&apos;s mechanics before experimenting with more complex strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
