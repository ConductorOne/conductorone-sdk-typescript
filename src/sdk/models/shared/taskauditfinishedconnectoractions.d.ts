import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditFinishedConnectorActions message.
 */
export type TaskAuditFinishedConnectorActions = {
    /**
     * The policyStepId field.
     */
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditFinishedConnectorActions$inboundSchema: z.ZodType<TaskAuditFinishedConnectorActions, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditFinishedConnectorActions$Outbound = {
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditFinishedConnectorActions$outboundSchema: z.ZodType<TaskAuditFinishedConnectorActions$Outbound, z.ZodTypeDef, TaskAuditFinishedConnectorActions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditFinishedConnectorActions$ {
    /** @deprecated use `TaskAuditFinishedConnectorActions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditFinishedConnectorActions, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditFinishedConnectorActions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditFinishedConnectorActions$Outbound, z.ZodTypeDef, TaskAuditFinishedConnectorActions>;
    /** @deprecated use `TaskAuditFinishedConnectorActions$Outbound` instead. */
    type Outbound = TaskAuditFinishedConnectorActions$Outbound;
}
export declare function taskAuditFinishedConnectorActionsToJSON(taskAuditFinishedConnectorActions: TaskAuditFinishedConnectorActions): string;
export declare function taskAuditFinishedConnectorActionsFromJSON(jsonString: string): SafeParseResult<TaskAuditFinishedConnectorActions, SDKValidationError>;
