import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type PayloadPolicyApprovalStepExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The PayloadPolicyApprovalStep message.
 */
export type PayloadPolicyApprovalStep = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<PayloadPolicyApprovalStepExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
};
/** @internal */
export declare const PayloadPolicyApprovalStepExpanded$inboundSchema: z.ZodType<PayloadPolicyApprovalStepExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type PayloadPolicyApprovalStepExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const PayloadPolicyApprovalStepExpanded$outboundSchema: z.ZodType<PayloadPolicyApprovalStepExpanded$Outbound, z.ZodTypeDef, PayloadPolicyApprovalStepExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayloadPolicyApprovalStepExpanded$ {
    /** @deprecated use `PayloadPolicyApprovalStepExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayloadPolicyApprovalStepExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayloadPolicyApprovalStepExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayloadPolicyApprovalStepExpanded$Outbound, z.ZodTypeDef, PayloadPolicyApprovalStepExpanded>;
    /** @deprecated use `PayloadPolicyApprovalStepExpanded$Outbound` instead. */
    type Outbound = PayloadPolicyApprovalStepExpanded$Outbound;
}
export declare function payloadPolicyApprovalStepExpandedToJSON(payloadPolicyApprovalStepExpanded: PayloadPolicyApprovalStepExpanded): string;
export declare function payloadPolicyApprovalStepExpandedFromJSON(jsonString: string): SafeParseResult<PayloadPolicyApprovalStepExpanded, SDKValidationError>;
/** @internal */
export declare const PayloadPolicyApprovalStep$inboundSchema: z.ZodType<PayloadPolicyApprovalStep, z.ZodTypeDef, unknown>;
/** @internal */
export type PayloadPolicyApprovalStep$Outbound = {
    expanded?: Array<PayloadPolicyApprovalStepExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
};
/** @internal */
export declare const PayloadPolicyApprovalStep$outboundSchema: z.ZodType<PayloadPolicyApprovalStep$Outbound, z.ZodTypeDef, PayloadPolicyApprovalStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayloadPolicyApprovalStep$ {
    /** @deprecated use `PayloadPolicyApprovalStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayloadPolicyApprovalStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayloadPolicyApprovalStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayloadPolicyApprovalStep$Outbound, z.ZodTypeDef, PayloadPolicyApprovalStep>;
    /** @deprecated use `PayloadPolicyApprovalStep$Outbound` instead. */
    type Outbound = PayloadPolicyApprovalStep$Outbound;
}
export declare function payloadPolicyApprovalStepToJSON(payloadPolicyApprovalStep: PayloadPolicyApprovalStep): string;
export declare function payloadPolicyApprovalStepFromJSON(jsonString: string): SafeParseResult<PayloadPolicyApprovalStep, SDKValidationError>;
