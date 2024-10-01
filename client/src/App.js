import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute, ParagraphComponent } from './components'

import './app.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<ParagraphComponent />} />
      {/*
        //! put routes here
        //? , Normal Route example: <Route path="/login" component={Login} />
        //? , Protected Route example: <ProtectedRoute path="/dashboard" component={Dashboard} />
      */}
    </Routes>
  )
}

export default App
