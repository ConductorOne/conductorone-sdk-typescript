import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsUpdateAutomationRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    appEntitlementServiceUpdateAutomationRequest?: shared.AppEntitlementServiceUpdateAutomationRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsUpdateAutomationResponse = {
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
    appEntitlementServiceUpdateAutomationResponse?: shared.AppEntitlementServiceUpdateAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsUpdateAutomationRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsUpdateAutomationRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    AppEntitlementServiceUpdateAutomationRequest?: shared.AppEntitlementServiceUpdateAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsUpdateAutomationRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsUpdateAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsUpdateAutomationRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsUpdateAutomationRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsUpdateAutomationRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsUpdateAutomationRequestToJSON(c1ApiAppV1AppEntitlementsUpdateAutomationRequest: C1ApiAppV1AppEntitlementsUpdateAutomationRequest): string;
export declare function c1ApiAppV1AppEntitlementsUpdateAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsUpdateAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsUpdateAutomationResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsUpdateAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppEntitlementServiceUpdateAutomationResponse?: shared.AppEntitlementServiceUpdateAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsUpdateAutomationResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsUpdateAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsUpdateAutomationResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsUpdateAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsUpdateAutomationResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsUpdateAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsUpdateAutomationResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsUpdateAutomationResponseToJSON(c1ApiAppV1AppEntitlementsUpdateAutomationResponse: C1ApiAppV1AppEntitlementsUpdateAutomationResponse): string;
export declare function c1ApiAppV1AppEntitlementsUpdateAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsUpdateAutomationResponse, SDKValidationError>;
