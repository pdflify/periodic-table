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
        <main role="main" className="w-full md:w-2/3 lg:w-3/4 pt-1 lg:pr-6">
          <ol className="list-reset flex">
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Periodic Table
              </a>
            </li>
              <span className="text-gray-500 mx-2">›</span>
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Element
              </a>
            </li>
              <span className="text-gray-500 mx-2">›</span>
            <li className="text-gray-500">{element && element.btitle}</li>
          </ol>

          <h1 className="text-2xl">
            {element && element.title}
          </h1>
          <p className="font-sans font-extralight">
            {element && element.AtomicSummary}
          </p>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 62" className="w-60 shadow-2xl rounded-lg bg-gradient-to-r from-gray-700 via-rose-300 to-black">
      <path className={element && element.AtomicBg} d="M1 1H51V61H1z" />
      <text x={3.5} y={11} className="atomic-number-specific">{element && element.AtomicNumber}</text>
      <text x={44.5} y={4} className="discovered-year font-thin">{element && element.AtomicYear}</text>
      <text x={26} y={36} className="chemical-symbol-specific">{element && element.AtomicSymbol}</text>
      <text x={26} y={50} className="chemical-name-specific">{element && element.AtomicName}</text>
      <text x={26} y={58.5} className="atomic-weight-specific">{element && element.AtomicWeight}</text>
    </svg>


          <p className="pt-4"> The flexbox (parent) container: </p>
          <section className="min-h-screen" >
            {element && (
              <div
                dangerouslySetInnerHTML={createMarkup(element.content)}
              ></div>
            )}
          </section>
        </main>
        <aside className="w-full md:w-1/3 lg:w-1/4 px-2 ">
          
            <div className="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 my-4">
              <div className="w-2 bg-green-400" />
              <div className="flex items-center px-2 py-3">
                <span className="object-cover w-10 h-10 p-3   text-blue-800 uppercase bg-blue-200 rounded-full">
                  <h2 className="text-center">H</h2>
                </span>
                <div className="mx-3">
                  <h2> <sup className="">1</sup> Hydrogen</h2>
                  <p className="dark:text-gray-200 text-xs text-slate-400 m-1 font-sans font-light">
                    Nonmetal
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl shadow-lg font-sans">
      <div className="h-10 bg-slate-200 text-center text-2xl font-semibold md:text-lg">
        <h2 className="py-2">CATEGORIES</h2>
      </div>
      <div className="mt-0 border-2 border-b-rose-500"></div>  
        <ul className="divide-y divide-gray-200">
         
            <li className="flex py-2 pl-4 hover:text-red-500">
              <Link href={'/'} >
                <a>45454</a>
              </Link>
            </li>
            <li className="flex py-2 pl-4 hover:text-red-500">
              <Link href={'/'} >
                <a>45454</a>
              </Link>
            </li>
            <li className="flex py-2 pl-4 hover:text-red-500">
              <Link href={'/'} >
                <a>45454</a>
              </Link>
            </li>
            <li className="flex py-2 pl-4 hover:text-red-500">
              <Link href={'/'} >
                <a>45454</a>
              </Link>
            </li>
         
        </ul>
      </div>
            <div className="sticky top-0 p-4 w-full ">
            <div className="flex justify-center">
              
              <ul className="rounded-lg w-96">
                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
                  An item
                </li>
                <li className="px-6 py-2 border-b border-gray-200 w-full">
                  A second item
                </li>
                
              </ul>
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
