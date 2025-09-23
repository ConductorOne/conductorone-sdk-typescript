import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The SearchAutomationTemplateVersionsRequest message.
 */
export type SearchAutomationTemplateVersionsRequest = {
    /**
     * The automationTemplateId field.
     */
    automationTemplateId?: string | null | undefined;
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAutomationTemplateVersionsRequest$inboundSchema: z.ZodType<SearchAutomationTemplateVersionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAutomationTemplateVersionsRequest$Outbound = {
    automationTemplateId?: string | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAutomationTemplateVersionsRequest$outboundSchema: z.ZodType<SearchAutomationTemplateVersionsRequest$Outbound, z.ZodTypeDef, SearchAutomationTemplateVersionsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAutomationTemplateVersionsRequest$ {
    /** @deprecated use `SearchAutomationTemplateVersionsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAutomationTemplateVersionsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAutomationTemplateVersionsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAutomationTemplateVersionsRequest$Outbound, z.ZodTypeDef, SearchAutomationTemplateVersionsRequest>;
    /** @deprecated use `SearchAutomationTemplateVersionsRequest$Outbound` instead. */
    type Outbound = SearchAutomationTemplateVersionsRequest$Outbound;
}
export declare function searchAutomationTemplateVersionsRequestToJSON(searchAutomationTemplateVersionsRequest: SearchAutomationTemplateVersionsRequest): string;
export declare function searchAutomationTemplateVersionsRequestFromJSON(jsonString: string): SafeParseResult<SearchAutomationTemplateVersionsRequest, SDKValidationError>;
