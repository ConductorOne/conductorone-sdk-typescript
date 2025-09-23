import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type PayloadPolicyPostActionExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The PayloadPolicyPostAction message.
 */
export type PayloadPolicyPostAction = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<PayloadPolicyPostActionExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
};
/** @internal */
export declare const PayloadPolicyPostActionExpanded$inboundSchema: z.ZodType<PayloadPolicyPostActionExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type PayloadPolicyPostActionExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const PayloadPolicyPostActionExpanded$outboundSchema: z.ZodType<PayloadPolicyPostActionExpanded$Outbound, z.ZodTypeDef, PayloadPolicyPostActionExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayloadPolicyPostActionExpanded$ {
    /** @deprecated use `PayloadPolicyPostActionExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayloadPolicyPostActionExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayloadPolicyPostActionExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayloadPolicyPostActionExpanded$Outbound, z.ZodTypeDef, PayloadPolicyPostActionExpanded>;
    /** @deprecated use `PayloadPolicyPostActionExpanded$Outbound` instead. */
    type Outbound = PayloadPolicyPostActionExpanded$Outbound;
}
export declare function payloadPolicyPostActionExpandedToJSON(payloadPolicyPostActionExpanded: PayloadPolicyPostActionExpanded): string;
export declare function payloadPolicyPostActionExpandedFromJSON(jsonString: string): SafeParseResult<PayloadPolicyPostActionExpanded, SDKValidationError>;
/** @internal */
export declare const PayloadPolicyPostAction$inboundSchema: z.ZodType<PayloadPolicyPostAction, z.ZodTypeDef, unknown>;
/** @internal */
export type PayloadPolicyPostAction$Outbound = {
    expanded?: Array<PayloadPolicyPostActionExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
};
/** @internal */
export declare const PayloadPolicyPostAction$outboundSchema: z.ZodType<PayloadPolicyPostAction$Outbound, z.ZodTypeDef, PayloadPolicyPostAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PayloadPolicyPostAction$ {
    /** @deprecated use `PayloadPolicyPostAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PayloadPolicyPostAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `PayloadPolicyPostAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PayloadPolicyPostAction$Outbound, z.ZodTypeDef, PayloadPolicyPostAction>;
    /** @deprecated use `PayloadPolicyPostAction$Outbound` instead. */
    type Outbound = PayloadPolicyPostAction$Outbound;
}
export declare function payloadPolicyPostActionToJSON(payloadPolicyPostAction: PayloadPolicyPostAction): string;
export declare function payloadPolicyPostActionFromJSON(jsonString: string): SafeParseResult<PayloadPolicyPostAction, SDKValidationError>;
