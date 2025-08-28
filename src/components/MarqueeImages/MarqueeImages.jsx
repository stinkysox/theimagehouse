import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  const categories = {
    "Right Images": [
      {
        imageUrl: "https://i.postimg.cc/1tfvP1kx/TIH03891.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/63jf1bqH/TIH06763.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/zXh77rZv/TIH05667.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/prBCJV8F/TIH05393.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/T3J7J9Vs/TIH03957.jpg",
      },
    ],
    "Left Images": [
      {
        imageUrl: "https://i.postimg.cc/cJMvHKNw/TIH01906.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/XJQs67Hk/TIH08681.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/XNdxcW0J/WAS04813.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/RFynHkNz/TIH07761-Edit.jpg",
      },
      {
        imageUrl: "https://i.postimg.cc/YqjskYwG/TIH09959.jpg",
      },
    ],
  };

  const rightImages = categories["Right Images"];
  const leftImages = categories["Left Images"];

  // Generate empty placeholders if no images present
  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  // Render images with lazy loading & descriptive alt text
  const renderImages = (imagesArray, direction) => {
    if (!imagesArray || imagesArray.length === 0) return generateEmptyImages();

    return imagesArray.map((imgObj, idx) => (
      <img
        key={`${direction}-${idx}`}
        className="marquee-img"
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
        loading="lazy"
        draggable={false}
      />
    ));
  };

  return (
    <>
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
