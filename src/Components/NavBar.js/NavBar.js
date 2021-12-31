import React,{useState} from 'react'
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const NavBar = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);    

    return (
        <React.Fragment>
            <nav className="main-nav">

         <img  src={logo} className='logoimg'/>
    
        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li className='navitems'>
              {/* <NavLink to="/">Home</NavLink> */}
              HOME
            </li>
            <li className='navitems'>
                ABOUT
              {/* <NavLink to="/about">about</NavLink> */}
            </li>
            <li className='navitems'>
                SERVICES
              {/* <NavLink to="/service">services</NavLink> */}
            </li>
            <li className='navitems'>
                CONTACTS
              {/* <NavLink to="/contact">contact</NavLink> */}
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
 </React.Fragment>

    )
}

export default NavBar