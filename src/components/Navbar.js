import React,{useState,useEffect} from 'react'
import data from "../dataNav"
import logo from "../assets/logo.png"
import { useProductsContext } from '../context/products_context'
import {
  Link
} from 'react-scroll'

import {FaBars} from "react-icons/fa"
const Navbar = () => {
 const [scrolled, setScrolled] =useState(false)
 const handleScroll = () => {
   const offset = window.scrollY
   if (offset > 200) {
     setScrolled(true)
   } else {
     setScrolled(false)
   }
 }

 useEffect(() => {
   window.addEventListener('scroll', handleScroll)
 })
 let navbarClasses = ['navbar']
 if (scrolled) {
   navbarClasses.push('scrolled')
 }

  const{openSidebar,closeSidebar}= useProductsContext()
  return (
    <header className={navbarClasses.join(' ')}>
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <a href={`/`}>
              <img src={logo} alt='' className='logo' />
            </a>

            <button type='button' className='btn-toggle' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='navbar-links'>
            {data.map((link) => {
              return (
                <li key={link.id} onClick={closeSidebar}>
                  <Link
                    to={link.text}
                    smooth={true}
                    offset={-300}
                    duration={500}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    
    </header>
  )
}

export default Navbar