import React from 'react'
import { Outlet } from 'react-router-dom'

const applayout = () => {
  return (
    <div>
      <main>
        <Outlet/>

      </main>

      
      
    </div>
  )
}

export default applayout
