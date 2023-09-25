import React from 'react'
import NavBarMd from './NavBarMd';

const navigation =[
  { name: 'Home', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function NavLinks() {
  return (
    <div className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
      <NavBarMd/>
      <div className="hidden md:block">
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-violet-600 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default NavLinks