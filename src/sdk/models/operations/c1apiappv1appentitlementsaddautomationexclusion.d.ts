import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    addAutomationExclusionRequest?: shared.AddAutomationExclusionRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse = {
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
     * Empty response with a status code indicating success.
     */
    addAutomationExclusionResponse?: shared.AddAutomationExclusionResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    AddAutomationExclusionRequest?: shared.AddAutomationExclusionRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsAddAutomationExclusionRequestToJSON(c1ApiAppV1AppEntitlementsAddAutomationExclusionRequest: C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest): string;
export declare function c1ApiAppV1AppEntitlementsAddAutomationExclusionRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsAddAutomationExclusionRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AddAutomationExclusionResponse?: shared.AddAutomationExclusionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsAddAutomationExclusionResponseToJSON(c1ApiAppV1AppEntitlementsAddAutomationExclusionResponse: C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse): string;
export declare function c1ApiAppV1AppEntitlementsAddAutomationExclusionResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsAddAutomationExclusionResponse, SDKValidationError>;
