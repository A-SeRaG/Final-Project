import NavbarScroll from "../components/navbar.js";
import Footer from "../components/footer.js";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";


const CartPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavbarScroll />
      <h1 style={{ textAlign: "center", margin: "15px" }}>Cart Page</h1>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <label>Order {count} items</label>
        <div>
          <h2>Products</h2>

                    <Card>
            <Image
              src="http://localhost:8080/api/v1/upload/home/1736173806378.jpeg"
              fluid
            />
            <Card.Body>
              <Card.Title>women</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
