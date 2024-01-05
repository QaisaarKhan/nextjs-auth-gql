'use client'

import Signin from '@/components/Email'

export default function Email() {
  return (
    <>
      <div className='bg-[#222222]'>
        <div className='flex'>
          <div className='hidden sm:hidden md:hidden lg:block lg:w-1/3 xl:w-2/5'>
            <div>
              <img
                className='lg:h-[750px] lg:w-[370px] xl:h-[940px] xl:w-[580px] xll:w-[730px]'
                src='/Car.png'
                alt='Car'
              ></img>
            </div>
          </div>
          <div className='w-full sm:w-full lg:2/3 xl:w-3/5'>
            <Signin />
          </div>
        </div>
      </div>
    </>
  )
}
