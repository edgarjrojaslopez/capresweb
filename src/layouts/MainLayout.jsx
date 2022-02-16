import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Navbar from '../components/Navbar'
import NavTwo from '../components/NavTwo'

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      {/* <NavTwo /> */}
      <main className="flex flex-col justify-between">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
