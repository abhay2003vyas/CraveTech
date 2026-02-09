import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function SignIn() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setError("");

    try {

      const res = await api.post("/auth/login", {
        email,
        password,
      });

      /* SAVE TOKEN */
      localStorage.setItem("token", res.data.token);

      /* NOTIFY NAVBAR */
      window.dispatchEvent(new Event("authChanged"));

      alert("Login successful");

      /* REDIRECT */
      navigate("/");

    } catch (err) {

      console.error(err);

      if (err.response?.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("Login failed. Please try again.");
      }

      alert(error || "Login failed");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center text-red-600 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Sign in to your library account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>

            <a href="#" className="text-red-600 hover:underline">
              Forgot password?
            </a>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-red-600 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>

      </div>
    </div>
  );
}

