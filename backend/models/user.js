import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      min: 1000000000,
      max: 9999999999,
    },
    bio: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    medical: {
      primaryCondition: {
        type: String,
      },
    },
    emergencyContact: {
      name: {
        type: String,
      },
      relation: {
        type: String,
      },
      phoneNumber: {
        type: Number,
        min: 1000000000,
        max: 9999999999,
      },
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("user", userSchema);

export default User;
