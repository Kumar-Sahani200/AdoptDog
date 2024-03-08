import mongoose from "mongoose";

const { Schema } = mongoose;
// mongoose.Promise = global.Promise;

// schema
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  clerkUserID: { type: String, required: true },
});

// models
const user = mongoose.models.user || mongoose.model("user", userSchema);

export default user;
