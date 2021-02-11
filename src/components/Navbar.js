import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import Me from '../img/ThomasRager.JPG'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar className="navbar fixed-top" color="warning" light expand="md">
        <NavbarBrand href="/"><img src={Me} alt="Thomas Rager" className="rounded-circle" width="75" height="75"/>Thomas Rager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#resume">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#interests">Interests</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#portfolio">Portfolio</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="font-weight-bolder">Full Stack Developer</NavbarText>
        </Collapse>
      </Navbar>
    </header>
  );
}

export default Navigation;

{/*  */}