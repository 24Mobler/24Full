import Link from 'next/link'
import React from 'react'
import { FaLessThan, FaPhone } from 'react-icons/fa'
import Container from '../../../components/layout/Container'

const Phone = () => {
  return (
    <Container active="Profile">
        <div className="mt-[5vh] lg:w-[50vw] mx-auto">
            <Link href="/profile" passHref>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FaLessThan fill="#ccc" />
                    <span className="font-semibold">Phone Number</span>
                </div>
            </Link>

            <div className="mt-[8vh]">
                <form>
                    <div className="input-field pb-1">
                        <label htmlFor="name" className="text-[16px] font-bold mx-2">Update phone number</label>
                        <div className="flex items-center space-x-3 border border-[#ccc] mt-3 rounded-full py-1 px-3">
                            <FaPhone fill="#ccc" />
                            <input type="name" placeholder="1234567890" className="outline-none w-full hover:outline-none" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="bg-[#E16A2E] text-white py-2 px-3 rounded-lg w-full">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </Container>
  )
}

export default Phone
