import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigateor=useNavigate()
  const [identifier, setIdentifier] = useState(""); // phone or email

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!identifier) {
      alert("Please enter phone or email");
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/api/get/${identifier}/user`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data)
      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        alert("Login successful!");
        navigateor("/"); // Redirect after login
      } else {
        alert(data.error || "Login failed - invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Network error - please try again");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="Phone number or Email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.primaryButton}>
            Continue
          </button>
        </form>
        <button onClick={()=> navigateor("/signin")} style={styles.secondaryButton}>
          Go Back
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  card: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "1.5rem",
    color: "#333",
    fontSize: "1.5rem",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  inputContainer: {
    marginBottom: "0.5rem",
  },
  input: {
    padding: "12px 16px",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    boxSizing: "border-box",
    transition: "border 0.3s ease",
  },
  inputFocus: {
    border: "1px solid #28a745",
    outline: "none",
  },
  primaryButton: {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
  },
  secondaryButton: {
    padding: "12px",
    backgroundColor: "transparent",
    color: "#666",
    border: "1px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    width: "100%",
    marginTop: "0.5rem",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#f8f8f8",
  },
};

export default Login;