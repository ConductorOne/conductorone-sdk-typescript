import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PolicyStep, PolicyStep$Outbound } from "./policystep.js";
/**
 * The PolicySteps message.
 */
export type PolicySteps = {
    /**
     * An array of policy steps indicating the processing flow of a policy. These steps are oneOfs, and only one property may be set for each array index at a time.
     */
    steps?: Array<PolicyStep> | null | undefined;
};
/** @internal */
export declare const PolicySteps$inboundSchema: z.ZodType<PolicySteps, z.ZodTypeDef, unknown>;
/** @internal */
export type PolicySteps$Outbound = {
    steps?: Array<PolicyStep$Outbound> | null | undefined;
};
/** @internal */
export declare const PolicySteps$outboundSchema: z.ZodType<PolicySteps$Outbound, z.ZodTypeDef, PolicySteps>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicySteps$ {
    /** @deprecated use `PolicySteps$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicySteps, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicySteps$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicySteps$Outbound, z.ZodTypeDef, PolicySteps>;
    /** @deprecated use `PolicySteps$Outbound` instead. */
    type Outbound = PolicySteps$Outbound;
}
export declare function policyStepsToJSON(policySteps: PolicySteps): string;
export declare function policyStepsFromJSON(jsonString: string): SafeParseResult<PolicySteps, SDKValidationError>;
