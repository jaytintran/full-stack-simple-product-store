import React from "react";
import {
	Container,
	Box,
	Heading,
	Text,
	Image,
	SimpleGrid,
} from "@chakra-ui/react";
import { dummyProducts } from "../constants/data";

const AllProducts = () => {
	return (
		<Container maxW="container.xl">
			<Heading as="h1" size="xl" textAlign="center" mt={16} mb={16}>
				All Products You Have Saved 💖
			</Heading>
			<Container maxW="container.xl">
				<SimpleGrid
					columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
					spacing={8}
					px={{ base: 4, sm: 0 }}
				>
					{dummyProducts.map((product) => (
						<Box key={product.id}>
							<Box>
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
									<Image
										src={product.image}
										alt={product.name}
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
											{product.name}
										</Text>
									</Box>
								</Box>
							</Box>
						</Box>
					))}
				</SimpleGrid>
			</Container>
		</Container>
	);
};

export default AllProducts;
