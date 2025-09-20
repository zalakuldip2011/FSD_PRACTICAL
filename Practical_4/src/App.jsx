import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(-2);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleReset = () => setCount(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleIncrementFive = () => setCount(count + 5);

  // Decent modern styling
  const containerStyle = {
    minHeight: "100vh",
    background: "#f5f6fa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', sans-serif",
    margin: "0",
    padding: "20px"
  };

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "30px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px"
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  };

  const buttonStyle = {
    background: "#f0f0f0",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "10px 15px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease"
  };

  const sectionTitleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#444",
    marginBottom: "15px",
    marginTop: "20px"
  };

  const formGroupStyle = {
    marginBottom: "15px",
    textAlign: "left"
  };

  const labelStyle = {
    display: "inline-block",
    fontSize: "14px",
    color: "#555",
    marginRight: "10px",
    minWidth: "90px",
    fontWeight: "500"
  };

  const inputStyle = {
    background: "#fff",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "8px 12px",
    fontSize: "14px",
    outline: "none",
    width: "200px",
    transition: "border 0.2s ease"
  };

  const outputStyle = {
    marginTop: "20px",
    fontSize: "14px",
    color: "#333",
    textAlign: "center",
    background: "#fafafa",
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "15px"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Count: {count}</h1>

        <div style={buttonGroupStyle}>
          <button
            style={buttonStyle}
            onClick={handleReset}
            onMouseEnter={(e) => (e.target.style.background = "#e0e0e0")}
            onMouseLeave={(e) => (e.target.style.background = "#f0f0f0")}
          >
            Reset
          </button>
          <button
            style={buttonStyle}
            onClick={handleIncrement}
            onMouseEnter={(e) => (e.target.style.background = "#e0e0e0")}
            onMouseLeave={(e) => (e.target.style.background = "#f0f0f0")}
          >
            Increment
          </button>
          <button
            style={buttonStyle}
            onClick={handleDecrement}
            onMouseEnter={(e) => (e.target.style.background = "#e0e0e0")}
            onMouseLeave={(e) => (e.target.style.background = "#f0f0f0")}
          >
            Decrement
          </button>
          <button
            style={buttonStyle}
            onClick={handleIncrementFive}
            onMouseEnter={(e) => (e.target.style.background = "#e0e0e0")}
            onMouseLeave={(e) => (e.target.style.background = "#f0f0f0")}
          >
            Increment 5
          </button>
        </div>

        <h2 style={sectionTitleStyle}>Welcome to CHARUSAT!!!</h2>

        <div style={formGroupStyle}>
          <label style={labelStyle}>First Name:</label>
          <input
            type="text"
            style={inputStyle}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onFocus={(e) => (e.target.style.border = "1px solid #007bff")}
            onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            autoComplete="off"
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Last Name:</label>
          <input
            type="text"
            style={inputStyle}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onFocus={(e) => (e.target.style.border = "1px solid #007bff")}
            onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
            autoComplete="off"
          />
        </div>

        <div style={outputStyle}>
          <div>First Name: {firstName}</div>
          <div>Last Name: {lastName}</div>
        </div>
      </div>
    </div>
  );
}

export default App;