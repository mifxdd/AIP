const { MongoClient } = require('mongodb');
const { data } = require('./data');

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionString, { serverSelectionTimeoutMS: 3000 });

async function main() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');

    const database = client.db('tc2024');
    const collection = database.collection('cards');
    const existingCount = await collection.countDocuments();

    if (existingCount > 0) {
      console.log(`tc2024.cards already contains ${existingCount} documents; seed skipped`);
      return;
    }

    const result = await collection.insertMany(data);
    console.log(`Inserted ${result.insertedCount} graphics-card records into tc2024.cards`);
  } finally {
    await client.close();
  }
}

main().catch(function(error) {
  console.error(`MongoDB operation failed: ${error.message}`);
  process.exitCode = 1;
});
