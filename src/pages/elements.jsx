import React from 'react'
import ElementlistCard from 'components/ElementlistCard'
import { MainLayout } from 'components/layouts'
import Head from 'next/head';

export default function Elementlist() {
  return (
      <>
        <Head>
        <title>Periodic Table of Elements</title>
        <link rel="canonical" href="https://reactjsexample.com/a-react-component-for-google-adsense/" />
        <link rel="amphtml" href="https://reactjsexample.com/a-react-component-for-google-adsense/amp/" />
        </Head>
        <MainLayout>
          <section role="main" className="w-full lg:w-4/6 order-2">                     
            <article><ElementlistCard /></article>
          </section>
          <div className="w-full lg:w-1/6 order-1  ">
         <div> 
         <center className="hidden lg:block"><img src="https://via.placeholder.com/200x600" /></center>
         </div>
        </div>
        <div className="w-full lg:w-1/6 order-3 pl-4">
        <center><img src="https://via.placeholder.com/200x600.png?text= Stacktix" /> </center>
        </div>      
        </MainLayout>
      </>
  );
}
