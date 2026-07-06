// AddProperty.jsx

import React, { useState } from "react";
import "./AddProperty.css";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function AddProperty() {

  // ================= STATE =================

  const [success, setSuccess] = useState(false);

  const [previewImages, setPreviewImages] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    propertyId: "",
    status: "",
    rooms: "",
    beds: "",
    baths: "",
    garages: "",
    year: "",
    homeArea: "",
    lotArea: "",
    price: "",
    secondPrice: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    videoLink: "",
    virtualTour: "",
    latitude: 6.5244,
    longitude: 3.3792,

    amenities: [],
  });

  const [errors, setErrors] = useState({});

  // ================= AMENITIES =================

  const amenitiesList = [
    "Air conditioning",
    "Swimming Pool",
    "Gym",
    "Laundry",
    "Parking",
    "Microwave",
    "Outdoor Shower",
    "Fireplace",
    "Lawn",
    "Refrigerator",
    "Dining Room",
    "Doorman",
  ];

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // ================= AMENITIES =================

  const handleAmenityChange = (item) => {

    if (formData.amenities.includes(item)) {

      setFormData({
        ...formData,
        amenities: formData.amenities.filter(
          (a) => a !== item
        ),
      });

    } else {

      setFormData({
        ...formData,
        amenities: [
          ...formData.amenities,
          item,
        ],
      });

    }

  };

  // ================= IMAGE UPLOAD =================

  const handleImageUpload = (e) => {

    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviewImages(imageUrls);

  };

  // ================= MAP =================

  function LocationMarker() {

    useMapEvents({

      click(e) {

        setFormData((prev) => ({
          ...prev,
          latitude: e.latlng.lat,
          longitude: e.latlng.lng,
        }));

      },

    });

    return (

      <Marker
        position={[
          formData.latitude,
          formData.longitude,
        ]}
      >

        <Popup>
          Property Location
        </Popup>

      </Marker>

    );

  }

  // ================= VALIDATION =================

  const validateForm = () => {

    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Property title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.price.trim()) {
      newErrors.price = "Price is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.type.trim()) {
      newErrors.type = "Property type is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  // ================= SUBMIT =================

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      console.log(formData);

      setSuccess(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  };

  return (

    <div className="add-property-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <button className="menu-btn">
          ☰
        </button>

        <div className="logo">
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
            className="login-card"
          >
            Sign Up
          </Link>

        </div>

      </nav>

      {/* FORM */}

      <form
        className="property-container"
        onSubmit={handleSubmit}
      >

        <h1>
          Add new property
        </h1>

        {success && (

          <div className="success-message">
            Property Added Successfully ✅
          </div>

        )}

        {/* CONTACT */}

        <div className="property-card">

          <h3>
            Contact information
          </h3>

          <div className="property-grid two">

            <div>

              <input
                type="text"
                name="title"
                placeholder="Property title*"
                value={formData.title}
                onChange={handleChange}
              />

              {errors.title && (
                <p className="error">
                  {errors.title}
                </p>
              )}

            </div>

            <div>

              <input
                type="text"
                name="type"
                placeholder="Type*"
                value={formData.type}
                onChange={handleChange}
              />

              {errors.type && (
                <p className="error">
                  {errors.type}
                </p>
              )}

            </div>

          </div>

          <textarea
            name="description"
            placeholder="Property Description*"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          {errors.description && (
            <p className="error">
              {errors.description}
            </p>
          )}

        </div>

        {/* ADDITIONAL */}

        <div className="property-card">

          <h3>
            Additional
          </h3>

          <div className="property-grid three">

            <input
              type="text"
              name="propertyId"
              placeholder="Property ID"
              onChange={handleChange}
            />

            <select
              name="status"
              onChange={handleChange}
            >

              <option value="">
                Status
              </option>

              <option>
                For Sale
              </option>

              <option>
                For Rent
              </option>

            </select>

            <input
              type="number"
              name="rooms"
              placeholder="Rooms"
              onChange={handleChange}
            />

            <input
              type="number"
              name="beds"
              placeholder="Beds"
              onChange={handleChange}
            />

            <input
              type="number"
              name="baths"
              placeholder="Baths"
              onChange={handleChange}
            />

            <input
              type="number"
              name="garages"
              placeholder="Garages"
              onChange={handleChange}
            />

            <input
              type="number"
              name="year"
              placeholder="Year build"
              onChange={handleChange}
            />

            <input
              type="number"
              name="homeArea"
              placeholder="Home area (sqft)"
              onChange={handleChange}
            />

            <input
              type="number"
              name="lotArea"
              placeholder="Lot area (sqft)"
              onChange={handleChange}
            />

          </div>

        </div>

        {/* PRICE */}

        <div className="property-card">

          <h3>
            Price
          </h3>

          <div className="property-grid two">

            <div>

              <input
                type="number"
                name="price"
                placeholder="Price ($)*"
                value={formData.price}
                onChange={handleChange}
              />

              {errors.price && (
                <p className="error">
                  {errors.price}
                </p>
              )}

            </div>

            <input
              type="number"
              name="secondPrice"
              placeholder="Second price"
              onChange={handleChange}
            />

          </div>

        </div>

        {/* LOCATION */}

        <div className="property-card">

          <h3>
            Location
          </h3>

          <div className="property-grid two">

            <div>

              <input
                type="text"
                name="address"
                placeholder="Friendly address*"
                value={formData.address}
                onChange={handleChange}
              />

              {errors.address && (
                <p className="error">
                  {errors.address}
                </p>
              )}

            </div>

            <div>

              <input
                type="text"
                name="city"
                placeholder="City*"
                value={formData.city}
                onChange={handleChange}
              />

              {errors.city && (
                <p className="error">
                  {errors.city}
                </p>
              )}

            </div>

            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
            />

            <input
              type="text"
              name="zip"
              placeholder="Zip code"
              onChange={handleChange}
            />

          </div>

          {/* MAP */}

          <div className="map-box">

            <MapContainer
              center={[
                formData.latitude,
                formData.longitude,
              ]}
              zoom={13}
              scrollWheelZoom={true}
              style={{
                height: "100%",
                width: "100%",
              }}
            >

              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <LocationMarker />

            </MapContainer>

          </div>

          <div className="property-grid two">

            <input
              type="text"
              value={formData.latitude}
              readOnly
            />

            <input
              type="text"
              value={formData.longitude}
              readOnly
            />

          </div>

        </div>

        {/* MEDIA */}

        <div className="property-card">

          <h3>
            Media
          </h3>

          <p className="media-label">
            Upload property images
          </p>

          <input
            type="file"
            multiple
            className="file-input"
            onChange={handleImageUpload}
          />
          {/* IMAGE PREVIEW */}

<div className="preview-grid">

  {previewImages.length > 0 ? (

    previewImages.map((img, index) => (

      <div
        className="preview-card"
        key={index}
      >

        <img
          src={img}
          alt="preview"
          className="preview-image"
        />

        <button
          type="button"
          className="remove-image-btn"
          onClick={() => {

            const updatedImages =
              previewImages.filter(
                (_, i) => i !== index
              );

            setPreviewImages(updatedImages);

          }}
        >
          ×
        </button>

      </div>

    ))

  ) : (

    <p className="no-image-text">
      No images selected
    </p>

  )}

</div>

        </div>

        {/* VIDEO */}

        <div className="property-card">

          <h3>
            Video & Virtual Tour
          </h3>

          <div className="property-grid two">

            <input
              type="text"
              name="videoLink"
              placeholder="Video link"
              onChange={handleChange}
            />

            <input
              type="text"
              name="virtualTour"
              placeholder="Virtual tour link"
              onChange={handleChange}
            />

          </div>

        </div>

        {/* AMENITIES */}

        <div className="property-card">

          <h3>
            Amenities
          </h3>

          <div className="amenities-grid">

            {amenitiesList.map((item, index) => (

              <label
                className="amenity-item"
                key={index}
              >

                <input
                  type="checkbox"
                  checked={formData.amenities.includes(item)}
                  onChange={() =>
                    handleAmenityChange(item)
                  }
                />

                {item}

              </label>

            ))}

          </div>

        </div>

        {/* SUBMIT */}

        <button
          type="submit"
          className="submit-property-btn"
        >
          Add Property
        </button>

      </form>

    </div>
  );
}