const express=require("express")
const Connection = require("./config/Connect")
const app=express()
app.use(express.json())

app.listen(5000,async()=>
{
    try {
        await Connection();
        console.log("Listening to port 5000")
    } catch (error) {
        console.log(error)
    }
})