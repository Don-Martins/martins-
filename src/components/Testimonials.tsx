import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Chimzaram completely transformed our online store. Our conversion rate jumped by 45% in the first month alone. The site is incredibly fast and looks premium.",
      name: "Sarah Jenkins",
      role: "Founder, Luxe Fashion",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "The best investment we've made for our business. He understood exactly what we needed and delivered a website that actually brings in sales daily.",
      name: "David Chen",
      role: "CEO, TechGadgets Pro",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Professional, fast, and highly skilled. The new checkout flow he designed has been a game-changer for our customer experience and closing sales.",
      name: "Amanda Cole",
      role: "Owner, Organic Beauty",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Client Success</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take my word for it. Here's what business owners have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] flex flex-col justify-between hover:border-white/30 transition-colors"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-white text-white" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
