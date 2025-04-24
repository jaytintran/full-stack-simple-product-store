import React from "react";
import { Button, VStack } from "@chakra-ui/react";

const Navbar = () => {
	return (
		<nav>
			<div className="container">
				<VStack spacing={4}>
					<Button colorScheme="yellow" size="lg">
						Hej!
					</Button>
				</VStack>
			</div>
		</nav>
	);
};

export default Navbar;
