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
			const response = await fetch("http://localhost:5001/api/products", {
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
}));
