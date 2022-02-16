import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-gris-capres-200">
      <Outlet />
    </div>
  )
}

export default AuthLayout
