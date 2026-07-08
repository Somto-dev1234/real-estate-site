import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

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

    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword =
        "Passwords do not match";

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

    }

  };

  return (

    <div className="signup-page">

      <div className="signup-card">

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

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <small>{errors.password}</small>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <small>{errors.confirmPassword}</small>

          <button>
            Register
          </button>

        </form>

      </div>

    </div>

  );

}