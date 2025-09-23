import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementOwnersListRequest = {
    appId: string | null;
    entitlementId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppEntitlementOwnersListResponse = {
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
     * The response message for listing app entitlement owners.
     */
    listAppEntitlementOwnersResponse?: shared.ListAppEntitlementOwnersResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersListRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementOwnersListRequest$Outbound = {
    app_id: string | null;
    entitlement_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersListRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementOwnersListRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersListRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersListRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementOwnersListRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementOwnersListRequestToJSON(c1ApiAppV1AppEntitlementOwnersListRequest: C1ApiAppV1AppEntitlementOwnersListRequest): string;
export declare function c1ApiAppV1AppEntitlementOwnersListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementOwnersListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersListResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementOwnersListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAppEntitlementOwnersResponse?: shared.ListAppEntitlementOwnersResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersListResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementOwnersListResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersListResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersListResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementOwnersListResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementOwnersListResponseToJSON(c1ApiAppV1AppEntitlementOwnersListResponse: C1ApiAppV1AppEntitlementOwnersListResponse): string;
export declare function c1ApiAppV1AppEntitlementOwnersListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementOwnersListResponse, SDKValidationError>;
