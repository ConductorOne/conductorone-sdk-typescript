import jose, {JSONWebKey} from 'node-jose';
import jwt, {JwtPayload} from 'jsonwebtoken';
import {URLSearchParams} from 'url';
import {AxiosInstance} from "axios";

const assertionType = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";

export class Token {
    private tokenUrl: string;
    private clientID: string;
    private clientSecret: string;
    private defaultClient: AxiosInstance;

    constructor(defaultClient: AxiosInstance, tokenUrl: string, clientID: string, clientSecret: string) {
        this.tokenUrl = tokenUrl;
        this.clientID = clientID;
        this.clientSecret = clientSecret;
        this.defaultClient = defaultClient;
    }

    async getToken(): Promise<string> {

        const jwksigner = await jose.JWS.createSign(
            {
                algorithm: jose.EdDSA,
                key: this.clientSecret,
            },
            {
                nonce: {size: 16},
            }
        );

        let aud = this.tokenUrl;
        const {host} = new URL(aud);
        if (host) {
            aud = host;
        }

        const now = Math.floor(Date.now() / 1000);
        const claims: JwtPayload = {
            iss: this.clientID,
            sub: this.clientID,
            aud: aud,
            exp: now + 120,
            iat: now,
            nbf: now - 120,
        };

        const token = jwt.sign(claims, jwksigner, {
            algorithm: 'EdDSA',
        });

        const body = new URLSearchParams({
            client_id: this.clientID,
            grant_type: 'client_credentials',
            client_assertion_type: assertionType,
            client_assertion: token,
        });

        const tokenUrl = new URL('https://' + this.tokenUrl + '/auth/v1/token');

        const resp = await this.defaultClient.post(tokenUrl.toString(), {
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        if (resp.status !== 200) {
            throw new Error(`Failed to get token: ${resp.status}`);
        }

        console.log(resp.data);

        return "";
    }
}


