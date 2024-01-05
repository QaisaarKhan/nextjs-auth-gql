'use client'

import Selection from '@/components/Serviceselection'
import Link from 'next/link'

export default function ServiceSelection() {
  return (
    <>
      <div className='bg-[#222222] py-1 sm:py-12'>
        <div className='hidden sm:flex justify-between items-center mx-16 lg:mx-24 '>
          <div className='flex gap-1'>
            <Link
              href={'/'}
              className='no-underline text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'
            >
              Home
            </Link>
            <div className='text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'>|</div>
            <Link
              href={'/service'}
              className='no-underline text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'
            >
              Services
            </Link>
          </div>

          <div>
            <input
              type='text'
              placeholder='2010 toyota tacoma 4 ol'
              className='text-left pl-3 sm:h-8 md:h-10 sm:w-40 md:w-56 lg:w-60 bg-[#222222] border sm:text-[10px] md:text-[12px] border-[#FB5F07] border-solid border-1 placeholder-white placeholder-font-[400] text-white font-poppins rounded-md ml-6'
            ></input>
            <button className='bg-[#EC4927] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] font-[600] md:text-[16px] font-poppins sm:h-8 md:h-10 md:w-24 lg:w-30  md:w-36 rounded-md ml-6'>
              Change vehicle
            </button>
          </div>
        </div>

        <div className='mt-12 text-[28px] sm:text-[28px] md:text-[40px] lg:text-[60px] md:mx-16 lg:mx-24 font-russoone font-[400]'>
          Break and traction control
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          <Selection />
        </div>
      </div>
    </>
  )
}
