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
      const res = await api.get("/movies");
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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b p-6">
        <h1 className="text-3xl font-semibold">Movie Collection</h1>
        <p className="text-gray-600">Explore and filter your movie library</p>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <MovieFilters
          search={search}
          setSearch={setSearch}
          genre={genre}
          setGenre={setGenre}
        />

        {filteredMovies.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No movies found</p>
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
