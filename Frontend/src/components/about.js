import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'; // Import necessary components
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../images/Logo2.jpg";
function About() {
  return (
    <Container className='about'>
      {/* Navigation link */}
      <div className='link-slide'>
      <ul className='d-flex' style={{listStyle:'none'}}>
        <li > <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></li>
        <span>/</span>
        <li> <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link></li>
      </ul>
      </div>
      <Row>
        {/* Image Column */}
        <Col md={6}> {/* You can specify a column size for responsiveness */}
          <Image src={logo} fluid style={{width:'400px', height:'400px'}} />
        </Col>
        
        {/* Content Column */}
        <Col md={6}>
          <h3 className="mb-6">Our Story</h3>
          <p style={{ fontSize: '20px', marginTop: '40px' }}>
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands, serving 3 million customers across the region.
          </p>
          
          <p style={{ fontSize: '20px', marginTop: '40px' }}>
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
