'use client'

import Signup from '@/components/Signup'

import { Grid } from '@mui/material'

export default function SignUp() {
  return (
    <>
      <div className='bg-[#222222]'>
        <div className='flex'>
          <div className='hidden sm:hidden md:hidden lg:block lg:w-2/5 xl:w-1/3'>
            <div>
              <img
                className='lg:h-[750px] lg:w-[370px] xl:h-[940px] xl:w-[480px] xll:h-[940px] xll:w-[600px]'
                src='/Car.png'
                alt='Car'
              ></img>
            </div>
          </div>
          <div className='sm:w-full lg:3/5 xl:w-2/3'>
            <Signup />
          </div>
        </div>
      </div>
    </>
  )
}
