const Stats = () => {
  const stats = [
    { value: "7+", label: "Years of Innovation" },
    { value: "20+", label: "Countries Reached" },
    { value: "15K+", label: "Smart Devices Installed" },
    { value: "500+", label: "Corporate Partners" },
  ];

  return (
    <section
      id="stats"
      className="bg-gradient-to-r from-primary via-accent to-secondary text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center animate-fadeIn">
        <h2 className="text-3xl font-bold mb-10">Our Global Impact</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <span className="text-5xl font-extrabold">{item.value}</span>
              <span className="text-slate-100 mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;