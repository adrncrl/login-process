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
import { useAuth } from "../../context/AuthContext";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, user, logout } = useAuth();
  const toggle = () => setIsOpen(!isOpen);

  console.log("Nav auth state:", { isAuth, user });

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {!isAuth ? (
              <>
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
              </>
            ) : (
              <NavbarText>Welcome to Dashboard!</NavbarText>
            )}
          </Nav>
          {isAuth && user ? (
            <NavbarText>
              <UncontrolledDropdown inNavbar>
                <DropdownToggle nav caret>
                  Hi {user?.firstName} !
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={logout}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavbarText>
          ) : null}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default PageNav;
