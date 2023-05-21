import React, { useEffect } from 'react'

const ProductCard = ({ img, used, productName, price, deliveryFee }) => {
    const [image, setImage] = React.useState('wood-frame')

  return (
    <div className="bg-[#F3F6F8]">
        <div className="relative">
            {used && <span className="absolute top-0 right-0 bg-[#FFEEDD] text-[#E29547] text-[13px] font-semibold px-4 py-1">Used</span>}
            <img src={`/assets/home/categories/products/${img}.png`} alt={image} className="w-full mx-auto" />
        </div>
        <div className="flex flex-col mt-3 mx-2">
            <h2 className="text-[14px] font-light">{productName}</h2>
            <span className="text-[15px] font-semibold mt-1">{price}</span>
            <div className="flex items-center mt-1 mb-3 space-x-1">
                <img src="/assets/home/categories/products/delivery.png" alt="delivery" />
                <span className="text-[12px]">{deliveryFee}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
