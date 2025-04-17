import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import AnalyzeResume from './pages/AnalyzeResume'
import BuildResume from './pages/BuildResume'
import MainLayout from './MainLayout'
import BuildSpecificResume from './pages/BuildSpecificResume'

const RouteContainer = () => {
  const NotFound = () => {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
      </div>
    )
  }
  
  return (
    <>
        <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} /> 
              <Route path="/analyze-resume" element={<AnalyzeResume />} /> 
              <Route path="/build-resume" element={<BuildResume />} /> 
              <Route path="/build-resume/:id" element={<BuildSpecificResume />} /> 
            </Route>
            <Route path="*" element={<NotFound />} /> 
        </Routes>
    </>
  )
}

export default RouteContainer
