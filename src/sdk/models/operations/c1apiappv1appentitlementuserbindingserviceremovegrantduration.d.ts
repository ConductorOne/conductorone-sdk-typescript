import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    appUserId: string | null;
    removeGrantDurationRequest?: shared.RemoveGrantDurationRequest | undefined;
};
export type C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse = {
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
    removeGrantDurationResponse?: shared.RemoveGrantDurationResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    app_user_id: string | null;
    RemoveGrantDurationRequest?: shared.RemoveGrantDurationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequestToJSON(c1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest: C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest): string;
export declare function c1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RemoveGrantDurationResponse?: shared.RemoveGrantDurationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponseToJSON(c1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse: C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse): string;
export declare function c1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementUserBindingServiceRemoveGrantDurationResponse, SDKValidationError>;
