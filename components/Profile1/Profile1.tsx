import { Button, Box, Typography } from '@mui/material'

import { useRouter } from 'next/navigation'

export default function Profile1() {
  const router = useRouter()
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',

          marginRight: '30px',
          borderRadius: '20px',
          backgroundColor: '#282828',
          height: '640px',
        }}
      >
        <Box
          sx={{ marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Typography sx={{ fontFamily: 'Russo One', fontSize: '40px', fontWeight: '400' }}>
            Basic Plans Details
          </Typography>
        </Box>

        <Typography
          sx={{
            marginLeft: '80px',
            fontFamily: 'Roboto',
            fontWeight: '600',
            fontSize: '23px',
            marginTop: '35px',
          }}
        >
          Package Duration{' '}
        </Typography>

        <Typography
          sx={{
            marginLeft: '80px',
            fontFamily: 'Roboto',
            fontWeight: '500',
            fontSize: '20px',
            marginTop: '20px',
          }}
        >
          3 Month{' '}
        </Typography>

        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}
        >
          <svg
            width='418'
            height='2'
            viewBox='0 0 418 2'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line y1='1.275' x2='417.6' y2='1.275' stroke='#DBDBDB' strokeWidth='1.45' />
          </svg>
        </Box>

        <Typography
          sx={{
            marginLeft: '80px',
            fontFamily: 'Roboto',
            fontWeight: '600',
            fontSize: '23px',
            marginTop: '35px',
          }}
        >
          Package End Date{' '}
        </Typography>

        <Typography
          sx={{
            marginLeft: '80px',
            fontFamily: 'Roboto',
            fontWeight: '500',
            fontSize: '20px',
            marginTop: '20px',
          }}
        >
          13-Oct-2022{' '}
        </Typography>

        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}
        >
          <svg
            width='418'
            height='2'
            viewBox='0 0 418 2'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line y1='1.275' x2='417.6' y2='1.275' stroke='#DBDBDB' strokeWidth='1.45' />
          </svg>
        </Box>

        <Typography
          sx={{
            marginLeft: '80px',
            fontFamily: 'Roboto',
            fontWeight: '600',
            fontSize: '23px',
            marginTop: '35px',
          }}
        >
          Package Start Date{' '}
        </Typography>

        <Typography
          sx={{
            marginLeft: '80px',
            fontFamily: 'Roboto',
            fontWeight: '500',
            fontSize: '20px',
            marginTop: '20px',
          }}
        >
          13-july-2022{' '}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Button
          onClick={() => router.push('/pricingplan')}
          type='submit'
          sx={{
            color: 'white',
            background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
            borderRadius: '40px',
            padding: '14px 56px',
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '20px',
            textTransform: 'none',
          }}
        >
          Buy Plans
        </Button>
      </Box>
    </div>
  )
}
