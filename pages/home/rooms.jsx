import React from 'react'
import Container from '../../components/layout/Container'
import { FaArrowLeft, FaFilter, FaSearch } from 'react-icons/fa'
import Link from 'next/link'

const Rooms = () => {
  return (
      <Container active="Home">
        <div className="lg:w-[75vw] mx-auto">
            <Link href="/home">
                <div className="pt-6 cursor-pointer">
                    <FaArrowLeft />
                </div>
            </Link>
            <div className="flex justify-between items-end lg:space-x-20 space-x-4">
                <div className="input-search w-full mx-auto flex items-center space-x-3 border py-1 px-3 lg:py-2 placeholder:text-[18px] rounded-full mt-4">
                    <FaSearch fill="#ccc" />
                    <input type="search" name="search" id="search-categories" placeholder="search" className="h-full w-full outline-none border-none" />
                </div>
                <FaFilter size={24} />
            </div>
            <div className="mt-4 lg:mt-10 flex flex-col">
                <h2 className="text-[18px] lg:text-[24px] font-semibold text-neutral-500">Rooms</h2>
                <span className="text-neutral-500 text-[12px] lg:text-[16px]">Furniture for every room in your home</span>
            </div>
            <div className="grid overflow-x-auto lg:grid-cols-4 grid-cols-2 gap-4 my-4">
            <div className=" h-[195px] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/dining_room.png')] bg-center bg-cover bg-no-repeat p-6">Dining room</div>
            <div className=" h-[195px] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/bedroom.png')] bg-center bg-cover bg-no-repeat p-6">Bedroom</div>
            <div className=" h-[195px] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/office.png')] bg-center bg-cover bg-no-repeat p-6">Office room</div>
            <div className=" h-[195px] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/bedroom.png')] bg-center bg-cover bg-no-repeat p-6">Bedroom</div>
            <div className=" h-[195px] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/dining_room.png')] bg-center bg-cover bg-no-repeat p-6">Dining room</div>
            <div className=" h-[195px] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/bedroom.png')] bg-center bg-cover bg-no-repeat p-6">Bedroom</div>
            <div className=" h-[195px] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/office.png')] bg-center bg-cover bg-no-repeat p-6">Office room</div>
            <div className=" h-[195px] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/bedroom.png')] bg-center bg-cover bg-no-repeat p-6">Bedroom</div>
            </div>
        </div>
    </Container>
  )
}

export default Rooms
