import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskGrantSource message tracks which external URL was the source of the specificed grant ticket.
 */
export type TaskGrantSource = {
    /**
     * The ID of the conversation that created this ticket
     */
    conversationId?: string | null | undefined;
    /**
     * The external url source of the grant ticket.
     */
    externalUrl?: string | null | undefined;
    /**
     * The integration id for the source of tickets.
     */
    integrationId?: string | null | undefined;
    /**
     * the request id for the grant ticket if the source is external
     */
    requestId?: string | null | undefined;
};
/** @internal */
export declare const TaskGrantSource$inboundSchema: z.ZodType<TaskGrantSource, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskGrantSource$Outbound = {
    conversationId?: string | null | undefined;
    externalUrl?: string | null | undefined;
    integrationId?: string | null | undefined;
    requestId?: string | null | undefined;
};
/** @internal */
export declare const TaskGrantSource$outboundSchema: z.ZodType<TaskGrantSource$Outbound, z.ZodTypeDef, TaskGrantSource>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskGrantSource$ {
    /** @deprecated use `TaskGrantSource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskGrantSource, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskGrantSource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskGrantSource$Outbound, z.ZodTypeDef, TaskGrantSource>;
    /** @deprecated use `TaskGrantSource$Outbound` instead. */
    type Outbound = TaskGrantSource$Outbound;
}
export declare function taskGrantSourceToJSON(taskGrantSource: TaskGrantSource): string;
export declare function taskGrantSourceFromJSON(jsonString: string): SafeParseResult<TaskGrantSource, SDKValidationError>;
