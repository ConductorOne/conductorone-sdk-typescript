import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationContext, AutomationContext$Outbound } from "./automationcontext.js";
/**
 * The state field.
 */
export declare const AutomationExecutionState: {
    readonly AutomationExecutionStateUnspecified: "AUTOMATION_EXECUTION_STATE_UNSPECIFIED";
    readonly AutomationExecutionStatePending: "AUTOMATION_EXECUTION_STATE_PENDING";
    readonly AutomationExecutionStateCreating: "AUTOMATION_EXECUTION_STATE_CREATING";
    readonly AutomationExecutionStateGetStep: "AUTOMATION_EXECUTION_STATE_GET_STEP";
    readonly AutomationExecutionStateProcessStep: "AUTOMATION_EXECUTION_STATE_PROCESS_STEP";
    readonly AutomationExecutionStateCompleteStep: "AUTOMATION_EXECUTION_STATE_COMPLETE_STEP";
    readonly AutomationExecutionStateDone: "AUTOMATION_EXECUTION_STATE_DONE";
    readonly AutomationExecutionStateError: "AUTOMATION_EXECUTION_STATE_ERROR";
    readonly AutomationExecutionStateTerminate: "AUTOMATION_EXECUTION_STATE_TERMINATE";
    readonly AutomationExecutionStateWaiting: "AUTOMATION_EXECUTION_STATE_WAITING";
};
/**
 * The state field.
 */
export type AutomationExecutionState = OpenEnum<typeof AutomationExecutionState>;
/**
 * The AutomationExecution message.
 */
export type AutomationExecution = {
    /**
     * The automationTemplateId field.
     */
    automationTemplateId?: string | null | undefined;
    completedAt?: Date | null | undefined;
    context?: AutomationContext | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The currentVersion field.
     */
    currentVersion?: number | null | undefined;
    deletedAt?: Date | null | undefined;
    duration?: string | null | undefined;
    /**
     * The id field.
     */
    id?: number | null | undefined;
    /**
     * The isDraft field.
     */
    isDraft?: boolean | null | undefined;
    /**
     * The state field.
     */
    state?: AutomationExecutionState | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const AutomationExecutionState$inboundSchema: z.ZodType<AutomationExecutionState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AutomationExecutionState$outboundSchema: z.ZodType<AutomationExecutionState, z.ZodTypeDef, AutomationExecutionState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationExecutionState$ {
    /** @deprecated use `AutomationExecutionState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationExecutionState, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationExecutionState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationExecutionState, z.ZodTypeDef, AutomationExecutionState>;
}
/** @internal */
export declare const AutomationExecution$inboundSchema: z.ZodType<AutomationExecution, z.ZodTypeDef, unknown>;
/** @internal */
export type AutomationExecution$Outbound = {
    automationTemplateId?: string | null | undefined;
    completedAt?: string | null | undefined;
    context?: AutomationContext$Outbound | null | undefined;
    createdAt?: string | null | undefined;
    currentVersion?: number | null | undefined;
    deletedAt?: string | null | undefined;
    duration?: string | null | undefined;
    id?: string | null | undefined;
    isDraft?: boolean | null | undefined;
    state?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AutomationExecution$outboundSchema: z.ZodType<AutomationExecution$Outbound, z.ZodTypeDef, AutomationExecution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationExecution$ {
    /** @deprecated use `AutomationExecution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationExecution, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationExecution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationExecution$Outbound, z.ZodTypeDef, AutomationExecution>;
    /** @deprecated use `AutomationExecution$Outbound` instead. */
    type Outbound = AutomationExecution$Outbound;
}
export declare function automationExecutionToJSON(automationExecution: AutomationExecution): string;
export declare function automationExecutionFromJSON(jsonString: string): SafeParseResult<AutomationExecution, SDKValidationError>;
