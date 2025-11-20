import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhyTransitex from "./components/WhyTransitex";
import Transport from "./components/Transport";
import AirTransport from "./components/AirTransport";
import AboutUs from "./components/about_us";
import Register from "./components/Register";
import SignIn from "./components/Signin";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><WhyTransitex /></>} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/airtransport" element={<AirTransport />} />
          <Route path="/ship" element={<ShipTransport />} />
          <Route path="/train" element={<TrainTransport />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
