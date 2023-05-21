import React from 'react'


const Container = ({ children }) => {
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:space-x-10">
        <div className="lg:w-[50vw] w-screen bg-[#737373] flex items-center justify-center lg:h-screen h-[20vh]">
            <img src="/assets/logo.png" alt="logo" className="" />
        </div>
        <div className="lg:w-[50vw] w-[90vw] mx-auto flex lg:items-center">
            {children}
        </div>
    </div>
  )
}

export default Container
