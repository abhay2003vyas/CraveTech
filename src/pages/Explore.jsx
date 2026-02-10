// src/pages/Explore.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Explore() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  /* 🔐 AUTH CHECK */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please sign in to access Explore");
      navigate("/signin");
    }
  }, [navigate]);

  /* 📥 FETCH MOVIES */
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await api.get("/movies");
      setMovies(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  /* ➕ ADD MOVIE */
  const handleAddMovie = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/movies",
        { title, director, genre, releaseYear },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      setMovies([...movies, res.data]);
      setTitle("");
      setDirector("");
      setGenre("");
      setReleaseYear("");
      setIsFormVisible(false);

      alert("Movie added successfully 🎬");
    } catch (err) {
      console.error(err);
      alert("Failed to add movie");
    }
  };

  /* 🗑️ DELETE MOVIE */
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        await api.delete(`/movies/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setMovies(movies.filter((m) => m.id !== id));
      } catch (err) {
        console.error(err);
        alert("Delete failed");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            Explore Movies
          </h1>
          <p className="mt-2 text-gray-600">
            Manage and discover your movie collection
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Movie Button */}
        <div className="mb-6">
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="inline-flex items-center px-4 py-2 border border-transparent 
                     text-sm font-medium rounded-md text-white bg-yellow-500 
                     hover:bg-yellow-700 focus:outline-none focus:ring-2 
                     focus:ring-offset-2 focus:ring-yellow-400 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            {isFormVisible ? "Cancel" : "Add New Movie"}
          </button>
        </div>

        {/* Add Movie Form */}
        {isFormVisible && (
          <div className="mb-8 bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Add New Movie
            </h2>

            <form onSubmit={handleAddMovie} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Movie Title *
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter movie title"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-yellow-400 
                             focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="director"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Director *
                  </label>
                  <input
                    id="director"
                    type="text"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                    placeholder="Enter director name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-yellow-400 
                             focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="genre"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Genre *
                  </label>
                  <input
                    id="genre"
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder="e.g., Action, Drama"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-yellow-400 
                             focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Release Year *
                  </label>
                  <input
                    id="year"
                    type="number"
                    value={releaseYear}
                    onChange={(e) => setReleaseYear(e.target.value)}
                    placeholder="e.g., 2024"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-yellow-400 
                             focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormVisible(false)}
                  className="px-4 py-2 border border-gray-300 text-sm font-medium 
                           rounded-md text-gray-700 bg-white hover:bg-gray-50 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 
                           focus:ring-yellow-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent text-sm font-medium 
                           rounded-md text-white bg-yellow-500 hover:bg-yellow-700 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 
                           focus:ring-yellow-400"
                >
                  Add Movie
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Movies Grid */}
        {movies.length === 0 ? (
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
              No movies
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by adding a new movie.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white border border-gray-200 rounded-lg p-5 
                         hover:border-gray-300 transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-900 flex-1 pr-2">
                    {movie.title}
                  </h3>
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                    aria-label="Delete movie"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {movie.director}
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    {movie.genre}
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {movie.releaseYear}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
