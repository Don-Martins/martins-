import { motion } from 'motion/react';
import { ShoppingCart, LayoutTemplate, RefreshCw, Search, CreditCard } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ShoppingCart size={24} />,
      title: "eCommerce Website Design",
      description: "Custom-built online stores optimized for sales, speed, and seamless user experience."
    },
    {
      icon: <LayoutTemplate size={24} />,
      title: "High-Converting Landing Pages",
      description: "Targeted pages designed specifically to turn ad traffic into paying customers."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Website Redesign",
      description: "Transform your outdated site into a modern, revenue-generating machine."
    },
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Technical and on-page SEO to ensure your store ranks high and attracts organic traffic."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Integration",
      description: "Secure, frictionless checkout experiences with local and international gateways."
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">My Expertise</h2>
              <p className="text-gray-400 text-lg mb-8">
                Everything you need to establish a powerful online presence and scale your eCommerce business.
              </p>
              <button
                data-cal-link="donmartinz/website-discussion"
                data-cal-namespace="website-discussion"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-semibold transition-colors cursor-pointer"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex flex-col gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] hover:bg-[#111] hover:border-white/30 transition-all group flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-black group-hover:bg-white transition-colors shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
