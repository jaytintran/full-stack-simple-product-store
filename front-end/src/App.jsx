import { Button, Box, VStack, Center } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import AllProductsPage from "./pages/AllProducts";

function App() {
	return (
		<Box minH={"100vh"} className="bg-dark">
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
