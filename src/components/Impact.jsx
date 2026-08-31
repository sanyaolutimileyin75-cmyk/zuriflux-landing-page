const Impact = () => {
  const stats = [
    {
      value: '62%',
      label: 'Reduction in overflow incidents',
    },
    {
      value: '3×',
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
    <section className="bg-emerald-700 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-emerald-200 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Real Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            The Numbers Behind the Mission
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">{s.value}</div>
              <p className="text-emerald-100 text-sm max-w-[12rem] mx-auto leading-snug">
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