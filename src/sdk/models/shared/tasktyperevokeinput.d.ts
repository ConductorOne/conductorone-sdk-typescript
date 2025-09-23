import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskRevokeSource, TaskRevokeSource$Outbound } from "./taskrevokesource.js";
/**
 * The TaskTypeRevoke message indicates that a task is a revoke task and all related details.
 */
export type TaskTypeRevokeInput = {
    outcomeTime?: Date | null | undefined;
    source?: TaskRevokeSource | null | undefined;
};
/** @internal */
export declare const TaskTypeRevokeInput$inboundSchema: z.ZodType<TaskTypeRevokeInput, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskTypeRevokeInput$Outbound = {
    outcomeTime?: string | null | undefined;
    source?: TaskRevokeSource$Outbound | null | undefined;
};
/** @internal */
export declare const TaskTypeRevokeInput$outboundSchema: z.ZodType<TaskTypeRevokeInput$Outbound, z.ZodTypeDef, TaskTypeRevokeInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeRevokeInput$ {
    /** @deprecated use `TaskTypeRevokeInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeRevokeInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeRevokeInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeRevokeInput$Outbound, z.ZodTypeDef, TaskTypeRevokeInput>;
    /** @deprecated use `TaskTypeRevokeInput$Outbound` instead. */
    type Outbound = TaskTypeRevokeInput$Outbound;
}
export declare function taskTypeRevokeInputToJSON(taskTypeRevokeInput: TaskTypeRevokeInput): string;
export declare function taskTypeRevokeInputFromJSON(jsonString: string): SafeParseResult<TaskTypeRevokeInput, SDKValidationError>;
