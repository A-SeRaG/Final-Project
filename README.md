# Fashop: E-Commerce Clothing Website

## Project Overview
Fashop is a fully functional e-commerce website designed to provide a seamless shopping experience for clothing enthusiasts.

This system is built with scalability, security, and user-friendliness in mind, providing an ideal solution for online clothing retail.

## Features
- **Product Browsing**:
  - View a wide range of clothing items with descriptions, prices, and images.

- **Shopping Cart**:
  - Add products to a personal cart with adjustable quantities.
  - View cart details and proceed to checkout.

- **Order Management**:
  - Place orders

- **Product Management**:
  - Add new products with detailed information.
  - Edit or update existing product details (e.g., price, stock).
  - Delete products from the inventory.

## Database Schema
The database consists of the following tables:

### 1. **Users**
| Column         | Data Type      | Description                                 |
|----------------|----------------|---------------------------------------------|
| `id`           | INT (Primary)  | Unique ID for each user.                   |
| `name`         | VARCHAR(255)   | name of the user.                          |
| `email`        | VARCHAR(255)   | Unique email address.                      |
| `password`     | VARCHAR(60)    | Encrypted password.                        |
| `role`         | ENUM           | Specifies the role of the user.            |
| `created_at`   | TIMESTAMP      | Account creation timestamp.                |
| `updated_at`   | TIMESTAMP      | Timestamp of the last update.              |

### 2. **Products**
| Column         | Data Type      | Description                                 |
|----------------|----------------|---------------------------------------------|
| `id`           | INT (Primary)  | Unique ID for each product.                |
| `name`         | VARCHAR(255)   | Name of the product.                       |
| `description`  | TEXT           | Detailed description of the product.       |
| `price`        | DECIMAL(10, 2) | Price of the product.                      |
| `stock`        | INT            | Number of items in stock.                  |
| `imageURL`     | VARCHAR(255)   | URL of the product image.                  |
| `created_at`   | TIMESTAMP      | Product creation timestamp.                |
| `updated_at`   | TIMESTAMP      | Timestamp of the last update.              |

### 3. **OrderItems**
| Column         | Data Type      | Description                                 |
|----------------|----------------|---------------------------------------------|
| `id`           | INT (Primary)  | Unique ID for each cart entry.             |
| `user_id`      | INT (Foreign)  | ID of the user owning the cart.            |
| `product_id`   | INT (Foreign)  | ID of the product in the cart.             |
| `quantity`     | INT            | Quantity of the product added to the cart. |
| `created_at`   | TIMESTAMP      | OrderItem creation timestamp.              |
| `updated_at`   | TIMESTAMP      | Timestamp of the last update.              |

### 4. **Orders**
| Column         | Data Type      | Description                                 |
|----------------|----------------|---------------------------------------------|
| `id`           | INT (Primary)  | Unique ID for each order.                  |
| `user_id`      | INT (Foreign)  | ID of the user who placed the order.       |
| `total_amount` | DECIMAL(10, 2) | Total cost of the order.                   |
| `status`       | ENUM           | Specifies current state of the order.      |
| `created_at`   | TIMESTAMP      | Order creation timestamp.                  |
| `updated_at`   | TIMESTAMP      | Timestamp of the last update.              |

# API Routes Documentation

The following routes are available for interacting with the API.  
All routes are prefixed with `/api/v1/`. For example, to access the orders endpoint, use `/api/v1/orders`.

## **Authentication Routes**

| **Route**    | **Methods** | **Description**                                  |
|--------------|-------------|--------------------------------------------------|
| `/signup`    | POST        | Register a new user.                            |
| `/login`     | POST        | Log in an existing user.                        |
| `/logout`    | POST        | Log out the current user.                       |

---

## **User Management**

