import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

const Products = () => {
  return (
    <div className="">
        <div className="mt-14 flex justify-between items-center">
            <h2 className="text-[18px] lg:text-[24px] font-semibold text-neutral-500">Products</h2>
            <Link href="/home/products" passHref>
              <span className="cursor-pointer text-[#E16A2E] text-[13px] lg:text-[16px]">see all</span>
            </Link>
        </div>
        <div className="grid overflow-x-auto lg:grid-cols-4 grid-cols-2 mt-10 gap-6">
            <ProductCard img="yellow-armchair" used={true} productName="Yellow Armchair" price="$7999" deliveryFee="$700" />
            <ProductCard img="wood-frame" used={false} productName="Wood Frame" price="$2750" deliveryFee="$30" />
            <ProductCard img="modern-arm" used={true} productName="Modern Arm" price="$250" deliveryFee="$30" />
            <ProductCard img="ikea" used={false} productName="IKEA Ingolfdfda" price="$1600" deliveryFee="$30" />
            <ProductCard img="wood-frame" used={false} productName="Modern Arm" price="$250" deliveryFee="$30" />
            <ProductCard img="ikea" used={true} productName="IKEA Ingolfdfda" price="$1600" deliveryFee="$30" />
        </div>
    </div>
  )
}

export default Products
