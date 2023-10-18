import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { developers?: mongoDB.Collection } = {}

export async function connectToDatabase() {
  dotenv.config();
  const DB_CONN_STRING = process.env.DATABASE_URL
  const DB_NAME = process.env.DB_NAME
  const COLLECTION_NAME = process.env.COLLECTION_NAME

  if (!DB_CONN_STRING || !DB_NAME || !COLLECTION_NAME) return;
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(DB_CONN_STRING);

  await client.connect();

  const db: mongoDB.Db = client.db(DB_NAME);

  const developersCollection: mongoDB.Collection = db.collection(COLLECTION_NAME);

  collections.developers = developersCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${developersCollection.collectionName}`);
}
