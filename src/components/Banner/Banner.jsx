import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/form");
  };

  const handleLearnMoreClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const text = `Suchi Gowdru 😎 — Visual Arts, capturing stories through the lens. As a passionate ಕನ್ನಡಿಗ photographer and cinematographer, Suchi Gowdru specializes in wedding shoots, celebrity sessions, and baby photography. With a unique blend of creativity and authentic storytelling, every frame reflects emotion, style, and timeless memories. @theimageryhouse`;

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.5,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  return (
    <div className="banner">
      <motion.div
        className="banner-text"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            style={{ display: "inline-block", marginRight: "6px" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="banner-button-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <button onClick={handleBookNowClick}>Book Now</button>
        <button onClick={handleLearnMoreClick}>Learn More</button>
      </motion.div>
    </div>
  );
};

export default Banner;
