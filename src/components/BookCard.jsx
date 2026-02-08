// src/components/BookCard.jsx
export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Book Cover Placeholder */}
      <div className="h-48 bg-gradient-to-br from-gray-900 to-red-600 rounded-t-xl flex items-center justify-center text-white text-xl font-semibold">
        {book.title.charAt(0)}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">
          {book.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          {book.author}
        </p>

        <span className="text-xs mt-3 inline-block w-fit px-3 py-1 rounded-full bg-gray-100 text-gray-700">
          {book.category}
        </span>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span
            className={`text-sm font-medium ${
              book.available ? "text-green-600" : "text-red-600"
            }`}
          >
            {book.available ? "Available" : "Not Available"}
          </span>

          <button
            disabled={!book.available}
            className={`px-4 py-2 text-sm rounded-lg font-semibold transition ${
              book.available
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {book.available ? "Borrow" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
}
