import Link from 'next/link'
import React from 'react'

const Rooms = () => {
  return (
    <div>
        <div className="mt-4 lg:mt-10 flex justify-between items-center">
            <h2 className="text-[18px] lg:text-[24px] font-semibold text-neutral-500">Rooms</h2>
            <Link href="/home/rooms" passHref>
              <span className="cursor-pointer text-[#E16A2E] text-[13px] lg:text-[16px]">see all</span>
            </Link>
        </div>
        <span className="text-neutral-500 text-[12px] lg:text-[16px]">Furniture for every room in your home</span>
        <div className="flex overflow-x-auto flex-nowrap space-x-6 mt-6">
          <div className="w-[127px] h-[195px] lg:w-[25%] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/dining_room.png')] bg-center bg-cover bg-no-repeat p-6">Dining room</div>
          <div className="w-[127px] h-[195px] lg:w-[25%] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/bedroom.png')] bg-center bg-cover bg-no-repeat p-6">Bedroom</div>
          <div className="w-[127px] h-[195px] lg:w-[25%] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/office.png')] bg-center bg-cover bg-no-repeat p-6">Office room</div>
          <div className="w-[127px] h-[195px] lg:w-[25%] lg:h-[40vh] flex-none bg-[url('/assets/home/categories/rooms/bedroom.png')] bg-center bg-cover bg-no-repeat p-6">Bedroom</div>
        </div>
    </div>
  )
}

export default Rooms
