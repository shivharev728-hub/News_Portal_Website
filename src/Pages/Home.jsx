import {
  getTopHeadlines,
  getCategoryNews,
  searchNews,
} from "../services/apiService";

import { toast } from "react-toastify";
import { useState, useEffect } from "react";

import Loader from "../Components/Loader";
import NewsCard from "../Components/NewsCard";
import Category from "../Components/Category";
import SearchBar from "../Components/search";

function Home() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");

  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetchNews();
  }, [category]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setIsSearching(false);

      let data;

      if (category === "general") {
        data = await getTopHeadlines();
      } else {
        data = await getCategoryNews(category);
      }

      setNewsData(data);
    } catch (error) {
      // console.log(error);
      toast.error("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSerach = async () => {
    if (!search.trim()) {
      toast.error("Please Enter Something to Search");
      return;
    }

    try {
      setLoading(true);
      setIsSearching(true);

      const data = await searchNews(search);

      setNewsData(data);
    } catch (error) {
      console.log(error);
      toast.error("Search Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      {/* Red Banner */}
      <div className="bg-linear-to-r from-red-700 to-red-600 text-white rounded-xl p-10">
        <h1 className="text-4xl font-bold">Stay Updated With Latest News</h1>

        <p className="mt-5 text-lg">
          Reads the latest news from around the world
        </p>

        <button className="mt-6 bg-white text-red-600 text-lg px-6 py-3 rounded-lg font-semibold">
          Explore News
        </button>
      </div>

      {/* Search Box */}
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSerach={handleSerach}
      />

      {/* Categories */}
      <Category category={category} setCategory={setCategory} />

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 capitalize">
        {isSearching
          ? `Search Results for "${search}"`
          : category === "general"
            ? "Top Headlines"
            : `${category} News`}
      </h2>

      {/* News */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.length > 0 ? (
            newsData.map((n, index) => <NewsCard key={index} news={n} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No News Found
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
