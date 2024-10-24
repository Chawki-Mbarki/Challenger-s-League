import React from "react";
import { Routes, Route } from "react-router-dom";

import { ProtectedRoute, PublicRoute } from "./components";
import { TestArea, Home, Dashboard, History } from "./views";

import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute element={Home} />} />
      <Route path="/Dashboard" element={<ProtectedRoute element={Dashboard} />} />
      <Route path="/TestArea" element={<ProtectedRoute element={TestArea} />} />
      <Route path="/History" element={<History />} />

      {/* 
        //! put routes here
        //? , Normal Route example: <Route path="/login" element={Login} />
        //? , Protected Route example: <ProtectedRoute path="/dashboard" element={Dashboard} />
      */}
    </Routes>
  );
}

export default App;
