import { create } from "zustand";

export const useProductStore = create((set) => ({
	products: [],
	setProducts: (products) => set({ products }),
	createProduct: async (newProduct) => {
		// Validation check
		if (
			!newProduct.name ||
			!newProduct.image ||
			!newProduct.price ||
			!newProduct.category ||
			!newProduct.url ||
			!newProduct.description
		) {
			return { success: false, message: "Please provide all fields" };
		}

		// Send a POST request to the server to create a new product
		try {
			const response = await fetch("/api/products", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProduct),
			});

			// Wait for the response to come back, and parsing it into data var
			const data = await response.json();

			// Check if the response is not ok (e.g., 400 Bad Request, 500 Internal Server Error)
			if (!response.ok) {
				return {
					success: false,
					message: data.message || "Failed to add product",
				};
			}

			// Update the store with the new product
			set((state) => ({ products: [...state.products, data.data] }));

			// Return the success response
			return {
				success: true,
				message: "Product added successfully",
				product: data.data,
			};
		} catch (error) {
			console.error("Error in createProduct:", error);
			return {
				success: false,
				message: "Network error or server unavailable",
			};
		}
	},
	fetchProducts: async () => {
		try {
			// Send a GET request to the server to fetch all products
			// The "http://localhost:5001/api/products" is the API endpoint that we created in the back-end.
			// And the prefix "http://localhost:5001" is the base URL that we set in the vite.config.js file.
			const response = await fetch("/api/products");
			const data = await response.json();
			set({ products: data.data });
		} catch (error) {
			console.error("Error in fetchProducts:", error);
		}
	},
	deleteProductById: async (id) => {
		try {
			const response = await fetch(`/api/products/${id}`, {
				method: "DELETE",
			});
			const data = response.json();

			if (!response.ok) {
				return { success: false, message: data.message };
			}

			// If the request is successful, remove the product from the local state, update the ui immediately
			set((state) => ({
				products: state.products.filter((product) => product._id !== id),
			}));

			return { success: true, message: data.message };
		} catch (err) {
			console.error("Error deleting product: ", err);
		}
	},
	updateProductById: async (id, updatedData) => {
		try {
			const response = await fetch(`/api/products/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedData),
			});

			const data = await response.json();

			if (!response.ok) {
				return { success: false, message: data.message };
			}

			set((state) => ({
				products: state.products.map((product) =>
					product._id === id ? data.data : product
				),
			}));

			return { success: true, message: data.message };
		} catch (err) {
			console.error("Error updating product: ", err);
		}
	},
}));
