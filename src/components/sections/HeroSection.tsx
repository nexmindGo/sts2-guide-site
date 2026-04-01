import { ArrowDown, Sword, Scroll, Skull } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1d] border border-[#333] rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-[#a3a3a3]">Early Access • Updated Daily</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Slay the Spire 2</span>
          <br />
          <span className="gradient-text">Ultimate Early Access Guide</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#a3a3a3] max-w-2xl mx-auto mb-10 leading-relaxed">
          Master the <span className="text-green-400 font-semibold">Necrobinder</span> with our battle-tested builds, 
          discover the most powerful decks, and dominate the spire in Early Access.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#builds"
            className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-[#121212] font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-green-500/25"
          >
            <Sword className="w-5 h-5" />
            View Best Builds
          </a>
          <a
            href="#necrobinder"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#262626] hover:bg-[#333] text-white font-semibold rounded-lg border border-[#333] transition-all duration-200"
          >
            <Scroll className="w-5 h-5" />
            Necrobinder Guide
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          <div className="bg-[#1a1a1d] border border-[#333] rounded-lg p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-400">5+</div>
            <div className="text-sm text-[#a3a3a3] mt-1">Meta Builds</div>
          </div>
          <div className="bg-[#1a1a1d] border border-[#333] rounded-lg p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-400">1</div>
            <div className="text-sm text-[#a3a3a3] mt-1">New Class</div>
          </div>
          <div className="bg-[#1a1a1d] border border-[#333] rounded-lg p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-400">50+</div>
            <div className="text-sm text-[#a3a3a3] mt-1">New Cards</div>
          </div>
          <div className="bg-[#1a1a1d] border border-[#333] rounded-lg p-4 text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-400">Daily</div>
            <div className="text-sm text-[#a3a3a3] mt-1">Updates</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a3a3a3]">
        <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
