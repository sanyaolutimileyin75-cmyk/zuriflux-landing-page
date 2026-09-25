const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#0D2B1F] via-[#0A1F14] to-[#091A10] text-white pt-20 pb-16 lg:pt-[100px] lg:pb-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[76px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6 lg:pr-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#051B14] border border-[#06B6D4]/30 text-[#06B6D4] text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"></span>
            SMART WASTE MANAGEMENT • LIVE
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.05] text-white">
            Cities That Work. <br />
            <span className="text-[#10B981]">Waste</span> That <br />
            Doesn't.
          </h1>

          <p className="text-slate-400 text-base lg:text-[17px] max-w-[480px] leading-[1.6] font-normal">
            ZuriFlux transforms urban waste management with real-time IoT monitoring, 
            predictive analytics, and citizen engagement, turning reactive collection 
            into proactive city intelligence.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#0088FF] hover:bg-[#0076DF] text-white font-medium text-[15px] px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(0,136,255,0.3)]">
              Request a Demo
            </button>
            <button className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white font-medium text-[15px] px-8 py-3.5 rounded-full transition-all">
              See How It Works ↓
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center gap-3 text-[11px] lg:text-xs text-slate-500 font-medium tracking-wide">
            <span>12 Cities Onboarded</span>
            <span className="text-slate-600">|</span>
            <span>99.4% Uptime</span>
            <span className="text-slate-600">|</span>
            <span>ISO 27001 Certified</span>
          </div>
        </div>

        {/* RIGHT COLUMN - Dashboard */}
        <div className="lg:col-span-6 relative mt-12 lg:mt-0 w-full max-w-[620px] mx-auto lg:ml-auto">
          
          {/* Floating Bins Monitored Badge */}
          <div className="absolute -top-10 -left-4 sm:-left-12 bg-[#0C1E17] border border-white/10 rounded-2xl px-5 py-3 shadow-2xl z-30 flex flex-col justify-center">
            <div className="text-[11px] text-slate-400 font-medium mb-1">Bins Monitored</div>
            <div className="text-2xl font-bold text-white flex items-center gap-2 leading-none">
              2,847 <span className="text-[#10B981] text-[14px]">↑</span>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-[#0A2218] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] relative z-10 w-full">
            
            {/* Card Header */}
            <div className="flex items-center justify-between pb-6">
              <div className="inline-flex items-center gap-1.5 bg-[#0D3830] border border-[#14B8A6]/20 text-[#2DD4BF] text-xs font-medium px-4 py-2 rounded-full">
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
            <div className="w-full bg-[#081A13] rounded-2xl border border-white/5 relative overflow-hidden mb-3 pt-6 pb-4 px-2">
              
              {/* Horizontal dashed grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-8 px-4">
                <div className="w-full border-t border-dashed border-white/10"></div>
                <div className="w-full border-t border-dashed border-white/10"></div>
                <div className="w-full border-t border-dashed border-white/10"></div>
                <div className="w-full border-t border-dashed border-white/10"></div>
              </div>

              {/* The SVG Graph + Dashed Connecting Line */}
              <svg 
                className="w-full h-[140px] relative z-10" 
                viewBox="0 0 400 140" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Dashed connecting line - matches Figma trajectory */}
                <path
                  d="M40 75 L110 45 L180 85 L260 35 L340 95"
                  stroke="#22D3EE"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Connected dots */}
                <circle cx="40" cy="75" r="5" fill="#22D3EE" />   {/* cyan */}
                <circle cx="110" cy="45" r="5" fill="#4ADE80" />  {/* green */}
                <circle cx="180" cy="85" r="5" fill="#FBBF24" />  {/* yellow/orange */}
                <circle cx="260" cy="35" r="5" fill="#4ADE80" />  {/* green */}
                <circle cx="340" cy="95" r="5" fill="#F87171" />  {/* red */}

                {/* Extra unconnected floating dots (as in Figma) */}
                <circle cx="200" cy="25" r="4.5" fill="#F87171" />  {/* top red */}
                <circle cx="130" cy="100" r="4" fill="#4ADE80" />   {/* lower green */}
                <circle cx="290" cy="70" r="4" fill="#4ADE80" />    {/* mid green */}
              </svg>
            </div>

            {/* Label under chart */}
            <div className="text-[11px] text-slate-500 mb-6 font-medium tracking-wide px-1">
              Lagos Metropolitan — Zone View
            </div>

            {/* Zone Bars (battery style) */}
            <div className="grid grid-cols-5 gap-3 sm:gap-4 mb-8">
              {[
                { name: "Zone A", color: "bg-[#10B981]", height: "h-[38%]" },
                { name: "Zone B", color: "bg-[#F59E0B]", height: "h-[75%]" },
                { name: "Zone C", color: "bg-[#EF4444]", height: "h-[90%]" },
                { name: "Zone D", color: "bg-[#059669]", height: "h-[30%]" },
                { name: "Zone E", color: "bg-[#3B82F6]", height: "h-[60%]" },
              ].map((zone) => (
                <div key={zone.name} className="flex flex-col gap-2">
                  <div className="h-[48px] bg-[#122E23] rounded-lg relative overflow-hidden">
                    <div className={`absolute bottom-0 w-full ${zone.height} ${zone.color}`}></div>
                  </div>
                  <span className="text-[10px] text-center text-slate-500 font-medium">{zone.name}</span>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-[#0C271C] p-4 rounded-xl border border-white/5">
                <div className="text-xl font-bold text-white mb-1">2,847</div>
                <div className="text-[11px] text-slate-400">Bins Active</div>
              </div>
              <div className="bg-[#0C271C] p-4 rounded-xl border border-white/5">
                <div className="text-xl font-bold text-amber-400 mb-1">3</div>
                <div className="text-[11px] text-slate-400">Alerts</div>
              </div>
              <div className="bg-[#0C271C] p-4 rounded-xl border border-white/5">
                <div className="text-xl font-bold text-white mb-1">99.4%</div>
                <div className="text-[11px] text-slate-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Overflow Alert Badge */}
          <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#181C15] border border-amber-500/30 rounded-2xl px-5 py-3.5 shadow-2xl z-30 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="text-amber-400 text-xs font-bold tracking-wide">Overflow Alert</span>
            </div>
            <div className="text-slate-300 text-[11px] pl-3.5">
              Zone 4B — 3 bins critical
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;