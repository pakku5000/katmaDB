const { default: mongoose, models } = require("mongoose");

//Schema for the required/allowed keys for a machine
const machineSchema = new mongoose.Schema({
    machineId : {type : String, required : true},
    date : {type : Date, required : true},
    chemicalLevel : {type : Number, required : false},
    waterLevel : {type : Number, required : false},
    operator : {type : Object, required : false}, //{name : String, telephone : number, email: String, ...}
    location : {type : Object, required : false}, //{city : String, street: String, houseNumber: Number, PLZ : Number, longitude : Number, latitude : Number, ...}
    operational : {type : Boolean, required : false},
    maintenanceList : {type : Object, required : false} //Liste der Wartungen
    userList : {type : Object, required : false} // List of userId's that used the machine
});

//The model is like a Class to make machines with the above defined Schema
const machineModel = mongoose.model("machines", machineSchema);

module.exports.machineSchema = machineSchema;
module.exports.machineModel = mongoose.model('machines', machineSchema);

