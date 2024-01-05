'use client'

import Pretip from '@/components/Pretip'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
export default function Tip() {
  const router = useRouter()
  return (
    <>
      <div className='bg-[#222222] py-3 xll:py-12 sm:py-12 h-full lg:h-full'>
        <div className='hidden sm:flex justify-between items-center sm:mx-12 lg:mx-12 xl:mx-24 '>
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
              className='text-center h-10 sm:w-40 md:w-60 bg-[black] border sm:text-[10px] md:text-[12px] border-[#FB5F07] border-solid border-1 placeholder-white placeholder-font-[400] text-white font-poppins rounded-md ml-6'
            ></input>
            <button className='bg-[#EC4927] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] font-[600] md:text-[16px] font-poppins h-10 w-40 rounded-md ml-6'>
              Change vehicle
            </button>
          </div>
        </div>

        <div className='mt-12 text-[28px] sm:text-[28px] md:text-[48px] lg:text-[60px] text-center font-russoone font-normal'>
          Pre tips Auto Inspection
        </div>

        {/* <div className="px-7 sm:ml-[5%] md:ml-[11%] lg:ml-[31%] xl:ml-[47%] xll:ml-[59%]"> */}
        <div className='mt-4 mx-6 md:mx-12 lg:mx-12 xl:mx-24'>
          <button
            onClick={() => router.push('/priceestimation')}
            className='float-right bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] font-[500] sm:text-[14px] md:text-[20px] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] md:text-[18px] font-poppins h-12 w-48 rounded-md ml-6'
          >
            Price Estimation
          </button>
        </div>

        <div className='mt-20 ml-6 md:ml-20 sm:mr-12 md:mr-24 xl:mr-48 flex gap-6'>
          <div className='font-russoone text-[44px]'>1.</div>

          <div className=''>
            <span className='font-russoone text-[32px] sm:text-[40px] md:text-[46px] bg-clip-text text-transparent bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] '>
              Open Engine
            </span>
            <span className='font-[Poppins] font-[400] lowercase text-[16px] ml-6 leading-[28px] tracking-widest'>
              consectetur. Fermentum placerat tristique varius massa. Ultricies non purus euismod eu
              pellentesque. Convallis blandit quis dignissim faucibus sagittis. Lorem ipsum dolor
              sit amet consectetur. Fermentum placerat tristique varius massa. Ultricies non purus
              euismod eu pellentesque. Convallis blandit quis dignissim faucibus sagittis.
            </span>
          </div>
        </div>

        <div className='mt-20 ml-6 md:ml-20 sm:mr-12 md:mr-24 xl:mr-48 flex gap-6'>
          <div className='font-russoone text-[44px]'>2.</div>

          <div className=''>
            <span className='font-russoone text-[32px] sm:text-[40px] md:text-[46px] bg-clip-text text-transparent bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] '>
              Battery
            </span>
            <span className='font-[Poppins] font-[400] lowercase text-[16px] ml-6 leading-[28px] tracking-widest'>
              consectetur. Fermentum placerat tristique varius massa. Ultricies non purus euismod eu
              pellentesque. Convallis blandit quis dignissim faucibus sagittis. Lorem ipsum dolor
              sit amet consectetur. Fermentum placerat tristique varius massa. Ultricies non purus
              euismod eu pellentesque. Convallis blandit quis dignissim faucibus sagittis.
            </span>
          </div>
        </div>

        <div className='mt-20 ml-6 md:ml-20 sm:mr-12 md:mr-24 xl:mr-48 flex gap-6'>
          <div className='font-russoone text-[44px]'>3.</div>

          <div className=''>
            <span className='font-russoone text-[32px] sm:text-[40px] md:text-[46px] bg-clip-text text-transparent bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] '>
              Engine Oil
            </span>
            <span className='font-[Poppins] font-[400] lowercase text-[16px] ml-6 leading-[28px] tracking-widest'>
              consectetur. Fermentum placerat tristique varius massa. Ultricies non purus euismod eu
              pellentesque. Convallis blandit quis dignissim faucibus sagittis. Lorem ipsum dolor
              sit amet consectetur. Fermentum placerat tristique varius massa. Ultricies non purus
              euismod eu pellentesque. Convallis blandit quis dignissim faucibus sagittis.
            </span>
          </div>
        </div>

        <div className='mt-20 ml-6 md:ml-20 sm:mr-12 md:mr-24 xl:mr-48 flex gap-6'>
          <div className='font-russoone text-[44px]'>4.</div>

          <div className=''>
            <span className='font-russoone text-[32px] sm:text-[40px] md:text-[46px] bg-clip-text text-transparent bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] '>
              Transmission Fluid
            </span>
            <span className='font-[Poppins] font-[400] lowercase text-[16px] ml-6 leading-[28px] tracking-widest'>
              consectetur. Fermentum placerat tristique varius massa. Ultricies non purus euismod eu
              pellentesque. Convallis blandit quis dignissim faucibus sagittis. Lorem ipsum dolor
              sit amet consectetur. Fermentum placerat tristique varius massa. Ultricies non purus
              euismod eu pellentesque. Convallis blandit quis dignissim faucibus sagittis.
            </span>
          </div>
        </div>

        <div className='mt-20 ml-6 md:ml-20 sm:mr-12 md:mr-24 xl:mr-48 flex gap-6'>
          <div className='font-russoone text-[44px]'>5.</div>

          <div className=''>
            <span className='font-russoone text-[32px] sm:text-[40px] md:text-[46px] bg-clip-text text-transparent bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] '>
              Tires
            </span>
            <span className='font-[Poppins] font-[400] lowercase text-[16px] ml-6 leading-[28px] tracking-widest'>
              consectetur. Fermentum placerat tristique varius massa. Ultricies non purus euismod eu
              pellentesque. Convallis blandit quis dignissim faucibus sagittis. Lorem ipsum dolor
              sit amet consectetur. Fermentum placerat tristique varius massa. Ultricies non purus
              euismod eu pellentesque. Convallis blandit quis dignissim faucibus sagittis.
            </span>
          </div>
        </div>
        <div className='hidden sm:grid grid-cols-3 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 mt-12 mx-4 sm:mx-10 md:mx-12 lg:mx-1 xl:mx-32 xll:mx-44 gap-6 sm:gap-4 lg:gap-2 xl::gap-6 sm:text-center '>
          <Pretip />
        </div>

        <div className='mt-12 pb-12 mx-6 sm:mx-6 md:mx-12 lg:mx-12 lg:mx-12 xl:mx-28 xll:mx-28'>
          <button
            onClick={() => router.push('/')}
            className='float-right bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] sm:text-[14px] md:text-[20px] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] md:text-[18px] font-russoone h-10 w-40 sm:h-12 sm:w-44 lg:h-16 lg:w-48 rounded-full ml-6'
          >
            BACK
          </button>
        </div>
      </div>
    </>
  )
}
