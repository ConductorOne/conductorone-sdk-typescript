import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    identityUserId: string | null;
};
export type C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse = {
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
    listAppUsersForIdentityWithGrantResponse?: shared.ListAppUsersForIdentityWithGrantResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    identity_user_id: string | null;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequestToJSON(c1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest: C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest): string;
export declare function c1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAppUsersForIdentityWithGrantResponse?: shared.ListAppUsersForIdentityWithGrantResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponseToJSON(c1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse: C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse): string;
export declare function c1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse, SDKValidationError>;
