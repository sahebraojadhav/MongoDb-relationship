//ykCebfI0oaou7d5S
//onlysahebpatil
//mongodb+srv://onlysahebpatil:<db_password>@cluster.5530v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster
const { error } = require('console');
const mongoose=require('mongoose');
const { type } = require('os');

const connection=mongoose.connect('mongodb+srv://onlysahebpatil:ykCebfI0oaou7d5S@cluster.5530v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster').then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error)
})

const ownerSchema=new mongoose.Schema({
    name:String
})

const Owner=mongoose.model("Owner",ownerSchema);

const houseSchema=new mongoose.Schema({
    street:String,
    city:String,
    state:String,
    zip:String,
    owner:{type:mongoose.Types.ObjectId,ref:"Owner"}
});

const House=mongoose.model('House',houseSchema);

module.exports={
    House,
    Owner
}