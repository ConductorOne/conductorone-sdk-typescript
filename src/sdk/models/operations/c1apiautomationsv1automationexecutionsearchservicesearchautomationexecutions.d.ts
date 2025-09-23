import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse = {
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
    searchAutomationExecutionsResponse?: shared.SearchAutomationExecutionsResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchAutomationExecutionsResponse?: shared.SearchAutomationExecutionsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponseToJSON(c1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse: C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse): string;
export declare function c1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationExecutionSearchServiceSearchAutomationExecutionsResponse, SDKValidationError>;
