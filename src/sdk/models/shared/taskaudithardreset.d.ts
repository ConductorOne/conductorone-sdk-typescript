import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditHardReset message.
 */
export type TaskAuditHardReset = {
    /**
     * The oldPolicyStepId field.
     */
    oldPolicyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditHardReset$inboundSchema: z.ZodType<TaskAuditHardReset, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditHardReset$Outbound = {
    oldPolicyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditHardReset$outboundSchema: z.ZodType<TaskAuditHardReset$Outbound, z.ZodTypeDef, TaskAuditHardReset>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditHardReset$ {
    /** @deprecated use `TaskAuditHardReset$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditHardReset, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditHardReset$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditHardReset$Outbound, z.ZodTypeDef, TaskAuditHardReset>;
    /** @deprecated use `TaskAuditHardReset$Outbound` instead. */
    type Outbound = TaskAuditHardReset$Outbound;
}
export declare function taskAuditHardResetToJSON(taskAuditHardReset: TaskAuditHardReset): string;
export declare function taskAuditHardResetFromJSON(jsonString: string): SafeParseResult<TaskAuditHardReset, SDKValidationError>;
