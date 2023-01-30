const mongoose=require("mongoose")

const CommentSchema=new mongoose.Schema({
    Blog_id: String,
    User_id: String,
    Message:String,
    Rating:Number
},
{
    timestamps:true,
    versionKey:false
})

const CommentModel= mongoose.model("Comments",CommentSchema)
module.exports=CommentModel