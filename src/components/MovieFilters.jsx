// src/components/MovieFilters.jsx
export default function MovieFilters({ search, setSearch, genre, setGenre }) {
  return (
    <div className="mb-6 bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">
            Search movies
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              id="search"
              type="text"
              placeholder="Search by movie title or director..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md 
                       leading-5 bg-white placeholder-gray-500 text-gray-900
                       focus:outline-none focus:ring-2 focus:ring-yellow-400 
                       focus:border-transparent"
            />
          </div>
        </div>

        {/* Genre Filter */}
        <div className="md:w-48">
          <label htmlFor="genre" className="sr-only">
            Filter by genre
          </label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md 
                     bg-white text-gray-900
                     focus:outline-none focus:ring-2 focus:ring-yellow-400 
                     focus:border-transparent"
          >
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
      </div>
    </div>
  );
}
