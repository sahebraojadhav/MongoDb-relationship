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


/************************ Many to many  *********************/

const ownerSchema=new mongoose.Schema({
    name:String
})

const Owner=mongoose.model("Owner",ownerSchema);

const locationAndPriceSchema=new mongoose.Schema({
    location:String,
    price:String
})

const LocationAndPrice=mongoose.model("LocationAndPrice",locationAndPriceSchema);

const houseSchema=new mongoose.Schema({
    street:String,
    city:String,
    state:String,
    Zip:String,
    LocationAndPrice:{type:mongoose.Types.ObjectId,ref:LocationAndPrice}
})

const House=mongoose.model("House",houseSchema);


const houseOwnerSchema={
    owner:{type:mongoose.Types.ObjectId,ref:"Owner"},
    house:{type:mongoose.Types.ObjectId,ref:"House"}
}

const HouseOwner=new mongoose.model("HouseOwner",houseOwnerSchema);

module.exports={
    LocationAndPrice,
    HouseOwner,
    House,
    Owner
}


/************* M:N Relationship *********/

/*1:M relationship*/
/*
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
*/

//1:1 relationship

/*
const mongoose = require("mongoose")

const Owner = new mongoose.Schema({
    name: String
})

const houseSchema = new mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zip: String
    owner: Owner
})

const House = mongoose.model("House", houseSchema)
// Create a new house
House.create({
    street: "100 Maple Street",
    city: "Fort Townville",
    state: "New West Virgota",
    zip: "77777"
    owner: {name: "Alex Merced"}
})

// query for all houses, will include the nested owner info
House.find({})
*/