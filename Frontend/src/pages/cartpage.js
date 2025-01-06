import { useNavigate } from "react-router-dom"; // Import for navigation
import NavbarScroll from "../components/navbar.js";
import Footer from "../components/footer.js";
import { useState, useEffect } from "react";
import axios from "axios";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  // Fetch cart items from /api/v1/cart
  const fetchCartItems = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You must be logged in to view your cart.");
        return;
      }

      const cartResponse = await axios.get(
        "http://localhost:8080/api/v1/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const orderItems = cartResponse.data.orderItems || [];
      setCartItems(orderItems);

      // Fetch product details
      const productPromises = orderItems.map((item) =>
        axios.get(`http://localhost:8080/api/v1/products/${item.productId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      );

      const productResponses = await Promise.all(
        productPromises.map((promise) =>
          promise.catch((error) => {
            console.error(
              `Failed to fetch product with ID ${error.config.url}:`,
              error
            );
            return null; // Return null for failed requests
          })
        )
      );

      const productData = productResponses
        .filter((response) => response && response.data) // Filter out failed requests
        .map((res) => res.data.product);

      setProducts(productData);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setCartItems([]);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleQuantityChange = (productId, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };
  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You must be logged in to checkout.");
        return;
      }

      // Update each cart item's quantity before checkout
      for (const item of cartItems) {
        await axios.patch(
          `http://localhost:8080/api/v1/order-items/${item.id}`,
          { quantity: item.quantity },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      // Proceed with checkout
      const checkoutResponse = await axios.post(
        "http://localhost:8080/api/v1/checkout",
        { cartItems },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (checkoutResponse.status === 200) {
        alert("Checkout successful!");
        navigate("/Home");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert(error.response?.data?.message || "Checkout failed.");
    }
  };

  return (
    <div>
      <NavbarScroll />
      <h1 style={{ textAlign: "center", margin: "15px" }}>Cart Page</h1>
      <div style={{ textAlign: "center", margin: "10px" }}>
        {products.length > 0 ? (
          <div>
            <h2>Products in Your Cart</h2>
            {cartItems.map((cartItem) => {
              const product = products.find((p) => p.id === cartItem.productId);
              return (
                <div
                  key={cartItem.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "10px 0",
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  {product ? (
                    <>
                      <img
                        src={`http://localhost:8080/uploads/${product.image}`}
                        alt={product.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          marginLeft: "15px",
                          textAlign: "left",
                        }}
                      >
                        <h4>{product.name}</h4>
                        <p>Price: ${product.price}</p>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            handleQuantityChange(cartItem.productId, -1)
                          }
                        >
                          -
                        </button>
                        <span style={{ margin: "0 10px" }}>
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(cartItem.productId, 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </>
                  ) : (
                    <p>Loading product details...</p>
                  )}
                </div>
              );
            })}
            <button
              onClick={handleCheckout}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <p>No products in your cart.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
