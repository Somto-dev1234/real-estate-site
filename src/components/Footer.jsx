import React from "react";
import "./Footer.css";

import logoImg from "../assets/logo.png";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footer-grid">

        {/* CONTACT */}

        <div className="footer-col">

          <h3>
            Contact Us
          </h3>

          <p>
            📍 329 Queensberry Street,
            North Melbourne VIC 3051,
            Australia.
          </p>

          <p>
            ☎ 123 456 7890
          </p>

          <p>
            ✉ support@houzing.com
          </p>

          <div className="footer-socials">

            <a href="/">
              f
            </a>

            <a href="/">
              t
            </a>

            <a href="/">
              ◎
            </a>

            <a href="/">
              in
            </a>

          </div>

        </div>

        {/* DISCOVER */}

        <div className="footer-col">

          <h3>
            Discover
          </h3>

          <a href="/">
            Chicago
          </a>

          <a href="/">
            Los Angeles
          </a>

          <a href="/">
            Miami
          </a>

          <a href="/">
            New York
          </a>

        </div>

        {/* CATEGORY */}

        <div className="footer-col">

          <h3>
            Lists By Category
          </h3>

          <a href="/">
            Apartments
          </a>

          <a href="/">
            Condos
          </a>

          <a href="/">
            Houses
          </a>

          <a href="/">
            Offices
          </a>

          <a href="/">
            Retail
          </a>

          <a href="/">
            Villas
          </a>

        </div>

        {/* LINKS */}

        <div className="footer-col">

          <h3>
            Lists By Category
          </h3>

          <a href="/">
            About Us
          </a>

          <a href="/">
            Terms & Conditions
          </a>

          <a href="/">
            Support Center
          </a>

          <a href="/">
            Contact Us
          </a>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <div className="footer-logo">

          <img
            src={logoImg}
            alt=""
          />

          <h2>
            Houzing
          </h2>

        </div>

        <p>
          Copyright © 2026 CreativeLayers.
          All Right Reserved.
        </p>

        <button className="footer-top-btn">
          ↑
        </button>

      </div>

    </footer>

  );
}