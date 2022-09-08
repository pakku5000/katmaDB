const mongoose = require("mongoose")
const { userSchema , userModel } = require('./users.js');
const { machineSchema , machineModel } = require('./machines.js');
const { operatorSchema , operatorModel } = require('./operators.js');

// Connection URL: 'mongodb://localhost:27017';



// Database Name: katmaDB

/*Connection to Localhost server, to katmaDB*/
const mongoConnect = mongoose.connect('mongodb://127.0.0.1:27017/katmaDB')
  .then(console.log("Connected!"))
  .catch((err) => {
  console.log(`OH NO! MONGO CONNECTION ERROR!`);
  console.log(err);
})
//var katmaDB = mongoose.

/* Adding Documents to the Collection: userData
   _id is the randomly generated Object ID, the userId is a randomized String, the date is the current Date, 
   randomInt is a random integer between 0 and 100. It is possible to add the key: "text" with a string in the Document.
   _id, userID and date are required, randomInt and text aren't required.*/

/* setInterval(async function dbFiller(){
  const userdoc = {
    "_id" : mongoose.Types.ObjectId(),
    "userId" : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
    "date" : new Date(new Date().setTime(Date.now() + 2 * 60 * 60 * 1000)), 
    "randomInt" : Math.floor(Math.random()*101)
  };
  user = new userModel(userdoc)
  user.save(function (err, doc) {
    console.log("A document was inserted with the userId: " + user.userId);
  });  
}, 5000);
*/

//machinetest
/*
machine = new machineModel ( {
  "machineId" : "firstMachine",
  "date" : new Date(new Date().setTime(Date.now() + 2 * 60 * 60 * 1000)),
  "chemicalLevel" : 3,
  "waterLevel" : 4
});
machine.save(function (err, doc) {
  console.log("A document was inserted with the machineId: " + machine.machineId);
}); 
*/ 

//operatortest
operator = new operatorModel ( {
    operatorId : "firstOperator",
    name : "Shell",
    telephone : 12345,
    email : "bla@gmail.com",
    useCount : 12,
    capactiy : 0.9,
    ROI : 1.4,
});
operator.save(function (err, doc) {
  console.log("A document was inserted with the operatorId: " + operator.operatorId);
}); 