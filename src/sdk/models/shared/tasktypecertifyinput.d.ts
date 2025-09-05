import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskTypeCertify message indicates that a task is a certify task and all related details.
 */
export type TaskTypeCertifyInput = {
    outcomeTime?: Date | null | undefined;
};
/** @internal */
export declare const TaskTypeCertifyInput$inboundSchema: z.ZodType<TaskTypeCertifyInput, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskTypeCertifyInput$Outbound = {
    outcomeTime?: string | null | undefined;
};
/** @internal */
export declare const TaskTypeCertifyInput$outboundSchema: z.ZodType<TaskTypeCertifyInput$Outbound, z.ZodTypeDef, TaskTypeCertifyInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeCertifyInput$ {
    /** @deprecated use `TaskTypeCertifyInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeCertifyInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeCertifyInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeCertifyInput$Outbound, z.ZodTypeDef, TaskTypeCertifyInput>;
    /** @deprecated use `TaskTypeCertifyInput$Outbound` instead. */
    type Outbound = TaskTypeCertifyInput$Outbound;
}
export declare function taskTypeCertifyInputToJSON(taskTypeCertifyInput: TaskTypeCertifyInput): string;
export declare function taskTypeCertifyInputFromJSON(jsonString: string): SafeParseResult<TaskTypeCertifyInput, SDKValidationError>;
