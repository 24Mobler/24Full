import Link from 'next/link'
import React from 'react'
import { FaLessThan } from 'react-icons/fa'
import Container from '../../../components/layout/Container'

const Password = () => {
  return (
    <Container active="Profile">
        <div className="mt-[5vh] lg:w-[50vw] mx-auto">
            <Link href="/profile" passHref>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FaLessThan fill="#ccc" />
                    <span className="font-semibold">Change Password</span>
                </div>
            </Link>

            <div className="mt-[8vh]">
                <form>
                    <div className="input-field">
                        <label htmlFor="oldpassword" className="font-semibold text-[15px]">Old Password</label>
                        <input type="password" name="oldpassword" id="oldpassword" className="w-full py-2 px-3 rounded-lg border border-neutral-400 mt-2" placeholder="*********" />
                    </div>
                    <div className="input-field mt-6">
                        <label htmlFor="newpassword" className="font-semibold text-[15px]">New Password</label>
                        <input type="password" name="newpassword" id="newpassword" className="w-full py-2 px-3 rounded-lg border border-neutral-400 mt-2" placeholder="*********" />
                    </div>
                    <div className="input-field mt-6">
                        <label htmlFor="confirmpassword" className="font-semibold text-[15px]">Confirm New Password</label>
                        <input type="password" name="confirmpassword" id="confirmpassword" className="w-full py-2 px-3 rounded-lg border border-neutral-400 mt-2" placeholder="*********" />
                    </div>
                    <div className="mt-6">
                        <button className="bg-[#E16A2E] text-white py-2 px-3 rounded-lg w-full">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </Container>
  )
}

export default Password
