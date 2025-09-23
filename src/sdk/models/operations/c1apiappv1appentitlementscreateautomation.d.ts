import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsCreateAutomationRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    createAutomationRequest?: shared.CreateAutomationRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsCreateAutomationResponse = {
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
    createAutomationResponse?: shared.CreateAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsCreateAutomationRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsCreateAutomationRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    CreateAutomationRequest?: shared.CreateAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsCreateAutomationRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsCreateAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsCreateAutomationRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsCreateAutomationRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsCreateAutomationRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsCreateAutomationRequestToJSON(c1ApiAppV1AppEntitlementsCreateAutomationRequest: C1ApiAppV1AppEntitlementsCreateAutomationRequest): string;
export declare function c1ApiAppV1AppEntitlementsCreateAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsCreateAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsCreateAutomationResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsCreateAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateAutomationResponse?: shared.CreateAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsCreateAutomationResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsCreateAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsCreateAutomationResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsCreateAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsCreateAutomationResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsCreateAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsCreateAutomationResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsCreateAutomationResponseToJSON(c1ApiAppV1AppEntitlementsCreateAutomationResponse: C1ApiAppV1AppEntitlementsCreateAutomationResponse): string;
export declare function c1ApiAppV1AppEntitlementsCreateAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsCreateAutomationResponse, SDKValidationError>;
