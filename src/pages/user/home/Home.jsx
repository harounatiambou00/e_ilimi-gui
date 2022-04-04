import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h3>User Home page</h3>
      <Outlet />
    </div>
  )
}

export default Home