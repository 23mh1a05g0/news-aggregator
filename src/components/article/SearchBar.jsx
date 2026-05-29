function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "500px",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: "15px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#94a3b8",
          fontSize: "18px",
        }}
      >
        🔍
      </span>

      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        style={{
          width: "100%",
          height: "50px",
          padding: "0 15px 0 45px",
          borderRadius: "12px",
          border: "1px solid #334155",
          background: "#1e293b",
          color: "#f8fafc",
          fontSize: "16px",
          outline: "none",
        }}
      />
    </div>
  );
}

export default SearchBar;