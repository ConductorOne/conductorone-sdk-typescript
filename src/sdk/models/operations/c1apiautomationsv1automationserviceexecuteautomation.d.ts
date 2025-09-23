import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest = {
    id: string | null;
    executeAutomationRequest?: shared.ExecuteAutomationRequest | undefined;
};
export type C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse = {
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
    executeAutomationResponse?: shared.ExecuteAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest$Outbound = {
    id: string | null;
    ExecuteAutomationRequest?: shared.ExecuteAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest$Outbound;
}
export declare function c1ApiAutomationsV1AutomationServiceExecuteAutomationRequestToJSON(c1ApiAutomationsV1AutomationServiceExecuteAutomationRequest: C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest): string;
export declare function c1ApiAutomationsV1AutomationServiceExecuteAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationServiceExecuteAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ExecuteAutomationResponse?: shared.ExecuteAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationServiceExecuteAutomationResponseToJSON(c1ApiAutomationsV1AutomationServiceExecuteAutomationResponse: C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse): string;
export declare function c1ApiAutomationsV1AutomationServiceExecuteAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationServiceExecuteAutomationResponse, SDKValidationError>;
