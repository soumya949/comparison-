import { motion } from 'framer-motion';
import { ShieldCheck, Fingerprint, FileBadge, Scale } from 'lucide-react';

const CisoReasons = () => {
  const cards = [
    {
      title: "Runtime Enforcement",
      description: "Stop unauthorized actions before they happen, not after. Math-backed guarantees instead of reactive alerts.",
      icon: ShieldCheck,
      color: "bg-blue-500",
      light: "bg-blue-50"
    },
    {
      title: "Agent Identity",
      description: "Every agent gets a cryptographically secure identity. No spoofing, no unauthorized impersonation.",
      icon: Fingerprint,
      color: "bg-indigo-500",
      light: "bg-indigo-50"
    },
    {
      title: "Cryptographic Evidence",
      description: "Tamper-proof audit trails for every decision and action. Provable trust for internal and external auditors.",
      icon: FileBadge,
      color: "bg-emerald-500",
      light: "bg-emerald-50"
    },
    {
      title: "Regulatory Compliance",
      description: "Built-in controls to map AI actions directly to major compliance frameworks and enterprise policies.",
      icon: Scale,
      color: "bg-slate-700",
      light: "bg-slate-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-ob-navy mb-6">Why CISOs Choose OpenBox</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the tools necessary to say "yes" to enterprise AI adoption.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl shadow-gray-200/40 hover:-translate-y-1 transition-transform group"
            >
              <div className={`w-14 h-14 rounded-xl ${card.light} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <card.icon className={`w-7 h-7 ${card.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CisoReasons;
