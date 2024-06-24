import React, { useState, useEffect } from "react";
import logo from "../Assets/logo-travel.png";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import "./Header.css";
import LoginModal from "./Modal"; // Assuming you have this component already
import BuildPackage from "./BuildPackage"; // Assuming you will create this component

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showBuildPackageModal, setShowBuildPackageModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.scrollingElement.scrollTop;
      const navbar = document.querySelector("bg-body-tertiary navbar navbar-expand-lg navbar-light"); 

      if (scrolled >= 120) {
        navbar.classList.add("navbar-scroll"); 
      } else {
        navbar.classList.remove("navbar-scroll");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <div className="section-container">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <NavDropdown title="Packages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/packages">
                    Honeymoon Packages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/packages">
                    Tour Packages
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => setShowBuildPackageModal(true)}
                  >
                    Build your own Package
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </div>
            <Button variant="primary" onClick={() => setShowLoginModal(true)}>
              Login / Signup
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <LoginModal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
      />
      <BuildPackage
        show={showBuildPackageModal}
        onHide={() => setShowBuildPackageModal(false)}
      />
    </>
  );
}

export default Header;
