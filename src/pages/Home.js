import { useState } from "react";

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (longUrl === "") {
      alert("Please enter a URL");
      return;
    }

    const code = shortCode || Math.random().toString(36).substring(7);
    const result = "https://cpit405.co/" + code;

    setShortUrl(result);
  };

  
   return (
  <div style={{ background: "#f5f5f5", height: "100vh", paddingTop: "50px" }}>
    <div style={{
      width: "500px",
      margin: "auto",
      background: "white",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center" }}>Link Shrinker</h2>

      <label>Long URL:</label>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <label>Enter short code:</label>
      <input
        type="text"
        value={shortCode}
        onChange={(e) => setShortCode(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button
        onClick={handleShorten}
        style={{
          background: "#007bff",
          color: "white",
          border: "none",
          padding: "8px 20px",
          display: "block",
          margin: "10px auto"
        }}
      >
        Shorten
      </button>

      <h4>Short URL</h4>
      <div style={{
        background: "#eee",
        padding: "10px",
        textAlign: "center"
      }}>
        {shortUrl}
      </div>
    </div>
  </div>
);
  
}

export default Home;