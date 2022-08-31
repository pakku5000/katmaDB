const mongoose = require("mongoose")
const { userSchema , userModel } = require('./models.js');
//const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

/*// Connection URL
const url = 'mongodb://localhost:27017';
*/

/* The non-mongoose client constant
const client = new MongoClient(url);
*/
/*// Database Name
const dbName = 'katmaDB';
*/
/* 
non-mongoose connect:

async function main() {
  // Use connect method to connect to the server
  


  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const userData = db.collection('userData');

  // the following code examples can be pasted here...

  return 'done.';
}
*/

/* Adding Documents to the Collection: userData
   _id is the randomly generated Object ID, the userId is a randomized String, the date is the current Date, 
   randomInt is a random integer between 0 and 100. It is possible to add the key: "text" with a string in the Document.
   _id, userID and date are required, randomInt and text aren't required.*/


/*Connection to Localhost server, to katmaDB*/
const mongoConnect = mongoose.connect('mongodb://127.0.0.1:27017/katmaDB')
  .then(console.log("Connected!"))
  .catch((err) => {
  console.log(`OH NO! MONGO CONNECTION ERROR!`);
  console.log(err);
})
var katmaDB = mongoose.connection

setInterval(async function dbFiller(){
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


/*main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
*/