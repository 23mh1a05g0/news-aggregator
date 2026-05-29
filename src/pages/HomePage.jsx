import {
  useEffect,
  useState,
  lazy,
  Suspense,
} from "react";

import sortBy from "lodash/sortBy";

import {
  fetchTopStories,
  fetchStoryById,
} from "../services/hackerNewsService";

import HeroSection from "../components/article/HeroSection";
import SearchBar from "../components/article/SearchBar";
import SortButton from "../components/article/SortButton";
import ArticleList from "../components/article/ArticleList";

// Lazy Loaded Component (Code Splitting)
const PerformanceInfo = lazy(() =>
  import("../components/article/PerformanceInfo")
);

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadStories = async () => {
      try {
        const ids = await fetchTopStories();

        // Optimization #1 - Parallel Fetching
        const storyPromises = ids
          .slice(0, 500)
          .map((id) => fetchStoryById(id));

        const stories = await Promise.all(
          storyPromises
        );

        setArticles(stories);
      } catch (err) {
        console.error(err);
        setError("Failed to load stories");
      } finally {
        setLoading(false);
      }
    };

    loadStories();
  }, []);

  // Search Filter
  const filteredArticles = articles.filter(
    (article) =>
      article.title
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  // Sort by Score
  const handleSort = () => {
    const sorted = sortBy(
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

      {/* Count */}
      <p
        style={{
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Showing {filteredArticles.length} of{" "}
        {articles.length} articles
      </p>

      {/* Virtualized Article List */}
      <ArticleList articles={filteredArticles} />

      {/* Lazy Loaded Component */}
      <Suspense
        fallback={
          <p style={{ marginTop: "20px" }}>
            Loading Performance Info...
          </p>
        }
      >
        <PerformanceInfo />
      </Suspense>
    </div>
  );
}

export default HomePage;