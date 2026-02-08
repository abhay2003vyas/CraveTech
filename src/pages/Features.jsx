// src/pages/Features.jsx
import {
  BookOpen,
  Search,
  ShieldCheck,
  Users,
  BarChart3,
  Cloud,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Smart Library Management",
    description:
      "Centralized book catalog with real-time availability, categories, and author-based organization for smooth management.",
  },
  {
    icon: Search,
    title: "Advanced Search & Filters",
    description:
      "Search books instantly using title, author, or category with lightning-fast filtering and clean UX.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Role-based login for Admin, Librarian, and Student with encrypted passwords and JWT-based authorization.",
  },
  {
    icon: Users,
    title: "User & Role Management",
    description:
      "Admins can manage users, assign roles, and monitor activity effortlessly from a unified dashboard.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track borrowing trends, popular books, and user activity with meaningful data visualization.",
  },
  {
    icon: Cloud,
    title: "Scalable & Cloud Ready",
    description:
      "Built with React + Spring Boot + SQL, designed to scale and deploy seamlessly on cloud platforms.",
  },
];

export default function Features() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Powerful Features.{" "}
            <span className="text-red-600">Smart Library.</span>
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage, explore, and scale a modern
            library system — built for performance and simplicity.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group"
              >
                <div className="w-14 h-14 rounded-lg bg-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Icon className="text-white w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Role Based Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Students & Readers
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Easy book discovery & borrowing</li>
              <li>✔ Real-time availability status</li>
              <li>✔ Clean, distraction-free interface</li>
              <li>✔ Mobile-friendly experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Admins & Librarians
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>✔ Add, update & manage books</li>
              <li>✔ Track issued & returned books</li>
              <li>✔ User and role management</li>
              <li>✔ Analytics & reports</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to experience a smarter library?
        </h2>
        <p className="text-gray-300 mb-6">
          Get started today and transform how books are managed.
        </p>
        <a
          href="/signup"
          className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
