const mongoose = require("mongoose");


 const formschema = new mongoose.Schema({
        name:{ type: String,required:true},
        email: { type: String,required:true},
        contact: { type: Number,required:true,},
        password: { type: String,required:true},
        course:{ type: String,required:true},
        checkbox:{ type: String,required:true}
    
    });



module.exports=mongoose.model("class",formschema);
