import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditStartedConnectorActions message.
 */
export type TaskAuditStartedConnectorActions = {
    /**
     * The policyStepId field.
     */
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditStartedConnectorActions$inboundSchema: z.ZodType<TaskAuditStartedConnectorActions, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditStartedConnectorActions$Outbound = {
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditStartedConnectorActions$outboundSchema: z.ZodType<TaskAuditStartedConnectorActions$Outbound, z.ZodTypeDef, TaskAuditStartedConnectorActions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditStartedConnectorActions$ {
    /** @deprecated use `TaskAuditStartedConnectorActions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditStartedConnectorActions, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditStartedConnectorActions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditStartedConnectorActions$Outbound, z.ZodTypeDef, TaskAuditStartedConnectorActions>;
    /** @deprecated use `TaskAuditStartedConnectorActions$Outbound` instead. */
    type Outbound = TaskAuditStartedConnectorActions$Outbound;
}
export declare function taskAuditStartedConnectorActionsToJSON(taskAuditStartedConnectorActions: TaskAuditStartedConnectorActions): string;
export declare function taskAuditStartedConnectorActionsFromJSON(jsonString: string): SafeParseResult<TaskAuditStartedConnectorActions, SDKValidationError>;
