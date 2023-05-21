import React from 'react'
import Container from '../../components/layout/Container'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import CartItem from '../../components/cart/CartItem'

const Cart = () => {
  return (
    <Container active="Cart">
        <div className="lg:w-[70vw] mx-auto">
            <Link href="/home" passHref>
                <div className="mt-10">
                <FaArrowLeft />
                </div>
            </Link>

            <div className="mt-6">
                <h2 className="text-[18px] font-semibold">Order Review</h2>
                <span>3 items in card</span>

                <div className="flex flex-col space-y-3 mt-4">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Cart
