import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({

})

export default mongoose.model.user || mongoose.model("users",userSchema)