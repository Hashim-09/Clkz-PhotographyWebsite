import React from 'react'

function Navbar() {
  return (
    <nav className='NavbarItem'>
      <h1 className="navbar-logo"> Clkz <i className='fab fa-react'></i> </h1>
      <div className="menu-icon">
        
      </div>
      <ul>
        <li> <a className='nav-links' href='#'> Portfolio </a> </li>
        <li> <a className='nav-links' href='#'> About </a> </li>
        <li> <a className='nav-links' href='#'> Contact </a> </li>
      </ul>
    </nav>
  )
}

export default Navbar
