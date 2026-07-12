import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    let newErrors = {};

    if (!form.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!form.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!form.email.trim())
      newErrors.email = "Email is required";
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    )
      newErrors.email = "Enter a valid email";

    if (!form.role)
      newErrors.role = "Select a role";

    if (!form.password)
      newErrors.password = "Password is required";
    else if (form.password.length < 8)
      newErrors.password = "Minimum 8 characters";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      alert("Registration Successful!");

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        password: "",
        confirmPassword: "",
      });

      setShowPassword(false);
      setShowConfirmPassword(false);
    }

  };

  return (

    <div className="signup-page">

      <div className="signup-card">

        <Link
          to="/"
          className="back-home"
        >
          ← Back to Home
        </Link>

        <h2>Registration</h2>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

        <form
          className="signup-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
          />
          <small>{errors.firstName}</small>

          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleChange}
          />
          <small>{errors.lastName}</small>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <small>{errors.email}</small>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="">User role</option>
            <option>Buyer</option>
            <option>Seller</option>
            <option>Agent</option>
          </select>

          <small>{errors.role}</small>

          {/* PASSWORD */}

          <div className="input-group">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <small>{errors.password}</small>

          {/* CONFIRM PASSWORD */}

          <div className="input-group">

            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-enter Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            <span
              className="password-toggle"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <small>{errors.confirmPassword}</small>

          <button
            type="submit"
            className="register-btn"
          >
            Register
          </button>

        </form>

      </div>

    </div>

  );

}