import React from "react";
import {
	Container,
	Box,
	Heading,
	Text,
	Button,
	Stack,
	Image,
	SimpleGrid,
	Link,
	VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { categories } from "../constants/data";

const HomePage = () => {
	return (
		<Box
			position="relative"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			{/* Hero Content */}
			<Container maxW="container.xl">
				<Stack
					direction={{ base: "column", lg: "row" }}
					spacing={10}
					align="center"
					justify="space-between"
					paddingY={{ base: 20, lg: 16 }}
				>
					<Box maxW={{ base: "100%", lg: "50%" }}>
						<Heading
							as="h1"
							size={{ base: "xl", lg: "2xl" }}
							mb={4}
							lineHeight="1.2"
						>
							Save Your Favorite Products Here
						</Heading>

						<Text fontSize="xl" mb={6} opacity="0.9">
							Let's curate your own selection of wanted items that you want to
							buy later. It's like a wishlist board for your favorite products.
						</Text>

						<Button
							colorScheme="yellow"
							size="md"
							_hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
							transition="all 0.2s"
						>
							All Products You Have Saved
						</Button>
					</Box>

					<Box maxW={{ base: "100%", lg: "40%" }}>
						<Image
							src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
							alt="Featured Product"
							borderRadius="lg"
							shadow="2xl"
							objectFit="cover"
							transform="rotate(2deg)"
							transition="transform 0.3s ease"
							_hover={{ transform: "rotate(0deg)" }}
							display={{ base: "none", lg: "block" }}
						/>
					</Box>
				</Stack>

				{/* Bentos / Categories Section */}
				<Heading as="h2" size="lg" mb={6}>
					Your Favorite Categories
				</Heading>
				<SimpleGrid
					columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
					spacing={8}
					px={{ base: 4, sm: 0 }}
				>
					{categories.map((category) => (
						<Link
							as={RouterLink}
							to={category.path}
							key={category.id}
							_hover={{ textDecoration: "none" }}
						>
							<VStack
								position="relative"
								overflow="hidden"
								borderRadius="lg"
								transition="all 0.3s ease"
								_hover={{
									transform: "translateY(-8px)",
									shadow: "xl",
								}}
							>
								<Box position="relative" w="100%" h="200px" overflow="hidden">
									<Image
										src={category.image}
										alt={category.name}
										w="100%"
										h="100%"
										objectFit="cover"
										transition="transform 0.5s ease"
										_groupHover={{ transform: "scale(1.05)" }}
									/>
									<Box
										position="absolute"
										bottom="0"
										left="0"
										right="0"
										bg="rgba(0,0,0,0.7)"
										p={3}
										color="white"
									>
										<Text fontWeight="bold" fontSize="lg" textAlign="center">
											{category.name}
										</Text>
									</Box>
								</Box>
							</VStack>
						</Link>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
};

export default HomePage;
