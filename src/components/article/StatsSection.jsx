function StatsSection() {
  const stats = [
    {
      icon: "📰",
      value: "500+",
      label: "Articles",
      color: "#38bdf8",
    },
    {
      icon: "⚡",
      value: "Fast",
      label: "Optimized",
      color: "#22c55e",
    },
    {
      icon: "🔍",
      value: "Live",
      label: "Search",
      color: "#f59e0b",
    },
    {
      icon: "🚀",
      value: "React",
      label: "Powered",
      color: "#a855f7",
    },
  ];

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: "16px",
            padding: "24px",
            textAlign: "center",
            transition: "0.3s ease",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              marginBottom: "10px",
            }}
          >
            {stat.icon}
          </div>

          <h2
            style={{
              color: stat.color,
              marginBottom: "8px",
            }}
          >
            {stat.value}
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}

export default StatsSection;