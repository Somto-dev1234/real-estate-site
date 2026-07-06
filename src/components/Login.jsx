import "./Login.css";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";

export default function Login() {

  return (

    <div className="login-page">

      <div className="login-box">

        {/* BACK BUTTON */}

        <Link to="/" className="back-btn">
          ← Back
        </Link>

        <h2>Sign in</h2>

        <label>Login</label>

        <input
          type="text"
          placeholder="Ali Tufa..."
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Password"
        />

        <div className="remember-row">

          <div className="remember-left">

            <input type="checkbox" />

            <span>Remember me</span>

          </div>

          <a href="/">Forgot</a>

        </div>

        <button className="login-submit">
          Login
        </button>

      </div>

    </div>

  );
}