import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We start with a deep dive into your business via Cal.com. I analyze your current metrics, identify conversion bottlenecks, and map out a custom blueprint for your new store.",
      tag: "1-2 Days"
    },
    {
      number: "02",
      title: "UX & UI Design",
      description: "I craft a premium, high-converting design system. Every button, layout, and interaction is strategically placed to guide your visitors toward the checkout page.",
      tag: "1 Week"
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "Your design is brought to life with lightning-fast code. I integrate your payment gateways, optimize for SEO, and ensure flawless performance across all mobile devices.",
      tag: "1-2 Weeks"
    },
    {
      number: "04",
      title: "Launch & Scale",
      description: "After rigorous testing, we go live. I provide a smooth handover, ensuring you know exactly how to manage your new revenue-generating machine.",
      tag: "Ongoing"
    }
  ];

  return (
    <section id="process" className="py-32 relative bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">The Process.</h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
                  A streamlined, transparent workflow designed to get your premium store live and generating revenue without the usual agency headaches.
                </p>
                <button
                  data-cal-link="donmartinz/website-discussion"
                  data-cal-namespace="website-discussion"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black text-white font-medium transition-colors cursor-pointer"
                >
                  Start Your Project
                </button>
              </motion.div>
            </div>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 md:p-10 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:bg-[#111] transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold text-white group-hover:bg-white group-hover:text-black transition-colors">
                    {step.number}
                  </div>
                  <span className="px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-gray-400 bg-white/5 self-start sm:self-auto">
                    {step.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
