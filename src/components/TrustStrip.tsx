import { motion } from 'motion/react';

export default function TrustStrip() {
  const metrics = [
    { label: "Conversion Boost", value: "40%+" },
    { label: "Faster Websites", value: "2x" },
    { label: "Happy Clients", value: "50+" },
    { label: "Uptime", value: "99.9%" },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-2">Trusted by</p>
            <p className="text-xl font-semibold text-gray-200">eCommerce Brands Worldwide</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-16">
            {metrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</p>
                <p className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
