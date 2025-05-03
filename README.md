# 🚀 MERN Product List Store

![image](https://github.com/user-attachments/assets/a14acd56-7d72-42c6-82be-523eeeabf69a)

A **full-stack Product List Store** built using the **MERN (MongoDB, Express.js, React, Node.js) stack**. This app allows users to manage a list of products, including adding, editing, deleting, and viewing details.

## 🛠 Tech Stack

### **Frontend**

- **React.js** – A powerful JavaScript library for building interactive UIs. React enables fast rendering and a seamless user experience using reusable components and a virtual DOM.
- **React Router** – Handles client-side routing, allowing for smooth navigation between pages without reloading the browser.
- **Axios** – A promise-based HTTP client for making API requests to the backend.
- **Chakra UI** – A modern component library for React that provides accessible and customizable UI components.
- **Zustand** – A small, fast, and scalable state-management solution for React applications.

### **Backend**

- **Node.js** – A runtime environment that allows JavaScript to run on the server, handling requests and executing backend logic.
- **Express.js** – A minimalist web framework for Node.js that simplifies routing, middleware management, and request handling.
- **Mongoose** – A MongoDB Object Data Modeling (ODM) library that simplifies database operations by providing a structured way to define schemas and interact with the database.

### **Database**

- **MongoDB** – A NoSQL database that stores data in a flexible, JSON-like format. MongoDB is highly scalable and ideal for applications that require dynamic schema adjustments.

## 🔌 Third-Party Dependencies

### **1. dotenv**

- **Purpose**: Loads environment variables from a `.env` file into `process.env`.
- **Why?**: Keeps sensitive information like database credentials, API keys, and secret tokens out of the codebase.
- **Usage**:
  ```js
  import dotenv from "dotenv";
  dotenv.config();
  const dbURI = process.env.MONGO_URI;
  ```
  This ensures configuration settings are **secure** and **easily configurable** across different environments.

### **2. Mongoose**

- **Purpose**: Provides a schema-based solution for interacting with MongoDB.
- **Why?**: Helps structure data, enforce validation, and simplify complex database operations.
- **Key Features**:
  - Schema & Model definition
  - Built-in validation
  - Querying and middleware support
- **Usage**:

  ```js
  import mongoose from "mongoose";

  const ProductSchema = new mongoose.Schema({
  	name: String,
  	price: Number,
  	category: String,
  });

  const Product = mongoose.model("Product", ProductSchema);
  ```

### **3. Chakra UI**

- **Purpose**: Provides a set of accessible and customizable React components.
- **Why?**: Speeds up UI development with pre-built, responsive components that can be easily styled.
- **Key Features**:
  - Accessible components
  - Customizable theme
  - Responsive design support
- **Usage**:

  ```jsx
  import { Button, Box } from "@chakra-ui/react";

  function MyComponent() {
  	return (
  		<Box>
  			<Button colorScheme="blue">Click me</Button>
  		</Box>
  	);
  }
  ```

### **4. Zustand**

- **Purpose**: Provides a simple and flexible state management solution.
- **Why?**: Offers a more straightforward alternative to Redux for managing global state in React applications.
- **Key Features**:
  - Minimal boilerplate
  - Easy to understand and use
  - Works with React hooks
- **Usage**:

  ```js
  import create from "zustand";

  const useStore = create((set) => ({
  	products: [],
  	addProduct: (product) =>
  		set((state) => ({ products: [...state.products, product] })),
  }));
  ```

## 🚀 Getting Started

### **1. Clone the Repository**

```sh
git clone https://github.com/your-username/mern-product-list-store.git
cd mern-product-list-store
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Setup Environment Variables**

Create a `.env` file in the root directory:

```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### **4. Run the Application**

For development:

```sh
npm run dev
```

For production:

```sh
npm run build
npm start
```

### **5. Open in Browser**

Go to: `http://localhost:3000/`

## 📌 Features

✅ Add, Edit, Delete Products  
✅ View Product Details  
✅ Responsive UI with React and Chakra UI  
✅ Backend API with Express & MongoDB  
✅ Global State Management with Zustand  
✅ Environment Variable Configuration  
✅ Production-ready Build Process
