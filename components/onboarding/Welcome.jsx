import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Welcome = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:justify-center lg:items-center lg:w-[80vw] lg:h-screen lg:mt-0 mt-[2vh] mx-auto lg:space-x-10">
        <div className="lg:w-[70%] relative mt-[20vh] lg:mt-0">
            <div className="lg:hidden relative flex justify-end -top-[15vh]">
                <img src="/assets/onboarding/chair.png" alt="chair" className="absolute" />
                <img src="/assets/onboarding/ellipse_two.png" alt="ellipse_two" className="absolute" />
            </div>
            <div className="relative mt-14 lg:mt-0">
                <img src="/assets/onboarding/fronds.png" alt="frond" className="absolute bottom-0" />
                <img src="/assets/onboarding/cushion.png" alt="furniture" className="object-cover w-full h-full" />
            </div>
            <img src="/assets/onboarding/bulbs.png" alt="bulbs" className="absolute lg:-top-[200px] -top-[250px]" />
            <img src="/assets/onboarding/stool.png" alt="stool" className="lg:hidden absolute left-10 top-48" />
        </div>
        <div className="relative lg:w-auto w-[90vw] mx-auto">
            <img src="/assets/onboarding/ellipse_one.png" alt="ellipse_one" className="absolute lg:left-[150px] lg:-top-[150px] -top-[100px]" />
            <div 
            className="
            header flex font-semibold
            lg:flex-row lg:space-x-2 lg:space-y-0 lg:pb-0 lg:text-[46px] lg:items-center 
            flex-col text-[36px] -space-y-2 pb-4
            ">
                <span>Welcome to </span>
                <span>24Mobler</span>
            </div>
            <span className="text-[18px]">We Sale furniture for people to really kick off their shoes and lead happier, more relaxed lives.</span>
            <div className="mt-[20vh] lg:flex hidden justify-end mr-20">
                <Link href="/get-started" passHref>
                    <button className="bg-[#E16A2E] p-6 text-[20px] rounded-full text-white"> 
                        <FaArrowRight />
                    </button>
                </Link>
            </div>
        </div>
        <div className="lg:hidden absolute left-[75vw] -bottom-[80px]">
                <Link href="/get-started" passHref>
                    <button className="bg-[#E16A2E] p-6 text-[20px] rounded-full text-white"> 
                        <FaArrowRight />
                    </button>
                </Link>
        </div>
    </div>
  )
}

export default Welcome
