import React from 'react'
import NavLinks from './NavLinks'
import NavLogo from './NavLogo'

function NavBar() {
  return (
    <div className = 'flex items-center justify-around bg-black sm:h-12'>
      <NavLogo/>
      <NavLinks/>
    </div>
  )
}

export default NavBar;
