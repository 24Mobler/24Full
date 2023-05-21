import Link from 'next/link'
import React from 'react'
import { FaLessThan } from 'react-icons/fa'
import Container from '../../../components/layout/Container'

const Birthday = () => {
  return (
    <Container active="Profile">
        <div className="mt-[5vh] lg:w-[50vw] mx-auto">
            <Link href="/profile" passHref>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FaLessThan fill="#ccc" />
                    <span className="font-semibold">Birthday</span>
                </div>
            </Link>
                <div className="mt-[10vh]">
                    <h2 className="font-bold mx-2 text-[18px] mb-6">Your birthday</h2>
                    <input type="date" name="birthday" id="birthday" className="w-full px-3 bg-neutral-200 py-2 text-neutral-600 rounded-lg" />
                </div>
                <div className="mt-6">
                    <button className="bg-[#E16A2E] text-white py-2 px-3 rounded-lg w-full">Save</button>
                </div>
        </div>
    </Container>
  )
}

export default Birthday
