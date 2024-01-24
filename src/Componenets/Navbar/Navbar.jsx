import React from 'react'
import './navbar.css'
import logo from '../../images/logo.png'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="image" />
                </div>
                <div className="navigations">
                    <ul>
                        <li><a href="" style={{ "color": "#B0FB49" }}>Home</a></li>
                        <li><a href="">Upload Podcast</a></li>
                        <li><a href="">Listen</a></li>
                        <li><a href="">AboutUs</a></li>
                    </ul>
                </div>
                <div className="search">
                    <input type="text" />
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="buttons">
                    <div className="login button"><a href="#">Login</a></div>
                    <div className="signup button"><a href="#">SignUp</a></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar