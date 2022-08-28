import React, { useState, useEffect } from "react";
//import { useRouter } from "next/router";
import * as fs from "fs";

const Slug = (props) => { 
  function createMarkup(c) {
    return { __html: c };
  }
  const [element, setElement] = useState(props.myElement);

  return (
    <>
      <h1>{element && element.title}</h1>

      {element && (
        <div dangerouslySetInnerHTML={createMarkup(element.content)}></div>
      )}
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
