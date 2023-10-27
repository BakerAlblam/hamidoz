import mongoose, { Schema, } from "mongoose"

const ContactSchema =  new Schema(
    {
      title: String,
      year: String,
      desc: String,
      image: String,
      brand: String,
    },
  
  );
  

const Contact = mongoose.models.contact || mongoose.model("Contact", ContactSchema)

export default Contact

