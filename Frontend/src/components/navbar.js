import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/Logo1.jpg";


const NavbarScroll = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "white" }}>
      <Container fluid>
        <Navbar.Brand href="#" id="logo">
          <img alt="" src={logo} width="60" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link id="nav-link" href="/Home">
              Home
            </Nav.Link>
            <Nav.Link id="nav-link" href="/About">
              About
            </Nav.Link>
            <Nav.Link id="nav-link" href="/Contact">
              Contact
            </Nav.Link>
            <Nav.Link id="nav-link" href="/Sign-up">
              Sign-up
            </Nav.Link>
            <NavDropdown title="Catogery" id="navbarScrollingDropdown">
              <NavDropdown.Item id="nav-link-item" href="/menpage">
                Men`s fashion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="nav-link-item" href="/womenpage">
                women`s fashoin
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="nav-link-item" href="/shoesbags">
                shoes & bags
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id="nav-link-item" href="/childernpage">
                childern clothes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{ backgroundColor: " var(--second-color)" }}>
              <FontAwesomeIcon
                style={{ Color: "white" }}
                icon="fa-solid fa-magnifying-glass"
              />
            </Button>
          </Form>

          <Nav.Link href="#" className="nav-i m-2">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarScroll;
