import React from 'react'
import Link from 'next/link'

export default function AmpHeader() {
  return (
    <>
  
  <header className="main-header">
        <nav className="blog-title">
         <Link href={process.env.NEXT_PUBLIC_HOST}>{process.env.NEXT_PUBLIC_APP}</Link>
        </nav>
     </header>
</>

    
  )
}
