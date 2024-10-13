import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    // <Navbar color="light" light expand="md" className="d-flex justify-content-between">
    //   <Collapse isOpen={isOpen} navbar className="w-100">
    //     {/* Left-aligned nav items */}
    //     <Nav className="d-flex flex-row" navbar>
    //       <NavItem>
    //         <NavLink tag={Link} to="/login">
    //           Login
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink tag={Link} to="/signup">
    //           Sign-up
    //         </NavLink>
    //       </NavItem>
    //     </Nav>

    //       <UncontrolledDropdown nav inNavbar>
    //         <DropdownToggle nav caret>
    //           First Name Here
    //         </DropdownToggle>
    //         <DropdownMenu right>
    //           <DropdownItem>Logout</DropdownItem>
    //         </DropdownMenu>
    //       </UncontrolledDropdown>
    //   </Collapse>
    // </Navbar>

    <div>
      <Navbar color="light" light expand="md">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/signup">
                Sign-up
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <UncontrolledDropdown inNavbar>
              <DropdownToggle nav caret>
                Name
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default PageNav;
