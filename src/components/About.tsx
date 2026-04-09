import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm Chimzaram Don-Martins, a Web Developer specializing in eCommerce. I bridge the gap between aesthetics and performance, building digital storefronts that don't just look premium—they convert.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              With a deep understanding of user experience and modern web technologies, I help brands elevate their online presence, reduce bounce rates, and ultimately drive more sales.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold text-xl mb-2">Focus</h4>
                <ul className="text-gray-500 space-y-2">
                  <li>eCommerce Development</li>
                  <li>Conversion Rate Optimization</li>
                  <li>Performance Tuning</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">Stack</h4>
                <ul className="text-gray-500 space-y-2">
                  <li>React / Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Shopify / Custom APIs</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-[#111]"
          >
            <div className="absolute inset-0 bg-white/5 animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=800" 
              alt="Chimzaram Don-Martins" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                target.previousElementSibling?.classList.add('hidden');
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
