import React from "react";

const dateFormatter = new Intl.DateTimeFormat(
  "en-US",
  {
    dateStyle: "medium",
    timeStyle: "short",
  }
);

function ArticleCard({ article }) {
  const formattedDate = dateFormatter.format(
    new Date(article.time * 1000)
  );

  return (
    <div
      style={{
        background: "#1e293b",
        border: "1px solid #334155",
        borderRadius: "16px",
        padding: "20px",
        marginBottom: "16px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        boxShadow:
          "0 4px 12px rgba(0,0,0,0.15)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 12px 24px rgba(0,0,0,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 12px rgba(0,0,0,0.15)";
      }}
    >
      {/* Title */}
      <h2
        style={{
          color: "#f8fafc",
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "1.5",
          marginBottom: "16px",
        }}
      >
        {article.title}
      </h2>

      {/* Meta Information */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "18px",
          color: "#94a3b8",
          fontSize: "14px",
        }}
      >
        <span>
          👤 {article.by || "Unknown"}
        </span>

        <span>
          ⭐ {article.score || 0}
        </span>

        <span>
          📅 {formattedDate}
        </span>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            background: "#0f172a",
            color: "#38bdf8",
            padding: "6px 12px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          HackerNews
        </span>

        {article.url && (
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#38bdf8",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            Read Article →
          </a>
        )}
      </div>
    </div>
  );
}

export default React.memo(ArticleCard);