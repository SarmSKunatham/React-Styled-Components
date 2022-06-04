import { React, useState } from "react";
import {
  NavBar,
  NavLogo,
  NavMenu,
  NavList,
  NavLink,
  Bars,
} from "../styles/styledElements";

const Nav = () => {

    const [show, setShow] = useState(false);

  return (
    <>
      <NavBar show={show}>
        <Bars onClick={(() => setShow(!show))} />

        <NavLogo to="/">My React</NavLogo>

        <NavMenu show={show}>
          <NavList>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </NavList>
        </NavMenu>
      </NavBar>
    </>
  );
};

export default Nav;
