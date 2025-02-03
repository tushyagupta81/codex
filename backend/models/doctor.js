import mongoose from "mongoose";

export const doctorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
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
      expertise: {
        type:String,
      },
      years: {
        type:Number,
        min:0,
      },
    },
    clinic: {
      name: {
        type: String,
      },
      location: {
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
