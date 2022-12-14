import React from 'react';
import "./Navbar.css"
import { signOut } from '../utils/auth';
import { Nav, NavItem, NavLink, NavDropdown, Button } from "react-bootstrap";

export const NavBar = ({user}) => {
   return (
        
            <Nav className="navbar">
                <h3>Tour Ready</h3>
                <div className="nav navbar-expand-lg">
                    <NavLink className='nav-link'
                        active
                        href="/home">
                        Home
                    </NavLink>
                    <NavLink className='nav-link'
                        active
                        href="/shows">
                        Shows
                    </NavLink>
                    <NavLink className='nav-link'
                        active
                        href="/cities">
                        Cities
                    </NavLink>
                    <NavLink className='nav-link'
                        active
                        onClick={signOut}>
                        Sign Out
                    </NavLink>
                </div>
            </Nav>
        
   )
}

export default NavBar