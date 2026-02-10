// src/components/MovieCard.jsx
export default function MovieCard({ movie }) {
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 overflow-hidden 
                    hover:border-gray-300 transition-colors"
    >
      {/* Movie Poster Placeholder */}
      <div
        className="h-48 bg-gradient-to-br from-yellow-50 to-yellow-100 
                      flex items-center justify-center"
      >
        <div className="text-6xl font-bold text-yellow-500 opacity-20">
          {movie.title.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Movie Title */}
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          {movie.title}
        </h3>

        {/* Director */}
        <p className="text-sm text-gray-600 mb-3">
          Directed by {movie.director}
        </p>

        {/* Genre & Year */}
        <div className="flex items-center gap-2 mb-4">
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-md 
                         text-xs font-medium bg-gray-100 text-gray-800"
          >
            {movie.genre}
          </span>
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-md 
                         text-xs font-medium bg-yellow-100 text-yellow-800"
          >
            {movie.releaseYear}
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-sm text-green-600 font-medium">Available</span>

          <button
            className="px-4 py-2 text-sm font-medium rounded-md 
                     text-white bg-yellow-500 hover:bg-yellow-700 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-yellow-500 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
