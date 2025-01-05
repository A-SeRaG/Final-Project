import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/Logo.jpg";


export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "black", color: "#fff", padding: "40px 0" }}
    >
      <Container>
        <Row>
          {/* Column 1: Quick Links */}
          <Col md={3}>
            <img alt="" src={logo} width="60" height="60" />
            <h5>Quick Links</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 2: Newsletter Signup */}
          <Col md={3}>
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for the latest fashions updates!</p>
            <Form>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  style={{ marginBottom: "10px" }}
                />
                <Button
                  style={{ backgroundColor: "var(--second-color)" }}
                  variant="primary"
                  type="submit"
                  block
                >
                  Subscribe
                </Button>
              </Form.Group>
            </Form>
          </Col>

          {/* Column 3: Social Media Links */}
          <Col md={3}>
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                style={{ color: "#fff", marginRight: "15px" }}
              >
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
              </a>
              <a
                href="https://twitter.com"
                style={{ color: "#fff", marginRight: "15px" }}
              >
                <FontAwesomeIcon icon="fa-solid fa-x" />
              </a>
              <a
                href="https://instagram.com"
                style={{ color: "#fff", marginRight: "15px" }}
              >
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>
              <a href="https://linkedin.com" style={{ color: "#fff" }}>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </a>
            </div>
          </Col>

          {/* Column 4: Contact Info */}
          <Col md={3}>
            <h5>Contact Info</h5>
            <p>Email: info@fashopstore.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Book St, City, Country</p>
          </Col>
        </Row>

        {/* Bottom Section: Copyright */}
        <Row>
          <Col className="text-center" style={{ marginTop: "30px" }}>
            <p>
              &copy; {new Date().getFullYear()} FA-SHOP. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
