import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest = {
    id: number | null;
};
export type C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse = {
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
    getAutomationExecutionResponse?: shared.GetAutomationExecutionResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest$Outbound;
}
export declare function c1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequestToJSON(c1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest: C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest): string;
export declare function c1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetAutomationExecutionResponse?: shared.GetAutomationExecutionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponseToJSON(c1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse: C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse): string;
export declare function c1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationExecutionServiceGetAutomationExecutionResponse, SDKValidationError>;
