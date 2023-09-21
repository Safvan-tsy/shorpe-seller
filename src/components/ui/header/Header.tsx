import { useState } from "react"
import DarkMode from "../DarkMode/DarkMode"
import logo from '../../../assets/logo.png'
import './header.css'
import { TiThListOutline } from 'react-icons/ti'

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false);


  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <div className="header-container">
        <div className="header-sub-container1">
          <a href="/">
            <img src={logo} alt="Logo" className='shorpe-logo' />
          </a>
        </div>
        <div className="header-sub-container2">
          {isNavVisible && 
            <div className="nav-container">
              <nav className="nav">
                <ul className="nav__items">
                <li><a href="/" className="nav-btn">Dashboard</a></li>
                <li><a href="/products" className="nav-btn">Products</a></li>
                <li><a href="/orders" className="nav-btn">Orders</a></li>
                <li><a href="/logout" className="nav-btn logout">Logout</a></li>
                </ul>
              </nav>
              <DarkMode />
            </div>
            }
            <div className="toggle" onClick={toggleNav}>
              <TiThListOutline />
            </div>
            {!isNavVisible && 
            <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                <ul className="mobile-nav__items">
                <li><a href="/" className="nav-btn">Dashboard</a></li>
                <li><a href="/products" className="nav-btn">Products</a></li>
                <li><a href="/orders" className="nav-btn">Orders</a></li>
                <li><a href="/logout" className="nav-btn logout">Logout</a></li>
                <li><DarkMode /></li>
                </ul>
             </nav>
             }
          
        </div>
      </div>
    </header>
  )
}

export default Header
