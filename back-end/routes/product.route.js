import express from "express";
import mongoose from "mongoose";

import Product from "../models/product.model.js";
import {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
} from "../controllers/product.controllers.js";

const router = express.Router();

// Get All Products API Endpoint
router.get("/", getAllProducts);

// Create a New Product API Endpoint
router.post("/", createProduct);

// Delete a Product by ID API Endpoint
router.delete("/:id", deleteProduct);

// Get a Product by ID API Endpoint
router.get("/:id", getProductById);

// Update a Product by ID API Endpoint
/* 
    Put vs Patch
    - You would use the put method if you want to update the whole document
    - The patch is more like update a few fields of the document
  */
router.put("/:id", updateProduct);

export default router;
