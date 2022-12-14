const express=require("express");
const app=express();
const path=require('path');
require("./mongo");

const port=process.env.PORT  || 3000;

const forms=require("./schema");

app.use(express.static("public"));

// const bodyparser=require("body-parser");
// app.use(bodyparser.urlencoded({extended:false}));
// USE ABOVE OR BELOW
app.use(express.json())
app.use(express.urlencoded({extended:false}));



app.set("view engine","ejs")
const pathfind=path.join(__dirname,'public');


app.get("",(req,res)=>{
    res.render("index");
})

app.post("/register",async (req,res)=>{
    // const x=JSON.stringify(req.body);
    // console.log(x);



    
// let data = new forms(req.body);
//         let result = await data.save();
//         console.log(req.body);
//         res.send("success");


// res.send(result);
//you can us above method  or below


try {
    const check=req.body.checkbox;
    if(check=="on")
    {
        let data = new forms(req.body);
        let result = await data.save();
        // console.log(req.body);
        // res.send("success");
        res.status(201).render("success")
    }
    else{
        res.send("Please mark the checkbox.")
    }
} catch (error) {
    res.status(400).send(error);
}




})


app.get("/success",(req,res)=>{
    res.render("success");
    console.log("see");
    res.redirect("/")
})

app.listen(port,()=>{
    console.log("server is running at 3000");
});