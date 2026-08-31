import { Eye, Radio, BarChart3, Route } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      icon: <Eye size={22} />,
      title: 'Smart Monitoring',
      description:
        'IoT sensors track bin fill levels in real time across every collection zone.',
    },
    {
      id: '02',
      icon: <Radio size={22} />,
      title: 'Data Collection',
      description:
        'Sensor data streams to the cloud continuously — location, fill %, anomalies, timestamps.',
    },
    {
      id: '03',
      icon: <BarChart3 size={22} />,
      title: 'Analytics Engine',
      description:
        'Machine learning identifies patterns, predicts overflow, and surfaces waste hotspots.',
    },
    {
      id: '04',
      icon: <Route size={22} />,
      title: 'Optimized Collection',
      description:
        'Smart alerts and dynamic route recommendations dispatched to operators instantly.',
    },
  ];

  return (
    <section id="platform" className="bg-[#051B14] text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            From Overflow to Intelligence in 4 Steps
          </h2>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">

              {/* Connector line (desktop only, between items) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-emerald-500/30" />
              )}

              {/* Numbered Icon Circle */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
                {step.icon}
              </div>

              {/* Step number + title */}
              <div className="text-emerald-400 text-xs font-mono font-bold mb-2">
                {step.id}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;