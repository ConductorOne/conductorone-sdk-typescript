import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationServiceCreateAutomationResponse = {
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
    createAutomationResponse?: shared.CreateAutomationResponseInput | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceCreateAutomationResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceCreateAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationServiceCreateAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateAutomationResponse?: shared.CreateAutomationResponseInput$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceCreateAutomationResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceCreateAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceCreateAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationServiceCreateAutomationResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceCreateAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceCreateAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceCreateAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceCreateAutomationResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceCreateAutomationResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceCreateAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationServiceCreateAutomationResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationServiceCreateAutomationResponseToJSON(c1ApiAutomationsV1AutomationServiceCreateAutomationResponse: C1ApiAutomationsV1AutomationServiceCreateAutomationResponse): string;
export declare function c1ApiAutomationsV1AutomationServiceCreateAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationServiceCreateAutomationResponse, SDKValidationError>;
