import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Image/Logo.png';
import './NavBar.css'


const NavBar = () => {
    return (
<header>
    <nav className="navbar navbar-expand-lg">
        <div className="container menu menu-p">
                    <NavLink className={({isActive})=> isActive ? "logo" : undefined} to='/Home'><img src={Logo} alt='Cuda'/></ NavLink>
                <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse menu-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link " to='/Home'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/About'>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to='/Work'>Work</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to='/Blog'>Blog</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to='/Contact'>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


            <div className='menu tex-box'>
                <h1>Hi there! We are the new kids on the block 
                and we build awesome websites and mobile apps.</h1>
                <NavLink className='button' to='/Us'>Work With Us!</NavLink>
            </div>
</header>


    );
};

export default NavBar;