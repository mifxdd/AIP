const { MongoClient } = require('mongodb');

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionString, { serverSelectionTimeoutMS: 3000 });

async function main() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');

    const database = client.db('test2024');
    const collection = database.collection('documents');
    const result = await collection.insertMany([{ value: 1 }, { value: 2 }, { value: 3 }]);

    console.log(`Inserted ${result.insertedCount} documents into test2024.documents`);
  } finally {
    await client.close();
  }
}

main().catch(function(error) {
  console.error(`MongoDB operation failed: ${error.message}`);
  process.exitCode = 1;
});
