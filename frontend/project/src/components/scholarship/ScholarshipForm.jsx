import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    aiScore: '0', // Default value
    academicPerformance: '',
    incomeLevel: '',
    financialNeed: '',
    appliedScholarships: [],
  });

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isSignUp ? '/user/signup' : '/api/auth/signin';
    try {
      const response = await axios.post(endpoint, formData);
      alert(response.data.message);
      // Redirect to home or another page after successful login/signup
    } catch (error) {
      console.error(error);
      alert('Error occurred, please try again');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Academic Performance</label>
              <input
                type="number"
                name="academicPerformance"
                value={formData.academicPerformance}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Income Level</label>
              <select
                name="incomeLevel"
                value={formData.incomeLevel}
                onChange={handleChange}
              >
                <option value="">Select Income Level</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label>Financial Need</label>
              <select
                name="financialNeed"
                value={formData.financialNeed}
                onChange={handleChange}
              >
                <option value="">Select Financial Need</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </>
        )}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={toggleForm}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default LoginPage;
