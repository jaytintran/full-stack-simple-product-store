/* This server.js serves as API for our application */

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import path from "path";

import productRoutes from "./routes/product.route.js"; // Importing all the routes from the product route file.

dotenv.config();

const app = express();
// const PORT = process.env.PORT;
const PORT = process.env.PORT || 5000;

// CORS middleware
app.use(cors());

const __dirname = path.resolve();

// Middleware are functions that have access to the request object (req), the response object (res), and the next function in the application's request-response cycle.
// Middleware acts like checkpoints or filters that handle things before the final response arrives or the request arrives to the back-end.
// It makes the application more secured, efficient, and maintainable.

// Middleware to parse incoming JSON data from req.body |\ Allow us to accept JSON data in the request body.
app.use(express.json());

// To test the API routes we need a front-end or Postman (or any other tool that can make HTTP requests)
// Use the routes defined in the product.routes.js file.
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running at http://localhost:" + PORT);
});
