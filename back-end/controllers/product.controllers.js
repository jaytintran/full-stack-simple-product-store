import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getAllProducts = async (req, res) => {
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
};

export const getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.status(200).json({
			success: true,
			data: product,
			message: "Success Getting The Product!",
		});
	} catch (error) {
		console.error(error);
		res
			.status(500)
			.json({ success: false, message: "Error in Fetching Products!" });
	}
};

export const createProduct = async (req, res) => {
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
};

export const updateProduct = async (req, res) => {
	const productId = req.params.id;
	const updatedData = req.body;

	// Check if the productsId exists in the database
	if (!mongoose.Types.ObjectId.isValid(productId)) {
		return res.status(400).json({
			success: false,
			message: "Invalid Product Id",
		});
	}

	// Check if no fields are present in the request body
	if (Object.keys(updatedData).length === 0) {
		return res.status(400).json({
			success: false,
			message: "No fields were provided to be updated",
		});
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			productId,
			updatedData,
			{ new: true }
		);

		res.status(200).json({
			data: updatedProduct,
			success: true,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: "Something went wrong",
		});
		console.log(err);
	}
};

export const deleteProduct = async (req, res) => {
	const productId = req.params.id;

	// Check if the productsId exists in the database
	if (!mongoose.Types.ObjectId.isValid(productId)) {
		return res.status(404).json({
			success: false,
			message: "Invalid Product Id",
		});
	}

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
			message: `Server Error ${error}`,
		});
	}
};
