import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationServiceGetAutomationRequest = {
    id: string | null;
};
export type C1ApiAutomationsV1AutomationServiceGetAutomationResponse = {
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
    getAutomationResponse?: shared.GetAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceGetAutomationRequest$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceGetAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationServiceGetAutomationRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceGetAutomationRequest$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceGetAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceGetAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationServiceGetAutomationRequest$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceGetAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceGetAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceGetAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceGetAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceGetAutomationRequest>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceGetAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationServiceGetAutomationRequest$Outbound;
}
export declare function c1ApiAutomationsV1AutomationServiceGetAutomationRequestToJSON(c1ApiAutomationsV1AutomationServiceGetAutomationRequest: C1ApiAutomationsV1AutomationServiceGetAutomationRequest): string;
export declare function c1ApiAutomationsV1AutomationServiceGetAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationServiceGetAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceGetAutomationResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceGetAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationServiceGetAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetAutomationResponse?: shared.GetAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceGetAutomationResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceGetAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceGetAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationServiceGetAutomationResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceGetAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceGetAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceGetAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceGetAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceGetAutomationResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceGetAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationServiceGetAutomationResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationServiceGetAutomationResponseToJSON(c1ApiAutomationsV1AutomationServiceGetAutomationResponse: C1ApiAutomationsV1AutomationServiceGetAutomationResponse): string;
export declare function c1ApiAutomationsV1AutomationServiceGetAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationServiceGetAutomationResponse, SDKValidationError>;
