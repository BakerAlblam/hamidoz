import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://smsmgaming:Timarli123@cluster0.pmjmucw.mongodb.net/Cluster0?retryWrites=true&w=majority" || "");
    console.log("Connected to MongoDB.")
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;