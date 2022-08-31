import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNav'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Articles', href: '/news', target:'_blank', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Login', href: '#', current: false },
]

export default function NavBar() {
  return ( 
   
    <header className="py-2 shadow-md sm:py-2 flex items-center z-30 w-full">
    <div className="container mx-auto px-6 lg:px-20 flex items-center justify-between">
        <div className="logo text-gray-800 dark:text-white font-sans font-semibold text-2xl">
        δcienceKαri.Neτ   
        </div>
        <div className="flex items-center">
            <nav className="font-sans text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} target={item.target}>                 
               <a  className="py-2 px-6 flex hover:text-indigo-500">
                {item.name}
               </a>
              </Link>   
            ))} 
            </nav>
            <ThemeSwitch />
            <MobileNav /> 
        </div>
    </div>
    </header>
  )
}
