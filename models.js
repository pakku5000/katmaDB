const { default: mongoose, models } = require("mongoose");

const id = mongoose.Types.ObjectId();

console.log(id)
const userSchema = new mongoose.Schema({
    id : {type : Object, required : true},
    userId : {type : String, required : true},
    date : {type : Date, required : true},
    randomInt : {type : Number, required : false},
    text : {type : String, required : false}

})
