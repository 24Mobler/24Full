import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaLessThan } from 'react-icons/fa'
import Container from '../../../components/layout/Container'

const Email = () => {
  return (
    <Container active="Profile">
        <div className="mt-[5vh] lg:w-[50vw] mx-auto">
            <Link href="/profile" passHref>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FaLessThan fill="#ccc" />
                    <span className="font-semibold">Email</span>
                </div>
            </Link>

            <div className="mt-[8vh]">
                <form>
                    <div className="input-field pb-1">
                        <label htmlFor="email" className="text-[16px] font-bold mx-2">Change Email</label>
                        <div className="flex items-center space-x-3 border border-[#ccc] mt-3 rounded-full py-1 px-3">
                            <FaEnvelope fill="#ccc" />
                            <input type="email" placeholder="johndoe@gmail.com" className="outline-none w-full hover:outline-none" />
                        </div>
                    </div>
                    <span className="text-[#E16A2E] text-[12px] px-2 font-semibold">We Will Send verification to your New Email</span>
                    <div className="mt-4">
                        <button className="bg-[#E16A2E] text-white py-2 px-3 rounded-lg w-full">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </Container>
  )
}

export default Email
