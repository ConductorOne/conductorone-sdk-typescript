import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskRevokeSourceNonUsage message indicates that the source of the revoke task is due to the grant not being used.
 */
export type TaskRevokeSourceNonUsage = {
    expiresAt?: Date | null | undefined;
    lastLogin?: Date | null | undefined;
};
/** @internal */
export declare const TaskRevokeSourceNonUsage$inboundSchema: z.ZodType<TaskRevokeSourceNonUsage, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskRevokeSourceNonUsage$Outbound = {
    expiresAt?: string | null | undefined;
    lastLogin?: string | null | undefined;
};
/** @internal */
export declare const TaskRevokeSourceNonUsage$outboundSchema: z.ZodType<TaskRevokeSourceNonUsage$Outbound, z.ZodTypeDef, TaskRevokeSourceNonUsage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskRevokeSourceNonUsage$ {
    /** @deprecated use `TaskRevokeSourceNonUsage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskRevokeSourceNonUsage, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskRevokeSourceNonUsage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskRevokeSourceNonUsage$Outbound, z.ZodTypeDef, TaskRevokeSourceNonUsage>;
    /** @deprecated use `TaskRevokeSourceNonUsage$Outbound` instead. */
    type Outbound = TaskRevokeSourceNonUsage$Outbound;
}
export declare function taskRevokeSourceNonUsageToJSON(taskRevokeSourceNonUsage: TaskRevokeSourceNonUsage): string;
export declare function taskRevokeSourceNonUsageFromJSON(jsonString: string): SafeParseResult<TaskRevokeSourceNonUsage, SDKValidationError>;
