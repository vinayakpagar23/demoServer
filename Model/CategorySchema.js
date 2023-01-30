const mongoose=require("mongoose")
const Categoryschema= new mongoose.Schema({
    Name:String
},
{
    timestamps:true,
    versionKey:false
})

const CategoryModel=mongoose.model("Category",Categoryschema)

module.exports=CategoryModel