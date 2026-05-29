import { Check, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureTable = () => {
  const capabilities = [
    { name: "Agent Discovery", geordie: true, ob: true },
    { name: "Agent Visibility", geordie: true, ob: true },
    { name: "Behavior Monitoring", geordie: true, ob: true },
    { name: "Risk Intelligence", geordie: true, ob: true },
    { name: "Runtime Governance", geordie: false, ob: true },
    { name: "Runtime Enforcement", geordie: false, ob: true },
    { name: "Identity Verification", geordie: false, ob: true },
    { name: "Decentralized Identity", geordie: false, ob: true },
    { name: "Authorization Controls", geordie: false, ob: true },
    { name: "Cryptographic Verification", geordie: false, ob: true },
    { name: "Tamper-Proof Audit Trails", geordie: false, ob: true },
    { name: "Policy Execution Layer", geordie: false, ob: true },
    { name: "Compliance Evidence", geordie: false, ob: true },
    { name: "Trust Infrastructure", geordie: false, ob: true },
    { name: "Framework Integrations", geordie: true, ob: true },
  ];

  return (
    <section className="py-24 bg-ob-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ob-navy mb-4">Platform Capabilities</h2>
          <p className="text-gray-600">See exactly why OpenBox is the trusted choice for enterprise.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 bg-gray-50 border-b border-gray-200 text-gray-900 font-bold text-lg w-1/2">
                    Feature
                  </th>
                  <th className="p-6 bg-gray-50 border-b border-gray-200 text-center w-1/4">
                    <span className="text-gray-600 font-bold text-lg">Geordie AI</span>
                  </th>
                  <th className="p-6 bg-blue-50/50 border-b border-blue-100 text-center w-1/4 relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-ob-blue"></div>
                    <span className="text-ob-navy font-bold text-lg">OpenBox AI</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {capabilities.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 text-gray-700 font-medium">
                      {item.name}
                    </td>
                    <td className="p-6 text-center">
                      {item.geordie ? (
                        <Check className="w-5 h-5 text-gray-400 mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="p-6 text-center bg-blue-50/10 border-l border-r border-blue-50/50">
                      {item.ob ? (
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                          <Check className="w-5 h-5 text-ob-blue" />
                        </div>
                      ) : (
                        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureTable;
