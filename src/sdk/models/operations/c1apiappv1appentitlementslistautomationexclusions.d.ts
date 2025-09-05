import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest = {
    appId: string | null;
    appEntitlementId: string | null;
};
export type C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse = {
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
    listAutomationExclusionsResponse?: shared.ListAutomationExclusionsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest$Outbound = {
    app_id: string | null;
    app_entitlement_id: string | null;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsListAutomationExclusionsRequestToJSON(c1ApiAppV1AppEntitlementsListAutomationExclusionsRequest: C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest): string;
export declare function c1ApiAppV1AppEntitlementsListAutomationExclusionsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsListAutomationExclusionsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAutomationExclusionsResponse?: shared.ListAutomationExclusionsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsListAutomationExclusionsResponseToJSON(c1ApiAppV1AppEntitlementsListAutomationExclusionsResponse: C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse): string;
export declare function c1ApiAppV1AppEntitlementsListAutomationExclusionsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsListAutomationExclusionsResponse, SDKValidationError>;
