import mongoose from "mongoose";

const communitySchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    bio:{
      type:String,
    },
    members: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Community = mongoose.model("community", communitySchema);

export default Community;
