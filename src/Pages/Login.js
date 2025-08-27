import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/Login.css'

function Login() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState(""); // phone or email

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!identifier) return alert("Please enter phone or email");

    try {
      const res = await fetch(`http://localhost:5000/api/get/${identifier}/user`);
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        alert("Login successful!");
        navigate("/"); // Redirect after login
      } else {
        alert(data.error || "Login failed - invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Network error - please try again");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone number or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="primary-button">
            Continue
          </button>
        </form>
        <button onClick={() => navigate("/signin")} className="secondary-button">
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Login;
