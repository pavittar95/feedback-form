import React from "react";
import { Navbar, Nav, NavbarBrand, NavbarText } from "reactstrap";
import Logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <Navbar expand="md" className="header">
        <NavbarBrand href="/">
          <img src={Logo} className="logo" alt="logo" />
        </NavbarBrand>
        <Nav className="mr-auto" navbar></Nav>
        <NavbarText>Feedback</NavbarText>
      </Navbar>
    </>
  );
}
