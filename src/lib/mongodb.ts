import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "devprabha";

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getMongoClient(): Promise<MongoClient | null> {
  if (!uri) {
    console.warn("⚠️ MONGODB_URI is not set in environment variables.");
    return null;
  }

  try {
    if (process.env.NODE_ENV === "development") {
      if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
      }
      return await global._mongoClientPromise;
    } else {
      if (!clientPromise) {
        client = new MongoClient(uri);
        clientPromise = client.connect();
      }
      return await clientPromise;
    }
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    return null;
  }
}

export async function getDb(): Promise<Db | null> {
  const mClient = await getMongoClient();
  if (!mClient) return null;
  return mClient.db(dbName);
}
