// card.js or card.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";
import axios from "axios";
import { useState, useEffect } from "react";  


const Cardcomponent = ({ product }) => {
  return (
    <Card id="card" style={{ width: "18rem" }}>
      <Card.Body>
        <Image src=" " fluid /><Card.Title></Card.Title>
        <p>Description: </p>
        <p>Price: </p>
        <Button id="btn" variant="primary">
          add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cardcomponent;
