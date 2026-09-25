import { ArrowDown, Activity, Check, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#0D2B1F] via-[#0A1F14] to-[#091A10] text-white pt-28 pb-16 px-4 md:px-[76px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* LEFT COLUMN: Text & Action CTAs (5 Columns on Desktop) */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#051B14] border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            SMART WASTE MANAGEMENT • LIVE
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Cities That Work. <br />
            <span className="text-[#10B981]">Waste That</span> <br />
            Doesn't.
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-base lg:text-lg max-w-xl leading-relaxed font-normal">
            ZuriFlux transforms urban waste management with real-time IoT monitoring, 
            predictive analytics, and citizen engagement, turning reactive collection 
            into proactive city intelligence.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#0088FF] hover:bg-[#0076DF] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-blue-500/20">
              Request a Demo
            </button>
            <button className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all">
              See How It Works
              <ArrowDown size={16} />
            </button>
          </div>

          {/* Trust Metrics Footer */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs lg:text-sm text-slate-400">
            <span><strong className="text-emerald-400 font-bold">12</strong> Cities Onboarded</span>
            <span className="text-white/20">•</span>
            <span><strong className="text-emerald-400 font-bold">99.4%</strong> Uptime</span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-400" /> ISO 27001 Certified
            </span>
          </div>

        </div>


        {/* RIGHT COLUMN: Pixel-Perfect Figma Graph Dashboard (6 Columns) */}
        <div className="lg:col-span-6 relative mt-4 lg:mt-0">
          
          {/* Floating Pill Counter (Top Left Above Card) */}
          <div className="absolute -top-5 left-4 bg-[#08281E] border border-emerald-500/30 rounded-xl px-4 py-2 shadow-2xl z-30 flex items-center gap-3">
            <Activity className="text-emerald-400" size={18} />
            <div>
              <div className="text-[10px] text-slate-400 font-medium">Bins Monitored</div>
              <div className="text-sm font-bold text-white flex items-center gap-1">
                2,847 <span className="text-emerald-400 text-xs">↑</span>
              </div>
            </div>
          </div>

          {/* Main Dashboard Box */}
          <div className="bg-[#071F17]/90 border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl backdrop-blur-md relative z-10">
            
            {/* Header inside Dashboard */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold px-3 py-1 rounded-full">
                <Check size={12} />
                Collection Route Optimized
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-300 font-medium">ZuriFlux Live</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono">
                  • LIVE
                </span>
              </div>
            </div>

            {/* Sub-label */}
            <div className="text-[11px] text-slate-400 mb-3 font-medium">
              Lagos Metropolitan — Zone View
            </div>

            {/* REAL SVG LINE CHART GRAPHIC */}
            <div className="h-40 w-full bg-[#041610] rounded-xl border border-white/5 p-3 relative overflow-hidden mb-4">
              
              {/* Background Dashed Grid Lines */}
              <svg className="absolute inset-0 w-full h-full stroke-white/5" strokeDasharray="4 4">
                <line x1="0" y1="25%" x2="100%" y2="25%" />
                <line x1="0" y1="50%" x2="100%" y2="50%" />
                <line x1="0" y1="75%" x2="100%" y2="75%" />
              </svg>

              {/* Connected Line Path */}
              <svg className="w-full h-full overflow-visible">
                <path
                  d="M 15 80 L 80 110 L 150 50 L 220 90 L 290 35 L 360 85"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                />

                {/* Node Points matching Figma (Green, Orange, Red, Cyan) */}
                <circle cx="15" cy="80" r="4" fill="#10B981" />
                <circle cx="80" cy="110" r="4" fill="#F59E0B" />
                <circle cx="150" cy="50" r="5" fill="#EF4444" className="animate-ping" />
                <circle cx="150" cy="50" r="4" fill="#EF4444" />
                <circle cx="220" cy="90" r="4" fill="#10B981" />
                <circle cx="290" cy="35" r="4" fill="#06B6D4" />
                <circle cx="360" cy="85" r="4" fill="#3B82F6" />
              </svg>
            </div>

            {/* 5 COLORED ZONE BARS (Matching Figma exact zone colors) */}
            <div className="grid grid-cols-5 gap-2 mb-5">
              <div className="flex flex-col gap-1">
                <div className="h-10 bg-[#10B981] rounded-md"></div>
                <span className="text-[9px] text-center text-slate-400 font-mono">Zone A</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-10 bg-[#F59E0B] rounded-md"></div>
                <span className="text-[9px] text-center text-slate-400 font-mono">Zone B</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-10 bg-[#EF4444] rounded-md"></div>
                <span className="text-[9px] text-center text-slate-400 font-mono">Zone C</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-10 bg-[#047857] rounded-md"></div>
                <span className="text-[9px] text-center text-slate-400 font-mono">Zone D</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="h-10 bg-[#2563EB] rounded-md"></div>
                <span className="text-[9px] text-center text-slate-400 font-mono">Zone E</span>
              </div>
            </div>

            {/* Dashboard Footer Stats */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/5">
              <div className="bg-[#041610] p-2.5 rounded-lg border border-white/5 text-center">
                <div className="text-[13px] font-bold text-white">2,847</div>
                <div className="text-[9px] text-slate-400">Bins Active</div>
              </div>
              <div className="bg-[#041610] p-2.5 rounded-lg border border-white/5 text-center">
                <div className="text-[13px] font-bold text-amber-400">3</div>
                <div className="text-[9px] text-slate-400">Alerts</div>
              </div>
              <div className="bg-[#041610] p-2.5 rounded-lg border border-white/5 text-center">
                <div className="text-[13px] font-bold text-white">99.4%</div>
                <div className="text-[9px] text-slate-400">Uptime</div>
              </div>
            </div>

          </div>

          {/* Floating Overflow Alert Badge (Bottom Right Outside Card) */}
          <div className="absolute -bottom-4 -right-2 bg-[#231505] border border-amber-500/40 rounded-xl px-3.5 py-2 shadow-2xl z-30 text-xs text-amber-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span><strong className="text-amber-200">Overflow Alert:</strong> Zone 4B — 3 bins critical</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;