
import { Button, Grid,Box, Typography,TextField,InputAdornment,styled,FormControl} from '@mui/material'
import { useState } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'



interface ISignInForm {
  name:string
  email: string
  phone: string
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

export default function AddMember() {

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
                opacity:1,
                
            },
          },
        
         paddingLeft:"100px",
         paddingRight:"100px",
         paddingTop:"6px"
        
        
      });

      const createNewUser = async (data: ISignInForm, resetForm: Function) => {
        try {
          console.log(data)
            // API call integration will be here. Handle success / error response accordingly.
            if (data) {
                setFormStatus(formStatusProps.success)
                resetForm({})
            }
        } catch (error:any) {
            const response = error.response
            if (
                response.data === 'user already exist' &&
                response.status === 400
            ) {
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

<Box
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              borderRadius:"20px",
              backgroundColor:"#282828",
              height:"840px",
              width:{xs:"400px",sm:"530px",smm:"650px",md:"700px",lg:"870px",xl:"980px"},
           
            }}



          >
<Box sx={{marginTop:"60px",display:"flex",flexDirection:"column",alignItems: 'center',}}>
<img src="./imagee.svg"></img>
</Box>



            <Formik
                initialValues={{
                  name:"",
                  email: '',
                  phone: '',
                
                 
                }}
                onSubmit={(values: ISignInForm, actions) => {
                    createNewUser(values, actions.resetForm)
                    setTimeout(() => {
                        actions.setSubmitting(false)
                    }, 500)
                }}
                validationSchema={Yup.object().shape({
                  name:Yup.string()
                  .required('Enter name'),
                    email: Yup.string()
                    .email()
                    .required('Enter email'),
                    phone: Yup.string()
                        .required(
                            'Please enter phone number'
                        ),
                  
                })}
            >
               {(props: FormikProps<ISignInForm>) => {
                    const {
                        values,
                        touched,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                    } = props
                    return (
                        <Form>
                           {/* <form onSubmit={props.handleSubmit(props.onSubmit)}> */}
          
       

         
          <Typography sx={{marginLeft:"102px",fontFamily:"Roboto",fontWeight:"500",fontSize:"22px",marginTop:"35px"}}>Username </Typography>
          <StyleTextField                   
             name="name"
             fullWidth
             placeholder="yANCHUI"
             type="text"
             sx={{
               "& .Mui-error":{
                 fontSize:"14px",
               },
               "& .MuiOutlinedInput-root": {
                
                 "& > fieldset": {
                  borderColor: "#A9A9A9",
                  borderRadius:"10px",
                 
                 }
               },
             
             }}
            
             // sx={{border:"1px solid #FF5B39",borderRadius:"5px",width:"57%"}}
            
             value={values.name}
            
             helperText={
              errors.name && touched.name
                  ? errors.name
                  : ''
          }
          error={
              errors.name && touched.name
                  ? true
                  : false
          }
          onChange={handleChange}
          onBlur={handleBlur}
            

           />

 <Typography sx={{marginLeft:"102px",fontFamily:"Roboto",fontWeight:"500",fontSize:"22px",marginTop:"35px"}}>Email I&apos;d </Typography>

<StyleTextField                   
             name="email"
             fullWidth
             placeholder="yanchui@gmail.com"
             type="text"
             sx={{
               "& .Mui-error":{
                 fontSize:"14px",
               },
               "& .MuiOutlinedInput-root": {
                
                 "& > fieldset": {
                  borderColor: "#A9A9A9",
                  borderRadius:"10px",
                 }
               },
             
             }}

           
             // sx={{border:"1px solid #FF5B39",borderRadius:"5px",width:"57%"}}
            
             value={values.email}
            
             helperText={
              errors.email && touched.email
                  ? errors.email
                  : ''
          }
          error={
              errors.email && touched.email
                  ? true
                  : false
          }
          onChange={handleChange}
          onBlur={handleBlur}
            

           />


<Typography sx={{marginLeft:"102px",fontFamily:"Roboto",fontWeight:"500",fontSize:"22px",  marginTop:"35px"}}>Phone Number </Typography>

<StyleTextField                   
             name="phone"
             fullWidth
             placeholder="+14987889999"
             type="text"
             sx={{
              
               "& .Mui-error":{
                 fontSize:"14px",
               },
               "& .MuiOutlinedInput-root": {
                
                 "& > fieldset": {
                  borderColor: "#A9A9A9",
                  borderRadius:"10px",
                
                 }
               },
             
             }}
             // sx={{border:"1px solid #FF5B39",borderRadius:"5px",width:"57%"}}
            
             value={values.phone}
            
             helperText={
              errors.phone && touched.phone
                  ? errors.phone
                  : ''
          }
          error={
              errors.phone && touched.phone
                  ? true
                  : false
          }
          onChange={handleChange}
          onBlur={handleBlur}
            

           />







         
<Box
         sx={{  
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           marginTop:"50px",  
         
         }}
       >
         <Button type="submit"
           sx={{ color:'white',
         background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
         borderRadius: "40px",
         padding: "14px 56px",
         fontFamily:"Poppins",
         fontWeight:"500",
         fontSize: "20px", 
         textTransform:"none"
          }}
         
         >
       Add Member
</Button>
</Box>      

                        </Form>
                    )}}
              </Formik>

              </Box>
              </div>
         
            
          
   
  )
}
