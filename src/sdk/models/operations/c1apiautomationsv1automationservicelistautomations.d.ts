import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationServiceListAutomationsResponse = {
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
    listAutomationsResponse?: shared.ListAutomationsResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceListAutomationsResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceListAutomationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationServiceListAutomationsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAutomationsResponse?: shared.ListAutomationsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationServiceListAutomationsResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceListAutomationsResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceListAutomationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationServiceListAutomationsResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceListAutomationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceListAutomationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceListAutomationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationServiceListAutomationsResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationServiceListAutomationsResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationServiceListAutomationsResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationServiceListAutomationsResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationServiceListAutomationsResponseToJSON(c1ApiAutomationsV1AutomationServiceListAutomationsResponse: C1ApiAutomationsV1AutomationServiceListAutomationsResponse): string;
export declare function c1ApiAutomationsV1AutomationServiceListAutomationsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationServiceListAutomationsResponse, SDKValidationError>;
