import { motion } from 'framer-motion';
import { GitBranch, Layers, Workflow, Boxes, Cpu, Activity } from 'lucide-react';

type Item = { 
  name: string; 
  icon: React.ComponentType<{ className?: string }>; 
  iconColor: string;
};

const Frameworks = () => {
  const frameworks: Item[] = [
    { name: 'LangGraph', icon: GitBranch, iconColor: 'text-indigo-600' },
    { name: 'LangChain', icon: Layers, iconColor: 'text-blue-600' },
    { name: 'CrewAI', icon: Workflow, iconColor: 'text-emerald-600' },
    { name: 'n8n', icon: Boxes, iconColor: 'text-rose-500' },
    { name: 'Mastra', icon: Cpu, iconColor: 'text-amber-500' },
    { name: 'Temporal', icon: Activity, iconColor: 'text-violet-600' },
  ];

  return (
    <section id="platform-integrations" className="py-24 bg-white border-y border-gray-100/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">FRAMEWORK NATIVE</p>
          <h2 className="text-3xl md:text-4.5xl font-extrabold text-[#0B192C] tracking-tight max-w-2xl mx-auto leading-tight">
            Works with the stacks your teams already ship
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 md:gap-6">
          {frameworks.map((fw, idx) => {
            const Icon = fw.icon;
            return (
              <motion.div
                key={fw.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center justify-center p-6 bg-[#FCFDFE]/80 border border-slate-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] hover:border-slate-200/60 hover:bg-white transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center mb-4 bg-slate-50/50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <Icon className={`w-5 h-5 ${fw.iconColor} opacity-90 group-hover:opacity-100 transition-opacity`} />
                </div>
                <span className="text-sm font-semibold text-slate-700 tracking-wide group-hover:text-slate-950 transition-colors">
                  {fw.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Frameworks;
