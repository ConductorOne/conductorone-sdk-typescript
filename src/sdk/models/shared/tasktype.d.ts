import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskTypeCertify, TaskTypeCertify$Outbound } from "./tasktypecertify.js";
import { TaskTypeGrant, TaskTypeGrant$Outbound } from "./tasktypegrant.js";
import { TaskTypeOffboarding, TaskTypeOffboarding$Outbound } from "./tasktypeoffboarding.js";
import { TaskTypeRevoke, TaskTypeRevoke$Outbound } from "./tasktyperevoke.js";
/**
 * Task Type provides configuration for the type of task: certify, grant, or revoke
 *
 * @remarks
 *
 * This message contains a oneof named task_type. Only a single field of the following list may be set at a time:
 *   - grant
 *   - revoke
 *   - certify
 *   - offboarding
 */
export type TaskType = {
    certify?: TaskTypeCertify | null | undefined;
    grant?: TaskTypeGrant | null | undefined;
    offboarding?: TaskTypeOffboarding | null | undefined;
    revoke?: TaskTypeRevoke | null | undefined;
};
/** @internal */
export declare const TaskType$inboundSchema: z.ZodType<TaskType, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskType$Outbound = {
    certify?: TaskTypeCertify$Outbound | null | undefined;
    grant?: TaskTypeGrant$Outbound | null | undefined;
    offboarding?: TaskTypeOffboarding$Outbound | null | undefined;
    revoke?: TaskTypeRevoke$Outbound | null | undefined;
};
/** @internal */
export declare const TaskType$outboundSchema: z.ZodType<TaskType$Outbound, z.ZodTypeDef, TaskType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskType$ {
    /** @deprecated use `TaskType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskType, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskType$Outbound, z.ZodTypeDef, TaskType>;
    /** @deprecated use `TaskType$Outbound` instead. */
    type Outbound = TaskType$Outbound;
}
export declare function taskTypeToJSON(taskType: TaskType): string;
export declare function taskTypeFromJSON(jsonString: string): SafeParseResult<TaskType, SDKValidationError>;
