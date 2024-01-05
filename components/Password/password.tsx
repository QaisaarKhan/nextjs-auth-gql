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
import Link from 'next/link'

interface ISignInForm {
  password: string
  confirmpass: string
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

  error: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
}

export default function Password() {
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  })
  // const classes = useStyles()
  const StyleTextField = styled(TextField)({
    input: {
      '&::placeholder': {
        color: '#fff',
        opacity: 0.9,
      },
    },
    marginTop: '20px',
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
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '25%',
        }}
      >
        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            my: '30px',
          }}
        >
          Enter New Password
        </Typography>
      </Box>

      <Formik
        initialValues={{
          password: '',
          confirmpass: '',
        }}
        onSubmit={(values: ISignInForm, actions) => {
          createNewUser(values, actions.resetForm)
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          password: Yup.string().required('Enter password'),
          confirmpass: Yup.string()
            .required('Enter password again')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        })}
      >
        {(props: FormikProps<ISignInForm>) => {
          const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
          return (
            <Form>
              {/* <form onSubmit={props.handleSubmit(props.onSubmit)}> */}

              <StyleTextField
                fullWidth
                margin='normal'
                name='password'
                type='password'
                placeholder='New Password'
                sx={{
                  px: {
                    xs: '30px',
                    sm: '80px',
                    smm: '100px',
                    md: '70px',
                    lg: '160px',
                    xl: '130px',
                  },
                  '& .Mui-error': {
                    fontSize: '14px',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& > fieldset': {
                      borderColor: '#FF4B2A',
                    },
                    '& > placeholder': {
                      borderColor: '#FF4B2A',
                    },
                  },
                }}
                value={values.password}
                helperText={errors.password && touched.password ? errors.password : ''}
                error={errors.password && touched.password ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg
                        width='23'
                        height='30'
                        viewBox='0 0 23 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M2.875 30C2.08437 30 1.40779 29.7205 0.84525 29.1614C0.28175 28.6014 0 27.9286 0 27.1429V12.8571C0 12.0714 0.28175 11.3986 0.84525 10.8386C1.40779 10.2795 2.08437 10 2.875 10H4.3125V7.14286C4.3125 5.16667 5.01352 3.4819 6.41556 2.08857C7.81665 0.69619 9.51146 0 11.5 0C13.4885 0 15.1838 0.69619 16.5859 2.08857C17.987 3.4819 18.6875 5.16667 18.6875 7.14286V10H20.125C20.9156 10 21.5927 10.2795 22.1562 10.8386C22.7187 11.3986 23 12.0714 23 12.8571V27.1429C23 27.9286 22.7187 28.6014 22.1562 29.1614C21.5927 29.7205 20.9156 30 20.125 30H2.875ZM11.5 22.8571C12.2906 22.8571 12.9677 22.5776 13.5312 22.0186C14.0937 21.4586 14.375 20.7857 14.375 20C14.375 19.2143 14.0937 18.5414 13.5312 17.9814C12.9677 17.4224 12.2906 17.1429 11.5 17.1429C10.7094 17.1429 10.0328 17.4224 9.47025 17.9814C8.90675 18.5414 8.625 19.2143 8.625 20C8.625 20.7857 8.90675 21.4586 9.47025 22.0186C10.0328 22.5776 10.7094 22.8571 11.5 22.8571ZM7.1875 10H15.8125V7.14286C15.8125 5.95238 15.3932 4.94048 14.5547 4.10714C13.7161 3.27381 12.6979 2.85714 11.5 2.85714C10.3021 2.85714 9.28385 3.27381 8.44531 4.10714C7.60677 4.94048 7.1875 5.95238 7.1875 7.14286V10Z'
                          fill='white'
                        />
                      </svg>
                    </InputAdornment>
                  ),
                }}

                // className={classes.textField}
              />

              <StyleTextField
                name='confirmpass'
                fullWidth
                placeholder='Confirm Password'
                type='text'
                sx={{
                  px: {
                    xs: '30px',
                    sm: '80px',
                    smm: '100px',
                    md: '70px',
                    lg: '160px',
                    xl: '130px',
                  },
                  '& .Mui-error': {
                    fontSize: '14px',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& > fieldset': {
                      borderColor: '#FF4B2A',
                    },
                  },
                }}
                // sx={{border:"1px solid #FF5B39",borderRadius:"5px",width:"57%"}}

                value={values.confirmpass}
                helperText={errors.confirmpass && touched.confirmpass ? errors.confirmpass : ''}
                error={errors.confirmpass && touched.confirmpass ? true : false}
                onChange={handleChange}
                onBlur={handleBlur}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <svg
                        width='23'
                        height='30'
                        viewBox='0 0 23 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M2.875 30C2.08437 30 1.40779 29.7205 0.84525 29.1614C0.28175 28.6014 0 27.9286 0 27.1429V12.8571C0 12.0714 0.28175 11.3986 0.84525 10.8386C1.40779 10.2795 2.08437 10 2.875 10H4.3125V7.14286C4.3125 5.16667 5.01352 3.4819 6.41556 2.08857C7.81665 0.69619 9.51146 0 11.5 0C13.4885 0 15.1838 0.69619 16.5859 2.08857C17.987 3.4819 18.6875 5.16667 18.6875 7.14286V10H20.125C20.9156 10 21.5927 10.2795 22.1562 10.8386C22.7187 11.3986 23 12.0714 23 12.8571V27.1429C23 27.9286 22.7187 28.6014 22.1562 29.1614C21.5927 29.7205 20.9156 30 20.125 30H2.875ZM11.5 22.8571C12.2906 22.8571 12.9677 22.5776 13.5312 22.0186C14.0937 21.4586 14.375 20.7857 14.375 20C14.375 19.2143 14.0937 18.5414 13.5312 17.9814C12.9677 17.4224 12.2906 17.1429 11.5 17.1429C10.7094 17.1429 10.0328 17.4224 9.47025 17.9814C8.90675 18.5414 8.625 19.2143 8.625 20C8.625 20.7857 8.90675 21.4586 9.47025 22.0186C10.0328 22.5776 10.7094 22.8571 11.5 22.8571ZM7.1875 10H15.8125V7.14286C15.8125 5.95238 15.3932 4.94048 14.5547 4.10714C13.7161 3.27381 12.6979 2.85714 11.5 2.85714C10.3021 2.85714 9.28385 3.27381 8.44531 4.10714C7.60677 4.94048 7.1875 5.95238 7.1875 7.14286V10Z'
                          fill='white'
                        />
                      </svg>
                    </InputAdornment>
                  ),
                }}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  my: '50px',
                }}
              >
                <Button
                  type='submit'
                  sx={{
                    color: 'white',
                    background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
                    borderRadius: '12px',
                    padding: '14px 70px',
                    fontFamily: 'Russo One',
                    fontWeight: '400',
                    fontSize: '18px',
                    textTransform: 'none',
                  }}
                >
                  Save
                </Button>
              </Box>
              {/* </form> */}
            </Form>
          )
        }}
      </Formik>
    </>
  )
}
