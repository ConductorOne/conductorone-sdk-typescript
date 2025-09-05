import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationExecutionExpandMask, AutomationExecutionExpandMask$Outbound } from "./automationexecutionexpandmask.js";
import { AutomationExecutionRef, AutomationExecutionRef$Outbound } from "./automationexecutionref.js";
export declare const ExecutionStepStates: {
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
export type ExecutionStepStates = OpenEnum<typeof ExecutionStepStates>;
/**
 * The SearchAutomationExecutionsRequest message.
 */
export type SearchAutomationExecutionsRequest = {
    /**
     * The automationTemplateId field.
     */
    automationTemplateId?: string | null | undefined;
    /**
     * The executionId field.
     */
    executionId?: number | null | undefined;
    /**
     * The executionStepStates field.
     */
    executionStepStates?: Array<ExecutionStepStates> | null | undefined;
    expandMask?: AutomationExecutionExpandMask | null | undefined;
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * The query field.
     */
    query?: string | null | undefined;
    /**
     * The refs field.
     */
    refs?: Array<AutomationExecutionRef> | null | undefined;
};
/** @internal */
export declare const ExecutionStepStates$inboundSchema: z.ZodType<ExecutionStepStates, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ExecutionStepStates$outboundSchema: z.ZodType<ExecutionStepStates, z.ZodTypeDef, ExecutionStepStates>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecutionStepStates$ {
    /** @deprecated use `ExecutionStepStates$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecutionStepStates, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecutionStepStates$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecutionStepStates, z.ZodTypeDef, ExecutionStepStates>;
}
/** @internal */
export declare const SearchAutomationExecutionsRequest$inboundSchema: z.ZodType<SearchAutomationExecutionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAutomationExecutionsRequest$Outbound = {
    automationTemplateId?: string | null | undefined;
    executionId?: string | null | undefined;
    executionStepStates?: Array<string> | null | undefined;
    expandMask?: AutomationExecutionExpandMask$Outbound | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
    refs?: Array<AutomationExecutionRef$Outbound> | null | undefined;
};
/** @internal */
export declare const SearchAutomationExecutionsRequest$outboundSchema: z.ZodType<SearchAutomationExecutionsRequest$Outbound, z.ZodTypeDef, SearchAutomationExecutionsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAutomationExecutionsRequest$ {
    /** @deprecated use `SearchAutomationExecutionsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAutomationExecutionsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAutomationExecutionsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAutomationExecutionsRequest$Outbound, z.ZodTypeDef, SearchAutomationExecutionsRequest>;
    /** @deprecated use `SearchAutomationExecutionsRequest$Outbound` instead. */
    type Outbound = SearchAutomationExecutionsRequest$Outbound;
}
export declare function searchAutomationExecutionsRequestToJSON(searchAutomationExecutionsRequest: SearchAutomationExecutionsRequest): string;
export declare function searchAutomationExecutionsRequestFromJSON(jsonString: string): SafeParseResult<SearchAutomationExecutionsRequest, SDKValidationError>;
