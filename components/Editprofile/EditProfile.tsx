
import { Button, Grid,Box, Typography,TextField,InputAdornment,styled,FormControl,IconButton} from '@mui/material'
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
  const [isBool, setIsBool] = useState(false);
    const onClickHandler1 = () => {
        setIsBool(!isBool)
    }

    const onClickHandler2 = () => {
      setIsBool(!isBool)
    }

  const onClickHandler3 = () => {
    setIsBool(!isBool)
    }   


  
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
              marginLeft:{xs:"20px",sm:"50px",smm:"40px",md:"30px",lg:"80px"},
              marginRight:{xs:"20px",sm:"50px",smm:"40px",md:"20px",lg:"30px"},
              borderRadius:"20px",
              backgroundColor:"#282828",
              height:"840px"
            }}



          >
<Box sx={{marginTop:"60px",display:"flex",flexDirection:"column",alignItems: 'center',}}>
<img src='./imagee.svg' alt='profile'></img>
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
             disabled={!isBool}
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
             InputProps={{
              endAdornment: (
                <InputAdornment
                style={{marginRight: '30px'}}
              
                position="end">
                  
           
                   <IconButton onClick={onClickHandler1}>
                            {isBool ? (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.421 0 15.8917 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.90433 18.1083 4.36667 17.725 4.75L16.3 6.175ZM1 18.25C0.716667 18.25 0.479333 18.154 0.288 17.962C0.0960001 17.7707 0 17.5333 0 17.25V14.425C0 14.2917 0.025 14.1627 0.075 14.038C0.125 13.9127 0.2 13.8 0.3 13.7L10.6 3.4L14.85 7.65L4.55 17.95C4.45 18.05 4.33767 18.125 4.213 18.175C4.08767 18.225 3.95833 18.25 3.825 18.25H1Z" fill="#D9D9D9"/>
                </svg>)  : (     <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.421 0 15.8917 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.90433 18.1083 4.36667 17.725 4.75L16.3 6.175ZM1 18.25C0.716667 18.25 0.479333 18.154 0.288 17.962C0.0960001 17.7707 0 17.5333 0 17.25V14.425C0 14.2917 0.025 14.1627 0.075 14.038C0.125 13.9127 0.2 13.8 0.3 13.7L10.6 3.4L14.85 7.65L4.55 17.95C4.45 18.05 4.33767 18.125 4.213 18.175C4.08767 18.225 3.95833 18.25 3.825 18.25H1Z" fill="#D9D9D9"/>
                </svg>)}
                        </IconButton>
                </InputAdornment>
              ),
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
             disabled={!isBool}
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

             InputProps={{
              endAdornment: (
                <InputAdornment
                style={{marginRight: '30px'}}
              
                position="end">
                  
           
                   <IconButton onClick={onClickHandler2}>
                            {isBool ? (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.421 0 15.8917 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.90433 18.1083 4.36667 17.725 4.75L16.3 6.175ZM1 18.25C0.716667 18.25 0.479333 18.154 0.288 17.962C0.0960001 17.7707 0 17.5333 0 17.25V14.425C0 14.2917 0.025 14.1627 0.075 14.038C0.125 13.9127 0.2 13.8 0.3 13.7L10.6 3.4L14.85 7.65L4.55 17.95C4.45 18.05 4.33767 18.125 4.213 18.175C4.08767 18.225 3.95833 18.25 3.825 18.25H1Z" fill="#D9D9D9"/>
                </svg>)  : (     <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.421 0 15.8917 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.90433 18.1083 4.36667 17.725 4.75L16.3 6.175ZM1 18.25C0.716667 18.25 0.479333 18.154 0.288 17.962C0.0960001 17.7707 0 17.5333 0 17.25V14.425C0 14.2917 0.025 14.1627 0.075 14.038C0.125 13.9127 0.2 13.8 0.3 13.7L10.6 3.4L14.85 7.65L4.55 17.95C4.45 18.05 4.33767 18.125 4.213 18.175C4.08767 18.225 3.95833 18.25 3.825 18.25H1Z" fill="#D9D9D9"/>
                </svg>)}
                        </IconButton>
                </InputAdornment>
              ),
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
             disabled={!isBool}
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
             InputProps={{
              endAdornment: (
                <InputAdornment
                style={{marginRight: '30px'}}
              
                position="end">
                  
           
                   <IconButton onClick={onClickHandler3}>
                            {isBool ? (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.421 0 15.8917 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.90433 18.1083 4.36667 17.725 4.75L16.3 6.175ZM1 18.25C0.716667 18.25 0.479333 18.154 0.288 17.962C0.0960001 17.7707 0 17.5333 0 17.25V14.425C0 14.2917 0.025 14.1627 0.075 14.038C0.125 13.9127 0.2 13.8 0.3 13.7L10.6 3.4L14.85 7.65L4.55 17.95C4.45 18.05 4.33767 18.125 4.213 18.175C4.08767 18.225 3.95833 18.25 3.825 18.25H1Z" fill="#D9D9D9"/>
                </svg>)  : (     <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.421 0 15.8917 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.90433 18.1083 4.36667 17.725 4.75L16.3 6.175ZM1 18.25C0.716667 18.25 0.479333 18.154 0.288 17.962C0.0960001 17.7707 0 17.5333 0 17.25V14.425C0 14.2917 0.025 14.1627 0.075 14.038C0.125 13.9127 0.2 13.8 0.3 13.7L10.6 3.4L14.85 7.65L4.55 17.95C4.45 18.05 4.33767 18.125 4.213 18.175C4.08767 18.225 3.95833 18.25 3.825 18.25H1Z" fill="#D9D9D9"/>
                </svg>)}
                        </IconButton>
                </InputAdornment>
              ),
            }} 
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
             InputProps={{
              endAdornment: (
                <InputAdornment
                style={{marginRight: '30px'}}
                position="end">
               
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3 6.175L12.05 1.975L13.45 0.575C13.8333 0.191667 14.3043 0 14.863 0C15.421 0 15.8917 0.191667 16.275 0.575L17.675 1.975C18.0583 2.35833 18.2583 2.821 18.275 3.363C18.2917 3.90433 18.1083 4.36667 17.725 4.75L16.3 6.175ZM1 18.25C0.716667 18.25 0.479333 18.154 0.288 17.962C0.0960001 17.7707 0 17.5333 0 17.25V14.425C0 14.2917 0.025 14.1627 0.075 14.038C0.125 13.9127 0.2 13.8 0.3 13.7L10.6 3.4L14.85 7.65L4.55 17.95C4.45 18.05 4.33767 18.125 4.213 18.175C4.08767 18.225 3.95833 18.25 3.825 18.25H1Z" fill="#D9D9D9"/>
</svg>

                </InputAdornment>
              ),
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
