import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAmp } from 'next/amp'
import Head from 'next/head'
import { MainLayout } from "components/layouts";
import Link from "next/link";
import * as fs from "fs";

const BlogDetails = (props, error) => {
  const router = useRouter();
  const { slug } = router.query;
   console.log({props})
  function createMarkup(content) {
    return { __html: content };
  }
 
  const [blog, setblog] = useState(props.myBlog);
  const isAmp = useAmp() 
  return (
    <>
      {isAmp ? (
       <>
        <Head>
            <title>{blog && blog.title}</title>
            <meta name="description" content={blog && blog.AtomicSummary} />
            <link rel="canonical" href={`/blogs/${blog && blog.slug}`} />
        </Head>
        <header className="main-header">
              <nav className="blog-title">
                <a href="https://www.t-mail.org/blog">ggfgfg</a>
              </nav>
            </header>
            <main className="content">
              <article className="post">
                <header className="post-header">
                  <h1 className="post-title">
                  {blog && blog.title}
                  </h1>
                  <section className="post-meta">
                    <div className="post-full-author-header">
                      <p className="author">by t-mail.org</p>
                      <time
                        className="post-full-meta-date"
                        dateTime="{blog.updatedAt}"
                      >
                      31/Aug/2022
                      </time>
                    </div>
                  </section>
                </header>
                {blog && blog.btitle}
                {blog && blog.AtomicSummary}
                {blog && blog.AtomicBg}
                {blog && blog.AtomicNumber}
              {blog && blog.AtomicYear}
{blog && blog.AtomicSymbol}
{blog && blog.AtomicName}
{blog && blog.AtomicWeight}
{blog && blog.AtomicNumber}
 {blog && blog.AtomicNumber}
{blog && blog.AtomicWeight}
{blog && blog.MeltingPoint}
{blog && blog.BoilingPoint}
{blog && blog.Density}
{blog && blog.PhaseAtRoomTemperature}
{blog && blog.blogClassification}
{blog && blog.PeriodNumber}
{blog && blog.GroupNumber}
{blog && blog.GroupName}
{blog && blog.AtomicYear}
                  {blog && ( <section  className="post-content" dangerouslySetInnerHTML={createMarkup(blog.History)}></section> )}         
              </article>
            </main>
            <footer className="site-footer clearfix">
        <section className="copyright"><a href="https://t-mail.org/blog">t-mail.org</a> &copy; 2022</section>
    </footer>		   
       </>
     ):(
      <>
      <Head>
            <title>{blog && blog.title}</title>
            <meta name="description" content={blog && blog.AtomicSummary} />
            <link rel="canonical" href={`/blogs/${blog && blog.slug}`} />
            <link rel="amphtml" href={`/blogs/${blog && blog.slug}?amp=1`} />
      </Head>   
      <MainLayout>
        <section role="main" className="w-full lg:w-3/4 pt-1 lg:pr-6">
         <header>
          <ol className="list-reset flex">
            <li><Link href={'/'} ><a> Periodic Table</a></Link></li><span className="mx-1">›</span>
            <li><Link href={'/blogs'} ><a>blog</a></Link></li><span className="mx-1">›</span>
            <li>{blog && blog.btitle}</li>
          </ol>
          <h1 className="text-2xl">{blog && blog.title}</h1>
         </header>
         <article>
          <p className="lg:text-lg">{blog && blog.AtomicSummary}</p>
          <div className="container mx-auto"><div className="my-8 lg:flex lg:items-center">
            <div className="lg:w-1/3 ">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 62" className="rounded-lg bg-gradient-to-r from-gray-700 via-rose-300 to-indigo-200">
               <path fill={blog && blog.AtomicBg} d="M1 1H51V61H1z" />
               <text x={3.5} y={11} className="atomic-number-specific">{blog && blog.AtomicNumber}</text>
               <text x={44.5} y={4} className="discovered-year font-thin">{blog && blog.AtomicYear}</text>
               <text x={26} y={36} className="chemical-symbol-specific">{blog && blog.AtomicSymbol}</text>
               <text x={26} y={50} className="chemical-name-specific">{blog && blog.AtomicName}</text>
               <text x={26} y={58.5} className="atomic-weight-specific">{blog && blog.AtomicWeight}</text>
             </svg>           
            </div>
            <div className="mt-6 lg:w-2/3 lg:mt-0 lg:mx-4">
             <ul className="divide-y divide-gray-200 dark:divide-gray-800 lg:text-base">
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Atomic Number:</span> {blog && blog.AtomicNumber}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Atomic Weight:</span> {blog && blog.AtomicWeight}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Melting Point:</span> {blog && blog.MeltingPoint}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Boiling Point:</span> {blog && blog.BoilingPoint}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Density:</span> {blog && blog.Density}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Phase at Room Temperature:</span> {blog && blog.PhaseAtRoomTemperature}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">blog Classification:</span> {blog && blog.blogClassification}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Period Number:</span> {blog && blog.PeriodNumber}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Group Number:</span> {blog && blog.GroupNumber}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Group Name:</span> {blog && blog.GroupName}</li>
                <li className="py-1"><span className="text-purple-800 dark:text-orange-400">Year Discovered:</span> {blog && blog.AtomicYear}</li>
             </ul>
            </div></div></div>
            {blog && ( <section id="History" className="max-w-full prose prose-lg hover:prose-a:text-orange-400 dark:prose-invert" dangerouslySetInnerHTML={createMarkup(blog.History)}></section> )}
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
      </MainLayout>
      </>
     )}  
    </>
  )
}

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
 
  let myBlog = await fs.promises.readFile(
    `src/atomicdata/${slug}.json`,
    "utf-8"
  );
  
  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}
export default BlogDetails;
export const config = { amp: 'hybrid' }