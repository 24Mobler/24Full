import React from 'react'
import Rooms from './Rooms'
import Furnitures from './Furnitures'
import Products from './products'

const Categories = () => {
  return (
    <div className="mt-4 lg:mt-10">
      <h2 className="text-[18px] lg:text-[24px] font-semibold">Categories</h2>

      <Rooms />
      <Furnitures />
      <Products />
    </div>
  )
}

export default Categories
