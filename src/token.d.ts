import { AxiosInstance } from "axios";
export declare class Token {
    private readonly tokenUrl;
    private readonly clientID;
    private readonly clientSecret;
    private defaultClient;
    constructor(defaultClient: AxiosInstance, tokenUrl: string, clientID: string, clientSecret: string);
    getToken(): Promise<string>;
}
