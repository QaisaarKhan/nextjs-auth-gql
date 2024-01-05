import {
  Button,
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  styled,
  FormControl,
} from '@mui/material'
import { useState } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'

interface ISignInForm {
  name: string
  email: string
  message: string
}

interface IFormStatus {
  message: string
  type: string
}

interface IFormStatusProps {
  [key: string]: IFormStatus
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: 'Signed up successfully.',
    type: 'success',
  },
  duplicate: {
    message: 'Email-id already exist. Please use different email-id.',
    type: 'error',
  },
  error: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
}

export default function Contact() {
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  })
  // const classes = useStyles()
  const StyleTextField = styled(TextField)({
    // input: {
    //     '&::placeholder': {
    //         color: '#fff',
    //         opacity:1,

    //     },
    //   },

    paddingTop: '6px',
  })

  const createNewUser = async (data: ISignInForm, resetForm: Function) => {
    try {
      console.log(data)
      // API call integration will be here. Handle success / error response accordingly.
      if (data) {
        setFormStatus(formStatusProps.success)
        resetForm({})
      }
    } catch (error: any) {
      const response = error.response
      if (response.data === 'user already exist' && response.status === 400) {
        setFormStatus(formStatusProps.duplicate)
      } else {
        setFormStatus(formStatusProps.error)
      }
    } finally {
      setDisplayFormStatus(true)
    }
  }

  return (
    <div>
      <Box sx={{ marginBottom: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <Box sx={{ my: '20px', display: 'flex', justifyContent: 'center' }}>
              <img src='./location.svg' alt='location'></img>
            </Box>
            <Typography
              sx={{
                fontFamily: 'poppins',
                fontSize: { xs: '8px', sm: '13px', md: '16px', xl: '20px' },
                fontWeight: '400',
                textAlign: 'center',
              }}
            >
              2972 Westheimer, Illinois
            </Typography>
          </Grid>
          <Grid item xs={4} md={4}>
            <Box
              sx={{
                background: '#282828',
                mx: { smm: '16px', md: '16px', xl: '60px' },
                py: '16px',
                borderRadius: '10px',
              }}
            >
              <Box
                sx={{
                  marginBottom: '16px',
                  display: 'flex',
                  justifyItems: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                }}
              >
                <img height='45px' src='./phone.svg' alt='phone'></img>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'poppins',
                  fontSize: { xs: '8px', sm: '13px', md: '16px', xl: '20px' },
                  fontWeight: '700',
                  color: '#FF5231',
                  textAlign: 'center',
                }}
              >
                (406) 555-0120
              </Typography>
            </Box>
            {/* </Box> */}
          </Grid>
          <Grid item xs={4} md={4}>
            <Box
              sx={{
                my: '24px',
                display: 'flex',
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}
            >
              <img src='./mail.svg' alt='mail'></img>
            </Box>
            <Typography
              sx={{
                fontFamily: 'poppins',
                fontSize: { xs: '8px', sm: '13px', md: '16px', xl: '20px' },
                fontWeight: '400',
                textAlign: 'center',
              }}
            >
              alma.lawson@example.com
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '20px',
          backgroundColor: '#282828',
          height: '520px',
          width: { xs: '400px', sm: '530px', smm: '650px', md: '700px', lg: '870px', xl: '980px' },
          marginBottom: '60px',
          px: '60px',
        }}
      >
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          onSubmit={(values: ISignInForm, actions) => {
            createNewUser(values, actions.resetForm)
            setTimeout(() => {
              actions.setSubmitting(false)
            }, 500)
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Enter name'),
            email: Yup.string().email().required('Enter email'),
            message: Yup.string().required('Enter message'),
          })}
        >
          {(props: FormikProps<ISignInForm>) => {
            const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
            return (
              <Form>
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontFamily: 'Russo One',
                        fontWeight: '400',
                        fontSize: '20px',
                        marginTop: '35px',
                      }}
                    >
                      Name{' '}
                    </Typography>
                    <StyleTextField
                      name='name'
                      fullWidth
                      placeholder='Enter your name'
                      type='text'
                      sx={{
                        '& .Mui-error': {
                          fontSize: '14px',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& > fieldset': {
                            borderColor: '#FF4B2A',

                            borderRadius: '10px',
                          },
                        },
                      }}
                      value={values.name}
                      helperText={errors.name && touched.name ? errors.name : ''}
                      error={errors.name && touched.name ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontFamily: 'Russo One',
                        fontWeight: '400',
                        fontSize: '20px',
                        marginTop: '35px',
                      }}
                    >
                      Email{' '}
                    </Typography>
                    <StyleTextField
                      name='email'
                      fullWidth
                      placeholder='Enter your email'
                      type='text'
                      sx={{
                        '& .Mui-error': {
                          fontSize: '14px',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& > fieldset': {
                            borderColor: '#FF4B2A',

                            borderRadius: '10px',
                          },
                        },
                      }}
                      value={values.email}
                      helperText={errors.email && touched.email ? errors.email : ''}
                      error={errors.email && touched.email ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                </Grid>

                <Typography
                  sx={{
                    fontFamily: 'Russo One',
                    fontWeight: '400',
                    fontSize: '20px',
                    marginTop: '35px',
                  }}
                >
                  Message{' '}
                </Typography>

                <StyleTextField
                  name='message'
                  fullWidth
                  placeholder='Enter your message'
                  type='text'
                  multiline
                  rows={6}
                  sx={{
                    '& .Mui-error': {
                      fontSize: '14px',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& > fieldset': {
                        borderColor: '#FF4B2A',
                        borderRadius: '10px',
                      },
                    },
                  }}
                  // sx={{border:"1px solid #FF5B39",borderRadius:"5px",width:"57%"}}

                  value={values.message}
                  helperText={errors.message && touched.message ? errors.message : ''}
                  error={errors.message && touched.message ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '30px',
                  }}
                >
                  <Button
                    type='submit'
                    sx={{
                      color: 'white',
                      background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
                      borderRadius: '40px',
                      padding: '12px 56px',
                      fontFamily: 'Poppins',
                      fontWeight: '600',
                      fontSize: '14px',
                      textTransform: 'none',
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </Form>
            )
          }}
        </Formik>
      </Box>
    </div>
  )
}
