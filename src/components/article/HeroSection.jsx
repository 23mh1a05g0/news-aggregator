import hero400 from "../../assets/hero-400.webp";
import hero800 from "../../assets/hero-800.webp";
import hero1200 from "../../assets/hero-1200.webp";

function HeroSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        padding: "60px 30px",
        borderRadius: "20px",
        textAlign: "center",
        marginBottom: "30px",
        border: "1px solid #334155",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            background: "#2563eb",
            padding: "8px 16px",
            borderRadius: "30px",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          🚀 Real-Time HackerNews Feed
        </span>

        <h1
          style={{
            fontSize: "3rem",
            marginTop: "20px",
            marginBottom: "15px",
            fontWeight: "700",
          }}
        >
          Latest Tech News
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#94a3b8",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          Discover trending technology stories,
          startup updates, AI breakthroughs, and
          developer news from HackerNews in
          real-time.
        </p>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h2 style={{ color: "#38bdf8" }}>
              500+
            </h2>
            <p>Articles</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h2 style={{ color: "#22c55e" }}>
              ⚡
            </h2>
            <p>Optimized</p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "16px",
            }}
          >
            <h2 style={{ color: "#f59e0b" }}>
              🚀
            </h2>
            <p>Fast Loading</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;