| **Route**    | **Methods** | **Description**                                  |
|--------------|-------------|--------------------------------------------------|
| `/users`     | GET         | Retrieve all users. Requires admin access.      |
|              | POST        | Create a new user. Requires admin access.       |
| `/users/:id` | GET         | Retrieve a user by ID. Requires admin access.   |
|              | PATCH       | Update a user by ID. Requires admin access.     |
|              | DELETE      | Delete a user by ID. Requires admin access.     |

---

## **Product Management**

| **Route**      | **Methods** | **Description**                                |
|----------------|-------------|------------------------------------------------|
| `/products`    | GET         | Retrieve all products.                        |
|                | POST        | Add a new product.                            |
| `/products/:id`| GET         | Retrieve a product by ID.                     |
|                | PATCH       | Update a product by ID.                       |
|                | DELETE      | Delete a product by ID.                       |

---

## **Order Management**

| **Route**      | **Methods** | **Description**                                      |
|----------------|-------------|------------------------------------------------------|
| `/orders`      | GET         | Retrieve all orders. Requires authentication.       |
|                | POST        | Create a new order. Requires authentication.        |
| `/orders/:id`  | GET         | Retrieve an order by ID. Requires authentication.   |
|                | PATCH       | Update an order by ID. Requires admin access.       |
|                | DELETE      | Delete an order by ID. Requires admin access.       |
| `/checkout`    | POST        | Checkout the current cart. Requires authentication. |

---

## **OrderItem Management**

| **Route**          | **Methods** | **Description**                                           |
|--------------------|-------------|-----------------------------------------------------------|
| `/order-items`     | GET         | Retrieve all order items. Requires authentication.       |
| `/order-items/:id` | GET         | Retrieve an order item by ID. Requires authentication.   |
|                    | PATCH       | Update an order item by ID. Requires authentication.     |
|                    | DELETE      | Delete an order item by ID. Requires authentication.     |

---
## **Cart Management**

| **Route**          | **Methods** | **Description**                                           |
|--------------------|-------------|-----------------------------------------------------------|
| `/cart`            | GET         | Retrieve all items in the cart. Requires authentication. |
|                    | POST        | Add an item to the cart. Requires authentication.        |

---


## **File Uploads**

| **Route**                | **Methods** | **Description**                                |
|--------------------------|-------------|-----------------------------------------------|
| `/uploads/:category`     | POST        | Upload an image to the specified category.    |

---

## Middleware

- **isAuth**: Protects routes, ensuring only authenticated users can access them.
- **isAdmin**: Restricts routes to admin users only.

# How to Use

Follow the steps below to get the Fashop application running on your local machine:


## 1. Clone the Repository

Fork or clone the repository from GitHub into your local machine:

```bash
git clone https://github.com/A-SeRaG/Final-Project.git
cd A-SeRaG-Final-Project
```
## 2. Install Dependencies

You need to install dependencies for both the Backend and Frontend:

### Backend:

```bash
cd Backend
npm install
```
### Frontend:

```bash
cd Frontend
npm install
```
## 3. Run the Application

### Run the Backend:

Navigate to the Backend folder and start the server:

```bash
cd ../Backend
node app.js
```
### Run the Frontend:
Navigate to the Frontend folder and start the React application:

```bash
cd ../Frontend
npm start
```

---

## Built With

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
- [Express](http://expressjs.com/) - Web framework for building the server-side application
- [Sequelize](https://sequelize.org/) - ORM for MySQL database management
- [JWT (jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken) - JSON Web Token for authentication
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Axios](https://axios-http.com/) - HTTP client for making requests from the front-end
- [FontAwesome](https://fontawesome.com/) - Icon library for scalable vector icons
- [Bootstrap](https://getbootstrap.com/) - Front-end framework for building responsive web designs

---

## Future Enhancements
- Integrate a payment gateway to support online transactions.
- Add product tags, and filters for better navigation.
- Introduce multi-factor authentication for enhanced security.
- Provide analytics and reports for admins to monitor sales and inventory.
- Develop a mobile-friendly interface.

---

## Authors
Ahmed Serag,
Omar Ahmed,
Hager Hussein

---
