const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "fashop",
    port: 3306,
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL database");
    }
});

// Valid product categories
const validCategories = [
    "men_wears",
    "women_wears",
    "children_wears",
    "shoes_and_bags",
];

// Get all products from a category
app.get("/api/products/:category", (req, res) => {
    const { category } = req.params;

    if (!validCategories.includes(category)) {
        return res.status(400).json({ error: "Invalid category" });
    }

    const query = `SELECT * FROM ${category}`;
    db.query(query, (err, results) => {
        if (err) {
            return res
                .status(500)
                .json({ error: "Database error", details: err.message });
        }
        res.json(results);
    });
});

// Add a new product to a category
app.post("/api/products/:category", (req, res) => {
    const { category } = req.params;

    if (!validCategories.includes(category)) {
        return res.status(400).json({ error: "Invalid category" });
    }

    const { name, description, price, image } = req.body;
    const query = `
    INSERT INTO ${category} (name, description, price, image)
    VALUES (?, ?, ?, ?)
    `;

    db.query(query, [name, description, price, image], (err, result) => {
        if (err) {
            return res
                .status(500)
                .json({ error: "Database error", details: err.message });
        }
        res.json({ message: "Product added successfully", id: result.insertId });
    });
});

// Update an existing product in a category
app.put("/api/products/:category/:id", (req, res) => {
    const { category, id } = req.params;

    if (!validCategories.includes(category)) {
        return res.status(400).json({ error: "Invalid category" });
    }

    const { name, description, price, image } = req.body;
    const query = `
    UPDATE ${category}
    SET name = ?, description = ?, price = ?, image = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    `;

    db.query(query, [name, description, price, image, id], (err, result) => {
        if (err) {
            return res
                .status(500)
                .json({ error: "Database error", details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ message: "Product updated successfully" });
    });
});

// Delete a product from a category
app.delete("/api/products/:category/:id", (req, res) => {
    const { category, id } = req.params;

    if (!validCategories.includes(category)) {
        return res.status(400).json({ error: "Invalid category" });
    }

    const query = `DELETE FROM ${category} WHERE id = ?`;
    db.query(query, [id], (err, result) => {
        if (err) {
            return res
                .status(500)
                .json({ error: "Database error", details: err.message });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
