import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskRevokeSourceExpired message indicates that the source of the revoke task is due to a grant expiring.
 */
export type TaskRevokeSourceExpired = {
    expiredAt?: Date | null | undefined;
};
/** @internal */
export declare const TaskRevokeSourceExpired$inboundSchema: z.ZodType<TaskRevokeSourceExpired, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskRevokeSourceExpired$Outbound = {
    expiredAt?: string | null | undefined;
};
/** @internal */
export declare const TaskRevokeSourceExpired$outboundSchema: z.ZodType<TaskRevokeSourceExpired$Outbound, z.ZodTypeDef, TaskRevokeSourceExpired>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskRevokeSourceExpired$ {
    /** @deprecated use `TaskRevokeSourceExpired$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskRevokeSourceExpired, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskRevokeSourceExpired$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskRevokeSourceExpired$Outbound, z.ZodTypeDef, TaskRevokeSourceExpired>;
    /** @deprecated use `TaskRevokeSourceExpired$Outbound` instead. */
    type Outbound = TaskRevokeSourceExpired$Outbound;
}
export declare function taskRevokeSourceExpiredToJSON(taskRevokeSourceExpired: TaskRevokeSourceExpired): string;
export declare function taskRevokeSourceExpiredFromJSON(jsonString: string): SafeParseResult<TaskRevokeSourceExpired, SDKValidationError>;
