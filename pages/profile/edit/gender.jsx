import React from 'react'
import Container from '../../../components/layout/Container'
import Link from 'next/link'
import { FaLessThan } from 'react-icons/fa'

const Gender = () => {
  return (
    <Container active="Profile">
        <div className="mt-[5vh] lg:w-[50vw] mx-auto">
            <Link href="/profile" passHref>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FaLessThan fill="#ccc" />
                    <span className="font-semibold">Gender</span>
                </div>
            </Link>
                <div className="mt-[10vh]">
                    <h2 className="font-bold mx-2 text-[18px] mb-6">Choose Gender</h2>
                    <select name="gender" id="gender" className="w-full py-2 px-3 rounded-lg text-neutral-500">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="rns">Rather not say</option>
                    </select>
                </div>
                <div className="mt-6">
                    <button className="bg-[#E16A2E] text-white py-2 px-3 rounded-lg w-full">Save</button>
                </div>
        </div>
    </Container>
  )
}

export default Gender
