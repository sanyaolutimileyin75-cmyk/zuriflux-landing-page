import { ArrowDown, Activity, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-[#051B14] text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Text & CTAs */}
        <div className="flex flex-col items-start gap-6">
          
          {/* 1. Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            SMART WASTE MANAGEMENT • LIVE
          </div>

          {/* 2. Main Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Cities That Work. <br />
            <span className="text-emerald-400">Waste That</span> <br />
            Doesn't.
          </h1>

          {/* 3. Description Paragraph */}
          <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
            ZuriFlux transforms urban waste management with real-time IoT monitoring, 
            predictive analytics, and citizen engagement, turning reactive collection 
            into proactive city intelligence.
          </p>

          {/* 4. Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#0088FF] hover:bg-[#0070D8] text-white font-medium px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-blue-500/25">
              Request a Demo
            </button>
            <button className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white font-medium px-6 py-3.5 rounded-full transition-all">
              See How It Works
              <ArrowDown size={18} />
            </button>
          </div>

          {/* 5. Trust Metrics Footer */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs md:text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">12</span> Cities Onboarded
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">99.4%</span> Uptime
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-400" /> ISO 27001 Certified
            </span>
          </div>

        </div>


        {/* RIGHT COLUMN: Dashboard Preview Graphic */}
        <div className="relative">
          
          {/* Main Dashboard Preview Card */}
          <div className="bg-[#0A261D] border border-white/10 rounded-2xl p-6 shadow-2xl relative z-10">
            
            {/* Card Top Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                <span className="text-xs font-semibold text-slate-300">ZuriFlux Live</span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full uppercase font-mono tracking-wider">
                • LIVE
              </span>
            </div>

            {/* Sub-header zone info */}
            <div className="text-xs text-slate-400 mb-4">
              Lagos Metropolitan — Zone View
            </div>

            {/* Simulated Chart Graphic */}
            <div className="h-36 bg-[#051B14] rounded-xl border border-white/5 p-4 flex items-end justify-between gap-2 mb-6 relative">
              <div className="w-1/5 bg-emerald-500/30 h-1/2 rounded-t-md"></div>
              <div className="w-1/5 bg-emerald-500/50 h-3/4 rounded-t-md"></div>
              <div className="w-1/5 bg-emerald-500/80 h-full rounded-t-md"></div>
              <div className="w-1/5 bg-emerald-500/40 h-2/3 rounded-t-md"></div>
              <div className="w-1/5 bg-emerald-500/60 h-4/5 rounded-t-md"></div>
            </div>

            {/* Stat Cards Grid inside Dashboard */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#051B14] p-3 rounded-lg border border-white/5">
                <div className="text-[10px] text-slate-400">Zone A</div>
                <div className="text-sm font-bold text-white mt-1">2,847</div>
                <div className="text-[10px] text-emerald-400">Bins Active</div>
              </div>
              <div className="bg-[#051B14] p-3 rounded-lg border border-white/5">
                <div className="text-[10px] text-slate-400">Zone B</div>
                <div className="text-sm font-bold text-white mt-1">3</div>
                <div className="text-[10px] text-amber-400">Alerts</div>
              </div>
              <div className="bg-[#051B14] p-3 rounded-lg border border-white/5">
                <div className="text-[10px] text-slate-400">Zone C</div>
                <div className="text-sm font-bold text-white mt-1">99.4%</div>
                <div className="text-[10px] text-emerald-400">Uptime</div>
              </div>
            </div>

          </div>

          {/* Floating Pill Counter Tag (Top Left) */}
          <div className="absolute -top-4 -left-4 bg-[#082E22] border border-emerald-500/30 rounded-xl p-3 shadow-xl z-20 flex items-center gap-3">
            <Activity className="text-emerald-400" size={20} />
            <div>
              <div className="text-[10px] text-slate-400">Bins Monitored</div>
              <div className="text-sm font-bold text-white">2,847 <span className="text-emerald-400 text-xs">↑</span></div>
            </div>
          </div>

          {/* Floating Warning Tag (Bottom Right) */}
          <div className="absolute -bottom-4 -right-2 bg-[#2B1B08] border border-amber-500/30 rounded-xl p-3 shadow-xl z-20 text-xs text-amber-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span><strong>Overflow Alert:</strong> Zone 4B — 3 bins critical</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;