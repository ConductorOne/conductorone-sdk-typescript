import { ConductoroneSDKTypescript as ConductoroneSDKTypescript_orig } from "./sdk/sdk";
import { SDKOptions } from "./lib/config";
import { HTTPClient } from "./lib/http";
export interface SDKProps extends SDKOptions {
    clientID?: string;
    clientSecret?: string;
    defaultClient?: HTTPClient;
}
export declare class ConductoroneSDKTypescript extends ConductoroneSDKTypescript_orig {
    private tokenCache;
    private tokenClient;
    private token;
    constructor(props?: SDKProps);
    private getAndCacheToken;
    getCurrentToken(): string | null;
    getValidToken(): Promise<string>;
}
export { ServerList } from "./lib/config";
