import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col dark:text-dark-text dark:bg-dark-bg">
      {/* Sticky Header */}
      <Header />
      {/* Main Content (Scrollable) */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div> 
    </>
  )
}

export default MainLayout
