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
  const db = client.db(dbName);
  const userData = db.collection('userData');

  // the following code examples can be pasted here...

  return 'done.';
}
// Adding Documents to the Collection: userData
setInterval( function dbFiller{
    const randomInt = Math.floor(Math.random()*101)
    const doc =
    userData.insertOne
    
}, 2000);

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
