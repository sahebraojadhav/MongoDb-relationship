const { LocationAndPrice,HouseOwner,House,Owner}=require('./models/index');

const result=async()=>{

    const owner=await Owner.create({
        name:"sahebrao jadhav"
    })
    
    const locationAndPrice=await LocationAndPrice.create({
        location:"2223.443.34",
        price:"34,43,344"
    })

    const house=await House.create({
        street:"100 Maple Street",
        city:"Fort Townville",
        state:"New West Virgota",
        zip:"7777",
        LocationAndPrice:locationAndPrice._id
    })

    console.log("here we are printing",owner._id,house._id);

    const houseOwner=await HouseOwner.create({
        owner:owner._id,
        house:house._id
    })
    
    const foundOwner=await Owner.findOne({name:"sahebrao jadhav"});
    console.log("owner is found",foundOwner);
    console.log("House owner objet is here we are",houseOwner)
    const houseResult=await HouseOwner.find({owner:foundOwner._id});
    console.log("we are inside result",houseResult);
}

result();


/***************steps to perform m:n operations*********/
//1:create model using model User
//2:paste the ids of model where they are belongs to
//3:in M:N create new model by combining two models 
//just like house and owner and paste their respective ids there
//