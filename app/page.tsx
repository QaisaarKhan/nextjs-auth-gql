'use client'

import { withApollo } from "lib/apollo/withApollo";

import Link from 'next/link'
import useViewer from "hooks/viewer/useViewer";
import { useEffect } from 'react';

const Home=()=> {
  const [account, loading, refetch]=useViewer();
  useEffect(()=>{
    refetch()
  },[])

  useEffect(()=>{
    console.log("account",account)
  },[account])

  
  return (
    <>
      <div className='bg-[#222222] py-1 sm:py-12 h-screen'>
        <div className='hidden sm:flex justify-between items-center mx-16 lg:mx-24 '>
          <div className='flex gap-1'>
            <Link
              href={'/'}
              className='no-underline text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'
            >
              Home
            </Link>
            {/* <div className='text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'>|</div> */}
            {/* <Link
              href={'/service'}
              className='no-underline text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'
            >
              Services
            </Link> */}
          </div>

        
        </div>

        <div className='mt-12 text-[28px] sm:text-[28px] md:text-[48px] lg:text-[60px] text-center font-russoone font-normal'>
Home Page        </div>
        <div>
          {/* <Homee /> */}
        </div>
      </div>
    </>
  )
}

export default withApollo()(Home);
