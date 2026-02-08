// src/pages/HowItWorks.jsx
import { UserPlus, BookSearch, BookCheck, RotateCcw } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up securely with role-based access for students, librarians, and admins.",
  },
  {
    icon: BookSearch,
    title: "Explore the Library",
    description:
      "Browse books using smart search and filters to find exactly what you need.",
  },
  {
    icon: BookCheck,
    title: "Borrow with Ease",
    description:
      "Check availability and borrow books instantly with real-time updates.",
  },
  {
    icon: RotateCcw,
    title: "Return & Track",
    description:
      "Return books smoothly and track your reading history anytime.",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            How <span className="text-red-600">CraveTech</span> Works
          </h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A simple, intuitive flow designed for both readers and
            administrators.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center relative"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-red-600 flex items-center justify-center mb-6">
                  <Icon className="text-white w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Start your reading journey today
        </h2>
        <p className="text-gray-600 mb-6">
          Experience a smarter way to manage and explore books.
        </p>
        <a
          href="/library"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Explore Library
        </a>
      </section>
    </div>
  );
}
