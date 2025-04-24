import {
	Container,
	Box,
	Heading,
	VStack,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
	SimpleGrid,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CreatePage = () => {
	const bgColor = useColorModeValue("white", "gray.800");
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
		category: "",
		stock: "",
		description: "",
	});

	return (
		<Container maxW="container.xl" py={8}>
			<VStack spacing={8} align="stretch">
				<Heading as="h1" size="xl" textAlign="center">
					Add New Product
				</Heading>

				<Box bg={bgColor} p={6} borderRadius="lg" boxShadow="md">
					<VStack spacing={6} as="form">
						<SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
							<FormControl isRequired>
								<FormLabel>Product Name</FormLabel>
								<Input
									placeholder="Enter product name"
									name="name"
									value={newProduct.name}
									onChange={(e) =>
										setNewProduct({ ...newProduct, name: e.target.value })
									}
								/>
							</FormControl>

							<FormControl isRequired>
								<FormLabel>Price</FormLabel>
								<Input
									type="number"
									placeholder="Enter price"
									name="price"
									value={newProduct.price}
									onChange={(e) =>
										setNewProduct({ ...newProduct, price: e.target.value })
									}
								/>
							</FormControl>
						</SimpleGrid>

						<FormControl isRequired>
							<FormLabel>Image URL</FormLabel>
							<Input
								placeholder="Enter image URL"
								name="image"
								value={newProduct.image}
								onChange={(e) =>
									setNewProduct({ ...newProduct, image: e.target.value })
								}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Category</FormLabel>
							<Input
								placeholder="Enter product category"
								name="category"
								value={newProduct.category}
								onChange={(e) =>
									setNewProduct({ ...newProduct, category: e.target.value })
								}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Stock</FormLabel>
							<Input
								type="number"
								placeholder="Enter stock quantity"
								name="stock"
								value={newProduct.stock}
								onChange={(e) =>
									setNewProduct({ ...newProduct, stock: e.target.value })
								}
							/>
						</FormControl>

						<FormControl isRequired>
							<FormLabel>Description</FormLabel>
							<Textarea
								placeholder="Enter product description"
								rows={4}
								name="description"
								value={newProduct.description}
								onChange={(e) =>
									setNewProduct({ ...newProduct, description: e.target.value })
								}
							/>
						</FormControl>

						<Button
							colorScheme="yellow"
							size="md"
							w={{ base: "100%", md: "auto" }}
							alignSelf="flex-end"
							mt={4}
						>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};

export default CreatePage;
