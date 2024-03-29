import React from "react";
import { useAppContext } from "../appContext";
import { Link, useLocation } from "react-router-dom";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
import { ToggleSwitch, FixedNavSpacer } from "./globalStyledComponents";
// Images
import Logo from "../images/logo.svg";

export default function SecondaryNavBar() {
  const { pathname } = useLocation();
  const { theme, isExpanded, toggleExpanded } = useAppContext();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg={theme === "light" ? "white" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="My Logo"
              src={Logo}
              width="35"
              height="35"
              className={
                theme === "light"
                  ? "bg-dark rounded-circle"
                  : "bg-light rounded-circle"
              }
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Item>
                <Link
                  to="/"
                  className={pathname === "/" ? "nav-link active" : "nav-link"}
                  onClick={toggleExpanded}
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to="/All-Projects"
                  className={
                    pathname === "/All-Projects"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  onClick={toggleExpanded}
                >
                  All Projects
                </Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <ToggleSwitch />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
