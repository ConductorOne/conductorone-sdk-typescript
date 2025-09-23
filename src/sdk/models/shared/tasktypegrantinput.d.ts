import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskGrantSource, TaskGrantSource$Outbound } from "./taskgrantsource.js";
/**
 * The TaskTypeGrant message indicates that a task is a grant task and all related details.
 */
export type TaskTypeGrantInput = {
    grantDuration?: string | null | undefined;
    outcomeTime?: Date | null | undefined;
    source?: TaskGrantSource | null | undefined;
};
/** @internal */
export declare const TaskTypeGrantInput$inboundSchema: z.ZodType<TaskTypeGrantInput, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskTypeGrantInput$Outbound = {
    grantDuration?: string | null | undefined;
    outcomeTime?: string | null | undefined;
    source?: TaskGrantSource$Outbound | null | undefined;
};
/** @internal */
export declare const TaskTypeGrantInput$outboundSchema: z.ZodType<TaskTypeGrantInput$Outbound, z.ZodTypeDef, TaskTypeGrantInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeGrantInput$ {
    /** @deprecated use `TaskTypeGrantInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeGrantInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeGrantInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeGrantInput$Outbound, z.ZodTypeDef, TaskTypeGrantInput>;
    /** @deprecated use `TaskTypeGrantInput$Outbound` instead. */
    type Outbound = TaskTypeGrantInput$Outbound;
}
export declare function taskTypeGrantInputToJSON(taskTypeGrantInput: TaskTypeGrantInput): string;
export declare function taskTypeGrantInputFromJSON(jsonString: string): SafeParseResult<TaskTypeGrantInput, SDKValidationError>;
