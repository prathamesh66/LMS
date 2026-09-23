import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDb = async () => {
  try {
    console.log("MongoDB URL exists:", !!process.env.MONGODB_URL);

    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("DB connection failed:");
    console.log(error.message);
    throw error;
  }
};

export default connectDb;
