import mongoose from "mongoose";

export async function connectMongo(url) {
  return mongoose
    .connect(url)
    .catch((err) => console.log("MongoDb err", err));
}
