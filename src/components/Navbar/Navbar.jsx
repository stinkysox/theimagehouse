import React from "react";
import "./Navbar.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <section className="navbar">
      <motion.img
        src="https://i.postimg.cc/L6VwNNDP/LOGO-Clubbed-WHITE.png"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="navbar-logo"
      />
      <motion.a
        href="tel:+919876543210"
        className="navbar-phone"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        +91 98765 43210
      </motion.a>
      <motion.div
        className="nav-social-media-icon instagram"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{
          rotate: [0, -10, 10, -10, 10, 0],
          transition: { duration: 0.4 },
        }}
      >
        <a
          href="https://www.instagram.com/theimageryhouse/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram />
        </a>
      </motion.div>
    </section>
  );
};

export default Navbar;
