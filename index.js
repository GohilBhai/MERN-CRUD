import express from 'express';
import './Database/db.js';
import usermodel from './Model/model.js';
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.post('/signup',(req,res)=>{
    const {name,email,password,avtar} = req.body;
    const userData = new usermodel({
        name,
        email,
        password,
    });
    // res.send(req.body);
    res.send(userData);
})


app.listen(PORT, ()=>{
    console.log(`server start at port ${PORT}`);
})
