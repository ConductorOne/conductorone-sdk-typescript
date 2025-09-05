import 'dotenv/config';
import { ConductoroneSDKTypescript } from '../dist/index.js';
export function getClient() {
    const serverURL = process.env.CONE_API_ENDPOINT?.startsWith('http')
        ? process.env.CONE_API_ENDPOINT
        : `https://${process.env.CONE_API_ENDPOINT}`;
    return new ConductoroneSDKTypescript({
        serverURL,
        clientID: process.env.CONE_CLIENT_ID,
        clientSecret: process.env.CONE_CLIENT_SECRET,
    });
}
export async function authHeader(sdk) {
    const token = await sdk.getValidToken();
    return { Authorization: `Bearer ${token}` };
}
