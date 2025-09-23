import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The sortDirection field.
 */
export declare const SortDirection: {
    readonly SortDirectionUnspecified: "SORT_DIRECTION_UNSPECIFIED";
    readonly SortDirectionAsc: "SORT_DIRECTION_ASC";
    readonly SortDirectionDesc: "SORT_DIRECTION_DESC";
};
/**
 * The sortDirection field.
 */
export type SortDirection = OpenEnum<typeof SortDirection>;
/**
 * The SystemLogServiceListEventsRequest message.
 */
export type SystemLogServiceListEventsRequest = {
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    since?: Date | null | undefined;
    /**
     * The sinceEventUid field.
     */
    sinceEventUid?: string | null | undefined;
    /**
     * The sortDirection field.
     */
    sortDirection?: SortDirection | null | undefined;
    until?: Date | null | undefined;
};
/** @internal */
export declare const SortDirection$inboundSchema: z.ZodType<SortDirection, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SortDirection$outboundSchema: z.ZodType<SortDirection, z.ZodTypeDef, SortDirection>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SortDirection$ {
    /** @deprecated use `SortDirection$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SortDirection, z.ZodTypeDef, unknown>;
    /** @deprecated use `SortDirection$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SortDirection, z.ZodTypeDef, SortDirection>;
}
/** @internal */
export declare const SystemLogServiceListEventsRequest$inboundSchema: z.ZodType<SystemLogServiceListEventsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SystemLogServiceListEventsRequest$Outbound = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    since?: string | null | undefined;
    sinceEventUid?: string | null | undefined;
    sortDirection?: string | null | undefined;
    until?: string | null | undefined;
};
/** @internal */
export declare const SystemLogServiceListEventsRequest$outboundSchema: z.ZodType<SystemLogServiceListEventsRequest$Outbound, z.ZodTypeDef, SystemLogServiceListEventsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SystemLogServiceListEventsRequest$ {
    /** @deprecated use `SystemLogServiceListEventsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SystemLogServiceListEventsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SystemLogServiceListEventsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SystemLogServiceListEventsRequest$Outbound, z.ZodTypeDef, SystemLogServiceListEventsRequest>;
    /** @deprecated use `SystemLogServiceListEventsRequest$Outbound` instead. */
    type Outbound = SystemLogServiceListEventsRequest$Outbound;
}
export declare function systemLogServiceListEventsRequestToJSON(systemLogServiceListEventsRequest: SystemLogServiceListEventsRequest): string;
export declare function systemLogServiceListEventsRequestFromJSON(jsonString: string): SafeParseResult<SystemLogServiceListEventsRequest, SDKValidationError>;
