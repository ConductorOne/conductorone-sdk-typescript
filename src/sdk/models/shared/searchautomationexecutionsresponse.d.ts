import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationExecutionView, AutomationExecutionView$Outbound } from "./automationexecutionview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type SearchAutomationExecutionsResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The SearchAutomationExecutionsResponse message.
 */
export type SearchAutomationExecutionsResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<SearchAutomationExecutionsResponseExpanded> | null | undefined;
    /**
     * The list field.
     */
    list?: Array<AutomationExecutionView> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAutomationExecutionsResponseExpanded$inboundSchema: z.ZodType<SearchAutomationExecutionsResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAutomationExecutionsResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const SearchAutomationExecutionsResponseExpanded$outboundSchema: z.ZodType<SearchAutomationExecutionsResponseExpanded$Outbound, z.ZodTypeDef, SearchAutomationExecutionsResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAutomationExecutionsResponseExpanded$ {
    /** @deprecated use `SearchAutomationExecutionsResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAutomationExecutionsResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAutomationExecutionsResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAutomationExecutionsResponseExpanded$Outbound, z.ZodTypeDef, SearchAutomationExecutionsResponseExpanded>;
    /** @deprecated use `SearchAutomationExecutionsResponseExpanded$Outbound` instead. */
    type Outbound = SearchAutomationExecutionsResponseExpanded$Outbound;
}
export declare function searchAutomationExecutionsResponseExpandedToJSON(searchAutomationExecutionsResponseExpanded: SearchAutomationExecutionsResponseExpanded): string;
export declare function searchAutomationExecutionsResponseExpandedFromJSON(jsonString: string): SafeParseResult<SearchAutomationExecutionsResponseExpanded, SDKValidationError>;
/** @internal */
export declare const SearchAutomationExecutionsResponse$inboundSchema: z.ZodType<SearchAutomationExecutionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAutomationExecutionsResponse$Outbound = {
    expanded?: Array<SearchAutomationExecutionsResponseExpanded$Outbound> | null | undefined;
    list?: Array<AutomationExecutionView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAutomationExecutionsResponse$outboundSchema: z.ZodType<SearchAutomationExecutionsResponse$Outbound, z.ZodTypeDef, SearchAutomationExecutionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAutomationExecutionsResponse$ {
    /** @deprecated use `SearchAutomationExecutionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAutomationExecutionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAutomationExecutionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAutomationExecutionsResponse$Outbound, z.ZodTypeDef, SearchAutomationExecutionsResponse>;
    /** @deprecated use `SearchAutomationExecutionsResponse$Outbound` instead. */
    type Outbound = SearchAutomationExecutionsResponse$Outbound;
}
export declare function searchAutomationExecutionsResponseToJSON(searchAutomationExecutionsResponse: SearchAutomationExecutionsResponse): string;
export declare function searchAutomationExecutionsResponseFromJSON(jsonString: string): SafeParseResult<SearchAutomationExecutionsResponse, SDKValidationError>;
