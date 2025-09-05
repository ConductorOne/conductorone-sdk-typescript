import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Accept, Accept$Outbound } from "./accept.js";
import { ApprovalInput, ApprovalInput$Outbound } from "./approvalinput.js";
import { FormInput1, FormInput1$Outbound } from "./forminput1.js";
import { Provision, Provision$Outbound } from "./provision.js";
import { Reject, Reject$Outbound } from "./reject.js";
import { Wait, Wait$Outbound } from "./wait.js";
/**
 * The PolicyStep message.
 *
 * @remarks
 *
 * This message contains a oneof named step. Only a single field of the following list may be set at a time:
 *   - approval
 *   - provision
 *   - accept
 *   - reject
 *   - wait
 *   - form
 */
export type PolicyStepInput = {
    accept?: Accept | null | undefined;
    approval?: ApprovalInput | null | undefined;
    form?: FormInput1 | null | undefined;
    provision?: Provision | null | undefined;
    reject?: Reject | null | undefined;
    wait?: Wait | null | undefined;
};
/** @internal */
export declare const PolicyStepInput$inboundSchema: z.ZodType<PolicyStepInput, z.ZodTypeDef, unknown>;
/** @internal */
export type PolicyStepInput$Outbound = {
    accept?: Accept$Outbound | null | undefined;
    approval?: ApprovalInput$Outbound | null | undefined;
    form?: FormInput1$Outbound | null | undefined;
    provision?: Provision$Outbound | null | undefined;
    reject?: Reject$Outbound | null | undefined;
    wait?: Wait$Outbound | null | undefined;
};
/** @internal */
export declare const PolicyStepInput$outboundSchema: z.ZodType<PolicyStepInput$Outbound, z.ZodTypeDef, PolicyStepInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyStepInput$ {
    /** @deprecated use `PolicyStepInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyStepInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyStepInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyStepInput$Outbound, z.ZodTypeDef, PolicyStepInput>;
    /** @deprecated use `PolicyStepInput$Outbound` instead. */
    type Outbound = PolicyStepInput$Outbound;
}
export declare function policyStepInputToJSON(policyStepInput: PolicyStepInput): string;
export declare function policyStepInputFromJSON(jsonString: string): SafeParseResult<PolicyStepInput, SDKValidationError>;
