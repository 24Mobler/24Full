import Link from 'next/link'
import React from 'react'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'

const SocialAuth = ({ isLogin }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-center my-4">or continue with</span>
      <div className="flex space-x-4">
        <button className="border border-[#ccc] py-1 px-4">
          <FaFacebook fill="blue" size={22} />
        </button>
        <button className="border border-[#ccc] py-1 px-4">
          <FaGoogle fill="red" size={22} />
        </button>
        <button className="border border-[#ccc] py-1 px-4">
          <FaApple fill="#000" size={22} />
        </button>
      </div>

      {isLogin ? (
        <div className="flex items-center mt-3 justify-center text-[13px] space-x-2">
          <span className="">Don&apos;t have an account? </span>
            <Link href="/get-started" passHref>
              <span className="text-[#E16A2E] cursor-pointer">Sign up</span>
            </Link>
        </div>
      ) : (
        <div className="flex items-center mt-3 justify-center text-[13px] space-x-2">
          <span className="">Already have an account? </span>
          <Link href="/login" passHref>
            <span className="text-[#E16A2E] cursor-pointer">Login</span>
          </Link>
    </div>
      )}
    </div>
  )
}

export default SocialAuth
