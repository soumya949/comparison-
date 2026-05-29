import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const TrustLifecycle = () => {
  const stages = [
    { title: "Observe" },
    { title: "Understand" },
    { title: "Control" },
    { title: "Verify" },
    { title: "Trust" },
  ];

  return (
    <section id="solutions" className="py-28 bg-[#040C1A] relative overflow-hidden scroll-mt-24 border-y border-white/5">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3">BEYOND AGENT SECURITY</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5">The full trust lifecycle</h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Monitoring is step two of five. Without the others, you're guessing.
          </p>
        </div>

        {/* Horizontal Timelines Container */}
        <div className="space-y-16 max-w-5xl mx-auto overflow-x-auto pb-4 scrollbar-none">
          
          {/* Row 1: Geordie AI */}
          <div className="min-w-[768px] sm:min-w-0">
            {/* Headers */}
            <div className="flex justify-between items-end mb-6 px-4">
              <div>
                <h3 className="text-sm font-bold text-slate-300 tracking-wider">Geordie AI</h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-500 font-mono">stops at "control"</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative flex items-center justify-between px-10">
              {/* Background gray line */}
              <div className="absolute left-10 right-10 h-0.5 bg-slate-800 z-0"></div>
              
              {/* Active gray progress line (Observe to Control is 50% length) */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute left-10 h-0.5 bg-slate-500 z-0"
              />

              {stages.map((stage, idx) => {
                const isActive = idx <= 2; // Geordie stops at Control (index 2)
                return (
                  <div key={`g-${idx}`} className="relative flex flex-col items-center z-10">
                    {/* Circle Node */}
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-lg
                        ${isActive 
                          ? 'border-slate-500 bg-[#0E1B2E] text-slate-300 shadow-slate-500/5' 
                          : 'border-slate-800 bg-[#06101E] text-slate-600'}`}
                    >
                      {isActive ? (
                        <Check className="w-4 h-4 text-slate-300" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-slate-600" />
                      )}
                    </motion.div>
                    
                    {/* Title */}
                    <span className={`text-xs font-semibold mt-3 whitespace-nowrap transition-colors duration-300
                      ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                      {stage.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2: OpenBox AI */}
          <div className="min-w-[768px] sm:min-w-0 pt-4">
            {/* Headers */}
            <div className="flex justify-between items-end mb-6 px-4">
              <div>
                <h3 className="text-sm font-bold text-blue-400 tracking-wider">OpenBox AI</h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400 font-mono tracking-wide">100% lifecycle coverage</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative flex items-center justify-between px-10">
              {/* Background line */}
              <div className="absolute left-10 right-10 h-0.5 bg-slate-800 z-0"></div>
              
              {/* Active green/blue progress line (Spans 100%) */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                className="absolute left-10 right-10 h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.3)] z-0"
              />

              {stages.map((stage, idx) => {
                // OpenBox covers all stages
                return (
                  <div key={`ob-${idx}`} className="relative flex flex-col items-center z-10">
                    {/* Circle Node */}
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-full border-2 border-blue-500 bg-[#0F223A] text-white flex items-center justify-center shadow-lg shadow-blue-500/10 hover:border-blue-400 transition-colors"
                    >
                      <Check className="w-4 h-4 text-blue-400" />
                    </motion.div>
                    
                    {/* Title */}
                    <span className="text-xs font-bold mt-3 whitespace-nowrap text-slate-200">
                      {stage.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustLifecycle;
