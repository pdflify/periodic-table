import * as React from 'react'
import '../styles/globals.css'
import '../styles/Element.css'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'next-themes'
import { NavBar, FooterApp } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider attribute="class">
    <NextNProgress
  color="#29D"
  startPosition={0.3}
  stopDelayMs={200}
  height={2}
  showOnShallow={true}
/>
  <NavBar/>
    <Component {...pageProps} />
   <FooterApp/>
 </ThemeProvider>
    </>
  ) 
}

export default MyApp
