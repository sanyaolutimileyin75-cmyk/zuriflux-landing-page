import { useState } from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';

const Stakeholders = () => {
  const [activeTab, setActiveTab] = useState('residents');

  const tabs = [
    { id: 'residents', label: 'Residents' },
    { id: 'operators', label: 'Waste Operators' },
    { id: 'government', label: 'Government Agencies' },
  ];

  const content = {
    residents: {
      benefits: [
        'Cleaner neighbourhoods and faster waste issue resolution.',
        'Real-time updates when collection is scheduled in your area.',
        'Direct waste reporting with instant acknowledgment.',
      ],
      // Simple form mock for Resident App
      mock: (
        <div className="bg-[#0A261D] border border-white/10 rounded-2xl p-6 text-white w-full max-w-md">
          <p className="text-[10px] font-bold tracking-widest text-emerald-400/80 uppercase mb-4">
            Resident App
          </p>
          <h4 className="text-lg font-bold mb-4">Report Issue</h4>

          <div className="space-y-3 text-sm">
            <div className="bg-[#051B14] rounded-lg px-3 py-2.5 border border-white/5 flex items-center gap-2 text-slate-300">
              <MapPin size={14} className="text-emerald-400" />
              Ikeja, Lagos Nigeria
            </div>

            <div className="space-y-2">
              {['Overflowing bin', 'Illegal dumping', 'Missed collection'].map((type, i) => (
                <label
                  key={type}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 border cursor-pointer ${
                    i === 0
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                      : 'bg-[#051B14] border-white/5 text-slate-400'
                  }`}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full border ${
                      i === 0 ? 'border-emerald-400 bg-emerald-400' : 'border-slate-500'
                    }`}
                  />
                  {type}
                </label>
              ))}
            </div>

            <button className="w-full mt-2 bg-[#0088FF] hover:bg-[#0070D8] text-white font-semibold py-3 rounded-lg transition-colors">
              Submit Report
            </button>
          </div>
        </div>
      ),
    },
    operators: {
      benefits: [
        'Live fill-level data across every assigned zone.',
        'Dynamic route optimization to cut empty trips.',
        'Priority alerts for critical overflow bins.',
      ],
      mock: (
        <div className="bg-[#0A261D] border border-white/10 rounded-2xl p-6 text-white w-full max-w-md">
          <p className="text-[10px] font-bold tracking-widest text-emerald-400/80 uppercase mb-4">
            Operator Dashboard
          </p>
          <h4 className="text-lg font-bold mb-4">Today’s Routes</h4>
          <div className="space-y-3 text-sm">
            {['Zone A — 12 bins critical', 'Zone C — Route optimized', 'Zone E — 2 delays'].map(
              (row) => (
                <div
                  key={row}
                  className="bg-[#051B14] rounded-lg px-3 py-3 border border-white/5 text-slate-300"
                >
                  {row}
                </div>
              )
            )}
          </div>
        </div>
      ),
    },
    government: {
      benefits: [
        'City-wide visibility into waste performance KPIs.',
        'Audit-ready reports for compliance and funding.',
        'Data to plan infrastructure and contractor SLAs.',
      ],
      mock: (
        <div className="bg-[#0A261D] border border-white/10 rounded-2xl p-6 text-white w-full max-w-md">
          <p className="text-[10px] font-bold tracking-widest text-emerald-400/80 uppercase mb-4">
            City Intelligence
          </p>
          <h4 className="text-lg font-bold mb-4">Lagos Overview</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { label: 'Bins Active', value: '2,847' },
              { label: 'Uptime', value: '99.4%' },
              { label: 'Open Alerts', value: '3' },
              { label: 'Zones', value: '5' },
            ].map((s) => (
              <div key={s.label} className="bg-[#051B14] rounded-lg p-3 border border-white/5">
                <div className="text-slate-400 text-xs">{s.label}</div>
                <div className="text-xl font-bold text-emerald-400 mt-1">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  };

  const current = content[activeTab];

  return (
    <section id="values" className="bg-[#F7F9F8] text-slate-900 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight mb-10">
          Built for Every Stakeholder
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-200/80 rounded-full p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content: mock left, benefits right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-end">{current.mock}</div>

          <div className="space-y-5">
            {current.benefits.map((text) => (
              <div key={text} className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={22} />
                <p className="text-slate-700 text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;