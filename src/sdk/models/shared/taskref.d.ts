import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This object references a task by ID.
 */
export type TaskRef = {
    /**
     * The ID of the referenced Task
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const TaskRef$inboundSchema: z.ZodType<TaskRef, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskRef$Outbound = {
    id?: string | null | undefined;
};
/** @internal */
export declare const TaskRef$outboundSchema: z.ZodType<TaskRef$Outbound, z.ZodTypeDef, TaskRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskRef$ {
    /** @deprecated use `TaskRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskRef$Outbound, z.ZodTypeDef, TaskRef>;
    /** @deprecated use `TaskRef$Outbound` instead. */
    type Outbound = TaskRef$Outbound;
}
export declare function taskRefToJSON(taskRef: TaskRef): string;
export declare function taskRefFromJSON(jsonString: string): SafeParseResult<TaskRef, SDKValidationError>;
