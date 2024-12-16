import mongoose from "mongoose";


export default async function connection(){
    const db=await mongoose.connect('mongodb+srv://dayisal865:E3ETcUZvFC2wVYoG@cluster0.jpz3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/crud');
    console.log("database connected");
    
    return db
}