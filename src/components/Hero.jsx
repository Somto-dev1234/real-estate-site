// Hero.jsx
import React, { useState, useRef, useEffect } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "../assets/hero.jpg";
import logoImg from "../assets/logo.png";
import contactIcon from "../assets/Vector@2x.png";

import MobileMenu from "../components/MobileMenu";

import houseImg from "../assets/house.jpg";
import apartmentImg from "../assets/apartment.jpg";
import officeImg from "../assets/office.jpg";
import villaImg from "../assets/villa.jpg";
import trustedIcon from "../assets/trusted.png";
import propertyIcon from "../assets/property.png";
import financeIcon from "../assets/finance.png";
import locationIcon from "../assets/location.png";

export default function Hero() {

  // MOBILE MENU

  const [showMenu, setShowMenu] =
    useState(false);

  // ADVANCED SEARCH

  const [showPrice, setShowPrice] =
    useState(false);

  // CATEGORY POPUP

  const [activeCategory, setActiveCategory] =
    useState(null);
    // TESTIMONIALS

const testimonials = [
  {
    text: "I believe in lifelong learning and Houzing is a great place to learn from experts.",
    image: houseImg,
    name: "Marvin McKinney",
    role: "Designer",
  },
  {
    text: "Amazing properties and smooth customer service experience.",
    image: villaImg,
    name: "Sarah Johnson",
    role: "Architect",
  },
  {
    text: "Professional agents and beautiful homes everywhere.",
    image: officeImg,
    name: "Daniel Smith",
    role: "Engineer",
  },
  {
    text: "Best real estate platform I have ever used online.",
    image: apartmentImg,
    name: "Jessica Brown",
    role: "Entrepreneur",
  },
];

const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, 3500);

  return () => clearInterval(timer);
}, []);

const nextSlide = () => {
  setActiveIndex((prev) => (prev + 1) % testimonials.length);
};

