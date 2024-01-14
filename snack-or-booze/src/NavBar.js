import React from "react";
import "./NavBar.css";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function NavBar() {
  return (
    <Navbar>
      <NavbarBrand href="/">Snack or Booze</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/snacks">Snacks</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/drinks">Drinks</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/recommended">Recommend</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;

{
  /* <div>
  <Navbar>
    <NavbarBrand href="/">Snack Or Booze</NavbarBrand>

    <Nav className="me-auto" navbar>
      <NavItem>
        <NavLink href="/snacks">Snacks</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/drinks">Drinks</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
</div>; */
}
