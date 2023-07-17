import React, { useState } from "react";
import "./navbar.css";
import { 
    FaFacebookF,
    FaTwitter,
    FaInstagram 
} from 'react-icons/fa';
import {NavLink } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"


const Navbar = () => {

    const [showMediaIcons,setshowMediaIcons] = useState(false);

    return(
      
            <nav className= "main-nav">  
            <div className="main-div1">        
                <div className="logo">
                    <h2><NavLink exact to="/">Shutter</NavLink></h2>
                </div>

                <div className="hamburger-menu">
                        <a href="#" onClick={() => setshowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                </div>
            </div>
            
                <div className= {showMediaIcons ? "menu-link menu-link-hide":"mobile-menu-link"}>
                   <ul>
                    <li>
                        <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
                    </li><br />
                    <li>
                        <NavLink exact activeClassName="active_class" to="/Photos">Photos</NavLink>
                    </li><br />
                    <li>
                        <NavLink exact activeClassName="active_class" to="/Bio">Bio</NavLink>
                    </li><br />
                    <li>
                        <NavLink exact activeClassName="active_class" to="/Blog">Blog</NavLink>
                    </li>
                    <li><br />
                        <NavLink exact activeClassName="active_class" to="/Contect">Contact</NavLink>
                    </li><br />
                   </ul> 
                </div>              

                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li><FaFacebookF /></li>
                    </ul>
                    <ul className="social-media-desktop">
                        <li><FaTwitter /></li>
                    </ul>
                    <ul className="social-media-desktop">
                        <li><FaInstagram /></li>
                    </ul>    

                </div>
            </nav>         
        
    )
}

export default Navbar;