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
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "8px",
      }}
    >
      <h3>{article.title}</h3>

      <p>
        <strong>Score:</strong>{" "}
        {article.score || 0}
      </p>

      <p>
        <strong>Author:</strong>{" "}
        {article.by || "Unknown"}
      </p>

      <p>
        <strong>Published:</strong>{" "}
        {formattedDate}
      </p>

      {article.url && (
        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
        >
          Read Article
        </a>
      )}
    </div>
  );
}

export default React.memo(ArticleCard);