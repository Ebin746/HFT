import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports
import Nav from './Nav'; // Navbar component
import Home from './home'; // Home component
import LoginPage from './components/LoginPage'; // LoginPage component
import Signup from './components/signUp'; // Signup component
import Error from './components/Error'; // Error component
 // Global styles

function App() {
  return (
    <Router>
      <Nav /> {/* Navbar is always visible */}
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} /> {/* Render Home on /home */}
          <Route path="/login" element={<LoginPage />} /> {/* Render LoginPage on /login */}
          <Route path="/signUp" element={<Signup />} /> {/* Render Signup on /signUp */}
          <Route path="*" element={<Error />} /> {/* Catch-all route for undefined paths */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
