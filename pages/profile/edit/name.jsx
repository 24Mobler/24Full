import React from 'react'
import Container from '../../../components/layout/Container'
import { FaLessThan, FaUser } from 'react-icons/fa'
import Link from 'next/link'

const Name = () => {
  return (
    <Container active="Profile">
        <div className="mt-[5vh] lg:w-[50vw] mx-auto">
            <Link href="/profile" passHref>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FaLessThan fill="#ccc" />
                    <span className="font-semibold">Name</span>
                </div>
            </Link>

            <div className="mt-[8vh]">
                <form>
                    <div className="flex justify-center my-6">
                        <FaUser size={40} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname" className="font-semibold text-[15px]">First Name</label>
                        <input type="text" name="firstname" id="firstname" className="w-full py-2 px-3 rounded-lg border border-neutral-400 mt-2" placeholder="John" />
                    </div>
                    <div className="input-field mt-6">
                        <label htmlFor="lastname" className="font-semibold text-[15px]">Last Name</label>
                        <input type="text" name="lastname" id="lastname" className="w-full py-2 px-3 rounded-lg border border-neutral-400 mt-2" placeholder="Doe" />
                    </div>
                    <div className="input-field mt-6">
                        <label htmlFor="username" className="font-semibold text-[15px]">User Name</label>
                        <input type="text" name="username" id="username" className="w-full py-2 px-3 rounded-lg border border-neutral-400 mt-2" placeholder="johndoe19" />
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

export default Name
