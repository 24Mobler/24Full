import React from 'react'
import Container from '../../components/layout/Container'
import { FaCalendar, FaEdit, FaEnvelope, FaGreaterThan, FaLessThan, FaLock, FaMale, FaPeopleArrows, FaPhone, FaUser } from 'react-icons/fa'
import Link from 'next/link'

const Profile = () => {
  return (
      <Container active="Profile">
        <div className="mt-[5vh] lg:w-[50vw] mx-auto">
            <Link href="/home" passHref>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FaLessThan fill="#ccc" />
                    <span className="font-semibold">Profile</span>
                </div>
            </Link>
            <div className="mt-[5vh] flex items-start space-x-6">
                <FaUser size={40} />
                <div className="flex flex-col">
                    <span className="font-bold text-[18px]">John Doe</span>
                    <span className="text-neutral-500 text-light text-[12px]">@johndoe19</span>    
                </div>
                <Link href="/profile/edit/name" passHref>
                    <span className="cursor-pointer text-neutral-600"><FaEdit /></span>    
                </Link> 
            </div>
            <div className="mt-[10vh] flex flex-col lg:space-y-8 space-y-6">
                <Link href="/profile/edit/gender" passHref>
                    <div className="flex justify-between cursor-pointer">
                        <div className="flex space-x-3">
                            <FaPeopleArrows size={20} fill="#E16A2E" />
                            <span className="font-semibold text-[15px]">Gender</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span className="text-neutral-500 text-[13px]">Male</span>
                            <FaGreaterThan fill="#ccc" size={16} />
                        </div>
                    </div>
                </Link>
                <hr />

                <Link href="/profile/edit/birthday" passHref>
                    <div className="flex justify-between cursor-pointer">
                        <div className="flex space-x-3">
                            <FaCalendar size={20} fill="#E16A2E" />
                            <span className="font-semibold text-[15px]">Birthday</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span className="text-neutral-500 text-[13px]">16-03-2005</span>
                            <FaGreaterThan fill="#ccc" size={16} />
                        </div>
                    </div>
                </Link>
                <hr />

                <Link href="/profile/edit/email" passHref>
                    <div className="flex justify-between cursor-pointer">
                        <div className="flex space-x-3">
                            <FaEnvelope size={20} fill="#E16A2E" />
                            <span className="font-semibold text-[15px]">Email</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span className="text-neutral-500 text-[13px]">johndoe19@gmail.com</span>
                            <FaGreaterThan fill="#ccc" size={16} />
                        </div>
                    </div>
                </Link>
                <hr />

                <Link href="/profile/edit/phone" passHref>
                    <div className="flex justify-between cursor-pointer">
                        <div className="flex space-x-3">
                            <FaPhone size={20} fill="#E16A2E" />
                            <span className="font-semibold text-[15px]">Phone Number</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span className="text-neutral-500 text-[13px]">123456789</span>
                            <FaGreaterThan fill="#ccc" size={16} />
                        </div>
                    </div>
                </Link>
                <hr />

                <Link href="/profile/edit/password" passHref>
                    <div className="flex justify-between cursor-pointer">
                        <div className="flex space-x-3">
                            <FaLock size={20} fill="#E16A2E" />
                            <span className="font-semibold text-[15px]">Change Password</span>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <span className="text-neutral-500 text-[13px]">************</span>
                            <FaGreaterThan fill="#ccc" size={16} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
      </Container>
  )
}

export default Profile
