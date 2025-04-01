import mongoose from "mongoose";

// This function connects to the MongoDB database using Mongoose. The syntax is just what it is.
export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1); // Code `1` means exits with an error, `0` means success
  }
};
