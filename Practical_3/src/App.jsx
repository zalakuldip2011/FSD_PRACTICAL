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
      return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    }
    return date;
  };

  const displayDate = getDisplayTime();

  const formattedDate = displayDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = displayDate.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Modern Dark Theme Styling
  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e1e2f, #121212)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
    margin: "0",
    padding: "20px",
  };

  const cardStyle = {
    background: "#1f1f2e",
    border: "1px solid #333",
    borderRadius: "16px",
    padding: "30px",
    maxWidth: "500px",
    width: "100%",
    textAlign: "center",
    color: "#f0f0f0",
    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
  };

  const titleStyle = {
    fontSize: "26px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "20px",
    letterSpacing: "1px",
  };

  const greetingStyle = {
    fontSize: "20px",
    color: "#00d1b2",
    marginBottom: "15px",
    fontWeight: "600",
  };

  const dateStyle = {
    fontSize: "16px",
    color: "#bbb",
    marginBottom: "10px",
  };

  const timeStyle = {
    fontSize: "22px",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: "monospace",
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    background: "#2b2b40",
    color: "#ddd",
    border: "1px solid #444",
    borderRadius: "8px",
    padding: "10px 18px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    background: "#00d1b2",
    color: "#fff",
    border: "1px solid #00d1b2",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>🌟 Welcome to Charusat!</h1>
        <div style={greetingStyle}>{greeting} 👋</div>
        <div style={dateStyle}>{formattedDate}</div>
        <div style={timeStyle}>{formattedTime}</div>
        <div style={buttonGroupStyle}>
          <button
            style={timeZone === "local" ? activeButtonStyle : buttonStyle}
            onClick={() => setTimeZone("local")}
            onMouseEnter={(e) => (e.target.style.background = "#00d1b2")}
            onMouseLeave={(e) =>
              (e.target.style.background =
                timeZone === "local" ? "#00d1b2" : "#2b2b40")
            }
          >
            Local Time
          </button>
          <button
            style={timeZone === "utc" ? activeButtonStyle : buttonStyle}
            onClick={() => setTimeZone("utc")}
            onMouseEnter={(e) => (e.target.style.background = "#00d1b2")}
            onMouseLeave={(e) =>
              (e.target.style.background =
                timeZone === "utc" ? "#00d1b2" : "#2b2b40")
            }
          >
            UTC Time
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;