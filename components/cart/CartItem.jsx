import React from 'react'
import { FaBox } from 'react-icons/fa'

const CartItem = () => {
  return (
    <div className="flex lg:block">
        <div className="flex items-center justify-between space-x-3 mb-6">
            <div className="bg-[#E8EFFA] h-full py-4 px-8 text-[#B2BCCA] items-center flex">
                <FaBox size={20} />
            </div>
            <div className="flex flex-col">
                <span className="text-[14px]">Amet nunc, tincidunt interdum rhoncus massa</span>
                <div className="flex items-center space-x-2 mt-2">
                    <span className="border border-[#ccc] py-0.5 px-2 text-[13px]">-</span>
                    <span className="text-[13px]">2</span>
                    <span className="border border-[#ccc] py-0.5 px-2 text-[13px]">+</span>
                </div>
            </div>
            <div className="flex items-end flex-col">
                <span className="line-through text-[12px] text-neutral-400">$20.000</span>
                <span className="font-semibold text-[13px]">$16.000</span>
            </div>
        </div>
        <hr className="mb-2" />        
    </div>
  )
}

export default CartItem
