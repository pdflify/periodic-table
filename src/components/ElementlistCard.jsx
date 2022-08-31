import React from "react";
import Link from "next/link";

const elementdatalist = [
    { AtomicNumber: '1', AtomicSymbol: 'H' , AtomicName: 'Hydrogen', AtomicMass: '1.0080 u', href: 'hydrogen', bg: 'w-16 border-2 bg-indigo-200' },
    { AtomicNumber: '2', AtomicSymbol: 'He' , AtomicName: 'Helium', AtomicMass: '4.00260 u', href: 'helium', bg: 'w-16 border-2 bg-indigo-200' },
    { AtomicNumber: '3', AtomicSymbol: 'Li' , AtomicName: 'Lithium',  AtomicMass: '7.0 u', href: 'lithium',  bg: 'w-16 border-2 bg-indigo-200' },
    { AtomicNumber: '4', AtomicSymbol: 'Be' , AtomicName: 'Beryllium', AtomicMass: '9.012183 u', href: 'beryllium', bg: 'w-16 border-2 bg-indigo-200' },
    { AtomicNumber: '5', AtomicSymbol: 'Be' , AtomicName: 'Beryllium', AtomicMass: '9.012183 u', href: 'beryllium', bg: 'w-16 border-2 bg-indigo-200' },
    
    { AtomicNumber: '6', AtomicSymbol: 'H' , AtomicName: 'Hydrogen', AtomicMass: '1.0080 u', href: 'hydrogen', bg: 'w-16 border-2 bg-indigo-200' },
    { AtomicNumber: '7', AtomicSymbol: 'He' , AtomicName: 'Helium', AtomicMass: '4.00260 u', href: 'helium', bg: 'w-16 border-2 bg-indigo-200' },
    { AtomicNumber: '8', AtomicSymbol: 'Li' , AtomicName: 'Lithium',  AtomicMass: '7.0 u', href: 'lithium',  bg: 'w-16 border-2 bg-indigo-200' },
    { AtomicNumber: '9', AtomicSymbol: 'Be' , AtomicName: 'Beryllium', AtomicMass: '9.012183 u', href: 'beryllium', bg: 'w-16 border-2 bg-indigo-200' },
    { AtomicNumber: '10', AtomicSymbol: 'Be' , AtomicName: 'Beryllium', AtomicMass: '9.012183 u', href: 'beryllium', bg: 'w-16 border-2 bg-indigo-200' },

  ]
  
export default function ElementlistCard() {
  return (  
    <>
     {elementdatalist.map((item) => (
     <div  key={item.AtomicNumber} className="p-1 max-w-md mx-auto space-x-2 text-black bg-gray-300 rounded-xl flex items-center my-2 ">
        <div className={item.bg}>     
          <sup className="text-xs">{item.AtomicNumber}</sup>
          <div className="text-2xl pb-4 text-center">{item.AtomicSymbol}</div>        
        </div>
         <div>
          <h2 className="text-xl no-underline hover:underline"> 
          <Link  href={`/elements/${item.href}`}>  
          <a>{item.AtomicName}</a>
          </Link>
          </h2>
          <p className="text-xs">Atomic Mass: {item.AtomicMass}</p>
        </div>
        </div>
      ))} 
    </>
  )
}
