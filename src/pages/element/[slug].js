import React, { useState, useEffect } from "react";
import Layout from "components/layouts/Main";
import Link from "next/link";

//import { useRouter } from "next/router";
import * as fs from "fs";

const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [element, setElement] = useState(props.myElement);

  return (
    <>
      <Layout>
        <section role="main" className="w-full lg:w-3/4 pt-1 lg:pr-6">
         <header>
          <ol className="list-reset flex">
            <li><Link href={'/'} ><a> Periodic Table</a></Link></li><span className="mx-1">›</span>
            <li><Link href={'/element'} ><a>Element</a></Link></li><span className="mx-1">›</span>
            <li>{element && element.btitle}</li>
          </ol>
          <h1 className="text-2xl">{element && element.title}</h1>
         </header>
         <article>
          <p className="text-base lg:text-lg">{element && element.AtomicSummary}</p>
          <div className="container mx-auto"><div className="my-8 lg:flex lg:items-center">
            <div className="lg:w-1/3 ">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 62" className="rounded-lg bg-gradient-to-r from-gray-700 via-rose-300 to-indigo-200">
               <path fill={element && element.AtomicBg} d="M1 1H51V61H1z" />
               <text x={3.5} y={11} className="atomic-number-specific">{element && element.AtomicNumber}</text>
               <text x={44.5} y={4} className="discovered-year font-thin">{element && element.AtomicYear}</text>
               <text x={26} y={36} className="chemical-symbol-specific">{element && element.AtomicSymbol}</text>
               <text x={26} y={50} className="chemical-name-specific">{element && element.AtomicName}</text>
               <text x={26} y={58.5} className="atomic-weight-specific">{element && element.AtomicWeight}</text>
             </svg>           
            </div>
            <div className="mt-6 lg:w-2/3 lg:mt-0 lg:mx-4">
             <ul className="divide-y divide-gray-200 dark:divide-gray-800 lg:text-base">
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Atomic Number:</span> {element && element.AtomicNumber}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Atomic Weight:</span> {element && element.AtomicWeight}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Melting Point:</span> {element && element.MeltingPoint}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Boiling Point:</span> {element && element.BoilingPoint}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Density:</span> {element && element.Density}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Phase at Room Temperature:</span> {element && element.PhaseAtRoomTemperature}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Element Classification:</span> {element && element.ElementClassification}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Period Number:</span> {element && element.PeriodNumber}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Group Number:</span> {element && element.GroupNumber}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Group Name:</span> {element && element.GroupName}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Year Discovered:</span> {element && element.AtomicYear}</li>
             </ul>
            </div></div></div>
            {element && ( <section id="History" className="max-w-full prose prose-lg hover:prose-a:text-orange-400 dark:prose-invert" dangerouslySetInnerHTML={createMarkup(element.History)}></section> )}
          </article>  
        </section>         
        <aside className="w-full lg:w-1/4 px-2 ">         
            <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-4">
            <div className="w-2 bg-green-400" />
              <div className="flex items-center px-2 py-3">
                <span className="object-cover w-10 h-10 p-3   text-blue-800 uppercase bg-blue-200 rounded-full">
                  <h2 className="text-center">H</h2>
                </span>
                <div className="mx-3">
                  <h2> <sup className="">1</sup> Hydrogen</h2>
                  <p className="dark:text-gray-200 text-xs text-slate-400 m-1  font-light">
                    Nonmetal
                  </p>
                </div>
              </div>
            </div>
            <div className="sticky top-0 p-4 w-full ">
            <div className="flex justify-center">                        
            </div>
          </div>
        </aside>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir(`src/atomicdata`);
  allb = allb.map((item) => {
    return { params: { slug: item.split(".")[0] } };
  });
  console.log(allb);
  return {
    paths: allb,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  let myElement = await fs.promises.readFile(
    `src/atomicdata/${slug}.json`,
    "utf-8"
  );

  return {
    props: { myElement: JSON.parse(myElement) }, // will be passed to the page component as props
  };
}
export default Slug;
