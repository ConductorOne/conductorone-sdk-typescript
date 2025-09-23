import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditEscalateToEmergencyAccess message.
 */
export type TaskAuditEscalateToEmergencyAccess = {
    /**
     * The oldPolicyId field.
     */
    oldPolicyId?: string | null | undefined;
    /**
     * The oldPolicyStepId field.
     */
    oldPolicyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditEscalateToEmergencyAccess$inboundSchema: z.ZodType<TaskAuditEscalateToEmergencyAccess, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditEscalateToEmergencyAccess$Outbound = {
    oldPolicyId?: string | null | undefined;
    oldPolicyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditEscalateToEmergencyAccess$outboundSchema: z.ZodType<TaskAuditEscalateToEmergencyAccess$Outbound, z.ZodTypeDef, TaskAuditEscalateToEmergencyAccess>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditEscalateToEmergencyAccess$ {
    /** @deprecated use `TaskAuditEscalateToEmergencyAccess$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditEscalateToEmergencyAccess, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditEscalateToEmergencyAccess$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditEscalateToEmergencyAccess$Outbound, z.ZodTypeDef, TaskAuditEscalateToEmergencyAccess>;
    /** @deprecated use `TaskAuditEscalateToEmergencyAccess$Outbound` instead. */
    type Outbound = TaskAuditEscalateToEmergencyAccess$Outbound;
}
export declare function taskAuditEscalateToEmergencyAccessToJSON(taskAuditEscalateToEmergencyAccess: TaskAuditEscalateToEmergencyAccess): string;
export declare function taskAuditEscalateToEmergencyAccessFromJSON(jsonString: string): SafeParseResult<TaskAuditEscalateToEmergencyAccess, SDKValidationError>;
