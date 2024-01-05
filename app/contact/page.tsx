'use client'

import Contactt from '@/components/Contact'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <div className='bg-[#222222] py-1 sm:py-12'>
        <div className='hidden sm:flex justify-between items-center mx-16 md:mx-24 '>
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
        </div>
        <div className=''>
          <p className='mt-6 text-[60px] font-[400] text-center font-russoone'>Contact Us</p>
        </div>

        <div className=''>
          <div className='flex items-center justify-center '>
            <Contactt />
          </div>
        </div>
      </div>
    </>
  )
}
