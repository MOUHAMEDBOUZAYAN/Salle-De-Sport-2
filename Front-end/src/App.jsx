import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

// Component imports
import Admin from "./components/Admin";
import Login from "./components/Login/index";
import Signup from "./components/Singup/index";

const App = () => {
  const user = null; // Replace this with your user authentication logic

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
      <Routes>
        {/* If user is logged in, show AppStoreBanner; otherwise, redirect to login */}
        <Route
          path="/"
          element={user ? <Admin /> : <Navigate replace to="/Admin" />}
        />
        <Route path="/Admin" element={<Admin />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default App;