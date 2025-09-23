import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * The SearchAppEntitlementsWithExpiredResponse message contains a list of results and a nextPageToken if applicable.
     */
    searchAppEntitlementsWithExpiredResponse?: shared.SearchAppEntitlementsWithExpiredResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequestToJSON(c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest: C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest): string;
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchAppEntitlementsWithExpiredResponse?: shared.SearchAppEntitlementsWithExpiredResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponseToJSON(c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse: C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse): string;
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsWithExpiredResponse, SDKValidationError>;
