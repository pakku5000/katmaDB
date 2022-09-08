const { default: mongoose, models } = require("mongoose");

//Schema for the required/allowed keys for a machine
const operatorSchema = new mongoose.Schema({
    operatorId : {type : String, required : true},
    name : {type : String, required : false},
    telephone : {type : Number, required : false},
    email : {type : String, required : false},
    date : {type : Date, required : false},
    useCount : {type : Number, required : false},
    capactiy : {type : Number, required : false},
    ROI : {type : Number, required : false},
});

//The model is like a Class to make machines with the above defined Schema
const operatorModel = mongoose.model("operators", operatorSchema);

module.exports.operatorSchema = operatorSchema;
module.exports.operatorModel = mongoose.model('operators', operatorSchema);
