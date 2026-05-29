import { motion } from 'framer-motion';
import { Video, Lock, ShieldAlert, ShieldCheck } from 'lucide-react';

const CameraVsLock = () => {
  return (
    <section id="resources" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-ob-navy mb-6">Security Camera vs Door Lock</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitoring tells you when you've been breached. Governance prevents the breach entirely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Geordie Card */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="bg-gray-50 rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-gray-200"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 text-gray-400">
                <Video className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Geordie AI</h3>
                <p className="text-gray-500 font-medium">The Security Camera</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Observe</h4>
                  <p className="text-sm text-gray-500">Watches AI agents interact with your systems post-deployment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Alert</h4>
                  <p className="text-sm text-gray-500">Notifies security teams when anomalous behavior is detected.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Log</h4>
                  <p className="text-sm text-gray-500">Records actions that have already taken place for forensic analysis.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 text-red-500 font-medium">
                <ShieldAlert className="w-5 h-5" />
                <span>Damage is already done by the time you are alerted.</span>
              </div>
            </div>
          </motion.div>

          {/* OpenBox Card */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-ob-navy rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-2xl shadow-ob-navy/20"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-ob-blue/20 blur-[100px] rounded-full"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-16 h-16 bg-ob-blue rounded-2xl flex items-center justify-center shadow-lg shadow-ob-blue/30 text-white">
                <Lock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">OpenBox AI</h3>
                <p className="text-ob-blue font-medium">The Door Lock</p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-ob-blue mt-2 shrink-0 shadow-[0_0_8px_#1188FF]"></div>
                <div>
                  <h4 className="font-bold text-white">Verify</h4>
                  <p className="text-sm text-slate-300">Cryptographically authenticates the agent's identity before access.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-ob-blue mt-2 shrink-0 shadow-[0_0_8px_#1188FF]"></div>
                <div>
                  <h4 className="font-bold text-white">Authorize</h4>
                  <p className="text-sm text-slate-300">Checks permissions and intent against enterprise policies.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-ob-blue mt-2 shrink-0 shadow-[0_0_8px_#1188FF]"></div>
                <div>
                  <h4 className="font-bold text-white">Enforce</h4>
                  <p className="text-sm text-slate-300">Blocks unauthorized actions proactively at runtime.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-ob-green mt-2 shrink-0 shadow-[0_0_8px_#3AD17D]"></div>
                <div>
                  <h4 className="font-bold text-white">Prove</h4>
                  <p className="text-sm text-slate-300">Generates tamper-proof evidence of every verified action.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-3 text-ob-green font-medium">
                <ShieldCheck className="w-5 h-5" />
                <span>Malicious actions are mathematically blocked.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CameraVsLock;
