import * as shared from "../sdk/models/shared/index.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://{tenantDomain}.conductor.one"];
export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>) | undefined;
    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number | undefined;
    /**
     * Sets the tenantDomain variable for url substitution
     */
    tenantDomain?: string | undefined;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string | undefined;
    /**
     * Allows overriding the default user agent used by the SDK
     */
    userAgent?: string | undefined;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
    timeoutMs?: number;
    debugLogger?: Logger;
};
export declare function serverURLFromOptions(options: SDKOptions): URL | null;
export declare const SDK_METADATA: {
    readonly language: "typescript";
    readonly openapiDocVersion: "0.1.0-alpha";
    readonly sdkVersion: "2.2.34";
    readonly genVersion: "2.692.0";
    readonly userAgent: "speakeasy-sdk/typescript 2.2.34 2.692.0 0.1.0-alpha conductorone-sdk-typescript";
};
