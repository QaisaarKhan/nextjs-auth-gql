
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

export default function Profilee() {

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
              marginLeft:"80px",
              marginRight:"30px",
              borderRadius:"20px",
              backgroundColor:"#282828",
              height:"840px"
            }}



          >
<Box sx={{marginTop:"60px",display:"flex",flexDirection:"column",alignItems: 'center',}}>
<svg width="192" height="191" viewBox="0 0 192 191" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<circle cx="96" cy="95.5" r="93.6775" fill="#C4C4C4"/>
<circle cx="96" cy="95.5" r="93.6775" fill="url(#pattern0)"/>
<circle cx="96" cy="95.5" r="93.6775" stroke="#FF7551" strokeWidth="3.64504"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_230_1060" transform="translate(0 -0.227273) scale(0.0030303)"/>
</pattern>
<image id="image0_230_1060" width="330" height="480" xlinkHref="data:image/jpeg;base64,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"/>
</defs>
</svg>
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
                // validationSchema={Yup.object().shape({
                //     email: Yup.string()
                //     .email()
                //     .required('Enter email'),
                //     password: Yup.string()
                //         // .matches(
                //         //     /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
                //         // )
                //         .required(
                //             'Please enter password'
                //         ),
                  
                // })}
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



         
           {/* <Box
         sx={{  
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           marginTop:"100px",  
         
         }}
       >
         <Button type="submit"
           sx={{ color:'white',
         background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
         borderRadius: "12px",
         padding: "14px 56px",
         fontFamily:"Russo One",
         fontWeight:"400",
         fontSize: "18px", 
         textTransform:"none"
          }}
         
         >
       Sign In
</Button>


         </Box> */}
      

                        </Form>
                    )}}
              </Formik>

              </Box>
              </div>
         
            
          
   
  )
}
