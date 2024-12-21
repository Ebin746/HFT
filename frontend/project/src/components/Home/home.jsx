// components/HomePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = (  ) => {
  const [scholarships, setScholarships] = useState([]);
  const [userId, setUserId] = useState(""); // Mock user ID for testing
  useEffect( () => {
    
  axios
      .get("http://localhost:3000/scholarship")
      .then((response) => {
        setScholarships(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleApply = async (scholarshipId) => {
    if (!userId) {
      alert("Please log in to apply for scholarships.");
      return;
    }
    await axios
      .post("http://localhost:3000/scholarship/apply", { userId, scholarshipId })
      .then(() => alert("Applied successfully!"))
      .catch((error) => console.error(error));
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Scholarships</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {scholarships.map((scholarship) => (
          <div
            key={scholarship._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              width: "300px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{scholarship.name}</h2>
            <p>{scholarship.description}</p>
            <p>
              <strong>Type:</strong> {scholarship.type}
            </p>
            <p>
              <strong>Award:</strong> ${scholarship.awardAmount}
            </p>
            <button
              onClick={() => handleApply(scholarship._id)}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
