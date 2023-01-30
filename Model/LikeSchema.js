const mongoose=require("mongoose")
const LikeSchema= new mongoose.Schema({
    User_id: String,
    Blog_id: String,
    Emoji:String
},
{
    timestamps:true,
    versionKey:false
})

const LikeModel=mongoose.model("Like",LikeSchema)

module.exports=LikeModel