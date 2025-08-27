import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/Signin.css';

function Signin() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState(""); 
  const [name, setName] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/upload/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, name }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Sign in successful!");
      } else {
        alert("Sign in failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin} className="signin-form">
          <input
            type="text"
            placeholder="Phone number or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit" className="primary-btn">Continue</button>
        </form>

        <button onClick={() => navigate("/login")} className="secondary-btn">
          I have an account
        </button>
        <button onClick={() => navigate("/")} className="primary-btn">
          Go Back Home
        </button>

        <h6>By continuing you agree with our terms and conditions</h6>
      </div>
    </div>
  );
}

export default Signin;
