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
	useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
	const bgColor = useColorModeValue("white", "gray.800");
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		url: "",
		image: "",
		category: "",
		description: "",
	});

	/* Make a Toast */
	const toast = useToast();

	/* Destructuring createProduct function from useProductStore Zustand 
		The reason why we only destructuring the createProduct, because in useProductStore there're more state functions that we don't need.
	*/
	const { createProduct } = useProductStore();

	const handleAddProduct = async (e) => {
		e.preventDefault();
		/* Calling the createProduct function from useProductStore Zustand
			Indeed we try to get the message variable here, but before resulting the message
			The createProduct also performs side effect too:
			1. Sends the new product to the backend API -> 
			2. Then updating the products array global state.
		*/
		const message = await createProduct(newProduct);

		console.log(message.message);
		console.log(message.success);

		if (message.success === true) {
			toast({
				title: "Product Added",
				description: "Your product has been added successfully",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
			// After the product is added, clear the state and form
			setNewProduct({
				name: "",
				price: "",
				url: "",
				image: "",
				category: "",
				description: "",
			});
		} else {
			toast({
				title: "Error",
				description: message.message,
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		}
	};

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
							<FormLabel>URL to Buy</FormLabel>
							<Input
								placeholder="Enter product URL"
								name="url"
								value={newProduct.url}
								onChange={(e) =>
									setNewProduct({ ...newProduct, url: e.target.value })
								}
							/>
						</FormControl>

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
							type="submit"
							onClick={handleAddProduct}
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
