'use client'

import Profilee from '@/components/Profile'
import Profilee1 from '@/components/Profile1'
import { useRouter } from 'next/navigation'
export default function Profile() {
  const router = useRouter()
  return (
    <>
      <div className='bg-[#222222] py-1'>
        <div className=''>
          <p className='text-[60px] text-center font-russoone'>Profile</p>
          <div className='text-right px-10'>
            <button
              className='bg-[black] border text-[20px] border-[#FB5F07] border-solid border-2 hover:bg-[#EC4927] text-white font-bold py-3 px-6 rounded-full ml-6'
              onClick={() => router.push('/allmember')}
            >
              View Members
            </button>
            <button
              onClick={() => router.push('/addmember')}
              className='bg-[#EC4927] text-[20px] border-[#EC4927] hover:bg-[#EC4927] text-white font-bold py-3 px-6 rounded-full ml-6'
            >
              Add Member
            </button>
          </div>
        </div>

        <div className='flex mt-6'>
          <div className='w-full sm:w-full lg:2/3 xl:w-2/3'>
            <Profilee />
          </div>

          <div className='hidden sm:hidden md:hidden lg:block lg:w-1/3 xl:w-1/3'>
            <Profilee1 />
          </div>
        </div>
      </div>
    </>
  )
}
