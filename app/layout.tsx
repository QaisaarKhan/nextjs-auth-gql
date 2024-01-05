'use client'
import './globals.css'

import { PropsWithChildren } from 'react'
import { lightTheme } from './theme/themes'
import ContextProvider from './context-provider';

import { ThemeProvider, CssBaseline } from '@mui/material'
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  const router = usePathname()

  const showHeader =
    router === '/signin' ||
    router === '/signup' ||
    router === '/email' ||
    router === '/password' ||
    router === '/editprofile' ||
    router === '/profile' ||
    router === '/addmember' ||
    router === '/allmember' ||
    router === '/pricingplan'
      ? false
      : true
  return (
    <html lang='en'>
      <head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <ThemeProvider theme={lightTheme}>
        <ContextProvider>
        <body>
          <CssBaseline />
          {showHeader && <Header />}
          {/* {<Header/>} */}
          {children}
        </body>
        </ContextProvider>
      </ThemeProvider>
    </html>
  )
}