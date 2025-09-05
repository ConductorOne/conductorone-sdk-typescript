import dotenv from 'dotenv';
import * as fs from 'fs';
import { ConductoroneSDKTypescript } from '../index'

if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
}
if (fs.existsSync(".env.local")) {
  dotenv.config({ path: ".env.local", override: true });
}
console.log('Running setup for Conductorone SDK tests...');

// Ensure environment variables are set
if (!process.env.CONE_API_ENDPOINT || !process.env.CONE_CLIENT_ID || !process.env.CONE_CLIENT_SECRET) {
  throw new Error('Missing required environment variables: CONE_API_ENDPOINT, CONE_CLIENT_ID, CONE_CLIENT_SECRET');
}

const sdk = new ConductoroneSDKTypescript({
  serverURL: `https://${process.env.CONE_API_ENDPOINT}`,
  clientID: process.env.CONE_CLIENT_ID,
  clientSecret: process.env.CONE_CLIENT_SECRET,
});

async function authHeaders() {
  const token = await (sdk as any).getValidToken?.();
  return { Authorization: `Bearer ${token}` } as Record<string, string>;
}

export { sdk, authHeaders };
