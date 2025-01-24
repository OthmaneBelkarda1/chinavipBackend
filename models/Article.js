const mongoose = require("mongoose");
const Schema = mongoose.Schema

const articleSchema = new Schema( 
   { 
   Name: { type: String, required: true },
   Note:{ type:Number,required:true},
   Passport: { type: String, required: true },
   Age: { type: Number, required: true },
   Niveau: { type: String, required: true },
   filiere: { type: String, required: true },   
   Numero: { type: Number, required: true }},

 );
const Article = mongoose.model("Article",articleSchema);
module.exports = Article;;