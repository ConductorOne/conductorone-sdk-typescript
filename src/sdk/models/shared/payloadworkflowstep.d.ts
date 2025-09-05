import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PayloadWorkflowStep message.
 */
export type PayloadWorkflowStep = {
    context?: {
        [k: string]: any;
    } | null | undefined;
    /**
     * The workflow execution ID
     */
    workflowExecutionId?: number | null | undefined;
    /**
     * The workflow execution step ID
     */
    workflowExecutionStepId?: string | null | undefined;
    /**
     * The workflow template ID
     */
    workflowId?: string | null | undefined;
};
/** @internal */
export declare const PayloadWorkflowStep$inboundSchema: z.ZodType<PayloadWorkflowStep, z.ZodTypeDef, unknown>;
/** @internal */
export type PayloadWorkflowStep$Outbound = {
    context?: {
        [k: string]: any;
    } | null | undefined;
    workflowExecutionId?: string | null | undefined;
    workflowExecutionStepId?: string | null | undefined;
    workflowId?: string | null | undefined;
};
/** @internal */
export declare const PayloadWorkflowStep$outboundSchema: z.ZodType<PayloadWorkflowStep$Outbound, z.ZodTypeDef, PayloadWorkflowStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayloadWorkflowStep$ {
    /** @deprecated use `PayloadWorkflowStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayloadWorkflowStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayloadWorkflowStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayloadWorkflowStep$Outbound, z.ZodTypeDef, PayloadWorkflowStep>;
    /** @deprecated use `PayloadWorkflowStep$Outbound` instead. */
    type Outbound = PayloadWorkflowStep$Outbound;
}
export declare function payloadWorkflowStepToJSON(payloadWorkflowStep: PayloadWorkflowStep): string;
export declare function payloadWorkflowStepFromJSON(jsonString: string): SafeParseResult<PayloadWorkflowStep, SDKValidationError>;
