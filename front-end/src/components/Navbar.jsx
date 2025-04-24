import React from "react";
import logo from "../assets/logo.png";
import logoDark from "../assets/logo-dark.png";
import {
	Button,
	Image,
	Flex,
	Link,
	Container,
	HStack,
	useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<nav className="navbar">
			<Container maxW="container.xl">
				<Flex
					spacing={4}
					alignItems={"center"}
					justifyContent={"space-between"}
					flexDir={{
						base: "column",
						sm: "row",
					}}
				>
					<NavLink to="/">
						<span>
							{colorMode === "light" ? (
								<Image src={logoDark} alt="Click & Shop" width="100px" />
							) : (
								<Image src={logo} alt="Click & Shop" width="100px" />
							)}
						</span>
					</NavLink>

					<HStack spacing={2} alignItems={"center"}>
						<Link href="/products">
							<Button colorScheme="yellow" size="sm">
								All Products
							</Button>
						</Link>
						<Link href="/create">
							<Button colorScheme="yellow" size="sm">
								+ New Product
							</Button>
						</Link>
						<Button
							colorScheme="transparent"
							size="sm"
							alignItems={"center"}
							onClick={toggleColorMode}
						>
							<span
								style={
									colorMode === "light"
										? { color: "black" }
										: { color: "white" }
								}
							>
								{colorMode === "light" ? (
									<MoonIcon fontSize="xl" />
								) : (
									<SunIcon fontSize="xl" />
								)}
							</span>
						</Button>
					</HStack>
				</Flex>
			</Container>
		</nav>
	);
};

export default Navbar;
