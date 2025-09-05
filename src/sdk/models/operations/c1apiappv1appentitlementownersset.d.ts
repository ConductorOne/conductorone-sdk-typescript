import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementOwnersSetRequest = {
    appId: string | null;
    entitlementId: string | null;
    setAppEntitlementOwnersRequest?: shared.SetAppEntitlementOwnersRequest | undefined;
};
export type C1ApiAppV1AppEntitlementOwnersSetResponse = {
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
     * The empty response message for setting the app entitlement owners.
     */
    setAppEntitlementOwnersResponse?: shared.SetAppEntitlementOwnersResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersSetRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersSetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementOwnersSetRequest$Outbound = {
    app_id: string | null;
    entitlement_id: string | null;
    SetAppEntitlementOwnersRequest?: shared.SetAppEntitlementOwnersRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersSetRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersSetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersSetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementOwnersSetRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersSetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersSetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersSetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersSetRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersSetRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersSetRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementOwnersSetRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementOwnersSetRequestToJSON(c1ApiAppV1AppEntitlementOwnersSetRequest: C1ApiAppV1AppEntitlementOwnersSetRequest): string;
export declare function c1ApiAppV1AppEntitlementOwnersSetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementOwnersSetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersSetResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersSetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementOwnersSetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SetAppEntitlementOwnersResponse?: shared.SetAppEntitlementOwnersResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersSetResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersSetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersSetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementOwnersSetResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersSetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersSetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersSetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersSetResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersSetResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersSetResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementOwnersSetResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementOwnersSetResponseToJSON(c1ApiAppV1AppEntitlementOwnersSetResponse: C1ApiAppV1AppEntitlementOwnersSetResponse): string;
export declare function c1ApiAppV1AppEntitlementOwnersSetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementOwnersSetResponse, SDKValidationError>;
