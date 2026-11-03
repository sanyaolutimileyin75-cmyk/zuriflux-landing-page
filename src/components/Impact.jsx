const Impact = () => {
  const stats = [
    {
      value: '62%',
      label: 'Reduction in overflow incidents',
    },
    {
      value: (
        <>
          3×
          <span className="block text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-none mt-1">
            Faster
          </span>
        </>
      ),
      label: 'Faster emergency waste response time',
    },
    {
      value: '94%',
      label: 'Monitoring coverage across pilot zones',
    },
    {
      value: '38%',
      label: 'Collection efficiency improvement',
    },
  ];

  return (
    <section className="bg-[#1A6B45] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-[76px]">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <p className="text-[#A7F3D0] text-[12px] sm:text-[13px] md:text-[15px] font-bold tracking-[0.22em] uppercase mb-3">
            Real Impact
          </p>
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white px-2 leading-tight">
            The Numbers Behind the Mission
          </h2>
        </div>

        {/* Stats Grid — 2×2 on mobile/tablet, 4 across on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center text-center
                px-3 sm:px-5 md:px-6
                py-6 sm:py-8
                ${i % 2 === 0 ? 'border-r border-white/20' : ''}
                ${i < 2 ? 'border-b border-white/20 lg:border-b-0' : ''}
                ${i !== stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''}
              `}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-none mb-2.5 sm:mb-3">
                {s.value}
              </div>
              <p className="text-white/70 text-[11px] sm:text-[12px] md:text-sm max-w-[130px] sm:max-w-[160px] leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;