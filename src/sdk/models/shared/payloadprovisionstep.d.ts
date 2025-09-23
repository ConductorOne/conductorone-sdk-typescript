import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type PayloadProvisionStepExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The PayloadProvisionStep message.
 */
export type PayloadProvisionStep = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<PayloadProvisionStepExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
};
/** @internal */
export declare const PayloadProvisionStepExpanded$inboundSchema: z.ZodType<PayloadProvisionStepExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type PayloadProvisionStepExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const PayloadProvisionStepExpanded$outboundSchema: z.ZodType<PayloadProvisionStepExpanded$Outbound, z.ZodTypeDef, PayloadProvisionStepExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayloadProvisionStepExpanded$ {
    /** @deprecated use `PayloadProvisionStepExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayloadProvisionStepExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayloadProvisionStepExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayloadProvisionStepExpanded$Outbound, z.ZodTypeDef, PayloadProvisionStepExpanded>;
    /** @deprecated use `PayloadProvisionStepExpanded$Outbound` instead. */
    type Outbound = PayloadProvisionStepExpanded$Outbound;
}
export declare function payloadProvisionStepExpandedToJSON(payloadProvisionStepExpanded: PayloadProvisionStepExpanded): string;
export declare function payloadProvisionStepExpandedFromJSON(jsonString: string): SafeParseResult<PayloadProvisionStepExpanded, SDKValidationError>;
/** @internal */
export declare const PayloadProvisionStep$inboundSchema: z.ZodType<PayloadProvisionStep, z.ZodTypeDef, unknown>;
/** @internal */
export type PayloadProvisionStep$Outbound = {
    expanded?: Array<PayloadProvisionStepExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
};
/** @internal */
export declare const PayloadProvisionStep$outboundSchema: z.ZodType<PayloadProvisionStep$Outbound, z.ZodTypeDef, PayloadProvisionStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayloadProvisionStep$ {
    /** @deprecated use `PayloadProvisionStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayloadProvisionStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayloadProvisionStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayloadProvisionStep$Outbound, z.ZodTypeDef, PayloadProvisionStep>;
    /** @deprecated use `PayloadProvisionStep$Outbound` instead. */
    type Outbound = PayloadProvisionStep$Outbound;
}
export declare function payloadProvisionStepToJSON(payloadProvisionStep: PayloadProvisionStep): string;
export declare function payloadProvisionStepFromJSON(jsonString: string): SafeParseResult<PayloadProvisionStep, SDKValidationError>;
