export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#000]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            Don<span className="text-gray-500">Martins</span>
          </a>
          <p className="text-gray-500 text-sm mt-2">
            Helping eCommerce brands grow online.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
            Dribbble
          </a>
        </div>
      </div>
    </footer>
  );
}
