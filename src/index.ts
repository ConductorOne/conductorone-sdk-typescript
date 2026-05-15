import { Token } from "./token.js";
import { ConductoroneSDKTypescript as ConductoroneSDKTypescript_orig } from "./sdk/sdk.js";
import { ServerList, SDKOptions } from "./lib/config.js";
import { HTTPClient } from "./lib/http.js";

export interface SDKProps extends SDKOptions {
  clientID?: string;
  clientSecret?: string;
  defaultClient?: HTTPClient;
}

export class ConductoroneSDKTypescript extends ConductoroneSDKTypescript_orig {
  private tokenCache: { token: string; expiresAt: number } | null = null;
  private tokenClient: HTTPClient;
  private token: Token | null = null;

  constructor(props?: SDKProps) {
    const serverIdx = props?.serverIdx ?? 0;
    const serverURL = props?.serverURL || ServerList[serverIdx];

    const httpClient = props?.defaultClient ?? new HTTPClient();

    let getTokenFn: (() => Promise<string>) | null = null;

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

  private async getAndCacheToken(): Promise<void> {
    if (!this.token) return;

    try {
      const bearer = await this.token.getToken();
      this.tokenCache = {
        token: bearer,
        expiresAt: Date.now() + 3600000
      };
    } catch (error) {
      console.error('Failed to get initial token:', error);
      throw error;
    }
  }

  public getCurrentToken(): string | null {
    const now = Date.now();
    if (this.tokenCache && now < this.tokenCache.expiresAt) {
      return this.tokenCache.token;
    }
    return null;
  }

  public async getValidToken(): Promise<string> {
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

export { ServerList } from "./lib/config.js";
