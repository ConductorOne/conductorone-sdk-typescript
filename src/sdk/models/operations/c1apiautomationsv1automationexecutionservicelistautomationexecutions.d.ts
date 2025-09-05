import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse = {
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
    listAutomationExecutionsResponse?: shared.ListAutomationExecutionsResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAutomationExecutionsResponse?: shared.ListAutomationExecutionsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponseToJSON(c1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse: C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse): string;
export declare function c1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationExecutionServiceListAutomationExecutionsResponse, SDKValidationError>;
