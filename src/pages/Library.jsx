// src/pages/Library.jsx
import { useState } from "react";
import BookCard from "../components/BookCard";
import LibraryFilters from "../components/LibraryFilters";

const BOOKS = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    available: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Help",
    available: false,
  },
  {
    id: 3,
    title: "Design Patterns",
    author: "Erich Gamma",
    category: "Programming",
    available: true,
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    available: true,
  },
];

export default function Library() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredBooks = BOOKS.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Library Collection
        </h1>
        <p className="text-gray-600 mt-2">
          Explore, search and manage available books
        </p>
      </div>

      {/* Filters */}
      <LibraryFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No books found 📚
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
