import React from 'react'
import { FaArrowDown, FaArrowUp, FaBell, FaSearch } from 'react-icons/fa'


const Header = () => {
  return (
    <div>
      <div className="flex lg:items-center items-end justify-between mt-[3vh] mx-auto">
          <h2 className="font-semibold text-[22px] lg:text-[28px]">Explain What Your Home Needs</h2>
            <div className="input-search w-[30vw] mx-auto lg:flex hidden items-center space-x-3 border py-1 px-3 lg:py-2 placeholder:text-[18px] rounded-full mt-3">
                <FaSearch fill="#ccc" />
                <input type="search" name="search" id="search-categories" placeholder="search" className="h-full w-full outline-none border-none" />
            </div>
          <div className="flex items-center lg:space-x-6 space-x-4 lg:scale-100 scale-75">
            <div className="border border-[#000] scale-75 cursor-pointer rounded-full py-1 px-3 space-y-1">
                <FaArrowUp size={12} />
                <FaArrowDown size={12} />
            </div>
            <img src="/assets/home/vector.png" alt="vector" className="cursor-pointer" />  
            <span className="text-[24px] cursor-pointer"><FaBell fill="#E16A2E" /></span>
          </div>
      </div>
    </div>
  )
}

export default Header