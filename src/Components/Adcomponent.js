import React, { useEffect, useState } from "react";

const AdBannerSlider = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/get/adbanner`);
        if (!res.ok) throw new Error("Failed to fetch banners");
        const data = await res.json();
        setBanners(data);
      } catch (error) {
        console.error("Error loading banners:", error);
      }
    };

    fetchBanners();
  }, []);

  // Auto-slide every 2 seconds
  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [banners]);

  return (
    <div style={styles.container}>
      {/* Slide Wrapper */}
      <div
        style={{
          ...styles.slider,
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.adbanner}
            alt={`Ad Banner ${index + 1}`}
            style={styles.image}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div style={styles.dots}>
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              ...styles.dot,
              ...(index === currentIndex ? styles.activeDot : {}),
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

// 🔧 Styles
const styles = {
  container: {
    overflow: "hidden",
    width: "100%",
    height: "400px",
    marginTop: "50px",
  },
  slider: {
    display: "flex",
    transition: "transform 0.8s ease-in-out",
  },
  image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    flexShrink: 0,
  },
  dots: {
    bottom: "12px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
  },
  dot: {
    cursor: "pointer",
    height: "10px",
    width: "10px",
    margin: "0 5px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "50%",
    transition: "background-color 0.3s",
  },
  activeDot: {
    backgroundColor: "white",
  },
};

// Responsive styling
const style = document.createElement("style");
style.innerHTML = `
  @media (max-width: 768px) {
    .ad-banner-container {
      height: 250px;
    }
    .ad-banner-image {
      height: 250px;
    }
  }
`;
document.head.appendChild(style);

export default AdBannerSlider;
