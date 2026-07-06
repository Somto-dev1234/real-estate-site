// Signup.jsx

import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";

export default function Signup() {

  return (

    <div className="signup-page">

      <div className="signup-box">

        {/* BACK BUTTON */}

        <Link
          to="/"
          className="back-btn"
        >
          ← Back
        </Link>

        <h2>
          Sign Up
        </h2>

        <form className="signup-form">

          <input
            type="text"
            placeholder="First name"
          />

          <input
            type="text"
            placeholder="Last name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <select>

            <option>
              User role
            </option>

            <option>
              Buyer
            </option>

            <option>
              Seller
            </option>

            <option>
              Agent
            </option>

          </select>

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Re-enter password"
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}