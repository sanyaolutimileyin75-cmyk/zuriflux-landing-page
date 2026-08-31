import { CheckCircle2, Bell, Map, FileWarning } from 'lucide-react';

const MobileApp = () => {
  const features = [
    'Report waste issues in seconds with photo and GPS',
    'Receive real-time collection schedule updates',
    "View your neighbourhood's waste hotspot map",
  ];

  return (
    <section className="bg-white text-slate-900 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left copy */}
        <div>
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-1 h-4 bg-emerald-600 rounded-full"></span>
            Mobile App
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            In Citizens&apos; Hands. In Every Neighbourhood.
          </h2>

          <p className="text-slate-600 text-base md:text-lg mb-8 max-w-lg">
            The ZuriFlux resident app puts waste awareness and reporting power
            directly in the community&apos;s hands.
          </p>

          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: 3 phone-style cards */}
        <div className="relative flex justify-center items-end gap-3 md:gap-4 min-h-[320px]">
          {/* Phone 1 - Report */}
          <div className="w-36 md:w-40 bg-[#0A261D] rounded-3xl border border-white/10 p-3 shadow-2xl -rotate-6 translate-y-4">
            <div className="bg-[#051B14] rounded-2xl p-3 h-56 flex flex-col">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-3">
                <FileWarning size={14} /> Report Issue
              </div>
              <div className="space-y-2 flex-1 text-[10px] text-slate-400">
                <div className="h-6 bg-white/5 rounded" />
                <div className="h-6 bg-emerald-500/20 rounded border border-emerald-500/30" />
                <div className="h-6 bg-white/5 rounded" />
              </div>
              <div className="mt-2 h-8 bg-[#0088FF] rounded-lg text-[10px] text-white flex items-center justify-center font-semibold">
                Submit
              </div>
            </div>
          </div>

          {/* Phone 2 - Notifications (center, raised) */}
          <div className="w-40 md:w-44 bg-[#0A261D] rounded-3xl border border-emerald-500/30 p-3 shadow-2xl z-10 -translate-y-2">
            <div className="bg-[#051B14] rounded-2xl p-3 h-64 flex flex-col">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-3">
                <Bell size={14} /> Notifications
              </div>
              <div className="space-y-2 flex-1">
                {['Overflow Alert — Zone 4B', 'Collection in 2 hrs', 'Report acknowledged'].map(
                  (n) => (
                    <div
                      key={n}
                      className="text-[10px] bg-white/5 border border-white/5 rounded-lg px-2 py-2 text-slate-300"
                    >
                      {n}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Phone 3 - Map */}
          <div className="w-36 md:w-40 bg-[#0A261D] rounded-3xl border border-white/10 p-3 shadow-2xl rotate-6 translate-y-4">
            <div className="bg-[#051B14] rounded-2xl p-3 h-56 flex flex-col">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-3">
                <Map size={14} /> Waste Hotspot Map
              </div>
              <div className="flex-1 rounded-xl bg-emerald-950/50 border border-emerald-500/20 relative overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;