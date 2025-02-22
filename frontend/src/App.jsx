import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./pages/authentication";
import { AuthProvider } from "./context/AuthContext";
import VideoMeet from "./pages/VideoMeet";
import Home from "./pages/Home";
import History from "./pages/History";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/:url" element={<VideoMeet />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
