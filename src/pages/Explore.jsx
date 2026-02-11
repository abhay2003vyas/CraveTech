// src/pages/Explore.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Explore() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const token = localStorage.getItem("token");

  /* 🔐 AUTH CHECK + FETCH USER MOVIES */
  useEffect(() => {
    if (!token) {
      alert("Please sign in to access Explore");
      navigate("/signin");
      return;
    }

    fetchMyMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 📥 FETCH ONLY LOGGED-IN USER MOVIES */
  const fetchMyMovies = async () => {
    try {
      const res = await api.get("/movies/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMovies(res.data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  /* ➕ ADD MOVIE */
  const handleAddMovie = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/movies", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMovies((prev) => [...prev, res.data]);
      setForm({
        title: "",
        director: "",
        genre: "",
        releaseYear: "",
      });
      setIsFormVisible(false);
    } catch (err) {
      console.error("Add failed", err);
      alert("Failed to add movie");
    }
  };

  /* 🗑️ DELETE MOVIE */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this movie?")) return;

    try {
      await api.delete(`/movies/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMovies((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error("Delete failed", err);
      alert("Delete failed");
    }
  };

  // Generate consistent colors for movie cards
  const colors = [
    { bg: 'from-indigo-500 to-purple-600', text: 'text-indigo-700', light: 'bg-indigo-50' },
    { bg: 'from-blue-500 to-cyan-600', text: 'text-blue-700', light: 'bg-blue-50' },
    { bg: 'from-emerald-500 to-teal-600', text: 'text-emerald-700', light: 'bg-emerald-50' },
    { bg: 'from-orange-500 to-red-600', text: 'text-orange-700', light: 'bg-orange-50' },
    { bg: 'from-pink-500 to-rose-600', text: 'text-pink-700', light: 'bg-pink-50' },
    { bg: 'from-violet-500 to-fuchsia-600', text: 'text-violet-700', light: 'bg-violet-50' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-yellow-900 tracking-tight">
                My Collection
              </h1>
              <p className="mt-2 text-base text-yellow-600 font-medium">
                Create and manage your personal movie library
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-yellow-500">Total Movies</p>
                <p className="text-2xl font-bold text-yellow-900">{movies.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Add Movie Button */}
        <div className="mb-8">
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            {isFormVisible ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add New Movie
              </>
            )}
          </button>
        </div>

        {/* Add Movie Form */}
        {isFormVisible && (
          <div className="mb-8 animate-fadeIn">
            <form
              onSubmit={handleAddMovie}
              className="bg-white rounded-2xl shadow-xl border border-yellow-200 p-8"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-yellow-900 mb-2">Add New Movie</h2>
                <p className="text-sm text-yellow-600">Fill in the details to add a movie to your collection</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-yellow-700 mb-2">
                    Movie Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter movie title"
                    required
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-yellow-700 mb-2">
                    Director
                  </label>
                  <input
                    type="text"
                    placeholder="Enter director name"
                    required
                    value={form.director}
                    onChange={(e) => setForm({ ...form, director: e.target.value })}
                    className="w-full px-4 py-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-yellow-700 mb-2">
                    Genre
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Action, Drama, Comedy"
                    required
                    value={form.genre}
                    onChange={(e) => setForm({ ...form, genre: e.target.value })}
                    className="w-full px-4 py-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-yellow-700 mb-2">
                    Release Year
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 2024"
                    required
                    value={form.releaseYear}
                    onChange={(e) => setForm({ ...form, releaseYear: e.target.value })}
                    className="w-full px-4 py-3 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Save Movie to Collection
              </button>
            </form>
          </div>
        )}

        {/* Movies Grid */}
        {movies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-md border border-yellow-200">
            <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
              </svg>
            </div>
            <p className="text-xl font-bold text-yellow-900 mb-2">No movies in your collection yet</p>
            <p className="text-sm text-yellow-500 mb-6">Start building your library by adding your first movie</p>
            <button
              onClick={() => setIsFormVisible(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Add Your First Movie
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((movie, index) => {
              const colorIndex = movie.title.charCodeAt(0) % colors.length;
              const selectedColor = colors[colorIndex];

              return (
                <div
                  key={movie.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100"
                >
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(movie.id)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all duration-200 shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Poster Section */}
                  <div className={`relative h-48 bg-gradient-to-br ${selectedColor.bg}`}>
                    {/* Decorative elements */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute w-32 h-32 -top-16 -right-16 bg-white rounded-full"></div>
                      <div className="absolute w-24 h-24 -bottom-12 -left-12 bg-white rounded-full"></div>
                    </div>

                    {/* Movie icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-yellow-900 mb-2 line-clamp-2 leading-tight">
                      {movie.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-yellow-600 flex items-center gap-2">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-medium">{movie.director}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${selectedColor.light} ${selectedColor.text}`}>
                        {movie.genre}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700">
                        {movie.releaseYear}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}