import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditPolicyChanged message.
 */
export type TaskAuditPolicyChanged = {
    /**
     * The newPolicyId field.
     */
    newPolicyId?: string | null | undefined;
    /**
     * The oldPolicyId field.
     */
    oldPolicyId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditPolicyChanged$inboundSchema: z.ZodType<TaskAuditPolicyChanged, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditPolicyChanged$Outbound = {
    newPolicyId?: string | null | undefined;
    oldPolicyId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditPolicyChanged$outboundSchema: z.ZodType<TaskAuditPolicyChanged$Outbound, z.ZodTypeDef, TaskAuditPolicyChanged>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditPolicyChanged$ {
    /** @deprecated use `TaskAuditPolicyChanged$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditPolicyChanged, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditPolicyChanged$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditPolicyChanged$Outbound, z.ZodTypeDef, TaskAuditPolicyChanged>;
    /** @deprecated use `TaskAuditPolicyChanged$Outbound` instead. */
    type Outbound = TaskAuditPolicyChanged$Outbound;
}
export declare function taskAuditPolicyChangedToJSON(taskAuditPolicyChanged: TaskAuditPolicyChanged): string;
export declare function taskAuditPolicyChangedFromJSON(jsonString: string): SafeParseResult<TaskAuditPolicyChanged, SDKValidationError>;
