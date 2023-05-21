import React from 'react'
import NavBar from './NavBar'

const Container = ({ children, active }) => {
  return (
    <div className="w-full lg:mx-auto flex lg:flex-row flex-col lg:space-x-8">
      <div className="w-[14vw] lg:border lg:flex hidden"><NavBar active={active} /></div>
      <div className="h-[100vh] lg:mb-0 mb-20 overflow-y-auto overflow-x-hidden w-[92vw] lg:w-[80vw] mx-auto">{children}</div>
      <div className="lg:hidden w-full bottom-0 fixed lg:bg-inherit bg-gray-800"><NavBar active={active} /></div>
    </div>
  )
}

export default Container
