import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		image: {
			type: String,
			required: false,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		description: {
			type: String,
			required: false,
		},
		category: {
			type: String,
			required: true,
		},
		stock: {
			type: Number,
			required: false,
			min: 0,
		},
		url: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true, // createdAt and updatedAt fields will be added to the document automatically
	}
);

// Create a model named 'Product' based on the schema.
// It will be stored in the database as 'products' (plural of the model name).
const Product = mongoose.model("Product", productSchema);

export default Product;
