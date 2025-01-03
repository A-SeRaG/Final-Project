import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavbarScroll = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" id='logo'>
        <FontAwesomeIcon icon="fa-solid fa-bag-shopping" />  FA-SHOP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link id='nav-link' href="/Home">Home</Nav.Link>
            <Nav.Link id='nav-link' href="/About">About</Nav.Link>
            <Nav.Link id='nav-link' href="/Contact">Contact</Nav.Link>
            <Nav.Link id='nav-link' href="/Sign-up">Sign Up</Nav.Link>
            <NavDropdown title="Exclusive" id="navbarScrollingDropdown">
              <NavDropdown.Item id='nav-link-item' href="#action">Men`s fashion</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id='nav-link-item' href="#action4">women`s fashoin</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id='nav-link-item' href="#action5">shoes & bags</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item id='nav-link-item' href="#action5">childern clothes</NavDropdown.Item>
            </NavDropdown>

          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button  style={{backgroundColor:' var(--main-color)'}}>
            <FontAwesomeIcon style={{Color:'white'}} icon="fa-solid fa-magnifying-glass" />
            </Button>
          </Form>
          
          <Nav.Link href="#" className="nav-i m-2">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </Nav.Link>
            <Nav.Link href="#" className="nav-i m-2">
            <FontAwesomeIcon icon="fa-regular fa-heart" />
            </Nav.Link>
            <Nav.Link href="/user" className="nav-i m-2">
            <FontAwesomeIcon icon="fa-solid fa-user" />
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarScroll;
