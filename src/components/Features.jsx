// src/components/Features.jsx
import { Card, CardContent } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleIcon from "@mui/icons-material/People";
import SecurityIcon from "@mui/icons-material/Security";

export default function Features() {
  const features = [
    {
      icon: <LibraryBooksIcon sx={{ fontSize: 36 }} />,
      title: "Book Management",
      desc: "Add, update, delete, and search books with ease."
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 36 }} />,
      title: "User Management",
      desc: "Manage students, admins, and librarians efficiently."
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 36 }} />,
      title: "Secure System",
      desc: "Role-based access with Spring Security backend."
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center mb-4 px-4 py-2 bg-red-50 rounded-full border border-red-200">
          <span className="text-sm font-medium text-red-600 tracking-wide">
            FEATURES
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
          Powerful Features for
          <span className="block text-red-600 mt-2">
            Modern Libraries
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Everything you need to manage your library efficiently, securely,
          and at scale.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <Card
            key={i}
            elevation={0}
            className="border border-gray-200 hover:border-red-500 transition-all duration-300"
          >
            <CardContent className="text-center px-8 py-10">
              
              {/* Icon */}
              <div className="flex justify-center mb-6 text-red-600">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {f.desc}
              </p>

            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
