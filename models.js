const { default: mongoose, models } = require("mongoose");

const id = mongoose.Types.ObjectId();

const userSchema = new mongoose.Schema({
    userId : {type : String, required : true},
    date : {type : Date, required : true},
    randomInt : {type : Number, required : false},
    text : {type : String, required : false}
});

const userModel = mongoose.model("users", userSchema);

module.exports.userSchema = userSchema;
module.exports.userModel = mongoose.model('users', userSchema);
