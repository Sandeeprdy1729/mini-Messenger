const mongoose=require("mongoose");
const chat=require("./models/chat.js");


main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=> console.log(err));
    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
    }

    
let allchats= [
    {
    from:"neha",
    to:"priya",
    msg:"Send me your exam sheets",
    created_at: new Date()
    },
    {
    from:"aman",
    to:"noman",
    msg:"HI !!!",
    created_at: new Date()
    },
    {
    from:"ramesh",
    to:"suresh",
    msg:"How r u ?.",
    created_at: new Date()
    },
    {
    from:"doll",
    to:"donald",
    msg:"Welcome ",
    created_at: new Date()
    },
    {
    from:"dora",
    to:"bujji",
    msg:"Hello World !!!",
    created_at: new Date()
    },
    {
    from:"chotu",
    to:"bheem",
    msg:" DSA with JAVA",
    created_at: new Date()
    }
];

chat.insertMany(allchats);