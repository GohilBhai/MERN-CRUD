import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/auth').then(()=>{
   console.log('DataBase Connecting SuccessFully😃😃...');
}).catch((error)=>{
    console.log('Error While Connecting Database😡😡');
});