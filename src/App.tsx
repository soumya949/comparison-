import Hero from './components/Hero';
import SplitComparison from './components/SplitComparison';
import FeatureTable from './components/FeatureTable';
import CameraVsLock from './components/CameraVsLock';
import TrustLifecycle from './components/TrustLifecycle';
import CisoReasons from './components/CisoReasons';
import Frameworks from './components/Frameworks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-ob-bg text-ob-text font-inter selection:bg-ob-blue selection:text-white overflow-x-hidden scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 mt-4">
        <nav className="max-w-6xl mx-auto rounded-full border border-white/10 bg-[#0F1E33]/60 backdrop-blur-xl px-6 py-2.5 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight text-white">OpenBox<span className="text-blue-400">.ai</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a href="#platform" className="hover:text-white transition-colors">Comparison</a>
            <a href="#solutions" className="hover:text-white transition-colors">Lifecycle</a>
            <a href="#resources" className="hover:text-white transition-colors">Why CISOs</a>
            <a href="#platform-integrations" className="hover:text-white transition-colors">Integrations</a>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-xs font-semibold text-slate-300 hover:text-white transition-colors bg-transparent border-0 cursor-pointer">
              Book demo
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]">
              Start free <span className="font-mono text-sm">→</span>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <Hero />
        <SplitComparison />
        <TrustLifecycle />
        <CameraVsLock />
        <FeatureTable />
        <CisoReasons />
        <Frameworks />
        <CTA />
      </main>
      
      <footer className="bg-ob-navy text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-ob-navy"></div>
            </div>
            <span className="font-bold text-lg tracking-tight">OpenBox AI</span>
          </div>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            Enterprise AI governance, trust, verification, and runtime control.
          </p>
          <div className="text-white/40 text-xs">
            © {new Date().getFullYear()} OpenBox AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
