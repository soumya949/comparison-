import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const SplitComparison = () => {
  const geordieFeatures = [
    "Agent Discovery",
    "Behavior Monitoring",
    "Risk Intelligence",
    "Observability",
    "Posture Management"
  ];

  const openboxFeatures = [
    "Runtime Enforcement",
    "Cryptographic Verification",
    "Identity Governance",
    "Authorization Controls",
    "Policy Execution",
    "Trust Infrastructure"
  ];

  return (
    <section id="vs-geordie" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ob-navy mb-4">The Generational Shift in AI Security</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">While legacy solutions observe, OpenBox actively controls and verifies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Geordie Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="font-bold text-gray-500">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Geordie AI</h3>
                <p className="text-sm text-gray-500">Post-Action Observability</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {geordieFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600">
                  <XCircle className="w-5 h-5 text-gray-400 shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* OpenBox Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-ob-blue bg-blue-50/30 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-ob-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Winner
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-ob-navy rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 border-2 border-white/80"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-ob-navy">OpenBox AI</h3>
                <p className="text-sm text-ob-blue font-medium">Pre-Action Runtime Governance</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              {openboxFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-ob-navy">
                  <CheckCircle2 className="w-5 h-5 text-ob-blue shrink-0" />
                  <span className="font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitComparison;
