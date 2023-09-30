import { useState } from "react"
import DarkMode from "../DarkMode/DarkMode"
import logo from '../../../assets/logo.png'
import './header.css'
import { TiThListOutline } from 'react-icons/ti'
import { useLogoutMutation } from "../../../redux/slices/sellersApiSlice"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../../../redux/slices/authSlice"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [logoutApiCall] = useLogoutMutation();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
    setIsOpen(!isOpen);
  }

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header>
      <div className="header-container">
        <div className="header-sub-container1">
          <Link to='/'>
            <img src={logo} alt="Logo" className='shorpe-logo' />
          </Link>
        </div>
        <div className="header-sub-container2">
          {isNavVisible &&
            <div className="nav-container">
              <nav className="nav">
                <ul className="nav__items">
                  <li>
                    <Link to='/' className="nav-btn">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to='/products' className="nav-btn">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to='/orders' className="nav-btn">
                      Orders
                    </Link>
                  </li>
                  <li><button className="nav-btn logout" onClick={logoutHandler}>Logout</button></li>
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
                <li>
                  <Link to='/' className="nav-btn">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to='/products' className="nav-btn">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to='/orders' className="nav-btn">
                    Orders
                  </Link>
                </li>
                <li><button className="nav-btn logout" onClick={logoutHandler}>Logout</button></li>
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
