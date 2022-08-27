import * as React from 'react'
import '../styles/globals.css'
import "../styles/elements.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    
   
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
