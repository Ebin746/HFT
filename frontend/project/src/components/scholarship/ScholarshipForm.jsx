// components/AddScholarship.jsx
import React, { useState } from "react";
import axios from "axios";

const ScholarshipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    academicThreshold: "",
    incomeLevel: "",
    financialNeed: "",
    awardAmount: "",
    Deadline:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        type: formData.type,
        description: formData.description,
        eligibilityCriteria: {
          academicThreshold: parseFloat(formData.academicThreshold),
          incomeLevel: formData.incomeLevel,
          financialNeed: formData.financialNeed,
        },
        awardAmount: parseFloat(formData.awardAmount),
        Deadline:formData.Deadline
      };

      const response = await axios.post("http://localhost:3000/scholarship", payload);
      alert("Scholarship added successfully!");
      setFormData({
        name: "",
        type: "",
        description: "",
        academicThreshold: "",
        incomeLevel: "",
        financialNeed: "",
        awardAmount: "",
        Deadline:""
      });
    } catch (error) {
      console.error(error);
      alert("Error adding scholarship. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Add a New Scholarship</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Scholarship Name"
          style={styles.input}
          required
        />
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Scholarship Type"
          style={styles.input}
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          style={{ ...styles.input, height: "100px" }}
          required
        />
        <input
          type="number"
          name="academicThreshold"
          value={formData.academicThreshold}
          onChange={handleChange}
          placeholder="Academic Threshold (e.g., 80)"
          style={styles.input}
          required
        />
        <input
          type="text"
          name="incomeLevel"
          value={formData.incomeLevel}
          onChange={handleChange}
          placeholder="Income Level"
          style={styles.input}
          required
        />
        <input
          type="text"
          name="financialNeed"
          value={formData.financialNeed}
          onChange={handleChange}
          placeholder="Financial Need"
          style={styles.input}
          required
        />
        <input
          type="number"
          name="awardAmount"
          value={formData.awardAmount}
          onChange={handleChange}
          placeholder="Award Amount"
          style={styles.input}
          required
        />
         <input
          type="number"
          name="Deadline"
          value={formData.Deadline}
          onChange={handleChange}
          placeholder="in minutes"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(135deg, #00c6ff, #0072ff)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  title: {
    marginBottom: "20px",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  form: {
    background: "white",
    borderRadius: "8px",
    padding: "30px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    background: "#007bff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    width: "100%",
  },
};

export default ScholarshipForm;
