import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PolicyStepInput, PolicyStepInput$Outbound } from "./policystepinput.js";
/**
 * The PolicySteps message.
 */
export type PolicyStepsInput = {
    /**
     * An array of policy steps indicating the processing flow of a policy. These steps are oneOfs, and only one property may be set for each array index at a time.
     */
    steps?: Array<PolicyStepInput> | null | undefined;
};
/** @internal */
export declare const PolicyStepsInput$inboundSchema: z.ZodType<PolicyStepsInput, z.ZodTypeDef, unknown>;
/** @internal */
export type PolicyStepsInput$Outbound = {
    steps?: Array<PolicyStepInput$Outbound> | null | undefined;
};
/** @internal */
export declare const PolicyStepsInput$outboundSchema: z.ZodType<PolicyStepsInput$Outbound, z.ZodTypeDef, PolicyStepsInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyStepsInput$ {
    /** @deprecated use `PolicyStepsInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyStepsInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyStepsInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyStepsInput$Outbound, z.ZodTypeDef, PolicyStepsInput>;
    /** @deprecated use `PolicyStepsInput$Outbound` instead. */
    type Outbound = PolicyStepsInput$Outbound;
}
export declare function policyStepsInputToJSON(policyStepsInput: PolicyStepsInput): string;
export declare function policyStepsInputFromJSON(jsonString: string): SafeParseResult<PolicyStepsInput, SDKValidationError>;
