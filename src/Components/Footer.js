// src/Components/Footer.js
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>MyShop</h2>
          <p>Bringing the best products to your doorstep</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>

        {/* Social */}
        <div className="footer-social">
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://linkedin.com"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 MyShop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
