import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import {
	Container,
	Box,
	Heading,
	Text,
	Image,
	Stack,
	Badge,
	Button,
	Flex,
	Divider,
	Skeleton,
	useToast,
	Link,
	IconButton,
} from "@chakra-ui/react";
import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const toast = useToast();

	useEffect(() => {
		const fetchProductDetails = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`http://localhost:5001/api/products/${id}`
				);

				if (!response.ok) {
					throw new Error("Product not found");
				}

				const data = await response.json();
				setProduct(data.data);
			} catch (err) {
				setError(err.message);
				toast({
					title: "Error",
					description: "Failed to load product details",
					status: "error",
					duration: 3000,
					isClosable: true,
				});
			} finally {
				setLoading(false);
			}
		};

		fetchProductDetails();
	}, [id, toast]);

	if (loading) {
		return (
			<Container maxW="container.xl" py={8}>
				<Skeleton height="300px" my={6} />
				<Stack spacing={4}>
					<Skeleton height="40px" width="300px" />
					<Skeleton height="20px" width="150px" />
					<Skeleton height="120px" />
				</Stack>
			</Container>
		);
	}

	if (error || !product) {
		return (
			<Container maxW="container.xl" py={8} textAlign="center">
				<Heading size="lg" mb={4}>
					Product Not Found
				</Heading>
				<Text mb={6}>
					The product you're looking for doesn't exist or has been removed.
				</Text>
				<Button as={RouterLink} to="/products" colorScheme="yellow">
					Back to Products
				</Button>
			</Container>
		);
	}

	return (
		<Container maxW="container.xl" py={8}>
			<IconButton
				as={RouterLink}
				to="/products"
				icon={<ArrowBackIcon />}
				mb={6}
				aria-label="Back to products"
			/>

			<Stack direction={{ base: "column", md: "row" }} spacing={10}>
				<Box flex="1">
					<Image
						src={product.image}
						alt={product.name}
						borderRadius="lg"
						objectFit="cover"
						w="100%"
						h={{ base: "300px", md: "500px" }}
						shadow="md"
					/>
				</Box>

				<Box flex="1">
					<Stack spacing={4}>
						<Heading as="h1" size="xl">
							{product.name}
						</Heading>

						<Badge colorScheme="green" alignSelf="flex-start" px={2} py={1}>
							{product.category}
						</Badge>

						<Text fontSize="2xl" fontWeight="bold" color="yellow.500">
							${parseFloat(product.price).toFixed(2)}
						</Text>

						<Divider />

						<Text fontSize="md">{product.description}</Text>

						<Divider />

						<Flex justifyContent="space-between" alignItems="center">
							<Button
								as="a"
								href={product.url}
								target="_blank"
								rel="noopener noreferrer"
								colorScheme="yellow"
								size="lg"
								rightIcon={<ExternalLinkIcon />}
							>
								Buy Now
							</Button>
						</Flex>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
};

export default ProductDetail;
