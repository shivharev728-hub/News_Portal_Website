
import { FaSearch } from "react-icons/fa";

function SearchBar({ search, setSearch, handleSerach }) {
  return (
    <div className="flex justify-center my-8">
      <div className="flex w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search latest News"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-lg px-5 py-3 outline-none focus:border-red-500"
        />

        <button
          onClick={handleSerach}
          className="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700 transition"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
