import { CheckCircle2, MapPin, Check, Truck, AlertTriangle } from 'lucide-react';

const MobileApp = () => {
  const features = [
    'Report waste issues in seconds with photo and GPS',
    'Receive real-time collection schedule updates',
    "View your neighbourhood's waste hotspot map",
  ];

  return (
    <section className="bg-[#EAF0EC] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-[76px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-8 items-center">
        
        {/* LEFT: Copy */}
        <div className="max-w-[540px] z-10 relative mx-auto lg:mx-0 text-left">
          {/* Label */}
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="w-1.5 h-5 bg-[#0D5C3D] rounded-full"></span>
            <span className="text-[#0D5C3D] font-bold text-[12px] sm:text-[13px] tracking-[0.15em] uppercase">
              Mobile App
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] font-extrabold text-[#0F172A] leading-[1.15] mb-4 sm:mb-5 tracking-tight">
            In Citizens' Hands. In Every Neighbourhood.
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 text-[15px] sm:text-[16px] md:text-[18px] mb-6 sm:mb-8 leading-relaxed">
            The ZuriFlux resident app puts waste awareness and reporting power
            directly in the community's hands.
          </p>

          {/* Features List */}
          <ul className="space-y-3.5 sm:space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[#10B981] shrink-0 mt-0.5"
                  size={20}
                  strokeWidth={1.5}
                />
                <span className="text-slate-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Overlapping fanned phones */}
        {/* On mobile we scale down + reduce the fan spread so nothing overflows */}
        <div className="relative flex justify-center items-center h-[340px] xs:h-[380px] sm:h-[450px] md:h-[520px] lg:h-[550px] w-full max-w-[420px] sm:max-w-none mx-auto
                        scale-[0.72] xs:scale-[0.78] sm:scale-[0.85] md:scale-90 lg:scale-100 origin-center">
          
          {/* Phone 1 — Report Issue (Left, Rotated) */}
          <div className="absolute z-10 
                          -translate-x-[72px] sm:-translate-x-[100px] md:-translate-x-[130px] lg:-translate-x-[140px] 
                          translate-y-[16px] sm:translate-y-[20px] 
                          -rotate-[12deg] sm:-rotate-[16deg] 
                          shadow-[-12px_16px_30px_rgba(0,0,0,0.12)] sm:shadow-[-20px_20px_40px_rgba(0,0,0,0.15)] 
                          rounded-[32px]">
            <PhoneFrame>
              <p className="text-[14px] font-bold text-white mb-4">Report Issue</p>
              
              <div className="mb-4">
                <p className="text-[9px] text-white/50 mb-1.5">Your location</p>
                <div className="flex items-center gap-2 bg-[#071A14] border border-white/5 rounded-md px-2.5 py-2">
                  <MapPin size={10} className="text-[#EF4444]" fill="#EF4444" />
                  <span className="text-[10px] text-white/90">Tom Mboya St, Nairobi</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-[9px] text-white/50 mb-1.5">Issue Type</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 w-full rounded-md px-2.5 py-2 bg-[#0D4F38]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#34D399] shrink-0" />
                    <span className="text-[10px] font-medium text-[#34D399]">
                      Overflowing bin
                    </span>
                  </div>
                  <div className="flex items-center gap-2 w-full px-2.5 py-1">
                    <span className="w-2.5 h-2.5 rounded-full border border-white/30 shrink-0" />
                    <span className="text-[10px] text-white/45">Illegal dumping</span>
                  </div>
                  <div className="flex items-center gap-2 w-full px-2.5 py-1">
                    <span className="w-2.5 h-2.5 rounded-full border border-white/30 shrink-0" />
                    <span className="text-[10px] text-white/45">Missed collection</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto bg-gradient-to-r from-[#0088FF] to-[#00C2FF] rounded-md py-2.5 text-center text-[11px] font-semibold text-white shadow-[0_4px_12px_rgba(0,136,255,0.3)]">
                Submit Report
              </div>
            </PhoneFrame>
          </div>

          {/* Phone 2 — Notifications (Center, Front, Straight) */}
          <div className="absolute z-30 translate-y-[-6px] sm:translate-y-[-10px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.35)] sm:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.4)] rounded-[32px]">
            <PhoneFrame>
              <p className="text-[14px] font-bold text-white mb-5">Notifications</p>

              <div className="space-y-5">
                {/* Notif 1 */}
                <div className="flex gap-2.5">
                  <div className="w-6 h-6 rounded bg-[#10B981] flex items-center justify-center shrink-0">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-0.5 gap-1">
                      <p className="text-[11px] font-semibold text-white">Issue Resolved</p>
                      <span className="text-[8px] text-white/40 shrink-0">2m ago</span>
                    </div>
                    <p className="text-[9px] text-white/50 leading-snug">
                      Your report on Zone 3B was addressed
                    </p>
                  </div>
                </div>

                {/* Notif 2 */}
                <div className="flex gap-2.5">
                  <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <Truck size={12} className="text-white/80" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-0.5 gap-1">
                      <p className="text-[11px] font-semibold text-white">Collection Scheduled</p>
                      <span className="text-[8px] text-white/40 shrink-0">1h ago</span>
                    </div>
                    <p className="text-[9px] text-white/50 leading-snug">
                      Your area: tomorrow 8–10 AM
                    </p>
                  </div>
                </div>

                {/* Notif 3 */}
                <div className="flex gap-2.5">
                  <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <AlertTriangle size={12} className="text-[#F87171]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-0.5 gap-1">
                      <p className="text-[11px] font-semibold text-white">Overflow Alert</p>
                      <span className="text-[8px] text-white/40 shrink-0">3h ago</span>
                    </div>
                    <p className="text-[9px] text-white/50 leading-snug">
                      Bin on Kenyatta Ave is full
                    </p>
                  </div>
                </div>
              </div>
            </PhoneFrame>
          </div>

          {/* Phone 3 — Map (Right, Rotated) */}
          <div className="absolute z-20 
                          translate-x-[72px] sm:translate-x-[100px] md:translate-x-[130px] lg:translate-x-[140px] 
                          translate-y-[16px] sm:translate-y-[20px] 
                          rotate-[12deg] sm:rotate-[16deg] 
                          shadow-[12px_16px_30px_rgba(0,0,0,0.12)] sm:shadow-[20px_20px_40px_rgba(0,0,0,0.15)] 
                          rounded-[32px]">
            <PhoneFrame>
              <p className="text-[14px] font-bold text-white mb-4">Waste Hotspot Map</p>

              {/* Map grid area */}
              <div className="flex-1 mt-1 rounded-xl bg-[#04120D] border border-white/5 relative overflow-hidden flex flex-col">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(#10B981 1px, transparent 1px), linear-gradient(90deg, #10B981 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                    backgroundPosition: 'center center',
                  }}
                />

                {/* Map Dots */}
                <div className="absolute top-[45%] left-[25%]">
                  <div className="w-3.5 h-3.5 bg-[#EF4444] rounded-full shadow-[0_0_15px_rgba(239,68,68,1)] animate-pulse" />
                </div>
                <div className="absolute top-[35%] right-[30%]">
                  <div className="w-3 h-3 bg-[#F59E0B] rounded-full shadow-[0_0_12px_rgba(245,158,11,1)]" />
                </div>
                <div className="absolute bottom-[25%] right-[20%]">
                  <div className="w-2.5 h-2.5 bg-[#10B981] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                </div>

                <div className="mt-auto bg-[#071A14]/80 backdrop-blur-sm border-t border-white/5 py-2 text-center text-[9px] text-white/50">
                  Central — Live View
                </div>
              </div>
            </PhoneFrame>
          </div>

        </div>
      </div>
    </section>
  );
};

/* Reusable Phone Shell — unchanged design */
function PhoneFrame({ children }) {
  return (
    <div className="w-[200px] h-[400px] bg-[#0A1F14] border-[4px] border-[#0C241C] rounded-[32px] overflow-hidden flex flex-col relative">
      {/* Top Status Bar & Notch */}
      <div className="flex justify-between items-center px-4 pt-3 pb-2 w-full relative z-20">
        <span className="text-[9px] font-medium text-white/80">9:41</span>
        
        <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[50px] h-[14px] bg-black rounded-full" />
        
        <div className="flex items-center">
          <div className="w-4 h-2 rounded-[2px] border border-white/50 relative">
             <div className="absolute left-[1px] top-[1px] bottom-[1px] w-2/3 bg-white rounded-[1px]" />
          </div>
        </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 px-4 pb-4 flex flex-col relative z-10 pt-2">
        {children}
      </div>
    </div>
  );
}

export default MobileApp;