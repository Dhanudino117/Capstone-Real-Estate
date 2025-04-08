import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Testimonials from "./Pages/Testimonials";
import ProfilePage from "./Pages/ProfilePage";
import Properties from "./Pages/Properties";
import AuthPage from "./Pages/AuthPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/auth-details" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
