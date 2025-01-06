import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { sequelize } from "./models/index.js";
import upload from "./storage.js"; // Import multer configuration
import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';
import orderRoutes from './routes/order.js';
import orderItemRoutes from './routes/order_item.js';
import authRoutes from './routes/auth.js';

const app = express();

// Serve static files (uploaded images)
app.use("/uploads", express.static(path.join(process.cwd(), "public/uploads")));

app.use(bodyParser.json());

// Configure CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// Route for uploading home images
app.post("/api/v1/uploads/home", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const filePath = `/uploads/home/${req.file.filename}`; // Construct file path
  res.status(201).json({ imageURL: filePath }); // Return the file path
});

// Route for uploading women images
app.post("/api/v1/uploads/women", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const filePath = `/uploads/women/${req.file.filename}`; // Construct file path
  res.status(201).json({ imageURL: filePath }); // Return the file path
});

// Route for uploading bags images
app.post("/api/v1/uploads/bags", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const filePath = `/uploads/bags/${req.file.filename}`; // Construct file path
  res.status(201).json({ imageURL: filePath }); // Return the file path
});

// Route for uploading shoes images
app.post("/api/v1/uploads/shoes", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const filePath = `/uploads/shoes/${req.file.filename}`; // Construct file path
  res.status(201).json({ imageURL: filePath }); // Return the file path
});

// Route for uploading men images
app.post("/api/v1/uploads/men", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const filePath = `/uploads/men/${req.file.filename}`; // Construct file path
  res.status(201).json({ imageURL: filePath }); // Return the file path
});

// Route for uploading kids images
app.post("/api/v1/uploads/kids", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const filePath = `/uploads/kids/${req.file.filename}`; // Construct file path
  res.status(201).json({ imageURL: filePath }); // Return the file path
});

// Initialize routes
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", orderItemRoutes);
app.use("/api/v1", authRoutes);

// Error handling
app.use((err, req, res, next) => {
  const stat = err.statusCode || 500;
  return res.status(stat).json({ error: err.message });
});

// Sync database and start the server
await sequelize.sync();
app.listen(8080, () => console.log("Server is running on port 8080"));