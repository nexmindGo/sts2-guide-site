import { Skull, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-[#333]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Skull className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-xl font-bold text-white">STS2 Guide</span>
            </div>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              Your go-to resource for Slay the Spire 2 Early Access guides, 
              builds, and strategies. Updated daily.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#builds" className="text-[#a3a3a3] hover:text-green-400 transition-colors text-sm">
                  Best Builds
                </a>
              </li>
              <li>
                <a href="#necrobinder" className="text-[#a3a3a3] hover:text-green-400 transition-colors text-sm">
                  Necrobinder Guide
                </a>
              </li>
              <li>
                <a href="#tips" className="text-[#a3a3a3] hover:text-green-400 transition-colors text-sm">
                  Beginner Tips
                </a>
              </li>
              <li>
                <a href="#subscribe" className="text-[#a3a3a3] hover:text-green-400 transition-colors text-sm">
                  Free Strategy PDF
                </a>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Official Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://store.steampowered.com/app/2830210/Slay_the_Spire_2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a3a3a3] hover:text-green-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  Steam Store
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/slaythespire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a3a3a3] hover:text-green-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  Reddit Community
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/slaythespire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a3a3a3] hover:text-green-400 transition-colors text-sm inline-flex items-center gap-1"
                >
                  Discord Server
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#333] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666] text-sm">
            © {new Date().getFullYear()} Slay the Spire 2 Guide. Not affiliated with MegaCrit.
          </p>
          <p className="text-[#666] text-sm">
            Made with <span className="text-green-400">♥</span> for the STS community
          </p>
        </div>
      </div>
    </footer>
  );
}
