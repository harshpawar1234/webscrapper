const express=require('express');
const scrape=require("./controller/scrape");
const cors = require('cors');
const app=express();
app.use(cors());
app.use("/:user",scrape);
app.get("/",(req,res)=>
{
    res.send(`<div style="font-family:verdana;display:flex;  width:100%; height:100%; align-items:center; flex-direction:column;"><h1>API is Working Successfully</h1><p style="width:55%;">To use this API enter your required input in url string for example-https://socialscrap.herokuapp.com/ + ____ and you will get a object in response after this sucessfull reuqest URL string </p></div>`);
})
app.listen(process.env.PORT || 5000,()=>
{
    console.log("backend server is up and working fine");
})