import mongoose from "mongoose";

const { Schema } = mongoose;
// mongoose.Promise = global.Promise;

const formSchema = new Schema(
  {
    clerkUserID: { type: String, required: true },
    // user: { type: Schema.Types.ObjectId, ref: "user" }, // this is the person who submitted the form
    userName: { type: String, required: true },
    phoneNo: { type: String, required: true },
    petName: { type: String, required: true },
    petType: { type: String, required: true },
    gender: { type: String, required: true },
    isDisabled: { type: String, required: true },
    isVacinated: { type: String, required: true },
    ageRange: { type: String, required: true },
    isAdopted: { type: Boolean, required: true },
    breadName: { type: String },
    petImageURL: { type: String, required: true },
    shelterOrStreet: { type: String, required: true },
    shelterURL: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    locality: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// models
const formmodel =
  mongoose.models.formmodel || mongoose.model("formmodel", formSchema);

export default formmodel;
