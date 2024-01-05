import React from 'react'
import { Typography, TextField, IconButton, InputAdornment, Button, Grid, Box } from '@mui/material'
const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          mx: { xs: '120px', sm: '80px ', smm: '99px', md: '105px', lg: '117px', xl: '140px' },
          gap: '30px',
        }}
      >
        <Box
          sx={{
            // borderColor: '#FF6744',

            borderRadius: '5px',
            width: { xs: '190px', sm: '139px', smm: '169px', md: '249px', lg: '279px' },
            marginTop: '25px',

            padding: '2px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: { xs: '185px', sm: '135px', smm: '165px', md: '245px', lg: '275px' },
              // marginTop: '25px',
              // borderRadius: '5px',
              background: '#222',
            }}
          >
            <Button
              sx={{
                height: { xs: '140px', sm: '120px', smm: '130px', md: '200px' },
                display: 'flex',
                mx: 'auto',
              }}
            >
              <Box sx={{ marginTop: '20px' }}>
                <img className='w-24 sm:w-20 md:w-28 lg:w-32' src='./gear.svg' alt='gear'></img>

                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    marginTop: { sm: '10px', smm: '5px', md: '20px' },
                    fontSize: { sm: '12px', smm: '16px', md: '20px' },
                    textTransform: 'capitalize',
                    color: 'white',
                  }}
                >
                  Gear Illustration
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            borderColor: '#FF6744',
            width: { xs: '190px', sm: '139px', smm: '169px', md: '249px', lg: '279px' },
            marginTop: '25px',
            borderRadius: '5px',

            padding: '2px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: { xs: '185px', sm: '135px', smm: '165px', md: '245px', lg: '275px' },
              // marginTop: '25px',
              // borderRadius: '5px',
              background: '#222',
            }}
          >
            <Button
              sx={{
                height: { sm: '120px', smm: '130px', md: '200px' },

                display: 'flex',
                mx: 'auto',
                // width: { xs: '185px', sm: '130px', smm: '170px', md: '250px', lg: '280px' },
              }}
            >
              <Box sx={{ marginTop: '20px' }}>
                <img className='w-20 sm:w-20 md:w-24 lg:w-32' src='./engine.svg' alt='engine'></img>

                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    marginTop: { sm: '-3px', smm: '-5px', md: '20px' },
                    fontSize: { sm: '12px', smm: '16px', md: '20px' },
                    textTransform: 'capitalize',
                    color: 'white',
                  }}
                >
                  Engine Repair
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: { sm: '139px', smm: '169px', md: '249px', lg: '279px' },
            marginTop: '25px',
            borderRadius: '5px',
            padding: '2px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: { xs: '185px', sm: '135px', smm: '165px', md: '245px', lg: '275px' },
              // marginTop: '25px',
              // borderRadius: '5px',
              background: '#222',
            }}
          >
            <Button
              sx={{
                height: { sm: '120px', smm: '130px', md: '200px' },
                display: 'flex',
                mx: 'auto',
              }}
            >
              <Box sx={{ marginTop: '20px' }}>
                <img className='w-28 md:w-28 lg:w-32' src='./tire.svg' alt='tire'></img>

                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    marginTop: { smm: '-9px', md: '20px' },
                    fontSize: { sm: '12px', smm: '16px', md: '16px' },
                    textTransform: 'capitalize',
                    color: 'white',
                  }}
                >
                  Tyre Repairing
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            // borderColor: '#FF6744',

            borderRadius: '5px',
            width: { sm: '139px', smm: '169px', md: '249px', lg: '279px' },
            marginTop: '25px',

            padding: '2px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: { sm: '135px', smm: '165px', md: '245px', lg: '275px' },
              // marginTop: '25px',
              // borderRadius: '5px',
              background: '#222',
            }}
          >
            <Button
              sx={{
                height: { sm: '120px', smm: '140px', md: '200px' },
                display: 'flex',
                mx: 'auto',
              }}
            >
              <Box sx={{ marginTop: '20px' }}>
                <img className='w-16 lg:w-20' src='./speedmeter.svg' alt='meter'></img>

                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    marginTop: { sm: '1px', md: '20px' },
                    fontSize: { sm: '10px', smm: '12px', md: '16px' },
                    textTransform: 'capitalize',
                    color: 'white',
                  }}
                >
                  Transmission Service
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            // borderColor: '#FF6744',

            borderRadius: '5px',
            width: { xs: '190px', sm: '139px', smm: '169px', md: '249px', lg: '279px' },
            marginTop: '25px',

            padding: '2px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: { xs: '185px', sm: '135px', smm: '165px', md: '245px', lg: '275px' },
              // marginTop: '25px',
              // borderRadius: '5px',
              background: '#222',
            }}
          >
            <Button
              sx={{
                height: { xs: '140px', sm: '120px', smm: '140px', md: '200px' },
                display: 'flex',
                mx: 'auto',
              }}
            >
              <Box sx={{ marginTop: '20px' }}>
                <img className='w-24 sm:w-20 md:w-28 lg:w-32' src='./gear.svg' alt='gear'></img>

                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    marginTop: { sm: '10px', smm: '5px', md: '20px' },
                    fontSize: { sm: '12px', smm: '16px', md: '20px' },
                    textTransform: 'capitalize',
                    color: 'white',
                  }}
                >
                  Gear Illustration
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            borderColor: '#FF6744',
            width: { xs: '190px', sm: '139px', smm: '169px', md: '249px', lg: '279px' },
            marginTop: '25px',
            borderRadius: '5px',

            padding: '2px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: { xs: '185px', sm: '135px', smm: '165px', md: '245px', lg: '275px' },
              // marginTop: '25px',
              // borderRadius: '5px',
              background: '#222',
            }}
          >
            <Button
              sx={{
                height: { sm: '120px', smm: '140px', md: '200px' },

                display: 'flex',
                mx: 'auto',
                // width: { xs: '185px', sm: '130px', smm: '170px', md: '250px', lg: '280px' },
              }}
            >
              <Box sx={{ marginTop: '20px' }}>
                <img className='w-20 sm:w-20 md:w-24 lg:w-32' src='./engine.svg' alt='engine'></img>

                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    marginTop: { sm: '-3px', smm: '-5px', md: '20px' },
                    fontSize: { sm: '12px', smm: '16px', md: '20px' },
                    textTransform: 'capitalize',
                    color: 'white',
                  }}
                >
                  Engine Repair
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: { sm: '139px', smm: '169px', md: '249px', lg: '279px' },
            marginTop: '25px',
            borderRadius: '5px',
            padding: '2px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: { xs: '185px', sm: '135px', smm: '165px', md: '245px', lg: '275px' },
              // marginTop: '25px',
              // borderRadius: '5px',
              background: '#222',
            }}
          >
            <Button
              sx={{
                height: { sm: '120px', smm: '140px', md: '200px' },
                display: 'flex',
                mx: 'auto',
              }}
            >
              <Box sx={{ marginTop: '20px' }}>
                <img className='w-28 md:w-28 lg:w-32' src='./tire.svg' alt='tire'></img>

                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    marginTop: { smm: '-9px', md: '20px' },
                    fontSize: { sm: '12px', smm: '16px', md: '16px' },
                    textTransform: 'capitalize',
                    color: 'white',
                  }}
                >
                  Tyre Repairing
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            // borderColor: '#FF6744',

            borderRadius: '5px',
            width: { sm: '139px', smm: '169px', md: '249px', lg: '279px' },
            marginTop: '25px',

            padding: '2px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: { sm: '135px', smm: '165px', md: '245px', lg: '275px' },
              // marginTop: '25px',
              // borderRadius: '5px',
              background: '#222',
            }}
          >
            <Button
              sx={{
                height: { sm: '120px', smm: '140px', md: '200px' },
                display: 'flex',
                mx: 'auto',
              }}
            >
              <Box sx={{ marginTop: '20px' }}>
                <img className='w-16 lg:w-20' src='./speedmeter.svg' alt='meter'></img>

                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    marginTop: { sm: '1px', md: '20px' },
                    fontSize: { sm: '10px', smm: '12px', md: '16px' },
                    textTransform: 'capitalize',
                    color: 'white',
                  }}
                >
                  Transmission Service
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home
