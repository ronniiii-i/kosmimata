const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("local").command({ ping: 1 });
    console.log("Connected successfully to server");

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// const findResult = async function find() {
//     await startup_log.find({
//         name: "Roni",
//       });
//     await cursor.forEach(console.dir);
// }