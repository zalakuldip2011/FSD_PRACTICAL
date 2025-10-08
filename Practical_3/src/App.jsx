import React, { useEffect, useState } from "react";

function App() {
  const [date, setDate] = useState(new Date());
  const [greeting, setGreeting] = useState("");
  const [timeZone, setTimeZone] = useState("local");

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hour = date.getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, [date]);

  const getDisplayTime = () => {
    if (timeZone === "local") {
      return date;
    } else if (timeZone === "utc") {
      return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    }
    return date;
  };

  const displayDate = getDisplayTime();

  const formattedDate = displayDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedTime = displayDate.toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

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
    maxWidth: "500px",
    width: "100%",
    textAlign: "center"
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "20px"
  };

  const greetingStyle = {
    fontSize: "18px",
    color: "black",
    marginBottom: "15px",
    fontWeight: "bold"
  };

  const dateStyle = {
    fontSize: "16px",
    color: "black",
    marginBottom: "10px"
  };

  const timeStyle = {
    fontSize: "20px",
    color: "black",
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: "monospace"
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "20px"
  };

  const buttonStyle = {
    background: "white",
    color: "black",
    border: "1px solid black",
    padding: "10px 15px",
    fontSize: "14px",
    cursor: "pointer"
  };

  const activeButtonStyle = {
    ...buttonStyle,
    background: "black",
    color: "white"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Welcome to Charusat!!</h1>
        <div style={greetingStyle}>{greeting}!</div>
        <div style={dateStyle}>{formattedDate}</div>
        <div style={timeStyle}>{formattedTime}</div>
        <div style={buttonGroupStyle}>
          <button
            style={timeZone === "local" ? activeButtonStyle : buttonStyle}
            onClick={() => setTimeZone("local")}
            onMouseEnter={(e) => e.target.style.background = "black"}
            onMouseLeave={(e) => e.target.style.background = timeZone === "local" ? "black" : "white"}
          >
            Local Time
          </button>
          <button
            style={timeZone === "utc" ? activeButtonStyle : buttonStyle}
            onClick={() => setTimeZone("utc")}
            onMouseEnter={(e) => e.target.style.background = "black"}
            onMouseLeave={(e) => e.target.style.background = timeZone === "utc" ? "black" : "white"}
          >
            UTC Time
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
