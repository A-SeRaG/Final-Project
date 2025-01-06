import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { sequelize } from "./models/index.js";
import upload from "./storage.js";
import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";
import orderItemRoutes from "./routes/order_item.js";
import authRoutes from "./routes/auth.js";
// import helmet from "helmet";
// import morgan from "morgan";

const app = express();

// Middleware
// app.use(helmet());
// app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(process.cwd(), "public/uploads")));

// CORS Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

// Dynamic Upload Route
app.post("/api/v1/uploads/:category", upload.single("image"), (req, res) => {
  const { category } = req.params;
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const filePath = `/uploads/${category}/${req.file.filename}`;
  res.status(201).json({ imageURL: filePath });
});

// Routes
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", orderItemRoutes);
app.use("/api/v1", authRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res
    .status(statusCode)
    .json({ error: err.message || "Internal Server Error" });
});

// Start the Server
const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(8080, () => console.log("Server is running on port 8080"));
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
