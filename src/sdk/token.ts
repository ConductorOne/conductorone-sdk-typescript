import * as jose from 'jose'
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
        const jsonStr = atob(secret);
        const jwk = JSON.parse(jsonStr);
        const alg = "EdDSA";
        const privateKey = await jose.importJWK(jwk, alg);

        const now = Math.floor(Date.now() / 1000);
        let aud = this.tokenUrl;
        const {host} = new URL(aud);
        if (host) {
            aud = host;
        }

        const token = await new jose.SignJWT({ 'urn:example:claim': true })
            .setProtectedHeader({ alg })
            .setIssuer(this.clientID)
            .setSubject(this.clientID)
            .setAudience(aud)
            .setExpirationTime(now + 120)
            .setIssuedAt(now)
            .setNotBefore(now - 120)
            .sign(privateKey);

        const body = new URLSearchParams({
            client_id: this.clientID,
            grant_type: 'client_credentials',
            client_assertion_type: assertionType,
            client_assertion: token,
        });

        const tokenUrl = new URL('https://' + this.tokenUrl + '/auth/v1/token');

        console.log(tokenUrl.toString());
        console.log(body.toString());

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
