import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to DB");
}

export default connectDB;
