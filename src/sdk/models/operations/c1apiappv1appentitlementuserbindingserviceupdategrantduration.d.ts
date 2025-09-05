import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    appUserId: string | null;
    updateGrantDurationRequest?: shared.UpdateGrantDurationRequest | undefined;
};
export type C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse = {
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
    updateGrantDurationResponse?: shared.UpdateGrantDurationResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    app_user_id: string | null;
    UpdateGrantDurationRequest?: shared.UpdateGrantDurationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequestToJSON(c1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest: C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest): string;
export declare function c1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateGrantDurationResponse?: shared.UpdateGrantDurationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponseToJSON(c1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse: C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse): string;
export declare function c1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementUserBindingServiceUpdateGrantDurationResponse, SDKValidationError>;
