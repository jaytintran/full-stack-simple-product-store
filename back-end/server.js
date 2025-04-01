/* This server.js serves as API for our application */

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

// Middleware are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle.
// Middleware acts like checkpoints or filters that handle things before the final response arrives or the request arrives to the back-end.
// It makes the application more secured, efficient, and maintainable.

// Middleware to parse incoming JSON data from req.body |\ Allow us to accept JSON data in the request body.
app.use(express.json());

// Get All Products API Endpoint
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products,
      message: "Success Getting all products!",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error in Fetching Products!" });
  }
});

// Create a New Product API Endpoint
app.post("/api/products", async (req, res) => {
  const product = req.body; // User will send a JSON object as data

  // Check if the required fields are provided in the request body
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  // Create a new instance of the Product model with the received data
  const newProduct = new Product(product);

  try {
    await newProduct.save(); // Save the new product to the database
    res.status(201).json({
      success: true,
      data: newProduct,
      message: "Product added successfully",
    });
  } catch (err) {
    console.error("Error adding product: ", err.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json({
      success: true,
      message: `Product with id ${productId} has been deleted successfully`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: `Product with id ${productId} was not found`,
    });
  }
});

// To test the API routes we need a front-end or Postman (or any other tool that can make HTTP requests)

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
