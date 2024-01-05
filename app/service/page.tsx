'use client'


import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Service() {
  const router = useRouter()
  return (
    <>
      <div className='bg-[#222222] h-full pb-36'>
        <div className='hidden sm:flex justify-between items-center sm:mx-16 md:mx-24 pt-12'>
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
              className='text-center h-10 sm:w-40 md:w-56 bg-[black] border sm:text-[10px] md:text-[12px] border-[#FB5F07] border-solid border-1 placeholder-white placeholder-font-[400] text-white font-poppins rounded-md ml-6'
            ></input>
            <button className='bg-[#EC4927] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] font-[600] md:text-[16px] font-open_sans h-10 w-40 rounded-md ml-6'>
              Change vehicle
            </button>
          </div>
        </div>

        <div className='mt-16 md:mt-20 text-center'>
          <img className='w-[85%] lg:w-[75%]' src='./availableservice.svg' alt='services'></img>
          <div className='sm:mt-[-40px] md:mt-[-6%] lg:mt-[-5%] xl:mt-[-5%] xll:mt-[-4%] text-[28px] sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[60px] text-center font-russoone font-normal'>
            All Services
          </div>
        </div>

        <div className='sm:grid sm:grid-cols-2 gap-1 mt-12'>
          <div className='ml-4 sm:ml-4 md:ml-8 lg:ml-28'>
            {/* <Service1 /> */}
          </div>

          <div>
            <div className='mr-1 sm:mr-0 ml-1 sm:ml-4 md:ml-8 xl:ml-36 xll:ml-64 bg-white sm:h-[100%] md:h-[95%] lg:h-[90%] rounded-md'>
              {/* <Service2 /> */}
            </div>
            <div className='hidden md:block sm:mx-20 flex float-right py-12'>
              <button
                onClick={() => router.push('/priceestimation')}
                className='bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] sm:text-[14px] md:text-[20px] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] md:text-[18px] font-russoone h-10 w-40 sm:h-12 sm:w-44 lg:h-16 lg:w-48 rounded-full ml-6'
              >
                BACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
