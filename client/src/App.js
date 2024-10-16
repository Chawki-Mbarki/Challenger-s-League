import React from "react";
import { Routes, Route } from "react-router-dom";

import { ProtectedRoute, PublicRoute } from "./components";
import { TestArea, Home, Dashboard } from "./views";

import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute element={Home} />} />
      <Route path="/Dashboard" element={<ProtectedRoute element={Dashboard} />} />
      <Route path="/TestArea" element={<ProtectedRoute element={TestArea} />} />
    </Routes>
  );
}

export default App;
