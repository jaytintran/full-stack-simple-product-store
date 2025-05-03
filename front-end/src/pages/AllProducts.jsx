import React, { useEffect } from "react";
import {
	Container,
	Box,
	Flex,
	Heading,
	Text,
	Image,
	SimpleGrid,
	Link,
	Button,
} from "@chakra-ui/react";
// import { dummyProducts } from "../constants/data";
import { useProductStore } from "../store/product";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const AllProducts = () => {
	const { products, fetchProducts } = useProductStore();

	// Fetch products on mount
	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	console.log(products);

	// Delete event handler
	const deleteProduct = async (id) => {
		try {
			const response = await fetch(`http://localhost:5001/api/products/${id}`, {
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
					<Box key={product._id}>
						<Box
							position="relative"
							w="100%"
							h="200px"
							overflow="hidden"
							borderRadius="lg"
							transition="all 0.3s ease"
							_hover={{
								transform: "translateY(-8px)",
								shadow: "xl",
							}}
						>
							<Link href={`/products/${product._id}`}>
								<Image
									src={product.image}
									alt={product.name}
									w="100%"
									h="100%"
									objectFit="cover"
									transition="transform 0.5s ease"
									_groupHover={{ transform: "scale(1.05)" }}
								/>
							</Link>
							<Box
								position="absolute"
								bottom="0"
								left="0"
								right="0"
								bg="rgba(0,0,0,0.7)"
								p={3}
								color="white"
								display="flex"
								justifyContent="space-between"
								alignItems={"center"}
							>
								<Text fontWeight="bold" fontSize="lg" textAlign="center">
									{product.name}
								</Text>

								<Flex gap={2}>
									{/* Delete Icon */}
									<Button
										fontWeight="bold"
										fontSize="lg"
										textAlign="center"
										color="red.500"
										cursor="pointer"
										onClick={() => deleteProduct(product._id)}
									>
										<DeleteIcon />
									</Button>

									{/* Edit Icon */}
									<Button
										fontWeight="bold"
										fontSize="lg"
										textAlign="center"
										color="blue.500"
										cursor="pointer"
										// onClick={() => editProduct(product._id)}
									>
										<EditIcon />
									</Button>
								</Flex>
							</Box>
						</Box>
					</Box>
				))}
			</SimpleGrid>
		</Container>
	);
};

export default AllProducts;
