import { Trash2, Clock, Truck, MessageCircle } from 'lucide-react';

const Problem = () => {
  const problemsData = [
    {
      id: 1,
      icon: Trash2,
      stat: "68%",
      title: "Bins overflow weekly",
      description:
        "Most urban bins reach capacity before scheduled collection, causing sanitation breakdowns across residential zones.",
    },
    {
      id: 2,
      icon: Clock,
      stat: "3-5 hrs",
      title: "Average response delay",
      description:
        "Waste operators lack real-time visibility, leading to systematic response lags across zones.",
    },
    {
      id: 3,
      icon: Truck,
      stat: "40%",
      title: "Wasted collection trips",
      description:
        "Routes planned without live data cause trucks to service empty bins while full ones overflow.",
    },
    {
      id: 4,
      icon: MessageCircle,
      stat: "0%",
      title: "Citizen feedback loops",
      description:
        "Residents have no channel to report waste issues, leaving authorities blind to ground-level conditions.",
    },
  ];

  return (
    <section className="bg-[#F8FAF9] text-slate-900 py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-[76px]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          {/* Label */}
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="w-[3px] h-3.5 sm:h-4 bg-[#0D5C3D] rounded-full"></span>
            <span className="text-[#0D5C3D] font-bold text-[11px] sm:text-xs md:text-sm tracking-[0.08em] uppercase">
              THE PROBLEM
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.2] mb-3 sm:mb-4">
            Urban Waste Systems Are Failing Cities
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            Across Africa and beyond, waste management remains reactive, opaque,
            and resource-intensive.
          </p>
        </div>

        {/* 2x2 Card Grid - stacks on mobile, 2 columns from md up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {problemsData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100/80 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300"
              >
                {/* Icon circle */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E8F5F0] flex items-center justify-center mb-5 sm:mb-6">
                  <Icon className="text-[#0D5C3D]" size={18} strokeWidth={2} />
                </div>

                {/* Big stat */}
                <div className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] font-extrabold text-[#0D5C3D] mb-1.5 sm:mb-2 tracking-tight leading-none">
                  {item.stat}
                </div>

                {/* Title */}
                <h3 className="text-[15px] sm:text-base md:text-lg font-bold text-[#0F172A] mb-1.5 sm:mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-[13px] sm:text-sm md:text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Problem;