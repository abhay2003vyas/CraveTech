// src/pages/Movies.jsx
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieFilters from "../components/MovieFilters";

const MOVIES = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseYear: 2010,
  },
  {
    id: 2,
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseYear: 2014,
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    genre: "Action",
    releaseYear: 2008,
  },
  {
    id: 4,
    title: "Parasite",
    director: "Bong Joon-ho",
    genre: "Thriller",
    releaseYear: 2019,
  },
];

export default function Movies() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filteredMovies = MOVIES.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(search.toLowerCase()) ||
      movie.director.toLowerCase().includes(search.toLowerCase());

    const matchesGenre = genre === "All" || movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Movie Collection
          </h1>
          <p className="mt-2 text-gray-600">
            Explore, filter and manage your movie library
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <MovieFilters
          search={search}
          setSearch={setSearch}
          genre={genre}
          setGenre={setGenre}
        />

        {/* Movies Grid */}
        {filteredMovies.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
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
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No movies found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
