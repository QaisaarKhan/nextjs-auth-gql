'use client'

import Dashboardd from '@/components/Dashboard'
import Link from 'next/link'
export default function Dashboard() {
  return (
    <>
      <div className='bg-[#222222] py-12'>
        <div className='hidden sm:flex justify-between items-center mx-16 md:mx-24 '>
          <Link href='/' className='no-underline text-[14px] text-[#FF6A47] font-poppins pt-[15px]'>
            Home
          </Link>

          <div>
            <input
              type='text'
              placeholder='2010 toyota tacoma 4 ol'
              className='text-center h-10 sm:w-40 md:w-56 bg-[black] border sm:text-[10px] md:text-[12px] border-[#FB5F07] border-solid border-1 placeholder-white placeholder-font-[400] text-white font-poppins rounded-full ml-6'
            ></input>
            <button className='bg-[#EC4927] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] font-[600] md:text-[16px] font-open_sans h-10 w-40 rounded-full ml-6'>
              Change vehicle
            </button>
          </div>
        </div>

        <Dashboardd />
      </div>
    </>
  )
}
