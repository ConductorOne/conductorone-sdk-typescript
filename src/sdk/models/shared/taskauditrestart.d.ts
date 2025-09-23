import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditRestart message.
 */
export type TaskAuditRestart = {
    /**
     * The oldPolicyStepId field.
     */
    oldPolicyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditRestart$inboundSchema: z.ZodType<TaskAuditRestart, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditRestart$Outbound = {
    oldPolicyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditRestart$outboundSchema: z.ZodType<TaskAuditRestart$Outbound, z.ZodTypeDef, TaskAuditRestart>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditRestart$ {
    /** @deprecated use `TaskAuditRestart$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditRestart, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditRestart$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditRestart$Outbound, z.ZodTypeDef, TaskAuditRestart>;
    /** @deprecated use `TaskAuditRestart$Outbound` instead. */
    type Outbound = TaskAuditRestart$Outbound;
}
export declare function taskAuditRestartToJSON(taskAuditRestart: TaskAuditRestart): string;
export declare function taskAuditRestartFromJSON(jsonString: string): SafeParseResult<TaskAuditRestart, SDKValidationError>;
