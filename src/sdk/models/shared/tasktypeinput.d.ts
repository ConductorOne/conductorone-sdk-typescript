import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskTypeCertifyInput, TaskTypeCertifyInput$Outbound } from "./tasktypecertifyinput.js";
import { TaskTypeGrantInput, TaskTypeGrantInput$Outbound } from "./tasktypegrantinput.js";
import { TaskTypeOffboardingInput, TaskTypeOffboardingInput$Outbound } from "./tasktypeoffboardinginput.js";
import { TaskTypeRevokeInput, TaskTypeRevokeInput$Outbound } from "./tasktyperevokeinput.js";
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
export type TaskTypeInput = {
    certify?: TaskTypeCertifyInput | null | undefined;
    grant?: TaskTypeGrantInput | null | undefined;
    offboarding?: TaskTypeOffboardingInput | null | undefined;
    revoke?: TaskTypeRevokeInput | null | undefined;
};
/** @internal */
export declare const TaskTypeInput$inboundSchema: z.ZodType<TaskTypeInput, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskTypeInput$Outbound = {
    certify?: TaskTypeCertifyInput$Outbound | null | undefined;
    grant?: TaskTypeGrantInput$Outbound | null | undefined;
    offboarding?: TaskTypeOffboardingInput$Outbound | null | undefined;
    revoke?: TaskTypeRevokeInput$Outbound | null | undefined;
};
/** @internal */
export declare const TaskTypeInput$outboundSchema: z.ZodType<TaskTypeInput$Outbound, z.ZodTypeDef, TaskTypeInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeInput$ {
    /** @deprecated use `TaskTypeInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeInput$Outbound, z.ZodTypeDef, TaskTypeInput>;
    /** @deprecated use `TaskTypeInput$Outbound` instead. */
    type Outbound = TaskTypeInput$Outbound;
}
export declare function taskTypeInputToJSON(taskTypeInput: TaskTypeInput): string;
export declare function taskTypeInputFromJSON(jsonString: string): SafeParseResult<TaskTypeInput, SDKValidationError>;
