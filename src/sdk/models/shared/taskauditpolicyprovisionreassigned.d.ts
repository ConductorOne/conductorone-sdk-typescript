import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { User, User$Outbound } from "./user.js";
/**
 * The TaskAuditPolicyProvisionReassigned message.
 */
export type TaskAuditPolicyProvisionReassigned = {
    /**
     * The newPolicyStepId field.
     */
    newPolicyStepId?: string | null | undefined;
    /**
     * The newUsers field.
     */
    newUsers?: Array<string> | null | undefined;
    /**
     * The oldPolicyStepId field.
     */
    oldPolicyStepId?: string | null | undefined;
    /**
     * The users field.
     */
    users?: Array<User> | null | undefined;
};
/** @internal */
export declare const TaskAuditPolicyProvisionReassigned$inboundSchema: z.ZodType<TaskAuditPolicyProvisionReassigned, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditPolicyProvisionReassigned$Outbound = {
    newPolicyStepId?: string | null | undefined;
    newUsers?: Array<string> | null | undefined;
    oldPolicyStepId?: string | null | undefined;
    users?: Array<User$Outbound> | null | undefined;
};
/** @internal */
export declare const TaskAuditPolicyProvisionReassigned$outboundSchema: z.ZodType<TaskAuditPolicyProvisionReassigned$Outbound, z.ZodTypeDef, TaskAuditPolicyProvisionReassigned>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditPolicyProvisionReassigned$ {
    /** @deprecated use `TaskAuditPolicyProvisionReassigned$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditPolicyProvisionReassigned, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditPolicyProvisionReassigned$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditPolicyProvisionReassigned$Outbound, z.ZodTypeDef, TaskAuditPolicyProvisionReassigned>;
    /** @deprecated use `TaskAuditPolicyProvisionReassigned$Outbound` instead. */
    type Outbound = TaskAuditPolicyProvisionReassigned$Outbound;
}
export declare function taskAuditPolicyProvisionReassignedToJSON(taskAuditPolicyProvisionReassigned: TaskAuditPolicyProvisionReassigned): string;
export declare function taskAuditPolicyProvisionReassignedFromJSON(jsonString: string): SafeParseResult<TaskAuditPolicyProvisionReassigned, SDKValidationError>;
