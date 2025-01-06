import NavbarScroll from "../components/navbar.js";
import Footer from "../components/footer.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";


const CartPage = () => {
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/products");
      console.log("API Response:", response.data); // Debug log for API data
      setProducts(response.data.products); // Accessing the `products` array inside the response
    } catch (error) {
      console.error("Error fetching data:", error);
      setProducts([]); // Fallback to an empty array in case of error
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

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
          {/* Display Product Names */}
          {/* {Array.isArray(products) &&
            products.map((item) => (
              <h4 key={item.id}>{item.name}</h4> // Displaying only the product name
            ))} */}
          <img
            src="http://localhost:8080/uploads/1736150571385.jpg"
            alt="Uploaded Image"
          />
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
