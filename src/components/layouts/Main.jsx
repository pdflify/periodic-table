import React from 'react'
export default function Layout ({ children }) {
    return (
    <main className="container p-2 lg:px-20 mx-auto"><div className="flex flex-row flex-wrap py-4">{children}</div></main>
    ) 
  }