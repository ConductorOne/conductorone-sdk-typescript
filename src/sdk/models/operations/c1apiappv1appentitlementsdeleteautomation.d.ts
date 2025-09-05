import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsDeleteAutomationRequest = {
    appId: string | null;
    appEntitlementId: string | null;
    deleteAutomationRequest?: shared.DeleteAutomationRequest | undefined;
};
export type C1ApiAppV1AppEntitlementsDeleteAutomationResponse = {
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
    deleteAutomationResponse?: shared.DeleteAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsDeleteAutomationRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsDeleteAutomationRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
    DeleteAutomationRequest?: shared.DeleteAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsDeleteAutomationRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsDeleteAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsDeleteAutomationRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsDeleteAutomationRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsDeleteAutomationRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsDeleteAutomationRequestToJSON(c1ApiAppV1AppEntitlementsDeleteAutomationRequest: C1ApiAppV1AppEntitlementsDeleteAutomationRequest): string;
export declare function c1ApiAppV1AppEntitlementsDeleteAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsDeleteAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsDeleteAutomationResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsDeleteAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteAutomationResponse?: shared.DeleteAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsDeleteAutomationResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsDeleteAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsDeleteAutomationResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsDeleteAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsDeleteAutomationResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsDeleteAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsDeleteAutomationResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsDeleteAutomationResponseToJSON(c1ApiAppV1AppEntitlementsDeleteAutomationResponse: C1ApiAppV1AppEntitlementsDeleteAutomationResponse): string;
export declare function c1ApiAppV1AppEntitlementsDeleteAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsDeleteAutomationResponse, SDKValidationError>;
