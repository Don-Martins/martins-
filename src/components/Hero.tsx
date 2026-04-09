import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-black">
      {/* Premium Grid Background - B&W */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* IMAGE ON THE LEFT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative hidden lg:block h-[600px] order-2 lg:order-1"
        >
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[450px] h-[550px] rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl">
            {!imgLoaded && <div className="absolute inset-0 bg-white/5 animate-pulse" />}
            <img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" 
              alt="Chimzaram Don-Martins" 
              className={`w-full h-full object-cover grayscale transition-opacity duration-700 ${imgLoaded ? 'opacity-80' : 'opacity-0'}`}
              onLoad={() => setImgLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* TEXT ON THE RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-gray-300">Available for new projects</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-white">
            Chimzaram <br/><span className="text-gray-500">Don-Martins.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-light">
            Web Developer & eCommerce Specialist. I design and develop premium digital storefronts engineered for maximum conversion and performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              data-cal-link="donmartinz/website-discussion"
              data-cal-namespace="website-discussion"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Free Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
