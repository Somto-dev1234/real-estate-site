import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import logoImg from "../assets/logo.png";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer className="footer">

      <div className="footer-grid">

        {/* CONTACT */}

        <div className="footer-col">

          <h3>Contact Us</h3>

          <p>
            📍 329 Queensberry Street,
            North Melbourne VIC 3051,
            Australia.
          </p>

          <p>☎ 123 456 7890</p>

          <p>✉ support@houzing.com</p>

          <div className="footer-socials">

            <a href="#" onClick={(e)=>e.preventDefault()}>f</a>

            <a href="#" onClick={(e)=>e.preventDefault()}>t</a>

            <a href="#" onClick={(e)=>e.preventDefault()}>◎</a>

            <a href="#" onClick={(e)=>e.preventDefault()}>in</a>

          </div>

        </div>

        {/* DISCOVER */}

        <div className="footer-col">

          <h3>Discover</h3>

          <Link to="/">Chicago</Link>

          <Link to="/">Los Angeles</Link>

          <Link to="/">Miami</Link>

          <Link to="/">New York</Link>

        </div>

        {/* CATEGORY */}

        <div className="footer-col">

          <h3>Lists By Category</h3>

          <Link to="/properties">Apartments</Link>

          <Link to="/properties">Condos</Link>

          <Link to="/properties">Houses</Link>

          <Link to="/properties">Offices</Link>

          <Link to="/properties">Retail</Link>

          <Link to="/properties">Villas</Link>

        </div>

        {/* LINKS */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <Link to="/">About Us</Link>

          <Link to="/">Terms & Conditions</Link>

          <Link to="/">Support Center</Link>

          <Link to="/">Contact Us</Link>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <div className="footer-logo">

          <img
            src={logoImg}
            alt="Houzing Logo"
          />

          <h2>Houzing</h2>

        </div>

        <p>
          Copyright © 2026 CreativeLayers.
          All Rights Reserved.
        </p>

        <button
          className="footer-top-btn"
          onClick={scrollToTop}
          title="Back to Top"
        >
          ↑
        </button>

      </div>

    </footer>

  );
}