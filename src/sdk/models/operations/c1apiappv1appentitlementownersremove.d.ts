import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementOwnersRemoveRequest = {
    appId: string | null;
    entitlementId: string | null;
    userId: string | null;
    removeAppEntitlementOwnerRequest?: shared.RemoveAppEntitlementOwnerRequest | undefined;
};
export type C1ApiAppV1AppEntitlementOwnersRemoveResponse = {
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
     * The empty response message for removing an app entitlement owner.
     */
    removeAppEntitlementOwnerResponse?: shared.RemoveAppEntitlementOwnerResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersRemoveRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersRemoveRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementOwnersRemoveRequest$Outbound = {
    app_id: string | null;
    entitlement_id: string | null;
    user_id: string | null;
    RemoveAppEntitlementOwnerRequest?: shared.RemoveAppEntitlementOwnerRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersRemoveRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersRemoveRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersRemoveRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementOwnersRemoveRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersRemoveRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersRemoveRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersRemoveRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersRemoveRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersRemoveRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersRemoveRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementOwnersRemoveRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementOwnersRemoveRequestToJSON(c1ApiAppV1AppEntitlementOwnersRemoveRequest: C1ApiAppV1AppEntitlementOwnersRemoveRequest): string;
export declare function c1ApiAppV1AppEntitlementOwnersRemoveRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementOwnersRemoveRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersRemoveResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersRemoveResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementOwnersRemoveResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RemoveAppEntitlementOwnerResponse?: shared.RemoveAppEntitlementOwnerResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementOwnersRemoveResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersRemoveResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersRemoveResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementOwnersRemoveResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersRemoveResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersRemoveResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersRemoveResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementOwnersRemoveResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementOwnersRemoveResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementOwnersRemoveResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementOwnersRemoveResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementOwnersRemoveResponseToJSON(c1ApiAppV1AppEntitlementOwnersRemoveResponse: C1ApiAppV1AppEntitlementOwnersRemoveResponse): string;
export declare function c1ApiAppV1AppEntitlementOwnersRemoveResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementOwnersRemoveResponse, SDKValidationError>;
