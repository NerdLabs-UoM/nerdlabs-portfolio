import React from 'react'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'


const navigation =[
  { name: 'Home', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
]

function NavBar() {
  return (
    <div className = 'flex items-center justify-around bg-black sm:h-12'>
      <NavLogo navigation={navigation}/>
      <NavLinks navigation={navigation}/>
    </div>
  )
}

export default NavBar;