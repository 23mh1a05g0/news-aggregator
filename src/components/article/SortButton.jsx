function SortButton({ handleSort }) {
  return (
    <button
      onClick={handleSort}
      style={{
        padding: "10px 20px",
        marginBottom: "20px",
        cursor: "pointer",
      }}
    >
      Sort by Score
    </button>
  );
}

export default SortButton;