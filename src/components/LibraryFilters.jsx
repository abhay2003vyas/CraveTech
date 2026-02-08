// src/components/LibraryFilters.jsx
export default function LibraryFilters({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
      >
        <option value="All">All Categories</option>
        <option value="Programming">Programming</option>
        <option value="Self Help">Self Help</option>
        <option value="Productivity">Productivity</option>
      </select>
    </div>
  );
}
