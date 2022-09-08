const { default: mongoose, models } = require("mongoose");

//const id = mongoose.Types.ObjectId();

//Schema for the required/allowed keys for a user
const userSchema = new mongoose.Schema({
    userId : {type : String, required : true},
    date : {type : Date, required : true},
    randomInt : {type : Number, required : false},
    text : {type : String, required : false},
    licensePlate : {type : String, required : false},
    container : {type : Object, required : false}, // {storage: Number, model: string}
    cleaningCertificate: {type : Object, required : false}, // {date : Date, certificate : String, ...}
    validUntil : {type : Date, required : false},
});

//The model is like a Class to make users with the above defined Schema
const userModel = mongoose.model("users", userSchema);

module.exports.userSchema = userSchema;
module.exports.userModel = mongoose.model('users', userSchema);

