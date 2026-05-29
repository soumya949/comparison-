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
      {/* Top Banner */}
      <div className="w-full bg-[#1C2333] text-white text-xs sm:text-sm font-medium text-center py-2.5 px-4 z-[60] relative">
        OpenBox AI and Mastra Bring Built-In Runtime Governance to TypeScript Agents. <a href="#" className="underline font-bold hover:text-blue-300">Read More</a>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tight text-[#1C2333]">
              open<span className="font-extrabold">Box</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#platform" className="hover:text-ob-blue transition-colors flex items-center gap-1">Features <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></a>
            <a href="#solutions" className="hover:text-ob-blue transition-colors flex items-center gap-1">Solutions <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></a>
            <a href="#resources" className="hover:text-ob-blue transition-colors flex items-center gap-1">Resources <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></a>
            <a href="#docs" className="hover:text-ob-blue transition-colors">Docs</a>
            <a href="#pricing" className="hover:text-ob-blue transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-semibold text-[#1C2333] hover:text-ob-blue transition-colors bg-transparent border-0 cursor-pointer mr-2">
              Book a Demo
            </button>
            <button className="hidden sm:block border border-ob-blue text-ob-blue hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-semibold transition-all">
              Sign In
            </button>
            <button className="bg-[#0084FF] hover:bg-[#0073E6] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Start For Free
            </button>
          </div>
        </nav>
      </header>

      <main>
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
