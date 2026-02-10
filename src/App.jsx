import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Insights from "./pages/Insights";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </main>

      {/* Footer visible on all pages */}
      <Footer />
    </div>
  );
}

export default App;
