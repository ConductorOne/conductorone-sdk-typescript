import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditPolicyProvisionError message.
 */
export type TaskAuditPolicyProvisionError = {
    /**
     * The error field.
     */
    error?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditPolicyProvisionError$inboundSchema: z.ZodType<TaskAuditPolicyProvisionError, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditPolicyProvisionError$Outbound = {
    error?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditPolicyProvisionError$outboundSchema: z.ZodType<TaskAuditPolicyProvisionError$Outbound, z.ZodTypeDef, TaskAuditPolicyProvisionError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditPolicyProvisionError$ {
    /** @deprecated use `TaskAuditPolicyProvisionError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditPolicyProvisionError, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditPolicyProvisionError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditPolicyProvisionError$Outbound, z.ZodTypeDef, TaskAuditPolicyProvisionError>;
    /** @deprecated use `TaskAuditPolicyProvisionError$Outbound` instead. */
    type Outbound = TaskAuditPolicyProvisionError$Outbound;
}
export declare function taskAuditPolicyProvisionErrorToJSON(taskAuditPolicyProvisionError: TaskAuditPolicyProvisionError): string;
export declare function taskAuditPolicyProvisionErrorFromJSON(jsonString: string): SafeParseResult<TaskAuditPolicyProvisionError, SDKValidationError>;
