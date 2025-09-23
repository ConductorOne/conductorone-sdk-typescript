import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse = {
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
    searchAutomationTemplateVersionsResponse?: shared.SearchAutomationTemplateVersionsResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchAutomationTemplateVersionsResponse?: shared.SearchAutomationTemplateVersionsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponseToJSON(c1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse: C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse): string;
export declare function c1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationSearchServiceSearchAutomationTemplateVersionsResponse, SDKValidationError>;
