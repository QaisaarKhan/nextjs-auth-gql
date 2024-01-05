'use client'

export default function Pricingplan() {
  return (
    <>
      <div className='bg-[#222222] py-1 h-screen h-[1200px] md:h-[970px]'>
        <p className='text-[36px] sm:text-[60px] text-center font-[400] font-russoone'>
          Pricing Plan
        </p>

        <div className='md:flex'>
          <div className='w-[100%] md:w-[47%] mt-4 md:mt-12 md:pl-4 lg:pl-12 xl:pl-48'>
            <img className='flex mx-auto' src='./vector1.svg'></img>
            <div className='font-russoone font-[400] text-[32px] sm:text-[42px] mt-12 text-center'>
              Basic Plan
            </div>
            <div className='flex gap-4 mt-3 md:mt-6 ml-12 sm:ml-32 md:ml-16 xll:ml-44'>
              <img src='tick.svg' alt='tick'></img>
              <div className='font-poppins text-[20px] sm:text-[24px] font-[400]'>
                1 Make and Model
              </div>
            </div>

            <div className='flex gap-4 md:my-3 mt-4 ml-12 sm:ml-32 md:ml-16 xll:ml-44 '>
              <img src='tick.svg' alt='tick'></img>
              <div className='font-poppins text-[20px] sm:text-[24px] font-[400]'>
                Dedicated Repair Software
              </div>
            </div>
            <button className='mt-6 md:mt-12 ml-24 sm:ml-36 md:ml-20 xll:ml-48 bg-[black] border text-[16px] sm:text-[20px] font-poppins border-[#FB5F07] border-solid border-2 hover:bg-[#EC4927] text-white font-[500] h-10 w-60 sm:h-12 sm:w-64 md:h-12 md:w-64  lg:h-16 lg:w-80 rounded-lg'>
              Start a 14 day free trial
            </button>
          </div>
          <div className='hidden md:block w-[6%] mt-12'>
            <img className='flex mx-auto' src='./line.svg'></img>
          </div>
          <div className='w-[100%] md:w-[47%] mt-12 md:pr-4 lg:pr-12 xl:pr-48'>
            <img className='flex mx-auto' src='./vector2.svg'></img>
            <div className='font-russoone font-[400] text-[32px] sm:text-[42px] mt-12 text-center'>
              Pro
            </div>
            <div className='flex gap-4 mt-3 md:mt-6 ml-12 sm:ml-36 md:ml-16 xll:ml-44'>
              <img src='tick.svg' alt='tick'></img>
              <div className='font-poppins text-[20px] sm:text-[24px] font-[400]'>
                All Makes and Models
              </div>
            </div>

            <div className='flex gap-4 md:my-3 mt-4 ml-12 sm:ml-36 md:ml-16 xll:ml-44 '>
              <img src='tick.svg' alt='tick'></img>
              <div className='font-poppins text-[20px] sm:text-[24px] font-[400]'>
                Full Repair Software
              </div>
            </div>
            <button className='mt-6 md:mt-12 ml-36 sm:ml-48 md:ml-28 xll:ml-60 bg-[black] border text-[16px] sm:text-[20px] font-poppins border-[#FB5F07] border-solid border-2 hover:bg-[#EC4927] text-white font-[500] h-10 w-40 sm:h-12 sm:w-48 md:h-12 md:w-40 lg:h-16 lg:w-48 rounded-lg'>
              Choose Pro
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
