import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signin() {
  const navigator=useNavigate()
  const [identifier, setIdentifier] = useState(""); // phone or email
  const [name,setName]=useState("")

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/upload/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier,name }),
      });

      const data = await res.json();
      console.log(data)
      if (res.ok) {
        localStorage.setItem("user", JSON.stringify({data}));
        alert("Sign in successful!");
        console.log("User Data:", data);
        
      } else {
        alert("Sign in failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Sign In</h2>
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
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.primaryButton}>
            Continue
          </button>
        </form>
        <button onClick={()=> navigator("/login")} style={styles.secondaryButton}>
          I have a acount
        </button>
        <button onClick={()=> navigator("/")}
        style={styles.GobackHome}>Go Back Home</button>
        <h6>by continue you agree with our tarm and conditions</h6>
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
    marginTop:"10px"
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
  GobackHome:{
    padding: "12px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    transition: "background-color 0.3s ease",
    marginTop:"10px"
  }
};

export default Signin;