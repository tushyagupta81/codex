import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    bio: {
      type: Stirng,
      required: true,
    },
    location: {
      type: Stirng,
      required: true,
    },
    kind: {
      type: Stirng,
      enum: ["online","offline"],
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    reminders: {
      type: [Stirng],
      required: true,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Event = mongoose.model("event", eventSchema);

export default Event;
