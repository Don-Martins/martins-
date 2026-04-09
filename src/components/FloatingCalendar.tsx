import { Calendar } from 'lucide-react';

export default function FloatingCalendar() {
  return (
    <button
      data-cal-link="donmartinz/website-discussion"
      data-cal-namespace="website-discussion"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white hover:bg-gray-200 text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1 group cursor-pointer"
      aria-label="Book a Call on Cal.com"
    >
      <Calendar size={24} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-black text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Book a Call
      </span>
    </button>
  );
}
