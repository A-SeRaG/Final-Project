// card.js or card.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/esm/Image';
const Cardcomponent = () => {
  return (
    <Card id='card' style={{ width: '18rem' }}>
              <Card.Body >
              <Image src=" " fluid />;
              <Card.Title></Card.Title>
              <Button   id='btn' variant="primary">add to cart</Button>
              </Card.Body>
            </Card>
  );
};

export default Cardcomponent;
