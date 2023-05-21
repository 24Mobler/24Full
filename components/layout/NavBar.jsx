import Link from 'next/link'
import React from 'react'
import { FaCartPlus, FaHeart, FaHome, FaSearch, FaUser } from 'react-icons/fa'

const NavBar = ({ active }) => {
  const setActive = (activeTab) => {
    if (activeTab === active) {
        return true
         }
      }

  return (
    <div className="">
      <div className="flex lg:flex-col flex-row px-6 lg:mt-10 lg:space-y-4 justify-between py-3">
          <Link href="/home" passHref>
            <div className={setActive("Home") ? 'text-[#E16A2E] flex space-x-2 lg:text-[20px] text-[24px] items-center cursor-pointer' : 'text-neutral-500 flex space-x-2 lg:text-[16px] text-[24px] items-center cursor-pointer'}>
              <FaHome />
              <span className="lg:block hidden">Home</span>
            </div>
          </Link>
          <Link href="/search" passHref>
            <div className={setActive("Search") ? 'text-[#E16A2E] cursor-pointer flex space-x-2 lg:text-[16px] text-[24px] items-center' : 'text-neutral-500 flex space-x-2 cursor-pointer lg:text-[16px] text-[24px] items-center'}>
              <FaSearch />
              <span className="lg:block hidden">Search</span>
            </div>
          </Link>
          <Link href="/cart" passHref>
            <div className={setActive("Cart") ? 'text-[#E16A2E] flex space-x-2 lg:text-[16px] text-[24px] items-center cursor-pointer' : 'text-neutral-500 flex space-x-2 lg:text-[16px] text-[24px] items-center cursor-pointer'}>
              <FaCartPlus />
              <span className="lg:block hidden">Cart</span>
            </div>
          </Link>
          <Link href="/wishlist" passHref>
            <div className={setActive("Wishlist") ? 'text-[#E16A2E] flex space-x-2 lg:text-[20px] text-[24px] items-center cursor-pointer' : 'text-neutral-500 cursor-pointer flex space-x-2 lg:text-[16px] text-[24px] items-center'}>
              <FaHeart />
              <span className="lg:block hidden">Wishlist</span>
            </div>
          </Link>
          <Link href="/profile" passHref>
            <div className={setActive("Profile") ? 'text-[#E16A2E] flex space-x-2 lg:text-[20px] text-[24px] items-center cursor-pointer' : 'text-neutral-500 flex space-x-2 cursor-pointer lg:text-[16px] text-[24px] items-center'}>
              <FaUser />
              <span className="lg:block hidden">Profile</span>
            </div>
          </Link>
      </div>
    </div>
  )
}

export default NavBar
