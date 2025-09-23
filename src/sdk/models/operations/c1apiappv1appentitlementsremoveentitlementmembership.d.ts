import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    removeEntitlementMembershipRequest?: shared.RemoveEntitlementMembershipRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse = {
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
     * Successful response
     */
    removeEntitlementMembershipResponse?: shared.RemoveEntitlementMembershipResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    RemoveEntitlementMembershipRequest?: shared.RemoveEntitlementMembershipRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequestToJSON(c1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest: C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest): string;
export declare function c1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RemoveEntitlementMembershipResponse?: shared.RemoveEntitlementMembershipResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponseToJSON(c1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse: C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse): string;
export declare function c1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsRemoveEntitlementMembershipResponse, SDKValidationError>;
