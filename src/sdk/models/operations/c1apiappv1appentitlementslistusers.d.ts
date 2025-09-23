import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsListUsersRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppEntitlementsListUsersResponse = {
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
     * The ListAppEntitlementUsersResponse message contains a list of results and a nextPageToken if applicable.
     */
    listAppEntitlementUsersResponse?: shared.ListAppEntitlementUsersResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListUsersRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListUsersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsListUsersRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListUsersRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListUsersRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListUsersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsListUsersRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsListUsersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListUsersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListUsersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListUsersRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListUsersRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListUsersRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsListUsersRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsListUsersRequestToJSON(c1ApiAppV1AppEntitlementsListUsersRequest: C1ApiAppV1AppEntitlementsListUsersRequest): string;
export declare function c1ApiAppV1AppEntitlementsListUsersRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsListUsersRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListUsersResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListUsersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsListUsersResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAppEntitlementUsersResponse?: shared.ListAppEntitlementUsersResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListUsersResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListUsersResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListUsersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsListUsersResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsListUsersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListUsersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListUsersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListUsersResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListUsersResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListUsersResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsListUsersResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsListUsersResponseToJSON(c1ApiAppV1AppEntitlementsListUsersResponse: C1ApiAppV1AppEntitlementsListUsersResponse): string;
export declare function c1ApiAppV1AppEntitlementsListUsersResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsListUsersResponse, SDKValidationError>;
