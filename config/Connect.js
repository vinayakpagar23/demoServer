const mongoose=require("mongoose")
mongoose.set('strictQuery', true);
let Connection=async()=>
{
    await mongoose.connect(`mongodb://127.0.0.1:27017/blogs`)
}
module.exports=Connection