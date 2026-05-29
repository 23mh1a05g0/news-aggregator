import { useEffect, useState } from "react";
import _ from "lodash";

import {
  fetchTopStories,
  fetchStoryById,
} from "../services/hackerNewsService";

import HeroSection from "../components/article/HeroSection";
import SearchBar from "../components/article/SearchBar";
import SortButton from "../components/article/SortButton";
import ArticleList from "../components/article/ArticleList";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadStories = async () => {
      try {
        const ids = await fetchTopStories();

        const stories = [];

        // INTENTIONAL SLOW VERSION
        // Sequential fetching (Network Waterfall)
        for (const id of ids.slice(0, 500)) {
          const story = await fetchStoryById(id);
          stories.push(story);
        }

        setArticles(stories);
      } catch (err) {
        setError("Failed to load stories");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadStories();
  }, []);

  // Search Filter (intentionally unoptimized)
  const filteredArticles = articles.filter((article) =>
    article.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Sort by Score (using full lodash import intentionally)
  const handleSort = () => {
    const sorted = _.sortBy(
      filteredArticles,
      "score"
    ).reverse();

    setArticles([...sorted]);
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h2>Loading Stories...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Search */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Sort */}
      <SortButton handleSort={handleSort} />

      {/* Article Count */}
      <p
        style={{
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Showing {filteredArticles.length} of{" "}
        {articles.length} articles
      </p>

      {/* Articles */}
      <ArticleList articles={filteredArticles} />
    </div>
  );
}

export default HomePage;