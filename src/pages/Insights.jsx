// src/pages/Insights.jsx
export default function Insights() {
  // Temporary static data (replace with API later)
  const stats = {
    totalMovies: 42,
    moviesThisYear: 8,
    topGenre: "Sci-Fi",
    topDirector: "Christopher Nolan",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-14 text-white">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold">Insights</h1>
        <p className="text-slate-400 mt-2">
          Analytics and trends from your movie collection
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        
        <InsightCard
          title="Total Movies"
          value={stats.totalMovies}
          subtitle="All time"
        />

        <InsightCard
          title="Released This Year"
          value={stats.moviesThisYear}
          subtitle="Current year"
        />

        <InsightCard
          title="Top Genre"
          value={stats.topGenre}
          subtitle="Most popular"
        />

        <InsightCard
          title="Top Director"
          value={stats.topDirector}
          subtitle="Most movies"
        />

      </div>

      {/* Description Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">
          What do these insights mean?
        </h2>

        <p className="text-slate-400 leading-relaxed">
          Insights help you understand trends in your movie collection such as
          popular genres, active directors, and recent releases. These metrics
          can be extended with real-time analytics, charts, and filters as your
          platform grows.
        </p>
      </div>
    </div>
  );
}

/* 🔹 Reusable Insight Card */
function InsightCard({ title, value, subtitle }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6
                    hover:border-indigo-500 transition">
      <h3 className="text-slate-400 text-sm">{title}</h3>
      <p className="text-3xl font-bold text-yellow-400 mt-2">
        {value}
      </p>
      <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
    </div>
  );
}
