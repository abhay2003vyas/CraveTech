// src/components/Stats.jsx
export default function Stats() {
  const stats = [
    { label: "Total Books", value: "12,500+" },
    { label: "Active Users", value: "2,300+" },
    { label: "Daily Borrows", value: "450+" },
  ];

  return (
    <section className="bg-black py-16 px-6">
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-xl py-10 px-6 hover:border-red-600 transition-colors duration-300"
          >
            {/* Value */}
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-2">
              {stat.value}
            </h2>

            {/* Label */}
            <p className="text-gray-400 text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
