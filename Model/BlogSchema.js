const mongoose=require("mongoose")
const BlogSchema= new mongoose.Schema({

    Title:String,
    Body:String,
    Category_ids: [String]

},
{
    timestamps:true,
    versionKey:false
})
const BlogModel=mongoose.model("blog",BlogSchema)
module.exports=BlogModel