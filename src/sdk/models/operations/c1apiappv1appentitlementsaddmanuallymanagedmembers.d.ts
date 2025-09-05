import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    addManuallyManagedUsersRequest?: shared.AddManuallyManagedUsersRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse = {
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
    manuallyManagedUsersResponse?: shared.ManuallyManagedUsersResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    AddManuallyManagedUsersRequest?: shared.AddManuallyManagedUsersRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequestToJSON(c1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest: C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest): string;
export declare function c1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsAddManuallyManagedMembersRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ManuallyManagedUsersResponse?: shared.ManuallyManagedUsersResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponseToJSON(c1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse: C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse): string;
export declare function c1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsAddManuallyManagedMembersResponse, SDKValidationError>;
