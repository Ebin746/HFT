// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Corrected spelling here
import Nav from "./components/Navbar/navbar.jsx";
import HomePage from "./components/Home/home.jsx";
import LoginPage from "./components/auth/Login/Login.jsx";
import ScholarshipForm from "./components/scholarship/scholarshipForm.jsx";
const App = () => {




  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/provide" element={<ScholarshipForm />} />
      </Routes>
    </Router>
  );
};

export default App;
