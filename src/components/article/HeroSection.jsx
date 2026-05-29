import hero400 from "../../assets/hero-400.webp";
import hero800 from "../../assets/hero-800.webp";
import hero1200 from "../../assets/hero-1200.webp";

function HeroSection() {
  return (
    <div
      style={{
        marginBottom: "30px",
      }}
    >
      <img
        data-testid="hero-image"
        src={hero1200}
        srcSet={`
          ${hero400} 400w,
          ${hero800} 800w,
          ${hero1200} 1200w
        `}
        sizes="(max-width: 600px) 400px,
               (max-width: 900px) 800px,
               1200px"
        width="1200"
        height="600"
        alt="Tech News Hero"
        style={{
          width: "100%",
          height: "auto",
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