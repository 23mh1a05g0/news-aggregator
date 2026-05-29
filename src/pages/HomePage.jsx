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
import StatsSection from "../components/article/StatsSection";
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

        // Optimized Parallel Fetching
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
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#f8fafc",
        }}
      >
        <h2>Loading Latest Stories...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ef4444",
        }}
      >
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "24px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Dashboard */}
      <StatsSection />

      {/* Search + Sort Toolbar */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "25px",
        }}
      >
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <SortButton handleSort={handleSort} />
      </div>

      {/* Article Count */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        <p
          style={{
            color: "#94a3b8",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Showing{" "}
          <span
            style={{
              color: "#38bdf8",
            }}
          >
            {filteredArticles.length}
          </span>{" "}
          of{" "}
          <span
            style={{
              color: "#38bdf8",
            }}
          >
            {articles.length}
          </span>{" "}
          articles
        </p>
      </div>

      {/* Virtualized Article List */}
      <ArticleList articles={filteredArticles} />

      {/* Lazy Loaded Performance Section */}
      <Suspense
        fallback={
          <div
            style={{
              textAlign: "center",
              marginTop: "30px",
              color: "#94a3b8",
            }}
          >
            Loading Performance Info...
          </div>
        }
      >
        <PerformanceInfo />
      </Suspense>
    </div>
  );
}

export default HomePage;