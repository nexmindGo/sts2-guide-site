import { AlertTriangle, Lightbulb, Zap, X, CheckCircle } from 'lucide-react';

export function TipsSection() {
  const tips = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: 'Campfire Strategy Changed',
      description: 'In STS2, resting at campfires is often better than upgrading early cards. The Necrobinder needs HP to survive long scaling fights.',
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: 'Avoid These Trap Cards',
      description: 'Soul Harvest looks tempting but costs too much energy for its effect early on. Skip it until you have energy relics.',
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Energy Management is Key',
      description: 'The Necrobinder has fewer energy generation options than other classes. Prioritize energy relics and avoid expensive cards.',
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Embrace the Long Game',
      description: 'Unlike Ironclad&apos;s burst damage, the Necrobinder wins through attrition. Don&apos;t panic if fights take longer.',
    },
  ];

  const mistakes = [
    {
      mistake: 'Ignoring Block Cards',
      correction: 'The Necrobinder takes more damage early. Always draft at least 3-4 block cards in Act 1.',
    },
    {
      mistake: 'Over-investing in Summons',
      correction: 'Summons are powerful but slow. Balance your deck with immediate damage and block.',
    },
    {
      mistake: 'Skipping Card Rewards',
      correction: 'You need synergy pieces. Take even mediocre cards that support your chosen archetype.',
    },
    {
      mistake: 'Resting Instead of Smithing',
      correction: 'Later in the run, upgrading key cards (like Catalyst) is often worth the HP risk.',
    },
  ];

  return (
    <section id="tips" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full mb-4">
            <Lightbulb className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Quick Tips</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How to <span className="gradient-text">Master Necrobinder:</span> Beginner Tips & Common Mistakes
          </h2>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto text-lg">
            New to Slay the Spire 2? These quick tips will help you avoid common pitfalls 
            and get the most out of your Early Access experience.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="card-hover bg-[#1a1a1d] border border-[#333] rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 flex-shrink-0">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tip.title}</h3>
                  <p className="text-[#a3a3a3]">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Common Mistakes */}
        <div className="bg-[#0d0d0d] border border-[#333] rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <X className="w-6 h-6 text-red-400" />
            Common Mistakes to Avoid
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {mistakes.map((item, index) => (
              <div key={index} className="bg-[#1a1a1d] rounded-lg p-4 border border-[#333]">
                <div className="flex items-center gap-2 mb-2">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="text-[#a3a3a3] line-through">{item.mistake}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-white">{item.correction}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-[#a3a3a3] mb-4">Want the complete guide?</p>
          <a
            href="#subscribe"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-[#121212] font-semibold rounded-lg transition-all duration-200"
          >
            Get Free Strategy PDF
          </a>
        </div>
      </div>
    </section>
  );
}
