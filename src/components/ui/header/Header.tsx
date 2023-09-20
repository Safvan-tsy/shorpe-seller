import { useEffect, useState } from "react"
import DarkMode from "../DarkMode/DarkMode"
import logo from '../../../assets/logo.png'
import './header.css'
import { TiThListOutline } from 'react-icons/ti'

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const handleMediaQueryChange = mediaQuery =>{
    if(mediaQuery.matches){
      setIsSmallScreen(true)
    }else{
      setIsSmallScreen(false)
    }
  }

  useEffect(()=>{
   
  },[])

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
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
          {( !isSmallScreen || isNavVisible) &&
            <div className="nav-container">
              <nav className="nav">
                <a href="/" className="nav-btn">Dashboard</a>
                <a href="/products" className="nav-btn">Products</a>
                <a href="/orders" className="nav-btn">Orders</a>
                <a href="/logout" className="nav-btn logout">Logout </a>
              </nav>
              <DarkMode />
            </div>
          }
          <div className="toggle" onClick={toggleNav}>
            <TiThListOutline />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header