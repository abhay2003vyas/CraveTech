// src/pages/Movies.jsx
import { useEffect, useState } from "react";
import api from "../api/api";
import MovieCard from "../components/MovieCard";
import MovieFilters from "../components/MovieFilters";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const fetchMovies = async () => {
    try {
      const res = await api.get("/movies/public");
      setMovies(res.data);
    } catch (err) {
      console.error("Failed to fetch movies", err);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.director.toLowerCase().includes(search.toLowerCase());

    const matchesGenre = genre === "All" || movie.genre === genre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-4xl font-bold text-yellow-900 tracking-tight">
                Movie Collection
              </h1>
              <p className="mt-2 text-base text-yellow-600 font-medium">
                Explore and filter your movie library
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-yellow-500">
              <span className="px-3 py-1.5 bg-yellow-100 rounded-md font-semibold text-yellow-700">
                {filteredMovies.length}
              </span>
              <span>movies found</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="mb-8">
          <MovieFilters
            search={search}
            setSearch={setSearch}
            genre={genre}
            setGenre={setGenre}
          />
        </div>

        {/* Movies Grid */}
        {filteredMovies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 mb-4 rounded-full bg-yellow-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </div>
            <p className="text-lg font-medium text-yellow-900">No movies found</p>
            <p className="text-sm text-yellow-500 mt-1">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}