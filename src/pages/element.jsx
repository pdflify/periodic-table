import React from 'react'
import ElementlistCard from 'components/ElementlistCard'
import Layout from 'components/layouts/Main'

export default function Elementlist() {
  return (
        <Layout>
          <div className="w-full lg:w-4/6 order-2">          
            <section>
            <article><ElementlistCard /></article>
           </section>
          </div>
          <div className="w-full lg:w-1/6 order-1  ">
         <div> 
         <center className="hidden lg:block"><img src="https://via.placeholder.com/200x600" /></center>
         </div>
        </div>
        <div className="w-full lg:w-1/6 order-3 pl-4">
        <center><img src="https://via.placeholder.com/200x600.png?text= Stacktix" /> </center>
        </div>      
        </Layout>
  );
}
