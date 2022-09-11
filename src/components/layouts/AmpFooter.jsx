import React from 'react'
import Link from 'next/link'

export default function AmpFooter() {
  return (
    <footer className="site-footer clearfix">
    <section className="copyright"><Link href={process.env.NEXT_PUBLIC_HOST}>
    <span itemProp="copyrightHolder" itemScope="" itemType="https://schema.org/Organization">
      <span itemProp="name">{process.env.NEXT_PUBLIC_APP}</span></span>
      </Link> &copy; <span itemProp="copyrightYear">{new Date().getFullYear()}</span>
      </section>
</footer>	
  )
}
