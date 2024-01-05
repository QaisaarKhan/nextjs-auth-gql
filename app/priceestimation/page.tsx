'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
export default function PriceEstimation() {
  const router = useRouter()
  const data = [
    { step: 'Open Engine', time: '~1 hour', amount: '100$ - 150 $' },
    { step: 'Change Battery ', time: '~1.5 hour', amount: '110$ - 140 $' },
    { step: 'Engine Oil', time: '~0.5 hour', amount: '100$ - 160 $' },
    { step: 'Transmission Fluid', time: '~2.5 hour', amount: '110$ - 140 $ ' },
    { step: 'Tires', time: '~1 hour', amount: '110$ - 140 $ ' },
  ]
  return (
    <>
      <div className='bg-[#222222] py-1 sm:py-12 h-[1000px]'>
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

        <div className='my-12 text-[28px] sm:text-[28px] md:text-[48px] lg:text-[40px] text-center font-russoone font-normal'>
          Price Estimation
        </div>

        <table
          style={{ border: '1px solid', borderCollapse: 'collapse' }}
          className='mx-auto w-[40%] sm:w-[80%] md:w-[80%] lg:w-[65%] xl:w-[60%] xll:w-[50%] h-[50%] '
        >
          <thead>
            <tr>
              <th
                style={{ border: '1px solid', borderCollapse: 'collapse' }}
                className='font-russoone font-[400] text-[32px] h-16'
              >
                Steps
              </th>

              <th
                style={{ border: '1px solid', borderCollapse: 'collapse' }}
                className='text-center items-center content-center h-16'
              >
                <img src='./timee.svg' alt='time'></img>
              </th>

              <th
                style={{ border: '1px solid', borderCollapse: 'collapse' }}
                className='text-center items-center content-center h-16'
              >
                <img src='./amountt.svg' alt='time'></img>
                {/* <span className="font-russoone font-[400] text-[26px]">Amount</span> <br/><span className="font-russoone font-[400] text-[16px]">Per Hour</span> */}
              </th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td
                    style={{ border: '1px solid', borderCollapse: 'collapse' }}
                    className='font-poppins text-[20px] font-[500] h-16'
                  >
                    {val.step}
                  </td>
                  <td
                    style={{ border: '1px solid', borderCollapse: 'collapse' }}
                    className='font-poppins text-[28px] font-[400] h-16'
                  >
                    {val.time}
                  </td>
                  <td
                    style={{ border: '1px solid', borderCollapse: 'collapse' }}
                    className='font-poppins text-[28px] font-[500] h-16'
                  >
                    {val.amount}
                  </td>
                </tr>
              )
            })}
            <tr>
              <td
                style={{ border: '1px solid', borderCollapse: 'collapse' }}
                className='font-poppins text-[28px] font-[600] h-16'
              >
                All Steps
              </td>
              <td
                style={{ border: '1px solid', borderCollapse: 'collapse' }}
                className='font-poppins text-[28px] font-[600] h-16'
              >
                6.5 total Hour
              </td>
              <td
                style={{ border: '1px solid', borderCollapse: 'collapse' }}
                className='font-poppins text-[28px] font-[600] h-16'
              >
                6.5 total Hour
              </td>
            </tr>
          </tbody>
        </table>

        <div className='mt-12 sm:mx-6 md:mx-3 lg:mx-12  xll:mx-24'>
          <button
            onClick={() => router.push('/tip')}
            className='float-right bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] sm:text-[14px] md:text-[20px] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] md:text-[18px] font-russoone h-16 w-48 rounded-full ml-6'
          >
            BACK
          </button>
        </div>
      </div>
    </>
  )
}
