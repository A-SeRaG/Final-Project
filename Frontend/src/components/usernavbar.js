import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/Logo1.jpg";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting

export default function Usernavbar() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    // Optionally redirect to login page or home page after logout
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
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
              <Nav.Link id="nav-link" href="/useraccount">
                Home
              </Nav.Link>
              <Nav.Link id="nav-link" href="/About">
                About
              </Nav.Link>
              <Nav.Link id="nav-link" href="/Contact">
                Contact
              </Nav.Link>

              <NavDropdown title="Category" id="navbarScrollingDropdown">
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
            <Nav style={{ textAlign: "center" }}>
              <Nav.Link href="/cartpage" className="nav-i me-2 ">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              </Nav.Link>

              <Nav.Link href="/profile" className="nav-i">
                <FontAwesomeIcon icon="fa-solid fa-user" />
              </Nav.Link>
              <NavDropdown className="me-3" id="navbarScrollingDropdown">
                <NavDropdown.Item id="nav-link-item" href="/profile">
                  Profile
                </NavDropdown.Item>

                <NavDropdown.Divider />
                {/* Logout button that triggers handleLogout */}
                <NavDropdown.Item id="nav-link-item" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>

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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
