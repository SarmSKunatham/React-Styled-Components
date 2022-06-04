import React from 'react'
import { NavBar, NavLogo, NavMenu, NavList, NavLink } from '../styles/styledElements'


const Nav = () => {
  return (
    <>
        <NavBar>
            <NavLogo to="/">
                My React
            </NavLogo>

            <NavMenu>
                <NavList>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </NavList>
            </NavMenu>
        </NavBar>
    </>
  )
}

export default Nav