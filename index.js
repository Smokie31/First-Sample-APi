const express = require('express');
const res = require('express/lib/response');


require('dotenv').config();
console.log(process.env.PORT);

const app = express();

const PORT = process.env.PORT || 5000;

let NorthIndian = ['Chole  bhature', 'Naan', 'Poha'];
let SouthIndian = ['Idli', 'Vada', 'Russam'];

app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`);
})

app.get(('/'),(req, res)=>{
    res.send("Welcome ");
})


app.get(('/food'),(req, res)=>{
    res.send("North Indian and South Indian");
})

app.get(('/food/northindian'), (req, res)=>{
    const index = Math.floor(Math.random() * NorthIndian.length);
    res.send({
        food : NorthIndian[index],
        price : Math.floor(Math.random() * 100),
        jdk : 2
    })
})


app.get(('/food/southindian'), (req, res)=>{
    const index = Math.floor(Math.random() * SouthIndian.length);
    res.send({
        food : SouthIndian[index],
        price : Math.floor(Math.random() * 100),
        jdk : 1
    });
})