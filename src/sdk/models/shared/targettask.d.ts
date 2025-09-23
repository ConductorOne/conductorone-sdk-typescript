import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Target for approving a task
 */
export type TargetTask = {
    /**
     * ID of the policy step requiring step-up authentication
     */
    policyStepId?: string | null | undefined;
    /**
     * ID of the task being approved
     */
    taskId?: string | null | undefined;
};
/** @internal */
export declare const TargetTask$inboundSchema: z.ZodType<TargetTask, z.ZodTypeDef, unknown>;
/** @internal */
export type TargetTask$Outbound = {
    policyStepId?: string | null | undefined;
    taskId?: string | null | undefined;
};
/** @internal */
export declare const TargetTask$outboundSchema: z.ZodType<TargetTask$Outbound, z.ZodTypeDef, TargetTask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TargetTask$ {
    /** @deprecated use `TargetTask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TargetTask, z.ZodTypeDef, unknown>;
    /** @deprecated use `TargetTask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TargetTask$Outbound, z.ZodTypeDef, TargetTask>;
    /** @deprecated use `TargetTask$Outbound` instead. */
    type Outbound = TargetTask$Outbound;
}
export declare function targetTaskToJSON(targetTask: TargetTask): string;
export declare function targetTaskFromJSON(jsonString: string): SafeParseResult<TargetTask, SDKValidationError>;
