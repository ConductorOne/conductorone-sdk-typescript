import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    removeAutomationExclusionRequest?: shared.RemoveAutomationExclusionRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse = {
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
    removeAutomationExclusionResponse?: shared.RemoveAutomationExclusionResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    RemoveAutomationExclusionRequest?: shared.RemoveAutomationExclusionRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequestToJSON(c1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest: C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest): string;
export declare function c1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsRemoveAutomationExclusionRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RemoveAutomationExclusionResponse?: shared.RemoveAutomationExclusionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponseToJSON(c1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse: C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse): string;
export declare function c1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsRemoveAutomationExclusionResponse, SDKValidationError>;
