import React from 'react'

import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h3>Admin Home Page</h3>
      <Outlet />
    </div>
  )
}

export default Home