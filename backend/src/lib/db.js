import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to Mongoose${conn.connection.host}`);
  } catch (error) {
    console.log("Failed to connect to MongoDB" + error);
    process.exxit(1);
  }
};

export default connectDB;
