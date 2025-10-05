import React, { useEffect, useState } from "react";
import "../Style/AdBannerSlider.css"; // 👉 Create a separate CSS file

const AdBannerSlider = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch banners
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/get/adbanner");
        if (!res.ok) throw new Error("Failed to fetch banners");
        const data = await res.json();
        setBanners(data);
      } catch (error) {
        console.error("Error loading banners:", error);
      }
    };

    fetchBanners();
  }, []);

  // Auto-slide
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
    <div className="ad-banner-container">
      {/* Slide Wrapper */}
      <div
        className="ad-banner-slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner.adbanner}
            alt={`Ad Banner ${index + 1}`}
            className="ad-banner-image"
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="ad-banner-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`ad-banner-dot ${
              index === currentIndex ? "active" : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AdBannerSlider;
