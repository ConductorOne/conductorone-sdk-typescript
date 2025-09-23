import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResponseWorkflowStep message.
 */
export type ResponseWorkflowStep = {
    context?: {
        [k: string]: any;
    } | null | undefined;
    /**
     * version contains the constant value "v1". Future versions of the Webhook Response
     *
     * @remarks
     *  will use a different string.
     */
    version?: string | null | undefined;
};
/** @internal */
export declare const ResponseWorkflowStep$inboundSchema: z.ZodType<ResponseWorkflowStep, z.ZodTypeDef, unknown>;
/** @internal */
export type ResponseWorkflowStep$Outbound = {
    context?: {
        [k: string]: any;
    } | null | undefined;
    version?: string | null | undefined;
};
/** @internal */
export declare const ResponseWorkflowStep$outboundSchema: z.ZodType<ResponseWorkflowStep$Outbound, z.ZodTypeDef, ResponseWorkflowStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResponseWorkflowStep$ {
    /** @deprecated use `ResponseWorkflowStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResponseWorkflowStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResponseWorkflowStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResponseWorkflowStep$Outbound, z.ZodTypeDef, ResponseWorkflowStep>;
    /** @deprecated use `ResponseWorkflowStep$Outbound` instead. */
    type Outbound = ResponseWorkflowStep$Outbound;
}
export declare function responseWorkflowStepToJSON(responseWorkflowStep: ResponseWorkflowStep): string;
export declare function responseWorkflowStepFromJSON(jsonString: string): SafeParseResult<ResponseWorkflowStep, SDKValidationError>;
