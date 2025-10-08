import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(-2);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleReset = () => setCount(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleIncrementFive = () => setCount(count + 5);

  // Basic black and white styling for beginners
  const containerStyle = {
    minHeight: "100vh",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    margin: "0",
    padding: "20px"
  };

  const cardStyle = {
    background: "white",
    border: "2px solid black",
    padding: "30px",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center"
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "black",
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
    background: "white",
    color: "black",
    border: "1px solid black",
    padding: "10px 15px",
    fontSize: "14px",
    cursor: "pointer"
  };

  const sectionTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
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
    color: "black",
    marginRight: "10px",
    minWidth: "90px",
    fontWeight: "bold"
  };

  const inputStyle = {
    background: "white",
    color: "black",
    border: "1px solid black",
    padding: "8px 12px",
    fontSize: "14px",
    outline: "none",
    width: "200px"
  };

  const outputStyle = {
    marginTop: "20px",
    fontSize: "14px",
    color: "black",
    textAlign: "center",
    background: "white",
    border: "1px solid black",
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
            onMouseEnter={(e) => {
              e.target.style.background = "black";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "black";
            }}
          >
            Reset
          </button>
          <button
            style={buttonStyle}
            onClick={handleIncrement}
            onMouseEnter={(e) => {
              e.target.style.background = "black";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "black";
            }}
          >
            Increment
          </button>
          <button
            style={buttonStyle}
            onClick={handleDecrement}
            onMouseEnter={(e) => {
              e.target.style.background = "black";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "black";
            }}
          >
            Decrement
          </button>
          <button
            style={buttonStyle}
            onClick={handleIncrementFive}
            onMouseEnter={(e) => {
              e.target.style.background = "black";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "black";
            }}
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
            onFocus={(e) => {
              e.target.style.borderWidth = "2px";
            }}
            onBlur={(e) => {
              e.target.style.borderWidth = "1px";
            }}
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
            onFocus={(e) => {
              e.target.style.borderWidth = "2px";
            }}
            onBlur={(e) => {
              e.target.style.borderWidth = "1px";
            }}
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
