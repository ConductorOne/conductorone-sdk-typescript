import { Token } from "./token";
import { ConductoroneSDKTypescript as ConductoroneSDKTypescript_orig } from "./sdk/sdk";
import { ServerList } from "./lib/config";
import { HTTPClient } from "./lib/http";
export class ConductoroneSDKTypescript extends ConductoroneSDKTypescript_orig {
    tokenCache = null;
    tokenClient;
    token = null;
    constructor(props) {
        const serverIdx = props?.serverIdx ?? 0;
        const serverURL = props?.serverURL || ServerList[serverIdx];
        const httpClient = props?.defaultClient ?? new HTTPClient();
        let getTokenFn = null;
        super({
            serverURL,
            httpClient,
            userAgent: "conductorone-sdk-typescript/1.1.0",
            ...(props?.debugLogger && { debugLogger: props.debugLogger }),
            security: async () => {
                const token = getTokenFn ? await getTokenFn() : "";
                return {
                    bearerAuth: token,
                    oauth: token,
                };
            },
        });
        this.tokenClient = httpClient;
        if (props?.clientID && props?.clientSecret) {
            this.token = new Token(this.tokenClient, serverURL, props.clientID, props.clientSecret);
            getTokenFn = this.getValidToken.bind(this);
        }
    }
    async getAndCacheToken() {
        if (!this.token)
            return;
        try {
            const bearer = await this.token.getToken();
            this.tokenCache = {
                token: bearer,
                expiresAt: Date.now() + 3600000
            };
        }
        catch (error) {
            console.error('Failed to get initial token:', error);
            throw error;
        }
    }
    getCurrentToken() {
        const now = Date.now();
        if (this.tokenCache && now < this.tokenCache.expiresAt) {
            return this.tokenCache.token;
        }
        return null;
    }
    async getValidToken() {
        const now = Date.now();
        if (!this.tokenCache || now >= this.tokenCache.expiresAt) {
            await this.getAndCacheToken();
        }
        if (!this.tokenCache?.token) {
            throw new Error('Failed to obtain auth token');
        }
        return this.tokenCache.token;
    }
}
export { ServerList } from "./lib/config";
