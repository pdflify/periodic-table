import Link from "next/link";

const footernav = [
  { name: 'Privacy Policy', href: '/', current: false },
  { name: 'Terms', href: '#', current: false },
  { name: 'Contact', href: '/about', current: false },
  { name: 'Advertisement', href: '#', target:'_blank', current: false },
]

export default function FooterApp() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 px-6">
      <div className="flex items-center justify-center lg:justify-between text-center lg:text-left flex-wrap py-8 w-full max-w-screen-xl mx-auto">
        <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
          <div className="w-full block lg:flex lg:items-center lg:w-auto">
            <div className="lg:grow">
              <span className="text-gray-800 dark:text-gray-300 block lg:inline-block mb-2 lg:mb-0 lg:mr-8">
                © {new Date().getFullYear()} {"Stacktix.org"}
              </span>
              {footernav.map((item) => (
                <Link  key={item.name} href={item.href} target={item.target}>                 
                  <a className="footer-menu-item no-underline inline-block lg:mt-0 hover:text-gray-800 text-gray-900 dark:text-gray-300 dark-hover:text-gray-100 mr-4">
                    {item.name}
                  </a>
                </Link>   
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          
        </div>
      </div>
    </footer>
  )
}
