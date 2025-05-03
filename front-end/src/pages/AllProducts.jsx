import React, { useEffect } from "react";
import { Container, Heading, Text, SimpleGrid, Link } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product";
import { useToast } from "@chakra-ui/react";

const AllProducts = () => {
	const { products, fetchProducts } = useProductStore();

	// Fetch products on mount
	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	// Delete event handler
	const deleteProduct = async (id) => {
		try {
			const response = await fetch(`/api/products/${id}`, {
				method: "DELETE",
			});

			if (!response.ok) {
				throw new Error("Failed to delete product");
			}

			// If the request is successful, remove the product from the local state
			fetchProducts();
		} catch (err) {
			console.error("Error deleting product: ", err);
		}
	};

	// Edit event handler
	const editProduct = async (id) => {
		try {
			const response = await fetch(`/api/products/${id}`, {
				method: "GET",
			});

			if (!response.ok) {
				throw new Error("Failed to fetch product");
			}

			const data = await response.json();
			console.log(data);
		} catch (err) {
			console.error("Error fetching product: ", err);
		}
	};

	return (
		<Container maxW="container.xl">
			<Heading as="h1" size="xl" textAlign="center" mt={16} mb={16}>
				All Products You Have Saved 💖
			</Heading>

			{/* If no products, show a message */}
			{products.length === 0 && (
				<Text
					fontSize="2xl"
					textAlign="center"
					py="10"
					display="flex"
					gap="10"
					justifyContent="center"
					flexDirection="column"
				>
					No Products Found
					<Link
						href="/create"
						color="blue.400"
						_hover={{ textDecoration: "underline" }}
					>
						Create a product
					</Link>
				</Text>
			)}

			<SimpleGrid
				columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
				spacing={8}
				px={{ base: 4, sm: 0 }}
			>
				{products.map((product) => (
					<ProductCard
						key={product._id}
						product={product}
						deleteProduct={deleteProduct}
						editProduct={editProduct}
					/>
				))}
			</SimpleGrid>
		</Container>
	);
};

export default AllProducts;
