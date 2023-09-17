import mongoose, { Schema, } from "mongoose"

const WatchSchema =  new Schema(
    {
      title: String,
      year: String,
      desc: String,
      image: String,
      brand: String,
    },
  
  );
  

const Watch = mongoose.models.Watch || mongoose.model("Watch", WatchSchema)

export default Watch

