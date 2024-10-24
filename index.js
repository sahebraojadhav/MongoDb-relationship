const {House,Owner}=require('./models/index');

const result=async()=>{

    const owner=await Owner.create({
        name:"sahebrao jadhav"
    })
    
    await House.create({
        street:"100 Maple Street",
        city:"Fort Townville",
        state:"New West Virgota",
        zip:"7777",
        owner:owner._id
    })

    const house=await House.find({}).populate("owner");
    console.log("we are inside result",house);
}

result();