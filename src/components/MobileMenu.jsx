// MobileMenu.jsx

import React from "react";
import "./MobileMenu.css";
import { Link } from "react-router-dom";

export default function MobileMenu({
  showMenu,
  setShowMenu,
}) {

  return (

    <div
      className={
        showMenu
          ? "mobile-menu active"
          : "mobile-menu"
      }
    >

      {/* CLOSE BUTTON */}

      <button
        className="close-menu"
        onClick={() => setShowMenu(false)}
      >
        ×
      </button>

      {/* LINKS */}

      <div className="mobile-links">

        <Link
          to="/"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>

        <Link
          to="/properties"
          onClick={() => setShowMenu(false)}
        >
          Properties
        </Link>

        <Link
          to="/add-property"
          onClick={() => setShowMenu(false)}
        >
          Add Property
        </Link>

        <Link
          to="/contact"
          onClick={() => setShowMenu(false)}
        >
          Contacts
        </Link>

        <Link
          to="/login"
          onClick={() => setShowMenu(false)}
        >
          Login
        </Link>

      </div>

      {/* SOCIALS */}

      <div className="mobile-socials">

        <span>f</span>

        <span>𝕏</span>

        <span>◎</span>

        <span>in</span>

      </div>

    </div>
  );
}