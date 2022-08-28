import React from 'react'
export default function Layout ({ children }) {
    return (
    <div className="overflow-x-hidden"><div className="p-2"><div className="container mx-auto flex flex-col lg:flex-row">{children}</div></div></div>
    ) 
  }