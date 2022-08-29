import React from "react";
import Link from "next/link";

const elementdatalist = [
    { AtomicNumber: '1', AtomicSymbol: 'H' , AtomicName: 'Hydrogen', AtomicMass: '1.0080 u', href: '/element/hydrogen', bg: 'box-border w-16 rounded border-4 bg-amber-200', target:'_blank' },
    { AtomicNumber: '2', AtomicSymbol: 'He' , AtomicName: 'Helium', AtomicMass: '4.00260 u', href: '/element/helium', bg: 'box-border w-16 rounded border-4 bg-orange-100', target:'_blank' },
    { AtomicNumber: '3', AtomicSymbol: 'Li' , AtomicName: 'Lithium',  AtomicMass: '7.0 u', href: '/element/lithium',  bg: 'box-border w-16 rounded border-4 bg-red-100', target:'_blank' },
    { AtomicNumber: '4', AtomicSymbol: 'Be' , AtomicName: 'Beryllium', AtomicMass: '9.012183 u', href: '/element/beryllium', bg: 'box-border w-16 rounded border-4 bg-indigo-200', target:'_blank' },
  
  
  
  
  
  
  ]
  
export default function ElementlistCard() {
  return (  
    <>
     {elementdatalist.map((item) => (
     <div  key={item.AtomicNumber} className="p-1 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-2">
        <div className={item.bg }>     
          <sup className="text-xs">{item.AtomicNumber}</sup>
          <div className="text-2xl font-normal pb-4 text-center">{item.AtomicSymbol}</div>        
        </div>
         <div>
          <h2 className="text-xl font-medium no-underline hover:underline"> 
          <Link  href={item.href} target={item.target}>  
          <a>{item.AtomicName}</a>
          </Link>
          </h2>
          <p className="text-slate-500 text-xs">Atomic Mass: {item.AtomicMass}</p>
        </div>
        </div>
      ))} 
    </>
  )
}
