import jose from 'node-jose';
import jwt from 'jsonwebtoken';
import {URLSearchParams} from 'url';
import {AxiosInstance} from "axios";

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
        let jwksigner
        try {
            jwksigner = await jose.JWS.createSign(
                {
                    algorithm: jose.EdDSA,
                    key: this.clientSecret,
                },
                {
                    nonce: {size: 16},
                }
            );
        } catch (e) {
            console.log(`JWK: `, e);
            throw e;
        }

        let aud;
        try {
            aud = this.tokenUrl;
            const {host} = new URL(aud);
            if (host) {
                aud = host;
            }
        } catch (e) {
            console.log(`AUD: `, e);
            throw e;
        }

        let now, claims;
        try {
            now = Math.floor(Date.now() / 1000);
            claims = {
                iss: this.clientID,
                sub: this.clientID,
                aud: aud,
                exp: now + 120,
                iat: now,
                nbf: now - 120,
            };
        } catch (e) {
            console.log(`CLAIMS: `, e);
            throw e;
        }

        let token = "";
        try {
            token = jwt.sign(claims, jwksigner, {
                algorithm: 'EdDSA',
            });
        } catch (e) {
            console.log(`Token: `, e);
            throw e;
        }

        let body
        try {
            body = new URLSearchParams({
                client_id: this.clientID,
                grant_type: 'client_credentials',
                client_assertion_type: assertionType,
                client_assertion: token,
            });
        } catch (e) {
            console.log(`Body: `, e);
            throw e;
        }

        const tokenUrl = new URL('https://' + this.tokenUrl + '/auth/v1/token');

        console.log(tokenUrl.toString());
        console.log(body.toString());

        let resp
        try {
         resp = await this.defaultClient.post(tokenUrl.toString(), {
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        } catch (e) {
            console.log(`Resp: `, e);
            throw e;
        }

        if (resp.status !== 200) {
            throw new Error(`Failed to get token: ${resp.status}`);
        }

        console.log(resp.data);

        return "";
    }
}


