import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Automation, Automation$Outbound } from "./automation.js";
/**
 * The ListAutomationsResponse message.
 */
export type ListAutomationsResponse = {
    /**
     * The list field.
     */
    list?: Array<Automation> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAutomationsResponse$inboundSchema: z.ZodType<ListAutomationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAutomationsResponse$Outbound = {
    list?: Array<Automation$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAutomationsResponse$outboundSchema: z.ZodType<ListAutomationsResponse$Outbound, z.ZodTypeDef, ListAutomationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAutomationsResponse$ {
    /** @deprecated use `ListAutomationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAutomationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAutomationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAutomationsResponse$Outbound, z.ZodTypeDef, ListAutomationsResponse>;
    /** @deprecated use `ListAutomationsResponse$Outbound` instead. */
    type Outbound = ListAutomationsResponse$Outbound;
}
export declare function listAutomationsResponseToJSON(listAutomationsResponse: ListAutomationsResponse): string;
export declare function listAutomationsResponseFromJSON(jsonString: string): SafeParseResult<ListAutomationsResponse, SDKValidationError>;
