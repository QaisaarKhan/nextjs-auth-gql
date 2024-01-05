'use client'

import Addmember from '@/components/Member'

export default function Member() {
  return (
    <>
      <div className='bg-[#222222] py-2'>
        <div className=''>
          <p className='text-[60px] text-center font-russoone'>Add Member</p>
        </div>

        <div className=''>
          <div className='flex items-center justify-center mb-12'>
            <Addmember />
          </div>
        </div>
      </div>
    </>
  )
}
