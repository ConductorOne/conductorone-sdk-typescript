import { HTTPClient } from "./lib/http";
export declare class Token {
    private readonly tokenUrl;
    private readonly clientID;
    private readonly clientSecret;
    private httpClient;
    constructor(httpClient: HTTPClient, tokenUrl: string, clientID: string, clientSecret: string);
    getToken(): Promise<string>;
}
