# E-Commerce Clothing Database

## Project Overview
This project is a relational database designed to support an e-commerce platform specializing in clothing. It allows users to browse products, add items to a shopping cart, and place orders, while administrators can manage the product inventory. The database is structured to handle the core functionalities of an e-commerce system, ensuring efficiency, scalability, and security.

## Features
- **User Accounts**:
  - Support for regular users (customers) and administrators.
  - Admins can add, update, and delete products from the inventory.
  - Users can browse products, add items to their cart, and place orders.

- **Product Management**:
  - Comprehensive product catalog with descriptions, pricing, stock levels, and images.
  - Admins can update inventory in real-time.

- **Shopping Cart**:
  - Temporary storage for users' selected products.
  - Items in the cart include quantity and are linked to the user account.

- **Order Processing**:
  - Tracks user purchases, including order details and payment information.
  - Stores a breakdown of each order with product quantities and pricing.

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
- Implement payment gateway integration.
- Add support for product categories and filtering.
- Enhance user authentication with OAuth or multi-factor authentication.
- Introduce analytics for admins to track sales and inventory.

## Author
Ahmed Serag
Omar Ahmed
Hager Hussein


