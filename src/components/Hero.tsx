import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Key, FileCode, Ban, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="platform" className="relative pt-36 pb-32 overflow-hidden scroll-mt-24 bg-[#040C1A]">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[130px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-semibold mb-6 tracking-wide backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D8B4] animate-pulse"></span>
              Enterprise AI Governance • Runtime
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.1] mb-6"
            >
              OpenBox AI <span className="text-slate-400 font-medium text-2xl sm:text-3xl mx-1 select-none">vs</span><br /> Geordie AI
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold leading-snug mb-6 text-white"
            >
              Runtime Governance Beats <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#00D8B4]">Post-Action Visibility.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed"
            >
              OpenBox verifies identity, enforces authorization, applies policy, and creates cryptographic proof <strong className="text-white font-semibold border-b border-white/20">before</strong> AI actions occur.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-row gap-4 items-center mb-10"
            >
              <button className="px-6 py-3 bg-white hover:bg-slate-100 text-[#050D1A] font-bold text-sm rounded-full transition-all shadow-lg hover:scale-[1.02] flex items-center gap-1.5">
                Start Free <span className="font-mono text-sm">→</span>
              </button>
              <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm rounded-full backdrop-blur-sm transition-all hover:scale-[1.02]">
                Book Demo
              </button>
            </motion.div>

            {/* Verification badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-3 pt-5 border-t border-white/5"
            >
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                <svg className="w-4 h-4 text-[#00D8B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                SOC 2 Type II
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                <svg className="w-4 h-4 text-[#00D8B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                ISO 27001
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                <svg className="w-4 h-4 text-[#00D8B4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                EU AI Act ready
              </div>
            </motion.div>
          </div>

          {/* Right Column: Live Dashboard */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Latency Floating Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -top-6 right-2 sm:-right-4 bg-[#0A1624]/95 border border-white/10 px-3.5 py-2 rounded-2xl shadow-xl z-20 flex items-center gap-2.5 backdrop-blur-md"
            >
              <div className="w-6 h-6 rounded-full border-2 border-dashed border-[#00D8B4] animate-spin flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#00D8B4]" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider leading-none">Latency</div>
                <div className="text-xs font-mono font-bold text-white leading-none mt-1">3.4ms</div>
              </div>
            </motion.div>

            {/* Agents Online Floating Widget */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-4 -left-2 sm:-left-6 bg-[#0A1624]/95 border border-white/10 px-3.5 py-2.5 rounded-2xl shadow-xl z-20 flex items-center gap-2.5 backdrop-blur-md"
            >
              <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/25">
                <Users className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider leading-none">Agents online</div>
                <div className="text-xs font-mono font-bold text-white leading-none mt-1">1,204</div>
              </div>
            </motion.div>

            {/* Main Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[490px] rounded-2xl border border-white/10 bg-[#0B1528]/85 backdrop-blur-xl p-6 shadow-2xl relative overflow-hidden text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-[11px] font-bold text-emerald-400 tracking-wider">OPENBOX RUNTIME • LIVE</span>
                </div>
                <div className="text-white/40 text-[10px] font-semibold font-mono">v4.2.1</div>
              </div>

              {/* Stats Panel */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#101F33]/40 border border-white/5 rounded-xl px-4 py-3 text-left">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wide mb-1">VERIFIED</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-400 leading-tight">12,847</div>
                </div>
                
                <div className="bg-[#101F33]/40 border border-white/5 rounded-xl px-4 py-3 text-left">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wide mb-1">BLOCKED</div>
                  <div className="text-lg sm:text-xl font-bold text-rose-500 leading-tight">318</div>
                </div>

                <div className="bg-[#101F33]/40 border border-white/5 rounded-xl px-4 py-3 text-left">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wide mb-1">POLICIES</div>
                  <div className="text-lg sm:text-xl font-bold text-cyan-400 leading-tight">94</div>
                </div>
              </div>

              {/* Live Steps / Event Stream */}
              <div className="space-y-2.5 mb-5">
                {/* Step 1 */}
                <div className="flex items-center justify-between bg-[#101F33]/30 border border-white/[0.03] hover:border-white/5 py-2.5 px-3 rounded-xl transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Identity verified</div>
                      <div className="text-[10px] text-slate-400 font-mono">agent://orchestrator-7</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">0.40s</div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center justify-between bg-[#101F33]/30 border border-white/[0.03] hover:border-white/5 py-2.5 px-3 rounded-xl transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Key className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Authorization granted</div>
                      <div className="text-[10px] text-slate-400 font-mono">scope: payments.read</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">0.47s</div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center justify-between bg-[#101F33]/30 border border-white/[0.03] hover:border-white/5 py-2.5 px-3 rounded-xl transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Activity className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Policy enforced</div>
                      <div className="text-[10px] text-slate-400 font-mono">rule: data_residency_eu</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">0.54s</div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center justify-between bg-[#101F33]/30 border border-white/[0.03] hover:border-white/5 py-2.5 px-3 rounded-xl transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <FileCode className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Cryptographic proof</div>
                      <div className="text-[10px] text-slate-400 font-mono">0x8f...c4d2 - signed</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">0.61s</div>
                </div>

                {/* Step 5 */}
                <div className="flex items-center justify-between bg-[#101F33]/30 border border-rose-500/10 py-2.5 px-3 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                      <Ban className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-rose-400">Action blocked</div>
                      <div className="text-[10px] text-slate-400 font-mono">missing scope: pii.write</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">0.68s</div>
                </div>
              </div>

              {/* Progress Footer */}
              <div className="pt-3.5 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tamper-proof audit chain • 100% coverage
                </div>
                <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden shrink-0">
                  <div className="h-full bg-emerald-400 rounded-full w-4/5 animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
