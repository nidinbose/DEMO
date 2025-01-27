import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    subscription: {
      plan: String,
      amount: Number,
      status: { type: String, default: "inactive" },
    },
    referralCode: String,
    referredBy: String,

})

export default mongoose.model.user || mongoose.model("users",userSchema)