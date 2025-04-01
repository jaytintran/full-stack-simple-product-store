# 🚀 MERN Product List Store

A **full-stack Product List Store** built using the **MERN (MongoDB, Express.js, React, Node.js) stack**. This app allows users to manage a list of products, including adding, editing, deleting, and viewing details.

## 🛠 Tech Stack

### **Frontend**

- **React.js** – A powerful JavaScript library for building interactive UIs. React enables fast rendering and a seamless user experience using reusable components and a virtual DOM.
- **React Router** – Handles client-side routing, allowing for smooth navigation between pages without reloading the browser.
- **Axios** – A promise-based HTTP client for making API requests to the backend.

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
  require("dotenv").config();
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
  const mongoose = require("mongoose");

  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
  });

  const Product = mongoose.model("Product", ProductSchema);
  ```

## 🚀 Getting Started

### **1. Clone the Repository**

```sh
git clone https://github.com/your-username/mern-product-list-store.git
cd mern-product-list-store
```

### **2. Install Dependencies**

#### Backend

```sh
cd backend
npm install
```

#### Frontend

```sh
cd frontend
npm install
```

### **3. Setup Environment Variables**

Create a `.env` file in the `backend` directory:

```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### **4. Run the Application**

#### Backend

```sh
npm start
```

#### Frontend

```sh
npm start
```

### **5. Open in Browser**

Go to: `http://localhost:3000/`

## 📌 Features

✅ Add, Edit, Delete Products  
✅ View Product Details  
✅ Responsive UI with React  
✅ Backend API with Express & MongoDB
