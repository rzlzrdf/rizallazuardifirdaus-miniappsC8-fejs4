import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FaTypo3, FaTimes, FaBars } from "react-icons/fa";
import { Button } from './Button';
import './Navbar.css'

const Navbar = () => {

     const [click, setCLick] = useState(false)

     const [button, setButton] = useState(true)

     const handleClick = () => setCLick(!click)

     const closeMobileMenu = () => setCLick(false)

     const showButton = () => {
          if(window.innerWidth <= 960){
               setButton(false)
          } else{
               setButton(true)
          }
     }

     useEffect(() => {
          showButton()
     }, [])

     window.addEventListener('resize', showButton)

  return (
    <>
          <nav className='navbar'>
               <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                         TRVL <FaTypo3 />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                         {click ? <FaTimes className='color'/> : <FaBars className='color'/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                         <li className='nav-item'>
                              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                   Home
                              </Link>
                         </li>
                         <li className='nav-item'>
                              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                   Services
                              </Link>
                         </li>
                         <li className='nav-item'>
                              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                   Products
                              </Link>
                         </li>
                         <li className='nav-item'>
                              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                   Sign Up
                              </Link>
                         </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' >Sign Up</Button>}
               </div>
          </nav>
    </>
  )
}

export default Navbar;