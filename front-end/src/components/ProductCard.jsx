import React, { useState } from "react";
import {
	Box,
	Flex,
	Text,
	Image,
	Link,
	Button,
	useColorModeValue,
	useToast,
	useDisclosure,
	Input,
	Textarea,
} from "@chakra-ui/react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";

const ProductCard = ({ product, deleteProduct, editProduct }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);

	const textColor = useColorModeValue("gray.600", "gray.300");
	const bg = useColorModeValue("white", "gray.800");
	const { deleteProductById, updateProductById } = useProductStore();
	const toast = useToast();

	// Modal Logic
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDeleteProduct = async (productId) => {
		const { success, message } = await deleteProductById(productId);

		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product deleted successfully",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
		}
	};

	const handleEditProduct = async (productId) => {
		const { success, message } = await updateProductById(
			productId,
			updatedProduct
		);

		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product updated successfully",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
			onClose();
		}
	};

	return (
		<>
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
					bg={bg}
				>
					<Flex
						gap={2}
						position="absolute"
						top="0"
						right="0"
						bgColor={"black"}
						borderBottomLeftRadius="lg"
						p={2}
					>
						{/* Delete Icon */}
						<Button
							fontWeight="bold"
							fontSize="md"
							width={"30px"}
							textAlign="center"
							color="red.500"
							cursor="pointer"
							// onClick={() => deleteProduct(product._id)}
							onClick={() => handleDeleteProduct(product._id)}
						>
							<DeleteIcon />
						</Button>

						{/* Edit Icon */}
						<Button
							fontWeight="bold"
							fontSize="md"
							width={"30px"}
							textAlign="center"
							color="blue.500"
							cursor="pointer"
							onClick={onOpen}
						>
							<EditIcon />
						</Button>
					</Flex>
					<Link href={`/products/${product._id}`}>
						<Image
							src={
								product.image ||
								"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0533%2F2089%2Ffiles%2Fplaceholder-images-product-5_large.png%3Fv%3D1530129458&f=1&nofb=1&ipt=6d340da9ec96e1156bca15d67cf843bc915c578ce9f53dd673930670c25644af"
							}
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
						bg="rgba(0,0,0,0.8)"
						p={3}
						color="gray.300"
						display="flex"
						alignItems={"center"}
					>
						<Box textAlign="left">
							<Text fontWeight="bold" fontSize="lg">
								{product.name}
							</Text>
							<span style={{ color: "yellow" }}>
								${parseInt(product.price).toFixed(0)}
							</span>
						</Box>
					</Box>
				</Box>
			</Box>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={"gray.800"} maxW={"600px"}>
					<ModalHeader>Edit Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						display={"flex"}
						flexDirection={"column"}
						gap={4}
						spacing={4}
					>
						<Input
							placeholder="Enter product name"
							name="name"
							value={updatedProduct.name}
							onChange={(e) =>
								setUpdatedProduct({ ...updatedProduct, name: e.target.value })
							}
						/>
						<Input
							type="number"
							placeholder="Enter price"
							name="price"
							value={updatedProduct.price}
							onChange={(e) =>
								setUpdatedProduct({ ...updatedProduct, price: e.target.value })
							}
						/>
						<Input
							placeholder="Enter product URL"
							name="url"
							value={updatedProduct.url}
							onChange={(e) =>
								setUpdatedProduct({ ...updatedProduct, url: e.target.value })
							}
						/>
						<Input
							placeholder="Enter image URL"
							name="image"
							value={updatedProduct.image}
							onChange={(e) =>
								setUpdatedProduct({ ...updatedProduct, image: e.target.value })
							}
						/>
						<Input
							placeholder="Enter product category"
							name="category"
							value={updatedProduct.category}
							onChange={(e) =>
								setUpdatedProduct({
									...updatedProduct,
									category: e.target.value,
								})
							}
						/>
						<Textarea
							placeholder="Enter product description"
							rows={4}
							name="description"
							value={updatedProduct.description}
							onChange={(e) =>
								setUpdatedProduct({
									...updatedProduct,
									description: e.target.value,
								})
							}
						/>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={() => handleEditProduct(product._id)}
						>
							Update
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ProductCard;
