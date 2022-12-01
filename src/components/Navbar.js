import React from 'react';
import "./Navbar.css"
import { signOut } from '../utils/auth';
import { Nav, NavItem, NavLink, NavDropdown, Button } from "react-bootstrap";

export const NavBar = ({user}) => {
   return (
        
            <Nav className="nav">
                
                <div className="nav navbar-expand-lg">
                    <NavLink className='nav-link'
                        active
                        href="/home">
                        Home
                    </NavLink>
                    <NavLink className='nav-link'
                        active
                        href="/profile">
                        My Profile
                    </NavLink>
                    <NavLink className='nav-link'
                        active
                        href="/groups">
                        Groups
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
                    <div>
                    <img
                        href="#"
                        className="profilePic"
                        src={user.$.photoURL}
                    ></img>
                    </div>
                    <NavDropdown>
                        <NavDropdown.Item
                            eventKey="1"
                            href="/profile"
                        >{user.displayName}</NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                        <Button className="nav-btn" onClick={signOut}>
                            Sign Out
                        </Button>
                    </NavDropdown>
                    </div>
            </Nav>
        
   )
}

export default NavBar