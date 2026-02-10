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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b p-6">
        <h1 className="text-3xl font-semibold">Explore Movies</h1>
        <p className="text-gray-600">Your personal movie collection</p>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="mb-6 px-4 py-2 bg-yellow-500 text-white rounded"
        >
          {isFormVisible ? "Cancel" : "Add Movie"}
        </button>

        {isFormVisible && (
          <form
            onSubmit={handleAddMovie}
            className="bg-white p-6 rounded border mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {["title", "director", "genre", "releaseYear"].map((field) => (
              <input
                key={field}
                placeholder={field}
                required
                type={field === "releaseYear" ? "number" : "text"}
                value={form[field]}
                onChange={(e) =>
                  setForm({ ...form, [field]: e.target.value })
                }
                className="border p-2 rounded"
              />
            ))}
            <button className="col-span-full bg-yellow-500 text-white py-2 rounded">
              Save Movie
            </button>
          </form>
        )}

        {movies.length === 0 ? (
          <p className="text-center text-gray-500">No movies found</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white p-4 rounded border relative"
              >
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="absolute top-2 right-2 text-red-500"
                >
                  ✕
                </button>
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <p>{movie.director}</p>
                <p>{movie.genre}</p>
                <p>{movie.releaseYear}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
