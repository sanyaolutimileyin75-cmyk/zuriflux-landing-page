import { Trash2, Clock, Truck, MessageCircle } from 'lucide-react';

const Problem = () => {
  const problemsData = [
    {
      id: 1,
      icon: <Trash2 className="text-emerald-700" size={22} />,
      stat: "68%",
      title: "Bins overflow weekly",
      description:
        "Most urban bins reach capacity before scheduled collection, causing sanitation breakdowns across residential zones.",
    },
    {
      id: 2,
      icon: <Clock className="text-emerald-700" size={22} />,
      stat: "3–5 hrs",
      title: "Average response delay",
      description:
        "Waste operators lack real-time visibility, leading to systematic response lags across zones.",
    },
    {
      id: 3,
      icon: <Truck className="text-emerald-700" size={22} />,
      stat: "40%",
      title: "Wasted collection trips",
      description:
        "Routes planned without live data cause trucks to service empty bins while full ones overflow.",
    },
    {
      id: 4,
      icon: <MessageCircle className="text-emerald-700" size={22} />,
      stat: "0%",
      title: "Citizen feedback loops",
      description:
        "Residents have no channel to report waste issues, leaving authorities blind to ground-level conditions.",
    },
  ];

  return (
    <section id="features" className="bg-[#F7F9F8] text-slate-900 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm tracking-wider uppercase mb-4">
            <span className="w-1 h-4 bg-emerald-600 rounded-full"></span>
            THE PROBLEM
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Urban Waste Systems Are Failing Cities
          </h2>

          <p className="text-slate-600 text-base md:text-lg max-w-2xl">
            Across Africa and beyond, waste management remains reactive, opaque,
            and resource-intensive.
          </p>
        </div>

        {/* 2x2 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problemsData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon circle */}
              <div className="w-11 h-11 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Big stat */}
              <div className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-2">
                {item.stat}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Problem;