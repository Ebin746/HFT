import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import styles from './LoginPage.module.css'; // Importing the CSS module

const LoginPage= () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    academicPerformance: '',
    incomeLevel: '',
    financialNeed: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const endpoint = 'http://localhost:3000/user'
    try {
      console.log(endpoint);
      const response = await axios.post(endpoint, formData);
      console.log(response);

      // Save user data to localStorage and update state
      if (response) {
        localStorage.setItem('user', JSON.stringify(response.data._id));
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
      alert('Error occurred, please try again');
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    alert('You have been signed out.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.wrapper}>
      <nav>
        {isLoggedIn ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button className={styles.switchButton} onClick={toggleForm}>
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        )}
      </nav>

      {!isLoggedIn && (
        <div className={isSignUp ? styles.signupWrapper : ''}>
          <h1 className={styles.heading}>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            {isSignUp && (
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
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
            {isSignUp && (
              <>
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
            <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
