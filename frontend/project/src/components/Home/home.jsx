import React, { useEffect, useState } from "react";
import axios from "axios";


const HomePage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [aiResponses, setAiResponses] = useState({});

  let userId = localStorage.getItem('user');
  userId = JSON.parse(userId);
  console.log(userId);

  useEffect(() => {
    // Fetch scholarships data
    axios
      .get("http://localhost:3000/scholarship")
      .then((response) => {
        setScholarships(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error(error));

    // Polling every 60 seconds to get updated scholarship data
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3000/ai")
        .then((response) => {
          setScholarships(response.data);
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    }, 1000 * 60);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle the application process
  const handleApply = async (scholarshipId) => {
    console.log(userId, scholarshipId);
    if (!userId) {
      alert("Please log in to apply for scholarships.");
      return;
    }
    await axios
      .post("http://localhost:3000/user/apply", { userId, scholarshipId })
      .then(() => alert("Applied successfully!"))
      .catch((error) => console.error(error));
  };

  // Function to check if AI request should be triggered and to make the call
  const handleAiRequest = async (scholarshipId, Deadline) => {
    const now = new Date();
    if (now >= Deadline && !aiResponses[scholarshipId]) {
      await axios
        .post("http://localhost:3000/ai", { scholarshipId })
        .then((response) => {
          setAiResponses((prevResponses) => ({
            ...prevResponses,
            [scholarshipId]: response.data,
          }));
        })
        .catch((error) => console.error("Error fetching AI response:", error));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Scholarships</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {scholarships.map((scholarship) => {
          // Calculate the time remaining in milliseconds
          const Deadline = new Date(scholarship.Deadline * 1000);
          const now = new Date();
          const timeLeft = Math.max(0, Deadline - now);

          // Calculate hours, minutes, and seconds from remaining time
        

          // Call AI request once the Deadline passes
          setTimeout(() => { console.log(scholarship.name),handleAiRequest(scholarship._id, Deadline)}, Deadline*1000);

          return (
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
                
              </p>
              {timeLeft <= 0 && aiResponses[scholarship._id] && (
                <div style={{ marginTop: "10px", color: "#28a745" }}>
                  <strong>AI Response:</strong>
                  <p>{aiResponses[scholarship._id]}</p>
                </div>
              )}
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
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
