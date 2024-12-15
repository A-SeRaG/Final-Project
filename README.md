# Fashop: E-Commerce Clothing Website

## Project Overview
Fashop is a fully functional e-commerce website designed to provide a seamless shopping experience for clothing enthusiasts. The platform features two user interfaces:
- **User Interface** for customers to browse products, add items to their cart, and place orders.
- **Admin Interface** for managing the product inventory by adding, updating, or removing items.

This system is built with scalability, security, and user-friendliness in mind, providing an ideal solution for online clothing retail.

## Features
### Customer Features
- **Product Browsing**:
  - View a wide range of clothing items with descriptions, prices, and images.
  - Filter and search for products based on preferences.

- **Shopping Cart**:
  - Add products to a personal cart with adjustable quantities.
  - View cart details and proceed to checkout.

- **Order Management**:
  - Place orders and view order history.

### Admin Features
- **Product Management**:
  - Add new products with detailed information.
  - Edit or update existing product details (e.g., price, stock).
  - Delete products from the inventory.

- **Order Monitoring**:
  - Track customer orders and update order statuses.

## Database Schema
The database consists of the following tables:

### 1. **Users**
| Column         | Data Type      | Description                                 |
|----------------|----------------|---------------------------------------------|
| `user_id`      | INT (Primary)  | Unique ID for each user.                   |
| `username`     | VARCHAR(50)    | Unique username for the user.              |
| `email`        | VARCHAR(100)   | Unique email address.                      |
| `password_hash`| VARCHAR(255)   | Encrypted password.                        |
| `is_admin`     | BOOLEAN        | Specifies if the user is an admin.         |
| `created_at`   | TIMESTAMP      | Account creation timestamp.                |

### 2. **Products**
| Column         | Data Type      | Description                                 |
|----------------|----------------|---------------------------------------------|
| `product_id`   | INT (Primary)  | Unique ID for each product.                |
| `name`         | VARCHAR(100)   | Name of the product.                       |
| `description`  | TEXT           | Detailed description of the product.       |
| `price`        | DECIMAL(10, 2) | Price of the product.                      |
| `stock`        | INT            | Number of items in stock.                  |
| `image_url`    | VARCHAR(255)   | URL of the product image.                  |
| `created_at`   | TIMESTAMP      | Product creation timestamp.                |
| `updated_at`   | TIMESTAMP      | Timestamp of the last update.              |

### 3. **Cart**
| Column         | Data Type      | Description                                 |
|----------------|----------------|---------------------------------------------|
| `cart_id`      | INT (Primary)  | Unique ID for each cart entry.             |
| `user_id`      | INT (Foreign)  | ID of the user owning the cart.            |
| `product_id`   | INT (Foreign)  | ID of the product in the cart.             |
| `quantity`     | INT            | Quantity of the product added to the cart. |
| `added_at`     | TIMESTAMP      | Timestamp of when the item was added.      |

### 4. **Orders**
| Column         | Data Type      | Description                                 |
|----------------|----------------|---------------------------------------------|
| `order_id`     | INT (Primary)  | Unique ID for each order.                  |
| `user_id`      | INT (Foreign)  | ID of the user who placed the order.       |
| `total_amount` | DECIMAL(10, 2) | Total cost of the order.                   |
| `order_date`   | TIMESTAMP      | Timestamp of the order.                    |

### 5. **OrderDetails**
| Column            | Data Type      | Description                                 |
|-------------------|----------------|---------------------------------------------|
| `order_detail_id` | INT (Primary)  | Unique ID for each order detail entry.     |
| `order_id`        | INT (Foreign)  | ID of the associated order.                |
| `product_id`      | INT (Foreign)  | ID of the purchased product.               |
| `quantity`        | INT            | Quantity of the product purchased.         |
| `price`           | DECIMAL(10, 2) | Price of the product at the time of order. |

## Setup Instructions

1. **Database Initialization**:
   - Create the database by executing the provided SQL script.
   - Use `USE ecommerce_clothing;` to select the database.

2. **Users Table**:
   - Insert admin and user accounts with appropriate permissions.

3. **Products Table**:
   - Populate the table with sample products, including descriptions, prices, and stock levels.

4. **Cart and Orders**:
   - Implement functionality for users to add products to the cart and place orders.

## Future Enhancements
- Integrate a payment gateway to support online transactions.
- Add product categories, tags, and filters for better navigation.
- Introduce multi-factor authentication for enhanced security.
- Provide analytics and reports for admins to monitor sales and inventory.
- Develop a mobile-friendly interface.

## Authors
Ahmed Serag,
Omar Ahmed,
Hager Hussein

---

