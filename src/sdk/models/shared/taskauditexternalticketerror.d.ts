import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditExternalTicketError message.
 */
export type TaskAuditExternalTicketError = {
    /**
     * The errorMessage field.
     */
    errorMessage?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditExternalTicketError$inboundSchema: z.ZodType<TaskAuditExternalTicketError, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditExternalTicketError$Outbound = {
    errorMessage?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditExternalTicketError$outboundSchema: z.ZodType<TaskAuditExternalTicketError$Outbound, z.ZodTypeDef, TaskAuditExternalTicketError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditExternalTicketError$ {
    /** @deprecated use `TaskAuditExternalTicketError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditExternalTicketError, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditExternalTicketError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditExternalTicketError$Outbound, z.ZodTypeDef, TaskAuditExternalTicketError>;
    /** @deprecated use `TaskAuditExternalTicketError$Outbound` instead. */
    type Outbound = TaskAuditExternalTicketError$Outbound;
}
export declare function taskAuditExternalTicketErrorToJSON(taskAuditExternalTicketError: TaskAuditExternalTicketError): string;
export declare function taskAuditExternalTicketErrorFromJSON(jsonString: string): SafeParseResult<TaskAuditExternalTicketError, SDKValidationError>;
