import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  ArrowForward,
  Movie,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

/* ================= BUTTON STYLES ================= */

const PrimaryButton = styled(Button)(() => ({
  fontFamily: "'Inter', 'Poppins', sans-serif",
  backgroundColor: "#F1B621",
  color: "#0F172A",
  fontWeight: 600,
  padding: "14px 36px",
  fontSize: "15px",
  borderRadius: "10px",
  textTransform: "none",
  boxShadow: "0 8px 24px rgba(241, 182, 33, 0.35)",
  "&:hover": {
    backgroundColor: "#E0A900",
    transform: "translateY(-2px)",
  },
  transition: "all 0.3s ease",
}));

const SecondaryButton = styled(Button)(() => ({
  fontFamily: "'Inter', 'Poppins', sans-serif",
  color: "#F1B621",
  borderColor: "#F1B621",
  borderWidth: "2px",
  fontWeight: 600,
  padding: "14px 36px",
  fontSize: "15px",
  borderRadius: "10px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(241, 182, 33, 0.1)",
  },
  transition: "all 0.3s ease",
}));

/* ================= COMPONENT ================= */

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================= MOVIE CAROUSEL ================= */

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=900&q=80",
      title: "Blockbuster Movies",
    },
    {
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&q=80",
      title: "Cinema Experience",
    },
    {
      url: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=900&q=80",
      title: "Directors & Genres",
    },
    {
      url: "https://images.unsplash.com/photo-1608170825938-a8ea0305d46c?w=900&q=80",
      title: "Movie Analytics",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );

  return (
    <section className="relative bg-gradient-to-br from-[#020617] via-[#0F172A] to-black text-white py-20 px-6 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-[#F1B621]/10 rounded-full border border-[#F1B621]/30">
              <span className="text-sm font-semibold text-[#F1B621]">
                🎬 Modern Movie Management System
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Manage Movies
              <span className="block text-[#F1B621] mt-2">
                Smarter & Faster
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              A powerful platform to manage movies, directors, genres and
              release years. Perform CRUD operations, advanced filtering and
              real-time analytics with ease.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5 mb-12">
              <PrimaryButton endIcon={<ArrowForward />}>
                Explore Movies
              </PrimaryButton>

              <SecondaryButton startIcon={<Movie />}>
                View Features
              </SecondaryButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                { value: "5K+", label: "Movies" },
                { value: "300+", label: "Directors" },
                { value: "2025", label: "Latest Releases" },
              ].map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#F1B621]">
                    {stat.value}
                  </h3>
                  <p className="text-slate-400 mt-1 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT CAROUSEL ================= */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] bg-black">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-2xl md:text-3xl font-bold">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                ))}

                {/* Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-black p-2 rounded-full opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-black p-2 rounded-full opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight />
                </button>
              </div>

              {/* Glow */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F1B621] rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#020617] p-5 rounded-xl border border-white/10">
                <div className="text-3xl mb-2">🎞️</div>
                <h4 className="font-bold mb-1">Smart Catalog</h4>
                <p className="text-sm text-slate-400">
                  Manage movies by director & year
                </p>
              </div>
              <div className="bg-[#020617] p-5 rounded-xl border border-white/10">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-bold mb-1">Analytics Ready</h4>
                <p className="text-sm text-slate-400">
                  Insights on releases & genres
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
