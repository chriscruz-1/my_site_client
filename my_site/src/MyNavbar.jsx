import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Chris Cruz</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a className="dropdown-item" href="/">One Rep Max Calculator (In Progress)</a>
                </DropdownItem>
                <DropdownItem>
                  <a className="dropdown-item" href='/'>Workout Tracker (In Progress)</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
  }

export default MyNavbar;