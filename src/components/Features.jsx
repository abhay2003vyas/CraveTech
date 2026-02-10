// src/components/Features.jsx
import { Card, CardContent } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";

export default function Features() {
  const features = [
    {
      icon: <MovieIcon sx={{ fontSize: 36 }} />,
      title: "Movie Management",
      desc: "Add, update, delete, and manage movies with complete information."
    },
    {
      icon: <PersonIcon sx={{ fontSize: 36 }} />,
      title: "Director-based Search",
      desc: "Browse and filter movies easily by director or release year."
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 36 }} />,
      title: "Secure Authentication",
      desc: "JWT-based login and role-based access using Spring Security."
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-6">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center mb-4 px-4 py-2 bg-indigo-50 rounded-full border border-indigo-200">
          <span className="text-sm font-medium text-indigo-600 tracking-wide">
            FEATURES
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 mb-6">
          Powerful Features for
          <span className="block text-indigo-600 mt-2">
            Movie Management
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          A modern and secure platform to manage movies, directors,
          and user access with ease.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <Card
            key={i}
            elevation={0}
            className="border border-slate-200 bg-white
                       hover:border-indigo-500 hover:shadow-lg
                       transition-all duration-300"
          >
            <CardContent className="text-center px-8 py-10">
              
              {/* Icon */}
              <div className="flex justify-center mb-6 text-rose-500">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {f.desc}
              </p>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
