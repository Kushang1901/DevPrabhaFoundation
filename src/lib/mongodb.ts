import { MongoClient, Db } from "mongodb";

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;
let lastDbError: string | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export function getLastDbError(): string | null {
  return lastDbError;
}

export async function getMongoClient(): Promise<MongoClient | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    lastDbError = "MONGODB_URI is not set in server environment variables.";
    console.warn("⚠️", lastDbError);
    return null;
  }

  try {
    lastDbError = null;
    if (process.env.NODE_ENV === "development") {
      if (!global._mongoClientPromise) {
        client = new MongoClient(uri, { serverSelectionTimeoutMS: 8000 });
        global._mongoClientPromise = client.connect();
      }
      return await global._mongoClientPromise;
    } else {
      if (!clientPromise) {
        client = new MongoClient(uri, { serverSelectionTimeoutMS: 8000 });
        clientPromise = client.connect();
      }
      return await clientPromise;
    }
  } catch (error: any) {
    // Reset cached promise on failure so subsequent requests can retry
    global._mongoClientPromise = undefined;
    clientPromise = null;
    lastDbError = error?.message || "Unknown MongoDB connection error";
    console.error("❌ MongoDB connection error:", error);
    return null;
  }
}

export async function getDb(): Promise<Db | null> {
  const dbName = process.env.MONGODB_DB || "devprabha";
  const mClient = await getMongoClient();
  if (!mClient) return null;
  return mClient.db(dbName);
}
