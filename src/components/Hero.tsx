import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Ban, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="platform" className="relative pt-20 pb-32 overflow-hidden scroll-mt-24 bg-white">
      {/* Background Subtleties */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none z-0 opacity-60 mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] pointer-events-none z-0 opacity-60 mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Aggressive Ad Copy */}
          <div className="lg:col-span-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-6 tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              COMPARING AI PLATFORMS
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C2333] tracking-tight leading-[1.1] mb-6 font-mono"
            >
              Goodbye Geordie AI Blind Spots.<br />
              <span className="text-[#0084FF]">Hello OpenBox.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-medium"
            >
              Enterprise-grade AI Trust, available to everyone. Stop relying on Geordie's post-action visibility. OpenBox enforces identity, authorization, policy, and risk <strong className="text-[#1C2333]">before</strong> every agent action.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10"
            >
              <button className="w-full sm:w-auto px-8 py-3.5 bg-[#0084FF] hover:bg-[#0073E6] text-white font-bold text-sm md:text-base rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Start For Free
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-[#1C2333] font-bold text-sm md:text-base rounded-full transition-all flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Book a Demo
              </button>
            </motion.div>

            {/* Verification badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              <div className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                No usage limits
              </div>
              <div className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                No credit card
              </div>
              <div className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                Regulatory compliance
              </div>
            </motion.div>
          </div>

          {/* Right Column: High Contrast Dashboard Mockup */}
          <div className="lg:col-span-6 relative flex justify-center mt-12 lg:mt-0">
            {/* Main Dashboard Card (Dark for contrast, matching screenshots) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-[520px] rounded-2xl border border-slate-800 bg-[#141C2B] p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden text-left"
            >
              {/* Subtle top glare */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>

              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-300 tracking-wider">OPENBOX PLATFORM</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                </div>
              </div>

              {/* Live Steps / Event Stream */}
              <div className="space-y-3 mb-6">
                {/* Step 1 */}
                <div className="flex items-center justify-between bg-slate-800/40 border border-slate-700/50 py-3 px-4 rounded-xl">
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#10B981]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Identity Verified</div>
                      <div className="text-[11px] text-slate-400 font-mono">agent://orchestrator-7</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#10B981]">PASS</div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center justify-between bg-slate-800/40 border border-slate-700/50 py-3 px-4 rounded-xl">
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0084FF]">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Policy Evaluated</div>
                      <div className="text-[11px] text-slate-400 font-mono">rule: data_residency_eu</div>
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#0084FF]">ENFORCED</div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center justify-between bg-rose-500/10 border border-rose-500/20 py-3 px-4 rounded-xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-rose-500/10 to-transparent"></div>
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                      <Ban className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-rose-400">Geordie.ai Equivalent: FAILED</div>
                      <div className="text-[11px] text-rose-300/70 font-mono mt-0.5">Post-action visibility too late. Exfiltration blocked.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Footer */}
              <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  100% Pre-Action Coverage
                </div>
                <div className="text-xs font-mono text-slate-500">
                  LATENCY <span className="text-white font-bold">3.4ms</span>
                </div>
              </div>
              
              {/* Floating "Trust Score" Badge matching screenshot 1 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-8 bg-gradient-to-r from-[#0062CC] to-[#0084FF] px-5 py-4 rounded-xl shadow-xl z-20"
              >
                <div className="flex items-center justify-between mb-2 gap-4">
                  <div className="text-sm text-white font-bold">Agentic Trust Score</div>
                  <div className="bg-[#10B981] text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                    ↑ 38%
                  </div>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#10B981] h-full w-[99%]"></div>
                </div>
                <div className="text-right text-xs text-white/80 mt-1 font-mono font-bold">99%</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
