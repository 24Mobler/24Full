import Link from 'next/link'
import React from 'react'

const Furnitures = () => {
  return (
    <div>
        <div className="mt-14 flex justify-between items-center">
            <h2 className="text-[18px] lg:text-[24px] font-semibold text-neutral-500">Furnitures</h2>
            <Link href="/home/furnitures" passHref>
              <span className="cursor-pointer text-[#E16A2E] text-[13px] lg:text-[16px]">see all</span>
            </Link>
        </div>
        <span className="text-neutral-500 text-[12px] lg:text-[16px]">Furniture for every corners in your home</span>
        <div className="flex overflow-x-auto flex-nowrap space-x-6 mt-6">
          <div className="w-[127px] h-[56px] lg:w-[25%] lg:h-[15vh] flex-none bg-[url('/assets/home/categories/furniture/chair.png')] bg-center bg-cover bg-no-repeat">
            <span className="text-[13px] flex justify-start items-center h-full px-4 font-semibold">Chair</span>
          </div>
          <div className="w-[127px] h-[56px] lg:w-[25%] lg:h-[15vh] flex-none bg-[url('/assets/home/categories/furniture/sofa.png')] bg-center bg-cover bg-no-repeat">
            <span className="text-[13px] flex justify-start items-center h-full px-4 font-semibold">Sofa</span>
          </div>
          <div className="w-[127px] h-[56px] lg:w-[25%] lg:h-[15vh] flex-none bg-[url('/assets/home/categories/furniture/desk.png')] bg-center bg-cover bg-no-repeat">
            <span className="text-[13px] flex justify-start items-center h-full px-4 font-semibold">Desk</span>
          </div>
          <div className="w-[127px] h-[56px] lg:w-[25%] lg:h-[15vh] flex-none bg-[url('/assets/home/categories/furniture/chair.png')] bg-center bg-cover bg-no-repeat">
            <span className="text-[13px] flex justify-start items-center h-full px-4 font-semibold">Chair</span>
          </div>
        </div>
    </div>
  )
}

export default Furnitures
