import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

import "./sidebar.css";

const SidebarNav = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="Navbar">
          <Container>
            <Navbar.Brand className="text-green">
              <Link to="/">
                <button className="titleBrand py-1 px-3">BCR Rent</button>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            {/* <Navbar.Offcanvas
              className="offCanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="justify-content-end pe-5">
                <Nav>
                  <Nav.Link className="text-dark" href="#ourService">
                    Our Service
                  </Nav.Link>
                  <Nav.Link className="text-dark" href="#whyUs">
                    Why Us
                  </Nav.Link>
                  <Nav.Link className="text-dark" href="#testimonial">
                    Testimonial
                  </Nav.Link>
                  <Nav.Link className="pe-xl-5 text-dark" href="#faq">
                    FAQ
                  </Nav.Link>
                  <Nav.Link
                    className="pe-xl-5 text-dark"
                    href="#action2"
                  ></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas> */}
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default SidebarNav;
