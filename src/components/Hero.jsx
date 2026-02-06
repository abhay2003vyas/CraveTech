import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArrowForward, LibraryBooks, ChevronLeft, ChevronRight } from "@mui/icons-material";

const PrimaryButton = styled(Button)(() => ({
  fontFamily: "'Inter', 'Poppins', sans-serif",
  backgroundColor: "#DC2626",
  color: "#FFFFFF",
  fontWeight: 600,
  padding: "14px 36px",
  fontSize: "15px",
  borderRadius: "10px",
  textTransform: "none",
  letterSpacing: "0.3px",
  boxShadow: "0 6px 20px rgba(220, 38, 38, 0.25)",
  "&:hover": {
    backgroundColor: "#B91C1C",
    transform: "translateY(-2px)",
    boxShadow: "0 10px 28px rgba(220, 38, 38, 0.35)",
  },
  transition: "all 0.3s ease",
}));

const SecondaryButton = styled(Button)(() => ({
  fontFamily: "'Inter', 'Poppins', sans-serif",
  color: "#DC2626",
  borderColor: "#DC2626",
  borderWidth: "2px",
  fontWeight: 600,
  padding: "14px 36px",
  fontSize: "15px",
  borderRadius: "10px",
  textTransform: "none",
  letterSpacing: "0.3px",
  "&:hover": {
    backgroundColor: "rgba(220, 38, 38, 0.06)",
    borderColor: "#DC2626",
  },
  transition: "all 0.3s ease",
}));

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images - using placeholder images
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
      title: "Digital Library",
    },
    {
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      title: "Book Collection",
    },
    {
      url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      title: "Reading Space",
    },
    {
      url: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80",
      title: "Book Management",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-red-50/30 text-gray-900 py-16 md:py-24 px-6 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-red-50 rounded-full border border-red-200 shadow-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span className="text-sm font-semibold text-red-600 tracking-wide">
                ⚡ Modern Library Management Platform
              </span>
            </div>

            {/* Heading */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
            >
              Manage Your Library
              <span className="block text-red-600 mt-2">
                Smarter & Faster
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-normal"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.2px" }}
            >
              A secure and scalable book management system designed for modern
              libraries. Organize books, manage users, and track borrowing with ease.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-5 mb-12">
              <PrimaryButton endIcon={<ArrowForward />}>
                Get Started
              </PrimaryButton>

              <SecondaryButton startIcon={<LibraryBooks />}>
                View Features
              </SecondaryButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              {[
                { value: "10K+", label: "Books" },
                { value: "500+", label: "Users" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <h3 
                    className="text-3xl md:text-4xl font-bold text-red-600"
                    style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
                  >
                    {stat.value}
                  </h3>
                  <p 
                    className="text-gray-600 mt-1 text-xs md:text-sm font-medium"
                    style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.5px" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Main Carousel Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3] bg-black">
                {/* Images */}
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
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
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Image Title */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 
                        className="text-2xl md:text-3xl font-bold"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {image.title}
                      </h3>
                    </div>
                  </div>
                ))}

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronRight />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-black rounded-full blur-3xl opacity-10 -z-10"></div>
            </div>

            {/* Feature Cards Below Carousel */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">📚</div>
                <h4 
                  className="font-bold text-gray-900 mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Easy Catalog
                </h4>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Organize thousands of books
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">🔒</div>
                <h4 
                  className="font-bold text-gray-900 mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Secure Access
                </h4>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Protected user data
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}