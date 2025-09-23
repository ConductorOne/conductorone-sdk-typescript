import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementOwnersAddRequest = {
    appId: string | null;
    entitlementId: string | null;
    addAppEntitlementOwnerRequest?: shared.AddAppEntitlementOwnerRequest | undefined;
};
export type C1ApiAppV1AppEntitlementOwnersAddResponse = {
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
     * The empty response message for adding an app entitlement owner.
     */
    addAppEntitlementOwnerResponse?: shared.AddAppEntitlementOwnerResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersAddRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersAddRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementOwnersAddRequest$Outbound = {
    app_id: string | null;
    entitlement_id: string | null;
    AddAppEntitlementOwnerRequest?: shared.AddAppEntitlementOwnerRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersAddRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersAddRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersAddRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementOwnersAddRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersAddRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersAddRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersAddRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersAddRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersAddRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersAddRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementOwnersAddRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementOwnersAddRequestToJSON(c1ApiAppV1AppEntitlementOwnersAddRequest: C1ApiAppV1AppEntitlementOwnersAddRequest): string;
export declare function c1ApiAppV1AppEntitlementOwnersAddRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementOwnersAddRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersAddResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersAddResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementOwnersAddResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AddAppEntitlementOwnerResponse?: shared.AddAppEntitlementOwnerResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersAddResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersAddResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersAddResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementOwnersAddResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersAddResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersAddResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersAddResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersAddResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersAddResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersAddResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementOwnersAddResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementOwnersAddResponseToJSON(c1ApiAppV1AppEntitlementOwnersAddResponse: C1ApiAppV1AppEntitlementOwnersAddResponse): string;
export declare function c1ApiAppV1AppEntitlementOwnersAddResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementOwnersAddResponse, SDKValidationError>;
