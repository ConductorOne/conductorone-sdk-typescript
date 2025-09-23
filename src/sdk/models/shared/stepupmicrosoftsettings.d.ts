import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * StepUpMicrosoftSettings represents a Microsoft Entra Provider using Conditional Access Policies to enforce step-up authentication.
 */
export type StepUpMicrosoftSettings = {
    /**
     * The conditionalAccessIds field.
     */
    conditionalAccessIds?: Array<string> | null | undefined;
    /**
     * The tenant field.
     */
    tenant?: string | null | undefined;
};
/** @internal */
export declare const StepUpMicrosoftSettings$inboundSchema: z.ZodType<StepUpMicrosoftSettings, z.ZodTypeDef, unknown>;
/** @internal */
export type StepUpMicrosoftSettings$Outbound = {
    conditionalAccessIds?: Array<string> | null | undefined;
    tenant?: string | null | undefined;
};
/** @internal */
export declare const StepUpMicrosoftSettings$outboundSchema: z.ZodType<StepUpMicrosoftSettings$Outbound, z.ZodTypeDef, StepUpMicrosoftSettings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StepUpMicrosoftSettings$ {
    /** @deprecated use `StepUpMicrosoftSettings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StepUpMicrosoftSettings, z.ZodTypeDef, unknown>;
    /** @deprecated use `StepUpMicrosoftSettings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StepUpMicrosoftSettings$Outbound, z.ZodTypeDef, StepUpMicrosoftSettings>;
    /** @deprecated use `StepUpMicrosoftSettings$Outbound` instead. */
    type Outbound = StepUpMicrosoftSettings$Outbound;
}
export declare function stepUpMicrosoftSettingsToJSON(stepUpMicrosoftSettings: StepUpMicrosoftSettings): string;
export declare function stepUpMicrosoftSettingsFromJSON(jsonString: string): SafeParseResult<StepUpMicrosoftSettings, SDKValidationError>;
