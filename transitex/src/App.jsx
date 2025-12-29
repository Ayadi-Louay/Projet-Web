import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
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
import ShipTransport from "./components/ShipTransport";
import TrainTransport from "./components/TrainTransport";
import Help from "./components/help";
import Tracking from "./components/tracking";
import Reservation from "./components/Reservation";
import Payment from "./components/Payment";
import NetworkMAP from "./components/Network-MAP";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/network-map" element={<NetworkMAP />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/" element={<><Hero /><WhyTransitex /></>} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/airtransport" element={<AirTransport />} />
            <Route path="/ship" element={<ShipTransport />} />
            <Route path="/train" element={<TrainTransport />} />
            <Route path="/Help" element={<Help />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
            <Route 
              path="/Profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
              />
            <Route
              path="/Transport" 
              element={
                <ProtectedRoute>
                  <Transport/>
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
