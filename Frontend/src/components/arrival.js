import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/esm/Image';

function ArrivalBasic() {
  return (
    <Container className='arrival'>
            <span className='bordy'> Feature </span>
            <h2> New Arrival </h2>
      <Row>
        {/* Image Column */}
        <Col>
          <Image src="https://via.placeholder.com/1200x800" fluid />
        </Col>
        
        {/* Content Column */}
        <Col>
          <h3 className="mb-6">women`s collection</h3>
          <p style={{ fontSize: '20px',marginTop:'40px' }} >
          Featured woman collections that give you another vibe.
          </p>
          
          {/* Newsletter Subscription Form */}
          <InputGroup style={{marginTop:'40px' }} >
            <Form.Control
              placeholder="Enter your email"
              aria-label="Email Address"
              aria-describedby="basic-addon2"
            />

            <Button style={{ background:'var(--main-color)'}}variant="outline-secondary" >
              Get 20% discount 
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {/* Ending Span for potential styling */}
      <span className='ending'></span>
    </Container>
  );
}

export default ArrivalBasic;
