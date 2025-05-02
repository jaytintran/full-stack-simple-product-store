import { create } from "zustand";

export const useProductStore = create((set) => ({
	products: [],
	setProducts: (products) => set({ products }),
	createProduct: async (newProduct) => {
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

		const response = await fetch("http://localhost:5001/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});

		const data = await response.json();
		set((state) => ({ products: [...state.products, data.data] }));
	},
}));
