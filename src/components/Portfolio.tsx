import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Luxe Fashion Store",
      result: "+45% Online Sales",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
      category: "eCommerce"
    },
    {
      title: "TechGadgets Pro",
      result: "2x Faster Checkout",
      image: "https://images.unsplash.com/photo-1531297172867-4f401364def6?auto=format&fit=crop&q=80&w=1000",
      category: "Electronics"
    },
    {
      title: "Organic Beauty",
      result: "+60% Mobile Conversion",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000",
      category: "Health & Beauty"
    },
    {
      title: "Minimalist Home",
      result: "3x Return on Ad Spend",
      image: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=1000",
      category: "Home Decor"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Real results for real businesses. See how a conversion-focused approach transforms online stores.
            </p>
          </div>
          <a href="#portfolio" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium">
            View all projects <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const [loaded, setLoaded] = useState(false);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 border border-white/10 bg-[#111]">
                  {!loaded && <div className="absolute inset-0 bg-white/5 animate-pulse z-0" />}
                  
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    className={`w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 ${loaded ? 'block' : 'hidden'}`}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold mb-2">{project.result}</p>
                      <a href="#" className="inline-flex items-center gap-2 text-gray-300 font-medium hover:text-white transition-colors">
                        View Case Study <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.category}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
