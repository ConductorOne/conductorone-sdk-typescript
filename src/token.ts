import * as jose from 'jose'
import {URLSearchParams} from 'url';
import {AxiosInstance} from "axios";
import * as crypto from 'crypto';

const assertionType = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";

export class Token {
    private readonly tokenUrl: string;
    private readonly clientID: string;
    private readonly clientSecret: string;
    private defaultClient: AxiosInstance;

    constructor(defaultClient: AxiosInstance, tokenUrl: string, clientID: string, clientSecret: string) {
        this.tokenUrl = tokenUrl;
        this.clientID = clientID;
        this.clientSecret = clientSecret;
        this.defaultClient = defaultClient;
    }

    async getToken(): Promise<string> {
        const [name, domain, version, secret] = this.clientSecret.split(':');
        if (name !== "secret-token") {
            throw new Error("not a secret token");
        }
        if (domain !== "conductorone.com") {
            throw new Error("wrong domain");
        }
        if (version !== "v1") {
            throw new Error("incorrect client-secret version");
        }
        const atobFn = (globalThis as any).atob;
        const jsonStr = typeof atobFn === 'function'
            ? atobFn(secret)
            : Buffer.from(secret, 'base64').toString('utf8');
        const jwk = JSON.parse(jsonStr);
        const alg = "EdDSA";
        const privateKey = await jose.importJWK(jwk, alg);

        let aud = this.tokenUrl;
        // Remove any port number from the audience
        const { hostname } = new URL(aud);
        if (hostname) {
            aud = hostname;
        }

        const now = Math.floor(Date.now() / 1000);
        const nonce = new Uint8Array(16);
        // Use Node.js crypto in Node.js environment, Web Crypto API in browser
        if (typeof globalThis.crypto !== 'undefined' && globalThis.crypto.getRandomValues) {
            globalThis.crypto.getRandomValues(nonce);
        } else {
            crypto.randomFillSync(nonce);
        }

        const token = new jose.SignJWT({})
            .setProtectedHeader({ alg, nonce: [...nonce].map(x => x.toString(16).padStart(2, '0')).join('') })
            .setIssuer(this.clientID)
            .setSubject(this.clientID)
            .setAudience([aud])
            .setExpirationTime(now + 120)
            .setIssuedAt(now)
            .setNotBefore(now - 120);
        const tokenStr = await token.sign(privateKey);
        const body = {
            client_id: this.clientID,
            grant_type: 'client_credentials',
            client_assertion_type: assertionType,
            client_assertion: tokenStr,
        };

        const tokenUrl = new URL(`${this.tokenUrl}/auth/v1/token`);

        const resp = await this.defaultClient.post(
            tokenUrl.toString(),
            new URLSearchParams(body),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

        if (resp.status !== 200) {
            throw new Error(`Failed to get token: ${resp.status}`);
        }

        const raw = String(resp.data?.access_token ?? "");
        const normalized = raw.replace(/^\s*bearer\s*:*/i, "").trim();
        return normalized;
    }
}
