import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationExecution, AutomationExecution$Outbound } from "./automationexecution.js";
/**
 * The ListAutomationExecutionsResponse message.
 */
export type ListAutomationExecutionsResponse = {
    /**
     * The automationExecutions field.
     */
    automationExecutions?: Array<AutomationExecution> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAutomationExecutionsResponse$inboundSchema: z.ZodType<ListAutomationExecutionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAutomationExecutionsResponse$Outbound = {
    automationExecutions?: Array<AutomationExecution$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAutomationExecutionsResponse$outboundSchema: z.ZodType<ListAutomationExecutionsResponse$Outbound, z.ZodTypeDef, ListAutomationExecutionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAutomationExecutionsResponse$ {
    /** @deprecated use `ListAutomationExecutionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAutomationExecutionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAutomationExecutionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAutomationExecutionsResponse$Outbound, z.ZodTypeDef, ListAutomationExecutionsResponse>;
    /** @deprecated use `ListAutomationExecutionsResponse$Outbound` instead. */
    type Outbound = ListAutomationExecutionsResponse$Outbound;
}
export declare function listAutomationExecutionsResponseToJSON(listAutomationExecutionsResponse: ListAutomationExecutionsResponse): string;
export declare function listAutomationExecutionsResponseFromJSON(jsonString: string): SafeParseResult<ListAutomationExecutionsResponse, SDKValidationError>;
