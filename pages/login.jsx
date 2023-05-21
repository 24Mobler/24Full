import React, { useState } from 'react'
import Container from '../components/onboarding/Container'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import LoginWithPassword from '../components/onboarding/LoginWithPassword'

const Login = () => {
  const [activeTab, setActiveTab] = useState('LoginWithoutPassword')
  return (
    <Container>
       {activeTab === 'LoginWithoutPassword' ? (
          <div className="flex flex-col lg:w-[60%] w-[100%]">
            <h2 className="lg:text-[36px] text-[30px] font-bold mb-4 mt-4 lg:mt-0">Let&apos;s get you in</h2>
            <div className="flex flex-col space-y-4">
              <button className="border border-[#737373] justify-center text-[13px] flex items-center py-1.5 space-x-2 rounded-full">
                <FaFacebook fill="blue" size={20} />
                <span>Sign in with Facebook</span>
              </button>
              <button className="border border-[#737373] justify-center text-[13px] flex items-center py-1.5 space-x-2 rounded-full">
                <FaGoogle fill="red" size={18} />
                <span>Sign in with Google</span>
              </button>
              <button className="border border-[#737373] justify-center text-[13px] flex items-center py-1.5 space-x-2 rounded-full">
                <FaApple fill="#000" size={20} />
                <span>Sign in with Apple</span>
              </button>
              <span className="text-center">or</span>
            </div>

            <button
            onClick={() => setActiveTab('LoginWithPassword')} 
            className="justify-center mt-4 text-[14px] text-white font-bold flex items-center py-3 space-x-2 rounded-full bg-[#E16A2E]">
              Sign in with password
            </button>
              <div className="flex items-center mt-3 justify-center text-[13px] space-x-2">
                <span className="">Don&apos;t have an account? </span>
                  <Link href="/get-started" passHref>
                    <span className="text-[#E16A2E] cursor-pointer">Sign up</span>
                  </Link>
              </div>
            </div>
       ) : (
        <LoginWithPassword />
       )}
    </Container>
  )
}

export default Login
