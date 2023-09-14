import React from 'react'

const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

function NavBarMd() {
  return (
    <div>
        {userNavigation.map((user)=>{
            ({active})=>(
                <a href ={user.href}>
                    {user.name} 
                </a>
            )
        })}
    </div>
  )
}

export default NavBarMd