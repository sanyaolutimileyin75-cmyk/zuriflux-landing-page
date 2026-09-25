import { CheckCircle2 } from 'lucide-react';

const MobileApp = () => {
  const features = [
    'Report waste issues in seconds with photo and GPS',
    'Receive real-time collection schedule updates',
    "View your neighbourhood's waste hotspot map",
  ];

  return (
    <section
      className="text-slate-900 py-24 px-6 md:px-6 lg:px-6"
      style={{ backgroundColor: '#EAF0EC' }}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center px-0 md:px-10">
        
        {/* LEFT: Copy */}
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-1 h-4 bg-emerald-600 rounded-full"></span>
            Mobile App
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 mb-4">
            In Citizens&apos; Hands. In Every Neighbourhood.
          </h2>

          <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
            The ZuriFlux resident app puts waste awareness and reporting power
            directly in the community&apos;s hands.
          </p>

          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-emerald-600 shrink-0 mt-0.5"
                  size={20}
                />
                <span className="text-slate-700 text-sm md:text-base">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Overlapping phone cluster (like Figma) */}
        <div className="relative flex justify-center items-center min-h-[380px] md:min-h-[420px]">
          
          {/* Phone 1 — Report Issue (back left, rotated) */}
          <div className="absolute left-1/2 md:left-[8%] top-8 w-[150px] md:w-[170px] -translate-x-[110%] md:translate-x-0 -rotate-[12deg] z-10">
            <PhoneFrame>
              <div className="text-[9px] text-slate-400 mb-1">9:41</div>
              <p className="text-[11px] font-bold text-white mb-3">Report Issue</p>
              
              <p className="text-[8px] text-slate-400 mb-1">Your location</p>
              <div className="bg-black/30 rounded-md px-2 py-1.5 text-[9px] text-emerald-300 mb-3 border border-white/5">
                📍 Tom Mboya St, Nairobi
              </div>

              <p className="text-[8px] text-slate-400 mb-1">Issue Type</p>
              <div className="space-y-1.5 mb-3">
                <div className="bg-emerald-500/25 border border-emerald-500/40 rounded-md px-2 py-1 text-[9px] text-emerald-300">
                  ● Overflowing bin
                </div>
                <div className="bg-black/20 rounded-md px-2 py-1 text-[9px] text-slate-400">
                  ○ Illegal dumping
                </div>
                <div className="bg-black/20 rounded-md px-2 py-1 text-[9px] text-slate-400">
                  ○ Missed collection
                </div>
              </div>

              <div className="mt-auto bg-[#0088FF] rounded-md py-2 text-center text-[10px] font-semibold text-white">
                Submit Report
              </div>
            </PhoneFrame>
          </div>

          {/* Phone 2 — Notifications (center, front) */}
          <div className="relative z-30 w-[160px] md:w-[180px] -translate-y-2">
            <PhoneFrame>
              <div className="text-[9px] text-slate-400 mb-1 text-right">9:41</div>
              <p className="text-[11px] font-bold text-white mb-3">Notifications</p>

              <div className="space-y-2 flex-1">
                <NotifCard
                  icon="✓"
                  title="Issue Resolved"
                  body="Your report on Zone 3B was addressed"
                  time="2m ago"
                  accent="emerald"
                />
                <NotifCard
                  icon="📅"
                  title="Collection Scheduled"
                  body="Your area: tomorrow 8–10 AM"
                  time="1h ago"
                  accent="blue"
                />
                <NotifCard
                  icon="⚠"
                  title="Overflow Alert"
                  body="Bin on Kenyatta Ave is full"
                  time="3h ago"
                  accent="amber"
                />
              </div>
            </PhoneFrame>
          </div>

          {/* Phone 3 — Waste Hotspot Map (back right, rotated) */}
          <div className="absolute left-1/2 md:right-[8%] top-8 w-[150px] md:w-[170px] translate-x-[10%] md:translate-x-0 md:left-auto rotate-[12deg] z-10">
            <PhoneFrame>
              <div className="text-[9px] text-slate-400 mb-1 text-right">9:41</div>
              <p className="text-[11px] font-bold text-white mb-3">Waste Hotspot Map</p>

              {/* Fake map grid */}
              <div className="flex-1 rounded-xl bg-[#041610] border border-emerald-500/20 relative overflow-hidden min-h-[180px]">
                {/* grid lines */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                {/* hotspots */}
                <span className="absolute top-[28%] left-[30%] w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
                <span className="absolute top-[45%] left-[55%] w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.7)]" />
                <span className="absolute top-[60%] left-[40%] w-2 h-2 rounded-full bg-emerald-400" />
                <span className="absolute top-[35%] left-[70%] w-2 h-2 rounded-full bg-emerald-400/80" />
                <p className="absolute bottom-2 left-0 right-0 text-center text-[8px] text-slate-500">
                  Central — Live View
                </p>
              </div>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable phone chrome */
function PhoneFrame({ children }) {
  return (
    <div className="bg-[#0A1F14] rounded-[1.75rem] border border-white/10 p-2 shadow-2xl">
      {/* notch */}
      <div className="mx-auto w-16 h-1.5 bg-white/10 rounded-full mb-2" />
      <div className="bg-[#071A12] rounded-[1.25rem] p-3 min-h-[280px] md:min-h-[300px] flex flex-col">
        {children}
      </div>
    </div>
  );
}

function NotifCard({ icon, title, body, time, accent }) {
  const colors = {
    emerald: 'border-emerald-500/30 bg-emerald-500/10',
    blue: 'border-blue-500/30 bg-blue-500/10',
    amber: 'border-amber-500/30 bg-amber-500/10',
  };

  return (
    <div className={`rounded-lg border px-2 py-1.5 ${colors[accent]}`}>
      <div className="flex justify-between items-start gap-1">
        <p className="text-[9px] font-semibold text-white leading-tight">
          <span className="mr-1">{icon}</span>
          {title}
        </p>
        <span className="text-[7px] text-slate-500 shrink-0">{time}</span>
      </div>
      <p className="text-[8px] text-slate-400 mt-0.5 leading-snug">{body}</p>
    </div>
  );
}

export default MobileApp;