
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
      mock: (
        <div className="bg-[#0C241C] rounded-[24px] px-5 sm:px-6 pt-6 pb-6 w-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <p className="text-[10px] font-bold tracking-[0.18em] text-[#22D3EE] uppercase text-center mb-5">
            RESIDENT APP
          </p>

          <h4 className="text-xl font-bold text-white mb-5">
            Report Issue
          </h4>

          <div className="mb-4">
            <p className="text-[11px] text-white/50 mb-1.5">
              Location
            </p>

            <div className="flex items-center gap-2.5 bg-[#071A14] rounded-lg px-3.5 py-3 border border-white/5 min-w-0">
              <MapPin
                size={14}
                className="text-[#EF4444] shrink-0"
                fill="#EF4444"
              />
              <span className="text-[12px] sm:text-[13px] text-white/90 break-words">
                Ikeja, Lagos Nigeria
              </span>
            </div>
          </div>

          <div className="mb-5">
            <p className="text-[11px] text-white/50 mb-2">
              Issue Type
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-3 w-full rounded-lg px-3.5 py-2.5 bg-[#0D4F38]">
                <span className="w-[14px] h-[14px] rounded-full bg-[#34D399] shrink-0" />
                <span className="text-[13px] font-medium text-[#34D399]">
                  Overflowing bin
                </span>
              </div>

              <div className="flex items-center gap-3 w-full px-3.5 py-1.5">
                <span className="w-[14px] h-[14px] rounded-full border-[1.5px] border-white/30 shrink-0" />
                <span className="text-[13px] text-white/45">
                  Illegal dumping
                </span>
              </div>

              <div className="flex items-center gap-3 w-full px-3.5 py-1.5">
                <span className="w-[14px] h-[14px] rounded-full border-[1.5px] border-white/30 shrink-0" />
                <span className="text-[13px] text-white/45">
                  Missed collection
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#0088FF] to-[#00C2FF] hover:opacity-95 transition-opacity"
          >
            Submit Report
          </button>
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
        <div className="bg-[#0C241C] rounded-[24px] px-5 sm:px-6 pt-6 pb-6 w-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <p className="text-[10px] font-bold tracking-[0.18em] text-[#22D3EE] uppercase text-center mb-5">
            OPERATOR DASHBOARD
          </p>

          <h4 className="text-xl font-bold text-white mb-5">
            Today’s Routes
          </h4>

          <div className="space-y-2">
            {[
              'Zone A — 12 bins critical',
              'Zone C — Route optimized',
              'Zone E — 2 delays',
            ].map((row, i) => (
              <div
                key={row}
                className={`rounded-lg px-3.5 py-3 text-[12px] sm:text-[13px] font-medium break-words ${
                  i === 0
                    ? 'bg-[#0D4F38] text-[#34D399]'
                    : 'text-white/50 bg-[#071A14]'
                }`}
              >
                {row}
              </div>
            ))}
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
        <div className="bg-[#0C241C] rounded-[24px] px-5 sm:px-6 pt-6 pb-6 w-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <p className="text-[10px] font-bold tracking-[0.18em] text-[#22D3EE] uppercase text-center mb-5">
            CITY INTELLIGENCE
          </p>

          <h4 className="text-xl font-bold text-white mb-5">
            Lagos Overview
          </h4>

          <div className="grid grid-cols-2 gap-2.5">
            {[
              { label: 'Bins Active', value: '2,847' },
              { label: 'Uptime', value: '99.4%' },
              { label: 'Open Alerts', value: '3' },
              { label: 'Zones', value: '5' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#071A14] rounded-lg p-3 sm:p-4 border border-white/5 min-w-0"
              >
                <div className="text-[10px] text-white/45 mb-1">
                  {s.label}
                </div>

                <div className="text-base sm:text-lg font-bold text-white">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  };

  const current = content[activeTab];

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-[76px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* Heading */}
        <h2 className="text-[26px] leading-tight sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-center text-[#0F172A] tracking-tight mb-7 sm:mb-9 lg:mb-10">
          Built for Every Stakeholder
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-9 sm:mb-12 lg:mb-14">
          <div
            role="tablist"
            aria-label="Stakeholder categories"
            className="flex items-center max-w-full overflow-x-auto bg-[#E8F0EB] rounded-full p-1 gap-0.5 scrollbar-hide"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls="stakeholder-panel"
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 whitespace-nowrap px-3.5 sm:px-5 md:px-6 py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#0D5C3D] text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          id="stakeholder-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="flex flex-col lg:flex-row items-center justify-center gap-9 sm:gap-11 lg:gap-14 xl:gap-20"
        >

          {/* Mockup Card */}
          <div className="w-full max-w-[360px] shrink-0">
            {current.mock}
          </div>

          {/* Benefits */}
          <div className="w-full max-w-[360px] lg:max-w-[340px] space-y-4 sm:space-y-5">
            {current.benefits.map((text) => (
              <div
                key={text}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  className="text-[#10B981] shrink-0 mt-0.5"
                  size={20}
                  strokeWidth={2}
                />

                <p className="text-slate-600 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
