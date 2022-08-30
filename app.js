/*var time = 0;

function timeadder(){
    time += 2;
    console.log(time + " seconds have passed");
}

setInterval(timeadder, 2000);
*/

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'katmaDB';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  var db = client.db(dbName);
  var userData = db.collection('userData');

  // the following code examples can be pasted here...

  return 'done.';
}
/* Adding Documents to the Collection: userData
   The name is a randomized String, the Date is the current Date, 
   randomInt is a random integer between 0 and 100
*/
/*setInterval(async function dbFiller(){
    //const randomInt = Math.floor(Math.random()*101)
    const doc = {
        "name": Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        "date" : new Date(new Date().setTime(Date.now() + 2 * 60 * 60 * 1000)), 
        "randomInt" : Math.floor(Math.random()*101)
    };
    const result = await db.userData.insertOne(doc);
    console.log("A document was inserted with the name: ${result.name}")
}, 5000);
*/
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
