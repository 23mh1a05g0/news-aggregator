import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: articles.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 220,
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      data-testid="article-list"
      style={{
        height: "700px",
        overflow: "auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        {virtualizer.getVirtualItems().map(
          (virtualRow) => {
            const article =
              articles[virtualRow.index];

            return (
              <div
                key={article.id}
                data-testid="article-item"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <ArticleCard article={article} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default ArticleList;