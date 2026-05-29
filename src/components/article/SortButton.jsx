function SortButton({ handleSort }) {
  return (
    <button
      onClick={handleSort}
      style={{
        height: "50px",
        padding: "0 24px",
        border: "none",
        borderRadius: "12px",
        background:
          "linear-gradient(135deg,#2563eb,#3b82f6)",
        color: "white",
        fontSize: "15px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "0.3s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform =
          "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform =
          "translateY(0)";
      }}
    >
      ⭐ Sort by Score
    </button>
  );
}

export default SortButton;