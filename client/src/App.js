import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components'
import { TestArea, Home } from './views'

import './app.css'


function App() {
  return (
    <Routes>
      <Route path="/TestArea" element={<TestArea />} />
      <Route path="/" element={<Home />} />
      {/* 
        //! put routes here
        //? , Normal Route example: <Route path="/login" element={Login} />
        //? , Protected Route example: <ProtectedRoute path="/dashboard" element={Dashboard} />
      */}
    </Routes>
  )
}

export default App
