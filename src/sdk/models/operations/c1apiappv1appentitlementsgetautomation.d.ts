import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsGetAutomationRequest = {
    appId: string | null;
    appEntitlementId: string | null;
};
export type C1ApiAppV1AppEntitlementsGetAutomationResponse = {
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
    appEntitlementServiceGetAutomationResponse?: shared.AppEntitlementServiceGetAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsGetAutomationRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsGetAutomationRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsGetAutomationRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsGetAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsGetAutomationRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsGetAutomationRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsGetAutomationRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsGetAutomationRequestToJSON(c1ApiAppV1AppEntitlementsGetAutomationRequest: C1ApiAppV1AppEntitlementsGetAutomationRequest): string;
export declare function c1ApiAppV1AppEntitlementsGetAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsGetAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsGetAutomationResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsGetAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppEntitlementServiceGetAutomationResponse?: shared.AppEntitlementServiceGetAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsGetAutomationResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsGetAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsGetAutomationResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsGetAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsGetAutomationResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsGetAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsGetAutomationResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsGetAutomationResponseToJSON(c1ApiAppV1AppEntitlementsGetAutomationResponse: C1ApiAppV1AppEntitlementsGetAutomationResponse): string;
export declare function c1ApiAppV1AppEntitlementsGetAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsGetAutomationResponse, SDKValidationError>;
