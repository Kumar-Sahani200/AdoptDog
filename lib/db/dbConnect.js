// dbConnect.js

import mongoose from "mongoose";
import { NextResponse } from "next/server";

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error("MongoDB connection URI is not provided");
    }

    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
}

export default dbConnect;
