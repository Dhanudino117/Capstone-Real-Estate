import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Testimonials from "./Pages/Testimonials";
import ProfilePage from "./Pages/ProfilePage";
import Properties from "./Pages/Properties";
import AuthPage from "./Pages/AuthPage";
import LandingPage from "./Pages/LandingPage";
import ProtectedRoute from "./Components/ProtectedRoute"; // Import the ProtectedRoute component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/auth-details" element={<AuthPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
