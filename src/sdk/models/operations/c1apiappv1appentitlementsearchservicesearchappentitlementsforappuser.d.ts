import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest = {
    appId: string | null;
    appUserId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse = {
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
     * The ListAppEntitlementsResponse message contains a list of results and a nextPageToken if applicable.
     */
    listAppEntitlementsResponse?: shared.ListAppEntitlementsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest$Outbound = {
    app_id: string | null;
    app_user_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequestToJSON(c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest: C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest): string;
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAppEntitlementsResponse?: shared.ListAppEntitlementsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponseToJSON(c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse: C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse): string;
export declare function c1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementSearchServiceSearchAppEntitlementsForAppUserResponse, SDKValidationError>;
