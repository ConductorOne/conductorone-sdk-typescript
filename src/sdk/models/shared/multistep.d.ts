import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ProvisionPolicy, ProvisionPolicy$Outbound } from "./provisionpolicy.js";
/**
 * MultiStep indicates that this provision step has multiple steps to process.
 */
export type MultiStep = {
    /**
     * The array of provision steps to process.
     */
    provisionSteps?: Array<ProvisionPolicy> | null | undefined;
};
/** @internal */
export declare const MultiStep$inboundSchema: z.ZodType<MultiStep, z.ZodTypeDef, unknown>;
/** @internal */
export type MultiStep$Outbound = {
    provisionSteps?: Array<ProvisionPolicy$Outbound> | null | undefined;
};
/** @internal */
export declare const MultiStep$outboundSchema: z.ZodType<MultiStep$Outbound, z.ZodTypeDef, MultiStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MultiStep$ {
    /** @deprecated use `MultiStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MultiStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `MultiStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MultiStep$Outbound, z.ZodTypeDef, MultiStep>;
    /** @deprecated use `MultiStep$Outbound` instead. */
    type Outbound = MultiStep$Outbound;
}
export declare function multiStepToJSON(multiStep: MultiStep): string;
export declare function multiStepFromJSON(jsonString: string): SafeParseResult<MultiStep, SDKValidationError>;
