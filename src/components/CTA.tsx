import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-white/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 md:p-16 rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-semibold uppercase tracking-wider">Limited slots available</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Ready to Turn Your Website Into a <span className="text-gray-400">Sales Machine?</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Stop losing customers to a bad website. Let's build a premium online store that converts visitors into buyers.
          </p>
          
          <div className="flex justify-center">
            <button
              data-cal-link="donmartinz/website-discussion"
              data-cal-namespace="website-discussion"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors text-lg cursor-pointer"
            >
              <Calendar size={20} />
              Book a Free Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
