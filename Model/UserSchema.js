const mongoose=require("mongoose")
const UserSchema= new mongoose.Schema({
   
    Name: String,
    Email: String,
    social_profile : 
    {
    linkedIn:String,
    facebook:String,
    Twiter:String,
    Github:String,
    Instagram:String
    },
    Addresses: [
    {
        Line1:String,
        City:String,
        State:String,
        PinCode:String
    }],
    Blog_id : [String]
},
{
    timestamps:true,
    versionKey:false
})

const UserModel=mongoose.model("User",UserSchema)

module.exports=UserModel