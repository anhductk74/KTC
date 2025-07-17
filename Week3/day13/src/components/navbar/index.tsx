import React from 'react'
import Image from "next/image";
import { Search, User, ShoppingCart, MapPin, ChevronRight } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='w-full'>
      {/* HEADER TOP*/}
      <header className='w-full bg-[#85E3FF]'>
        <Image className='flex mx-auto' src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/bd/26/bd260331dfc577627b0c955e027cdaba.png" alt="" width={1200} height={100} unoptimized priority={true} />
      </header>

      {/* HEADER CENTER*/}
      <div className='w-full bg-[#FFD500]'>
        <div className='w-full flex justify-center items-center gap-5 py-2'>
          <h1 className='text-2xl font-bold'>thegioididong.com</h1>
          <div className='flex items-center gap-2 bg-white rounded-full w-[380px]'>
            <Search className='text-gray-500 w-[20px] h-[20px] ml-2' />
            <input className='w-[300px] h-[40px] rounded-full border-none outline-none' type="text" name="" id="" placeholder='Tìm kiếm sản phẩm' />
          </div>
          <div className='flex items-center gap-2'>
            <User />Đăng nhập
          </div>
          <div className='flex items-center gap-2'>
            <ShoppingCart />Giỏ hàng
          </div>
          <div className='flex justify-between items-center gap-2 bg-[#ffe14c] rounded-full w-[300px] py-2 hover:bg-[#FFEE99] cursor-pointer'>
            <div className='flex items-center gap-2'>
              <MapPin className='w-[20px] h-[20px] ml-2' /><p>Hồ Chí Minh</p>
            </div>
            <ChevronRight />
          </div>
        </div>
      </div>

      {/* HEADER BOTTOM*/}
      <div className='w-full flex justify-center items-center gap-1 bg-[#FFD500] text-[14px]'>
        <div className='flex items-center gap-2 p-2 rounded-t-lg hover:bg-[#FFEE99] cursor-pointer'>
          <Image className='w-[24px] h-[24px]' src="https://cdn.tgdd.vn/content/phonne-24x24.png" alt="icon Điện thoại" width={24} height={24} unoptimized priority={true} />
          <p>Điện thoại</p>
        </div>
        <div className='flex items-center gap-2 p-2 rounded-t-lg hover:bg-[#FFEE99] cursor-pointer'>
          <Image className='w-[24px] h-[24px]' src="https://cdn.tgdd.vn/content/laptop-24x24.png" alt="icon Laptop" width={24} height={24} unoptimized priority={true} />
          <p>Laptop</p>
        </div>
        <div className='flex items-center gap-2 p-2 rounded-t-lg hover:bg-[#FFEE99] cursor-pointer'>
          <Image className='w-[24px] h-[24px]' src="https://cdn.tgdd.vn/content/phu-kien-24x24.png" alt="icon Phụ kiện" width={24} height={24} unoptimized priority={true} />
          <p>Phụ kiện</p>
        </div>
        <div className='flex items-center gap-2 p-2 rounded-t-lg hover:bg-[#FFEE99] cursor-pointer'>
            <Image className='w-[24px] h-[24px]' src="https://cdn.tgdd.vn/content/smartwatch-24x24.png" alt="icon Smartwatch" width={24} height={24} unoptimized priority={true} />
          <p>Smartwatch</p>
        </div>
        <div className='flex items-center gap-2 p-2 rounded-t-lg hover:bg-[#FFEE99] cursor-pointer'>
          <Image className='w-[24px] h-[24px]' src="https://cdn.tgdd.vn/content/watch-24x24.png" alt="icon Đồng hồ" width={24} height={24} unoptimized priority={true} />
          <p>Đồng hồ</p>
        </div>
        <div className='flex items-center gap-2 p-2 rounded-t-lg hover:bg-[#FFEE99] cursor-pointer'>
          <Image className='w-[24px] h-[24px]' src="https://cdn.tgdd.vn/content/tablet-24x24.png" alt="icon Tablet" width={24} height={24} unoptimized priority={true} />
          <p>Tablet</p>
        </div>
        <div className='flex items-center gap-2 p-2 rounded-t-lg hover:bg-[#FFEE99] cursor-pointer'>
            <Image className='w-[24px] h-[24px]' src="https://cdn.tgdd.vn/content/may-cu-24x24.png" alt="icon Máy cũ, Thu cũ" width={24} height={24} unoptimized priority={true} />
          <p>Máy cũ, Thu cũ</p>
        </div>
        <div className='flex items-center gap-2 p-2 rounded-t-lg hover:bg-[#FFEE99] cursor-pointer'>
          <Image className='w-[24px] h-[24px]' src="https://cdn.tgdd.vn/content/PC-24x24.png" alt="icon Màn hình, Máy in" width={24} height={24} unoptimized priority={true} />
          <p>Màn hình, Máy in</p>
        </div>
        <div className='flex items-center gap-2 p-2 rounded-t-lg hover:bg-[#FFEE99] cursor-pointer'>
          <Image className='w-[24px] h-[24px]' src="https://cdn.tgdd.vn/content/sim-24x24.png" alt="icon Sim, Thẻ cào" width={24} height={24} unoptimized priority={true} />
          <p>Sim, Thẻ cào</p>
        </div>
        <div className='flex items-center gap-2 p-2 rounded-t-lg hover:bg-[#FFEE99] cursor-pointer'>
          <Image className='w-[24px] h-[24px]' src="https://cdn.tgdd.vn/content/tien-ich-24x24.png" alt="icon Dịch vụ tiện ích" width={24} height={24} unoptimized priority={true} />
          <p>Dịch vụ tiện ích</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar