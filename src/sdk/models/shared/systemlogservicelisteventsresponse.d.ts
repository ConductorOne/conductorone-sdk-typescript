import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The SystemLogServiceListEventsResponse message.
 */
export type SystemLogServiceListEventsResponse = {
    /**
     * List contains an array of JSON OCSF events.
     */
    list?: Array<{
        [k: string]: any;
    }> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SystemLogServiceListEventsResponse$inboundSchema: z.ZodType<SystemLogServiceListEventsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SystemLogServiceListEventsResponse$Outbound = {
    list?: Array<{
        [k: string]: any;
    }> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SystemLogServiceListEventsResponse$outboundSchema: z.ZodType<SystemLogServiceListEventsResponse$Outbound, z.ZodTypeDef, SystemLogServiceListEventsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SystemLogServiceListEventsResponse$ {
    /** @deprecated use `SystemLogServiceListEventsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SystemLogServiceListEventsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SystemLogServiceListEventsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SystemLogServiceListEventsResponse$Outbound, z.ZodTypeDef, SystemLogServiceListEventsResponse>;
    /** @deprecated use `SystemLogServiceListEventsResponse$Outbound` instead. */
    type Outbound = SystemLogServiceListEventsResponse$Outbound;
}
export declare function systemLogServiceListEventsResponseToJSON(systemLogServiceListEventsResponse: SystemLogServiceListEventsResponse): string;
export declare function systemLogServiceListEventsResponseFromJSON(jsonString: string): SafeParseResult<SystemLogServiceListEventsResponse, SDKValidationError>;
