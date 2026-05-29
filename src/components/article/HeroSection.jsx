import heroImage from "../../assets/Banner.png";

function HeroSection() {
  return (
    <div
      style={{
        marginBottom: "30px",
      }}
    >
      <img
        src={heroImage}
        alt="Tech News Hero"
        style={{
          width: "100%",
          maxHeight: "500px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <h1>Latest Tech News</h1>

        <p>
          Stay updated with the latest
          HackerNews stories and trends.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;