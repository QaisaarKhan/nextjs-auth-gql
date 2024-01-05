'use client'
import { useRouter } from 'next/navigation'
export default function AllMember() {
  const router = useRouter()
  return (
    <>
      <div className='bg-[#222222] py-1 h-[950px]'>
        <div className=''>
          <p className='mt-12 text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] text-center font-russoone font-normal'>
            Added Members
          </p>
        </div>

        <div className='flex sm:mx-6 md:mx-8 lg:mx-16 xl:mx-32 gap-6 sm:gap-8 md:gap-8 lg:gap-12 xl:gap-24'>
          <p className='text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-russoone'>
            Profile
          </p>
          <p className='text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-russoone'>
            Name
          </p>
        </div>

        <div className='flex sm:mx-6 md:mx-10 lg:mx-16 xl:mx-32 gap-[1%] sm:gap-[12%] md:gap-[12%] lg:gap-[18%]  xl:gap-[23%] xlm:gap-[30%] xll:gap-[50%]'>
          <div className='flex gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-36'>
            <img
              className='w-[48px] sm:w-[60px] md:w-[70px] lg:w-[100px] xl:w-[86px]'
              src='./avator.svg'
              alt='avator'
            ></img>

            <p className='sm:text-[16px] md:text-[20px] lg:text-[32px] font-roboto'>Junaid afzal</p>
          </div>
          <div className='flex justify-items-center place-items-center'>
            <div className=''>
              <button
                onClick={() => router.push('/editprofile')}
                className='bg-[#EC4927] text-[12px] sm:text-[14px] sm:text-[18px] lg:text-[20px] border-[#EC4927] hover:bg-[#EC4927] text-white font-bold py-1 px-4 sm:py-2 sm:px-5 md:py-3 md:px-8 lg:py-[16px] lg:px-10 rounded-full ml-6'
              >
                <div className='flex justify-items-center place-items-center gap-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.8229 2.37515H14.2323C13.8527 2.37515 13.5447 2.06716 13.5447 1.68758C13.5447 1.308 13.8527 1 14.2323 1H22.4823C22.8619 1 23.1699 1.308 23.1699 1.68758V9.93756C23.1699 10.3171 22.8619 10.6251 22.4823 10.6251C22.1028 10.6251 21.7948 10.3171 21.7948 9.93756V3.347L9.21877 15.9235C8.95013 16.1921 8.51486 16.1921 8.24644 15.9235C7.97781 15.6551 7.97781 15.2199 8.24644 14.9512L20.8229 2.37515ZM17.67 21.6247V11.3122C17.67 10.9327 17.978 10.6249 18.3576 10.6249C18.7371 10.6249 19.0451 10.9327 19.0451 11.3122V22.3124C19.0451 22.692 18.7371 23 18.3576 23H1.8575C1.47792 23 1.16992 22.692 1.16992 22.3124V5.81245C1.16992 5.43287 1.47792 5.12488 1.8575 5.12488H12.8577C13.2373 5.12488 13.5451 5.43287 13.5451 5.81245C13.5451 6.19203 13.2373 6.50003 12.8577 6.50003H2.5452V21.6246L17.67 21.6247Z'
                      fill='white'
                      stroke='white'
                      strokeWidth='0.5'
                    />
                  </svg>
                  Edit
                </div>
              </button>

              <button className='bg-[black] border text-[12px] sm:text-[14px] sm:text-[18px] lg:text-[20px] border-[#FB5F07] border-solid border-2 hover:bg-[#EC4927] text-white font-bold py-1 px-3 sm:py-2 sm:px-5 md:py-3 md:px-6 lg:py-4 lg:px-9 rounded-full ml-6'>
                <div className='flex justify-items-center place-items-center gap-2'>
                  <svg
                    width='25'
                    height='26'
                    viewBox='0 0 25 26'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.1965 3.08861V2.34V2.08C18.1965 1.80843 17.9774 1.59139 17.7083 1.59139H17.4479H16.6993H7.55208H7.29167C7.02258 1.59139 6.80348 1.80843 6.80348 2.08V2.34V3.93139H5.95694V2.08C5.95694 1.34732 6.55489 0.748605 7.29167 0.748605H17.7083C18.4451 0.748605 19.0431 1.34732 19.0431 2.08V3.93139H18.1965V3.08861ZM7.55208 5.42861H8.30069H16.6993H17.4479H19.7917H20.5403H23.9583C24.1222 5.42861 24.2514 5.55932 24.2514 5.72V6.27139H22.7734H22.0594L22.0257 6.98463L21.2216 23.9821L21.2216 23.9825C21.1883 24.6936 20.6038 25.2514 19.8893 25.2514H5.11068C4.39954 25.2514 3.81165 24.6904 3.77838 23.9824L3.77837 23.9821L2.97433 6.98463L2.94059 6.27139H2.22656H0.748605V5.72C0.748605 5.55932 0.877807 5.42861 1.04167 5.42861H4.45973H5.20833H7.55208ZM19.6387 24.4086H20.3527L20.3864 23.6954L21.1742 7.0554L21.2113 6.27139H20.4264H4.57357H3.78868L3.8258 7.0554L4.61356 23.6954L4.64732 24.4086H5.36133H19.6387Z'
                      stroke='white'
                      strokeWidth='1.49721'
                    />
                  </svg>
                  Delete
                </div>
              </button>
            </div>
          </div>
        </div>
        <svg
          className='sm:mx-6 md:mx-12 lg:mx-16 xl:mx-32'
          viewBox='0 0 1230 1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            x1='-4.37114e-08'
            y1='0.5'
            x2='1230'
            y2='0.499892'
            stroke='#EBEBEB'
            strokeOpacity='0.2'
          />
        </svg>

        <div className='flex sm:mx-6 md:mx-10 lg:mx-16 xl:mx-32 gap-[1%] sm:gap-[12%] md:gap-[12%] lg:gap-[18%]  xl:gap-[23%] xlm:gap-[30%] xll:gap-[50%]'>
          <div className='flex gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-36'>
            <img
              className='w-[48px] sm:w-[60px] md:w-[70px] lg:w-[100px] xl:w-[86px]'
              src='./avator.svg'
              alt='avator'
            ></img>

            <p className='sm:text-[16px] md:text-[20px] lg:text-[32px] font-roboto'>Junaid afzal</p>
          </div>
          <div className='flex justify-items-center place-items-center'>
            <div className=''>
              <button className='bg-[#EC4927] text-[12px] sm:text-[14px] sm:text-[18px] lg:text-[20px] border-[#EC4927] hover:bg-[#EC4927] text-white font-bold py-1 px-4 sm:py-2 sm:px-5 md:py-3 md:px-8 lg:py-[16px] lg:px-10 rounded-full ml-6'>
                <div className='flex justify-items-center place-items-center gap-2'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.8229 2.37515H14.2323C13.8527 2.37515 13.5447 2.06716 13.5447 1.68758C13.5447 1.308 13.8527 1 14.2323 1H22.4823C22.8619 1 23.1699 1.308 23.1699 1.68758V9.93756C23.1699 10.3171 22.8619 10.6251 22.4823 10.6251C22.1028 10.6251 21.7948 10.3171 21.7948 9.93756V3.347L9.21877 15.9235C8.95013 16.1921 8.51486 16.1921 8.24644 15.9235C7.97781 15.6551 7.97781 15.2199 8.24644 14.9512L20.8229 2.37515ZM17.67 21.6247V11.3122C17.67 10.9327 17.978 10.6249 18.3576 10.6249C18.7371 10.6249 19.0451 10.9327 19.0451 11.3122V22.3124C19.0451 22.692 18.7371 23 18.3576 23H1.8575C1.47792 23 1.16992 22.692 1.16992 22.3124V5.81245C1.16992 5.43287 1.47792 5.12488 1.8575 5.12488H12.8577C13.2373 5.12488 13.5451 5.43287 13.5451 5.81245C13.5451 6.19203 13.2373 6.50003 12.8577 6.50003H2.5452V21.6246L17.67 21.6247Z'
                      fill='white'
                      stroke='white'
                      strokeWidth='0.5'
                    />
                  </svg>
                  Edit
                </div>
              </button>

              <button className='bg-[black] border text-[12px] sm:text-[14px] sm:text-[18px] lg:text-[20px] border-[#FB5F07] border-solid border-2 hover:bg-[#EC4927] text-white font-bold py-1 px-3 sm:py-2 sm:px-5 md:py-3 md:px-6 lg:py-4 lg:px-9 rounded-full ml-6'>
                <div className='flex justify-items-center place-items-center gap-2'>
                  <svg
                    width='25'
                    height='26'
                    viewBox='0 0 25 26'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18.1965 3.08861V2.34V2.08C18.1965 1.80843 17.9774 1.59139 17.7083 1.59139H17.4479H16.6993H7.55208H7.29167C7.02258 1.59139 6.80348 1.80843 6.80348 2.08V2.34V3.93139H5.95694V2.08C5.95694 1.34732 6.55489 0.748605 7.29167 0.748605H17.7083C18.4451 0.748605 19.0431 1.34732 19.0431 2.08V3.93139H18.1965V3.08861ZM7.55208 5.42861H8.30069H16.6993H17.4479H19.7917H20.5403H23.9583C24.1222 5.42861 24.2514 5.55932 24.2514 5.72V6.27139H22.7734H22.0594L22.0257 6.98463L21.2216 23.9821L21.2216 23.9825C21.1883 24.6936 20.6038 25.2514 19.8893 25.2514H5.11068C4.39954 25.2514 3.81165 24.6904 3.77838 23.9824L3.77837 23.9821L2.97433 6.98463L2.94059 6.27139H2.22656H0.748605V5.72C0.748605 5.55932 0.877807 5.42861 1.04167 5.42861H4.45973H5.20833H7.55208ZM19.6387 24.4086H20.3527L20.3864 23.6954L21.1742 7.0554L21.2113 6.27139H20.4264H4.57357H3.78868L3.8258 7.0554L4.61356 23.6954L4.64732 24.4086H5.36133H19.6387Z'
                      stroke='white'
                      strokeWidth='1.49721'
                    />
                  </svg>
                  Delete
                </div>
              </button>
            </div>
          </div>
        </div>
        <svg
          className='sm:mx-6 md:mx-12 lg:mx-16 xl:mx-32'
          viewBox='0 0 1230 1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <line
            x1='-4.37114e-08'
            y1='0.5'
            x2='1230'
            y2='0.499892'
            stroke='#EBEBEB'
            strokeOpacity='0.2'
          />
        </svg>
      </div>
    </>
  )
}
