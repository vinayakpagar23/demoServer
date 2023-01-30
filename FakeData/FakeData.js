const Connection = require("../config/Connect");
const {faker}=require("@faker-js/faker");
const crypto=require("crypto")
const BlogModel = require("../Model/BlogSchema");
const CategoryModel = require("../Model/CategorySchema");
const UserModel = require("../Model/UserSchema");
const CommentModel = require("../Model/CommentSchema");
const LikeModel = require("../Model/LikeSchema");
// const LikeModel = require("../Model/LikeSchema");

const createfakedata=async(count)=>
{
    // let arr=[]
    // for(let i=0;i<count;i++)
    // {
    //     const temp={
    //         Name:faker.name.jobType()
    //     }
    //     arr.push(temp)
    // }
    // CategoryModel.insertMany(arr)
    // let arr=[]
    // let category=await CategoryModel.find()
    // for(let i=0;i<count;i++)
    // {
    //     let categoryid=[]
    //     for(let c=0;c<crypto.randomInt(0,10);c++)
    //     {
    //         categoryid.push(category[crypto.randomInt(0,category.length-1)]._id)
    //     }
    //     let obj={
    //         Title:faker.hacker.phrase(),
    //         Body:faker.lorem.paragraphs(crypto.randomInt(0,5)),
    //         Category_ids:categoryid
    //     }
    //     arr.push(obj)
    // }
    // await BlogModel.insertMany(arr)
    // let arr=[]
    // let blog=await BlogModel.find()
    
    // for(let i=0;i<count;i++)
    // {
    //     let blogids=[]
    //     for(let b=0;b<crypto.randomInt(0,50);b++)
    //     {
    //         blogids.push(blog[crypto.randomInt(0,blog.length-1)]._id)
    //     }
    //     let obj={
    //         Name:faker.name.fullName(),
    //         Email:faker.internet.email(),
    //         social_profile:{
    //             linkedIn:faker.lorem.text(),
    //             facebook:faker.lorem.text(),
    //             Twiter:faker.lorem.text(),
    //             Github:faker.lorem.text(),
    //             Instagram:faker.lorem.text()
    //         },
    //         Addresses: [
    //             {
    //                 Line1:faker.lorem.text(),
    //                 City:faker.lorem.word(crypto.randomInt(1,6)),
    //                 State:faker.lorem.text(),
    //                 PinCode:faker.phone.number()
    //             }],
    //             Blog_id : blogids

    //     }
    //     arr.push(obj)
    // }
    // await UserModel.insertMany(arr)

    let arr=[]
    const blog=await BlogModel.find()
    const user=await UserModel.find()
    for(let i=0;i<count;i++)
    {
        let r=crypto.randomInt(0,20)
        let obj={
            Blog_id: user[r].Blog_id[crypto.randomInt(0,user[r].Blog_id.length-1)],
            User_id: user[r]._id,
            Emoji:faker.image.imageUrl()
        }
        arr.push(obj)
    }
    await LikeModel.insertMany(arr)
}
//console.log(Connection)

Connection().then(()=>
{
    createfakedata(120)
    console.log("Created fake data...")
})