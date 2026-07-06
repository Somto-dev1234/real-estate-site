// MyProperties.jsx

import "./MyProperties.css";

import { Link } from "react-router-dom";

import logoImg from "../assets/logo.png";

import property1 from "../assets/property1.jpg";
import property2 from "../assets/property2.jpg";
import property3 from "../assets/property3.jpg";

export default function MyProperties() {

  const properties = [

    {
      image: property1,
      title: "Modern Family Apartment",
      location: "Quincy St, Brooklyn, NY, USA",
      oldPrice: "$2,800/mo",
      newPrice: "$7,500/mo",
      status: "Pending",
      type: "FOR SALE",
      featured: true,
      date: "30 December 2022",
      views: "5933",
    },

    {
      image: property2,
      title: "Luxury Beach House",
      location: "Miami Beach, Florida, USA",
      oldPrice: "$4,500/mo",
      newPrice: "$10,200/mo",
      status: "Published",
      type: "FOR RENT",
      featured: true,
      date: "15 January 2023",
      views: "8421",
    },

    {
      image: property3,
      title: "Classic City Villa",
      location: "Los Angeles, California, USA",
      oldPrice: "$3,200/mo",
      newPrice: "$8,950/mo",
      status: "Draft",
      type: "FOR SALE",
      featured: false,
      date: "02 February 2023",
      views: "3902",
    },

  ];

  return (

    <div className="properties-page">

      {/* ================= NAVBAR ================= */}

      <nav className="properties-navbar">

        <div className="properties-logo">

          <img
            src={logoImg}
            alt="logo"
            className="properties-logo-img"
          />

          <h2>Houzing</h2>

        </div>

        <div className="properties-links">

          <Link to="/">Home</Link>

          <Link to="/properties">Properties</Link>

          <Link to="/add-property">Add Property</Link>

          <Link to="/login">Login</Link>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <div className="properties-hero">

        <h1>My Properties</h1>

        <p>
          Manage your real estate listings easily and professionally.
        </p>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="properties-container">

        {/* TOP BAR */}

        <div className="properties-top">

          <div>

            <h2>Your Listings</h2>

            <span>
              {properties.length} Properties Found
            </span>

          </div>

          <div className="top-actions">

            <input
              type="text"
              placeholder="Search property..."
            />

            <Link
              to="/add-property"
              className="add-property-btn"
            >
              + Add Property
            </Link>

          </div>

        </div>

        {/* ================= TABLE ================= */}

        <div className="properties-table">

          {/* HEADER */}

          <div className="table-header">

            <span>Listing</span>

            <span>Published</span>

            <span>Status</span>

            <span>Views</span>

            <span>Actions</span>

          </div>

          {/* ROWS */}

          {properties.map((item, index) => (

            <div
              className="table-row"
              key={index}
            >

              {/* LISTING */}

              <div className="listing-info">

                <div className="listing-image">

                  <img
                    src={item.image}
                    alt="property"
                  />

                  {item.featured && (

                    <button className="featured-btn">
                      FEATURED
                    </button>

                  )}

                </div>

                <div className="listing-details">

                  <div className="title-row">

                    <h3>{item.title}</h3>

                    <span>
                      {item.type}
                    </span>

                  </div>

                  <p>{item.location}</p>

                  <small>
                    {item.oldPrice}
                  </small>

                  <h2>
                    {item.newPrice}
                  </h2>

                </div>

              </div>

              {/* DATE */}

              <div className="table-date">
                {item.date}
              </div>

              {/* STATUS */}

              <div className={`table-status ${item.status.toLowerCase()}`}>

                {item.status}

              </div>

              {/* VIEW */}

              <div className="table-view">
                👁 {item.views}
              </div>

              {/* ACTION */}

              <div className="table-action">

                <button className="edit-btn">
                  ✏️
                </button>

                <button className="delete-btn">
                  🗑️
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}