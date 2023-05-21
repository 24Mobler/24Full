import React from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import SocialAuth from './SocialAuth'

const LoginWithPassword = () => {
  return (
    <div className="flex flex-col lg:w-[60%] w-[100%]">
        <h2 className="lg:text-[36px] text-[30px] mt-4 font-bold">Welcome Back</h2>
        <span className="text-[13px] lg:text-[14px]">Proceed to sign in with your credentials</span>

        <form className="mt-4 space-y-3">
            <div className="input-field flex items-center space-x-3 border border-[#ccc] rounded-full py-2 px-3">
                <FaEnvelope fill="#ccc" />
                <input type="email" placeholder="johndoe@gmail.com" className="outline-none w-full" />
            </div>
            <div className="input-field flex items-center space-x-3 border border-[#ccc] rounded-full py-2 px-3">
                <FaLock fill="#ccc" />
                <input type="password" placeholder="******" className="outline-none w-full" />
            </div>
            <button className="justify-center text-[14px] text-white font-bold flex items-center py-3 w-full space-x-2 rounded-full bg-[#E16A2E]">Sign in</button>
        </form>   
        <SocialAuth isLogin={true} />
    </div>
  )
}

export default LoginWithPassword
