import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskTypeOffboarding message.
 */
export type TaskTypeOffboardingInput = {
    outcomeTime?: Date | null | undefined;
};
/** @internal */
export declare const TaskTypeOffboardingInput$inboundSchema: z.ZodType<TaskTypeOffboardingInput, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskTypeOffboardingInput$Outbound = {
    outcomeTime?: string | null | undefined;
};
/** @internal */
export declare const TaskTypeOffboardingInput$outboundSchema: z.ZodType<TaskTypeOffboardingInput$Outbound, z.ZodTypeDef, TaskTypeOffboardingInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeOffboardingInput$ {
    /** @deprecated use `TaskTypeOffboardingInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeOffboardingInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeOffboardingInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeOffboardingInput$Outbound, z.ZodTypeDef, TaskTypeOffboardingInput>;
    /** @deprecated use `TaskTypeOffboardingInput$Outbound` instead. */
    type Outbound = TaskTypeOffboardingInput$Outbound;
}
export declare function taskTypeOffboardingInputToJSON(taskTypeOffboardingInput: TaskTypeOffboardingInput): string;
export declare function taskTypeOffboardingInputFromJSON(jsonString: string): SafeParseResult<TaskTypeOffboardingInput, SDKValidationError>;
