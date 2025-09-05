import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest = {
    id: string | null;
    updateAutomationRequest?: shared.UpdateAutomationRequest | undefined;
};
export type C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse = {
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
    updateAutomationResponse?: shared.UpdateAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest$Outbound = {
    id: string | null;
    UpdateAutomationRequest?: shared.UpdateAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest$Outbound;
}
export declare function c1ApiAutomationsV1AutomationServiceUpdateAutomationRequestToJSON(c1ApiAutomationsV1AutomationServiceUpdateAutomationRequest: C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest): string;
export declare function c1ApiAutomationsV1AutomationServiceUpdateAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationServiceUpdateAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateAutomationResponse?: shared.UpdateAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationServiceUpdateAutomationResponseToJSON(c1ApiAutomationsV1AutomationServiceUpdateAutomationResponse: C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse): string;
export declare function c1ApiAutomationsV1AutomationServiceUpdateAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationServiceUpdateAutomationResponse, SDKValidationError>;
