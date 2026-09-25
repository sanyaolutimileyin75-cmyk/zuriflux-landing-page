import { Eye, Signal, Layers, Clock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      icon: Eye,
      title: 'Smart Monitoring',
      description:
        'IoT sensors track bin fill levels in real-time across every collection zone.',
    },
    {
      id: '02',
      icon: Signal,
      title: 'Data Collection',
      description:
        'Sensor data streams to the cloud continuously — location, fill %, anomalies, timestamps.',
    },
    {
      id: '03',
      icon: Layers,
      title: 'Analytics Engine',
      description:
        'Machine learning identifies patterns, predicts overflow, and surfaces waste hotspots.',
    },
    {
      id: '04',
      icon: Clock,
      title: 'Optimized Collection',
      description:
        'Smart alerts and dynamic route recommendations dispatched to operators instantly.',
    },
  ];

  return (
    <section className="bg-[#0A1F14] text-white py-16 sm:py-20 lg:py-[72px] px-4 sm:px-6 lg:px-6">
      <div className="max-w-[1440px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <p className="text-[#22D3EE] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto">
            From Overflow to Intelligence in 4 Steps
          </h2>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center px-2"
              >
                {/* Top Icon (cyan) */}
                <div className="mb-4 text-[#22D3EE]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Numbered Circle */}
                <div className="w-14 h-14 rounded-full border border-[#10B981]/50 bg-[#0D2B1F]/60 flex items-center justify-center mb-5">
                  <span className="text-[#34D399] text-sm font-bold tracking-wider">
                    {step.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-[13px] sm:text-sm leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;