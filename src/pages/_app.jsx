import * as React from 'react'
import '../styles/globals.css'
import '../styles/Element.css'
import { useAmp } from 'next/amp'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'
import { NavBar, FooterApp } from '../components/layouts'

function MyApp({ Component, pageProps }) {
  const isAmp = useAmp()
  return (
    <>
     {isAmp ? (    
    <Component {...pageProps} />
     ): (
    <ThemeProvider attribute="class">
     <NextNProgress
       color="#29D"
       startPosition={0.3}
       stopDelayMs={200}
       height={2}
       showOnShallow={true} />
     <NavBar/>
      <Component {...pageProps} />
     <FooterApp/>
    </ThemeProvider>
    )}
    </>
  ) 
}

export default MyApp
export const config = { amp: 'hybrid' }