const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#0D2B1F] via-[#0A1F14] to-[#091A10] text-white pt-20 pb-16 lg:pt-[100px] lg:pb-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[76px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-6 flex flex-col items-start gap-5 sm:gap-6 lg:pr-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#051B14] border border-[#06B6D4]/30 text-[#06B6D4] text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span>
            SMART WASTE MANAGEMENT • LIVE
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.08] sm:leading-[1.05] text-white">
            Cities That Work. <br className="hidden xs:block" />
            <span className="text-[#10B981]">Waste</span> That <br className="hidden sm:block" />
            Doesn't.
          </h1>

          <p className="text-slate-400 text-[15px] sm:text-base lg:text-[17px] max-w-[480px] leading-[1.6] font-normal">
            ZuriFlux transforms urban waste management with real-time IoT monitoring, 
            predictive analytics, and citizen engagement, turning reactive collection 
            into proactive city intelligence.
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <button className="bg-[#0088FF] hover:bg-[#0076DF] text-white font-medium text-[15px] px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(0,136,255,0.3)] w-full xs:w-auto text-center">
              Request a Demo
            </button>
            <button className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-medium text-[15px] px-8 py-3.5 rounded-full transition-all w-full xs:w-auto">
              See How It Works ↓
            </button>
          </div>

          <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] lg:text-xs text-slate-500 font-medium tracking-wide">
            <span>12 Cities Onboarded</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span>99.4% Uptime</span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span>ISO 27001 Certified</span>
          </div>
        </div>

        {/* RIGHT COLUMN - Dashboard */}
        <div className="lg:col-span-6 relative mt-8 sm:mt-12 lg:mt-0 w-full max-w-[620px] mx-auto lg:ml-auto px-2 sm:px-0">
          
          {/* Floating Bins Monitored Badge — safer position on mobile */}
          <div className="absolute -top-6 left-2 sm:-top-10 sm:-left-8 lg:-left-12 bg-[#0C1E17] border border-white/10 rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 shadow-2xl z-30 flex flex-col justify-center scale-90 sm:scale-100 origin-top-left">
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium mb-0.5 sm:mb-1">Bins Monitored</div>
            <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 leading-none">
              2,847 <span className="text-[#10B981] text-[13px] sm:text-[14px]">↑</span>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-[#0A2218] border border-white/5 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] relative z-10 w-full">
            
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6">
              <div className="inline-flex items-center gap-1.5 bg-[#0D3830] border border-[#14B8A6]/20 text-[#2DD4BF] text-[11px] sm:text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit">
                Collection Route Optimized <span className="text-sm leading-none ml-1">✓</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-white tracking-wide">ZuriFlux Live</span>
                <div className="flex items-center gap-1.5 text-[10px] text-[#06B6D4] font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4]"></span>
                  LIVE
                </div>
              </div>
            </div>

            {/* CHART AREA */}
            <div className="w-full bg-[#081A13] rounded-xl sm:rounded-2xl border border-white/5 relative overflow-hidden mb-3 pt-5 sm:pt-6 pb-3 sm:pb-4 px-1 sm:px-2">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-6 sm:py-8 px-3 sm:px-4">
                <div className="w-full border-t border-dashed border-white/10"></div>
                <div className="w-full border-t border-dashed border-white/10"></div>
                <div className="w-full border-t border-dashed border-white/10"></div>
                <div className="w-full border-t border-dashed border-white/10"></div>
              </div>

              <svg 
                className="w-full h-[120px] sm:h-[140px] relative z-10" 
                viewBox="0 0 400 140" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M40 75 L110 45 L180 85 L260 35 L340 95"
                  stroke="#22D3EE"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="40" cy="75" r="5" fill="#22D3EE" />
                <circle cx="110" cy="45" r="5" fill="#4ADE80" />
                <circle cx="180" cy="85" r="5" fill="#FBBF24" />
                <circle cx="260" cy="35" r="5" fill="#4ADE80" />
                <circle cx="340" cy="95" r="5" fill="#F87171" />
                <circle cx="200" cy="25" r="4.5" fill="#F87171" />
                <circle cx="130" cy="100" r="4" fill="#4ADE80" />
                <circle cx="290" cy="70" r="4" fill="#4ADE80" />
              </svg>
            </div>

            <div className="text-[10px] sm:text-[11px] text-slate-500 mb-5 sm:mb-6 font-medium tracking-wide px-1">
              Lagos Metropolitan — Zone View
            </div>

            {/* Zone Bars */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
              {[
                { name: "Zone A", color: "bg-[#10B981]", height: "h-[38%]" },
                { name: "Zone B", color: "bg-[#F59E0B]", height: "h-[75%]" },
                { name: "Zone C", color: "bg-[#EF4444]", height: "h-[90%]" },
                { name: "Zone D", color: "bg-[#059669]", height: "h-[30%]" },
                { name: "Zone E", color: "bg-[#3B82F6]", height: "h-[60%]" },
              ].map((zone) => (
                <div key={zone.name} className="flex flex-col gap-1.5 sm:gap-2">
                  <div className="h-[40px] sm:h-[48px] bg-[#122E23] rounded-md sm:rounded-lg relative overflow-hidden">
                    <div className={`absolute bottom-0 w-full ${zone.height} ${zone.color}`}></div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-center text-slate-500 font-medium">{zone.name}</span>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <div className="bg-[#0C271C] p-3 sm:p-4 rounded-xl border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-white mb-0.5 sm:mb-1">2,847</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400">Bins Active</div>
              </div>
              <div className="bg-[#0C271C] p-3 sm:p-4 rounded-xl border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-amber-400 mb-0.5 sm:mb-1">3</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400">Alerts</div>
              </div>
              <div className="bg-[#0C271C] p-3 sm:p-4 rounded-xl border border-white/5">
                <div className="text-lg sm:text-xl font-bold text-white mb-0.5 sm:mb-1">99.4%</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Overflow Alert Badge — safer on mobile */}
          <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 lg:-right-8 bg-[#181C15] border border-amber-500/30 rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3.5 shadow-2xl z-30 flex flex-col gap-0.5 sm:gap-1 scale-90 sm:scale-100 origin-bottom-right">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="text-amber-400 text-[11px] sm:text-xs font-bold tracking-wide">Overflow Alert</span>
            </div>
            <div className="text-slate-300 text-[10px] sm:text-[11px] pl-3.5">
              Zone 4B — 3 bins critical
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;