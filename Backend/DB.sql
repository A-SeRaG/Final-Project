-- Migrations will appear here as you chat with AI
create table
    users (
        id bigint primary key generated always as identity,
        username text not null unique,
        password text not null,
        email text not null unique,
        is_admin boolean default false
    );

create table
    products (
        id bigint primary key generated always as identity,
        name text not null,
        description text,
        price numeric(10, 2) not null,
        stock int not null,
        category text
    );

create table
    cart (
        id bigint primary key generated always as identity,
        user_id bigint references users (id) on delete cascade,
        product_id bigint references products (id) on delete cascade,
        quantity int not null
    );

create table
    orders (
        id bigint primary key generated always as identity,
        user_id bigint references users (id) on delete cascade,
        order_date timestamp
        with
            time zone default now (),
            total_amount numeric(10, 2) not null
    );

create table
    order_items (
        id bigint primary key generated always as identity,
        order_id bigint references orders (id) on delete cascade,
        product_id bigint references products (id) on delete cascade,
        quantity int not null,
        price numeric(10, 2) not null
    );

-- -------------------------------------------------------------------------
-- Database: ecommerce_clothing
CREATE DATABASE ecommerce_clothing;

USE ecommerce_clothing;

-- Table: Users (includes both customers and admins)
CREATE TABLE
    Users (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        is_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- Table: Products (clothing items)
CREATE TABLE
    Products (
        product_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        stock INT NOT NULL,
        image_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

-- Table: Cart (user shopping cart)
CREATE TABLE
    Cart (
        cart_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL DEFAULT 1,
        added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES Users (user_id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES Products (product_id) ON DELETE CASCADE
    );

-- Table: Orders (completed purchases)
CREATE TABLE
    Orders (
        order_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        total_amount DECIMAL(10, 2) NOT NULL,
        order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES Users (user_id) ON DELETE CASCADE
    );

-- Table: OrderDetails (products in each order)
CREATE TABLE
    OrderDetails (
        order_detail_id INT AUTO_INCREMENT PRIMARY KEY,
        order_id INT NOT NULL,
        product_id INT NOT NULL,
        quantity INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        FOREIGN KEY (order_id) REFERENCES Orders (order_id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES Products (product_id) ON DELETE CASCADE
    );
