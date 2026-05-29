import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F2F7FA] to-[#E5F1F8] py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Social Column */}
          <div className="md:col-span-4 lg:col-span-5">
            <a href="https://www.openbox.ai" className="flex items-center gap-2 mb-4 hover:opacity-90 transition-opacity w-fit">
              {/* Logo SVG matching the brand */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1C2333]">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold text-3xl tracking-tight text-[#1C2333]">
                open<span className="font-extrabold">Box</span>
              </span>
            </a>
            <p className="text-sm font-medium text-slate-600 mb-8">
              Goodbye AI Blind Spots. Hello Trust.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-500 hover:text-[#0084FF] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-[#0084FF] transition-colors">
                {/* Discord Icon (Custom since Lucide doesn't have official Discord) */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-[#0084FF] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Features Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[13px] font-bold text-slate-800 mb-5">Features</h4>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Cryptographic Verifiability</a></li>
              <li><a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Decentralized Identity for Agents</a></li>
              <li><a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Protocol-Aware Runtime Governance</a></li>
              <li><a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Modular Architecture</a></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-[13px] font-bold text-slate-800 mb-5">Solutions</h4>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Trust</a></li>
              <li><a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="text-[13px] font-bold text-slate-800 mb-5">Resources</h4>
            <ul className="space-y-3.5">
              <li><a href="https://docs.openbox.ai" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Docs</a></li>
              <li><a href="https://github.com/openbox-ai" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">GitHub</a></li>
              <li><a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-[13px] font-bold text-slate-800 mb-5">Company</h4>
            <ul className="space-y-3.5">
              <li><a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">About</a></li>
              <li><a href="https://www.openbox.ai/pricing" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Pricing</a></li>
            </ul>
          </div>

        </div>

        {/* Compliance Badges (right-aligned like official site) */}
        <div className="mb-12 flex md:justify-end">
          <div className="text-right">
            <h4 className="text-[13px] font-bold text-slate-800 mb-5">Compliance</h4>
            <div className="flex flex-wrap justify-end gap-3">
              {['EU AI ACT', 'UAE COMPLIANT', 'MAS COMPLIANT', 'NIST COMPLIANT', 'ISO 42001', 'ISO 27001', 'SDAIA COMPLIANT'].map((badge) => (
                <div key={badge} className="w-12 h-12 rounded-full border-2 border-[#1C2333] flex items-center justify-center relative overflow-hidden group">
                   {/* Internal jagged border effect simulated via SVG */}
                   <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#1C2333] opacity-80 p-1">
                      <polygon points="50,2 60,10 73,8 80,18 92,20 95,32 100,42 95,53 98,65 88,72 85,84 73,88 65,98 52,95 40,100 30,90 18,92 12,80 0,75 5,63 0,50 8,40 5,28 15,20 25,10 38,12" fill="none" stroke="currentColor" strokeWidth="4"/>
                   </svg>
                   <span className="text-[6px] font-bold text-[#1C2333] leading-none text-center px-1 z-10">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-slate-300 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[13px] font-medium text-slate-600">
            © {new Date().getFullYear()} OpenBox AI. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Terms</a>
            <a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Privacy</a>
            <a href="#" className="text-[13px] font-bold text-[#3B4D68] hover:text-[#0084FF] transition-colors">Cookies Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