const prevSlide = () => {
  setActiveIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
};

  return (

    <>

      <div
        className="hero"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >

        {/* ================= NAVBAR ================= */}

        <nav className="navbar">

          <button
            className="menu-btn"
            onClick={() => setShowMenu(true)}
          >
            ☰
          </button>

          <div className="logo">

            <img
              src={logoImg}
              alt="logo"
              className="logo-img"
            />

            <h2>Houzing</h2>

          </div>

          <div className="nav-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/properties">
              Properties
            </Link>

            <Link to="/add-property">
              Add Property
            </Link>

            <Link to="/contact">
              Contacts
            </Link>

          </div>

          <div className="nav-right">

            <Link
              to="/signup"
              className="login-btn"
            >

              <img
                src={contactIcon}
                alt="login"
                className="contact-img"
              />

            </Link>

            <Link
              to="/login"
              className="login-text-btn"
            >
              Log In
            </Link>

          </div>

        </nav>

        {/* ================= MOBILE MENU ================= */}

        <MobileMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />

        {/* ================= PROPERTY ================= */}

        <div className="mobile-property">

          <h1>
            Skyper Pool Apartment
          </h1>

          <p>
            112 Glenwood Ave Hyde Park,
            Boston, MA
          </p>

          <div className="property-stats">

            <span>
              🛏
              <small>4 beds</small>
            </span>

            <span>
              🛁
              <small>5 Baths</small>
            </span>

            <span>
              🚗
              <small>1 Garage</small>
            </span>

            <span>
              📐
              <small>1200 Sq Ft</small>
            </span>

          </div>

          <h2>$5,250/mo</h2>

          <button className="read-btn">
            Read more
          </button>

        </div>

        {/* ================= SEARCH SECTION ================= */}

        <div className="hero-search-section">

          <div className="top-search-bar">

            <input
              type="text"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
            />

            <button
              className="advanced-open-btn"
              onClick={() => setShowPrice(!showPrice)}
            >
              {showPrice ? "Close" : "Advanced"}
            </button>

            <button className="hero-search-btn">
              Search
            </button>

          </div>

          {showPrice && (

            <div className="advanced-search-box">

              <h3>
                Address
              </h3>

              <div className="advanced-grid two-col">

                <input
                  type="text"
                  placeholder="Country"
                />

                <input
                  type="text"
                  placeholder="Region"
                />

                <input
                  type="text"
                  placeholder="City"
                />

                <input
                  type="text"
                  placeholder="Zip code"
                />

              </div>

              <h3>
                Apartment info
              </h3>

              <div className="advanced-grid three-col">

                <input
                  type="text"
                  placeholder="Rooms"
                />

                <input
                  type="text"
                  placeholder="Size"
                />

                <input
                  type="text"
                  placeholder="Sort"
                />

              </div>

              <h3>
                Price
              </h3>

              <div className="advanced-grid two-col">

                <input
                  type="text"
                  placeholder="Min price"
                />

                <input
                  type="text"
                  placeholder="Max price"
                />

              </div>

              <div className="advanced-actions">

                <button
                  className="cancel-advanced"
                  onClick={() => setShowPrice(false)}
                >
                  Cancel
                </button>

                <button className="submit-advanced">
                  Submit
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

      {/* ================= WHY CHOOSE US ================= */}

  <section className="why-section">

  <div className="why-top">

    <h2>Why Choose Us?</h2>

    <p>
      Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
    </p>

  </div>

  <div className="why-grid">

    {/* CARD 1 */}

    <div className="why-card">

      <div className="why-icon">

        <img
          src={trustedIcon}
          alt="Trusted"
        />

      </div>

      <h3>Trusted By Thousands</h3>

      <p>
        With over 1 million+ homes for sale available on the website,
        Houzing can match you with a house you will want to call home.
      </p>

    </div>

    {/* CARD 2 */}

    <div className="why-card">

      <div className="why-icon">

        <img
          src={propertyIcon}
          alt="Properties"
        />

      </div>

      <h3>Wide Range Of Properties</h3>

      <p>
        Explore apartments, villas, duplexes and luxury homes in different locations.
      </p>

    </div>

    {/* CARD 3 */}

    <div className="why-card">

      <div className="why-icon">

        <img
          src={financeIcon}
          alt="Finance"
        />

      </div>

      <h3>Financing Made Easy</h3>

      <p>
        We make it simple to find properties that fit your budget and lifestyle.
      </p>

    </div>

    {/* CARD 4 */}

    <div className="why-card">

      <div className="why-icon">

        <img
          src={locationIcon}
          alt="Location"
        />

      </div>

      <h3>See Neighborhoods</h3>

      <p>
        Discover nearby schools, parks, shopping centers and amazing communities.
      </p>

    </div>

  </div>

</section>

      {/* ================= CATEGORY SECTION ================= */}

      <section className="category-section">

        <div className="category-top">

          <h2>
            Category
          </h2>

          <p>
            Choose your preferred property type
          </p>

        </div>

        <div className="category-slider">

          {/* HOUSE */}

          <div className="category-box">

            <div
              className="category-card"
              style={{
                backgroundImage: `url(${houseImg})`,
              }}

              onClick={() =>
                setActiveCategory(
                  activeCategory === "house"
                    ? null
                    : "house"
                )
              }
            >

              <div className="category-overlay">

                <div className="category-icon">
                  🏠
                </div>

                <h3>
                  House
                </h3>

              </div>

            </div>

            {activeCategory === "house" && (

              <div className="property-popup active-popup">

                <div className="popup-property">

                  <img
                    src={houseImg}
                    alt=""
                  />

                  <h4>
                    Modern Family House
                  </h4>

                  <p>
                    $4,500/mo
                  </p>

                  <a href="#contact-section">
                    Choose Property
                  </a>

                </div>

              </div>

            )}

          </div>

          {/* APARTMENT */}

          <div className="category-box">

            <div
              className="category-card"
              style={{
                backgroundImage: `url(${apartmentImg})`,
              }}

              onClick={() =>
                setActiveCategory(
                  activeCategory === "apartment"
                    ? null
                    : "apartment"
                )
              }
            >

              <div className="category-overlay">

                <div className="category-icon">
                  🏢
                </div>

                <h3>
                  Apartment
                </h3>

              </div>

            </div>

            {activeCategory === "apartment" && (

              <div className="property-popup active-popup">

                <div className="popup-property">

                  <img
                    src={apartmentImg}
                    alt=""
                  />

                  <h4>
                    Luxury Apartment
                  </h4>

                  <p>
                    $3,200/mo
                  </p>

                  <a href="#contact-section">
                    Choose Property
                  </a>

                </div>

              </div>

            )}

          </div>

          {/* OFFICE */}

          <div className="category-box">

            <div
              className="category-card"
              style={{
                backgroundImage: `url(${officeImg})`,
              }}

              onClick={() =>
                setActiveCategory(
                  activeCategory === "office"
                    ? null
                    : "office"
                )
              }
            >

              <div className="category-overlay">

                <div className="category-icon">
                  🏬
                </div>

                <h3>
                  Office
                </h3>

              </div>

            </div>

            {activeCategory === "office" && (

              <div className="property-popup active-popup">

                <div className="popup-property">

                  <img
                    src={officeImg}
                    alt=""
                  />

                  <h4>
                    Business Office
                  </h4>

                  <p>
                    $5,800/mo
                  </p>

                  <a href="#contact-section">
                    Choose Property
                  </a>

                </div>

              </div>

            )}

          </div>

          {/* VILLA */}

          <div className="category-box">

            <div
              className="category-card"
              style={{
                backgroundImage: `url(${villaImg})`,
              }}

              onClick={() =>
                setActiveCategory(
                  activeCategory === "villa"
                    ? null
                    : "villa"
                )
              }
            >

              <div className="category-overlay">

                <div className="category-icon">
                  🏡
                </div>

                <h3>
                  Villa
                </h3>

              </div>

            </div>

            {activeCategory === "villa" && (

              <div className="property-popup active-popup">

                <div className="popup-property">

                  <img
                    src={villaImg}
                    alt=""
                  />

                  <h4>
                    Beach Villa
                  </h4>

                  <p>
                    $8,500/mo
                  </p>

                  <a href="#contact-section">
                    Choose Property
                  </a>

                </div>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* ================= RECENT PROPERTIES ================= */}

<section className="recent-section">

  <div className="recent-top">

    <h2>
      Recent Properties for Rent
    </h2>

    <p>
      Browse our latest luxury properties
    </p>

  </div>

  <div className="recent-slider">

    {/* LEFT BUTTON */}

    <button className="recent-arrow">
      ❮
    </button>

    {/* CARD 1 */}

    <div className="recent-card">

      <div className="recent-img-box">

        <img
          src={houseImg}
          alt=""
        />

        <span className="recent-tag">
          FOR RENT
        </span>

      </div>

      <div className="recent-info">

        <h3>
          New Apartment Nice View
        </h3>

        <p>
          Quincy St, Brooklyn, NY, USA
        </p>

        <div className="recent-stats">

          <span>4 Beds</span>
          <span>5 Baths</span>
          <span>1200 Sq Ft</span>

        </div>

        <h4>
          $7,500/mo
        </h4>

      </div>

    </div>

    {/* CARD 2 */}

    <div className="recent-card">

      <div className="recent-img-box">

        <img
          src={villaImg}
          alt=""
        />

        <span className="recent-tag">
          FOR RENT
        </span>

      </div>

      <div className="recent-info">

        <h3>
          Luxury Modern Villa
        </h3>

        <p>
          Miami Beach, Florida
        </p>

        <div className="recent-stats">

          <span>5 Beds</span>
          <span>4 Baths</span>
          <span>1800 Sq Ft</span>

        </div>

        <h4>
          $12,000/mo
        </h4>

      </div>

    </div>

    {/* CARD 3 */}

    <div className="recent-card">

      <div className="recent-img-box">

        <img
          src={officeImg}
          alt=""
        />

        <span className="recent-tag">
          FOR RENT
        </span>

      </div>

      <div className="recent-info">

        <h3>
          Business Office Space
        </h3>

        <p>
          Manhattan, New York
        </p>

        <div className="recent-stats">

          <span>6 Rooms</span>
          <span>2 Baths</span>
          <span>2400 Sq Ft</span>

        </div>

        <h4>
          $9,200/mo
        </h4>

      </div>

    </div>

    {/* RIGHT BUTTON */}

    <button className="recent-arrow">
      ❯
    </button>

  </div>

</section>


{/* ================= TESTIMONIAL SECTION ================= */}

<section className="testimonial-section">

  <div className="testimonial-top">
    <h2>Testimonials</h2>
    <p>What our happy clients say about us</p>
  </div>

  <div className="testimonial-slider">

    <button
      className="testimonial-arrow"
      onClick={prevSlide}
    >
      ❮
    </button>

    <div className="testimonial-track">

      {testimonials.map((item, index) => {

        let position = index - activeIndex;

        if (position < -1)
          position += testimonials.length;

        if (position > 2)
          position -= testimonials.length;

        return (

          <div
            key={index}
            className={`testimonial-card ${
              position === 0 ? "active" : ""
            }`}
            style={{
              transform: `translateX(${position * 360}px)
                          scale(${position === 0 ? 1 : 0.88})`,
              opacity: position === 0 ? 1 : 0.45,
              zIndex: position === 0 ? 5 : 1,
            }}
          >

            <p>"{item.text}"</p>

            <img
              src={item.image}
              alt=""
            />

            <h4>{item.name}</h4>

            <span>{item.role}</span>

          </div>

        );

      })}

    </div>

    <button
      className="testimonial-arrow"
      onClick={nextSlide}
    >
      ❯
    </button>

  </div>

</section>
    </>

  );
}