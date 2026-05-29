import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-ob-navy z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-ob-navy via-slate-900 to-ob-blue/20 z-0"></div>
      
      {/* Abstract Glowing shapes */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ob-blue rounded-full mix-blend-screen filter blur-[128px] opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
        >
          Don't Just Watch AI Agents. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Govern Them.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
        >
          Upgrade your AI security posture from passive observability to proactive runtime enforcement today.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-ob-blue hover:bg-blue-600 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-ob-blue/25 hover:shadow-ob-blue/40 hover:-translate-y-0.5">
            Start Free
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-xl font-semibold text-lg backdrop-blur-sm transition-all hover:-translate-y-0.5">
            Book Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
