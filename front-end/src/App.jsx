import { Button, Box, VStack, Center } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import AllProductsPage from "./pages/AllProducts";
import { useColorModeValue } from "@chakra-ui/react";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
			<Navbar />

			{/* Routes to different pages */}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/create" element={<CreatePage />} />
				<Route path="/products" element={<AllProductsPage />} />
			</Routes>
		</Box>
	);
}

export default App;
