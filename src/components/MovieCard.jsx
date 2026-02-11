// src/components/MovieCard.jsx
export default function MovieCard({ movie }) {
  // Generate consistent colors based on movie title
  const colors = [
    { bg: 'from-indigo-500 to-purple-600', accent: 'bg-indigo-500' },
    { bg: 'from-blue-500 to-cyan-600', accent: 'bg-blue-500' },
    { bg: 'from-emerald-500 to-teal-600', accent: 'bg-emerald-500' },
    { bg: 'from-orange-500 to-red-600', accent: 'bg-orange-500' },
    { bg: 'from-pink-500 to-rose-600', accent: 'bg-pink-500' },
    { bg: 'from-violet-500 to-fuchsia-600', accent: 'bg-violet-500' },
  ];
  
  const colorIndex = movie.title.charCodeAt(0) % colors.length;
  const selectedColor = colors[colorIndex];

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
      {/* Poster Section */}
      <div className={`relative h-56 bg-gradient-to-br ${selectedColor.bg} overflow-hidden`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-white rounded-full"></div>
          <div className="absolute w-64 h-64 -bottom-32 -left-32 bg-white rounded-full"></div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg">
            {movie.genre}
          </span>
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-sm text-white">
            {movie.releaseYear}
          </span>
        </div>

        {/* Play button overlay (appears on hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2 leading-tight">
            {movie.title}
          </h3>
          <p className="text-sm text-gray-500">
            {movie.director}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100"></div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Status */}
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${selectedColor.accent} animate-pulse`}></div>
            <span className="text-xs font-semibold text-gray-600">Available Now</span>
          </div>

          {/* Action Button */}
          <button className={`px-4 py-2 rounded-lg text-sm font-bold text-white bg-gradient-to-r ${selectedColor.bg} hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}>
            Watch
          </button>
        </div>
      </div>

      {/* Accent bar at bottom */}
      <div className={`h-1 bg-gradient-to-r ${selectedColor.bg}`}></div>
    </div>
  );
}