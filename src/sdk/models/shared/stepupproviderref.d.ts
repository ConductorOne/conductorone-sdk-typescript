import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The StepUpProviderRef message.
 */
export type StepUpProviderRef = {
    /**
     * The id field.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const StepUpProviderRef$inboundSchema: z.ZodType<StepUpProviderRef, z.ZodTypeDef, unknown>;
/** @internal */
export type StepUpProviderRef$Outbound = {
    id?: string | null | undefined;
};
/** @internal */
export declare const StepUpProviderRef$outboundSchema: z.ZodType<StepUpProviderRef$Outbound, z.ZodTypeDef, StepUpProviderRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StepUpProviderRef$ {
    /** @deprecated use `StepUpProviderRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StepUpProviderRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `StepUpProviderRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StepUpProviderRef$Outbound, z.ZodTypeDef, StepUpProviderRef>;
    /** @deprecated use `StepUpProviderRef$Outbound` instead. */
    type Outbound = StepUpProviderRef$Outbound;
}
export declare function stepUpProviderRefToJSON(stepUpProviderRef: StepUpProviderRef): string;
export declare function stepUpProviderRefFromJSON(jsonString: string): SafeParseResult<StepUpProviderRef, SDKValidationError>;
