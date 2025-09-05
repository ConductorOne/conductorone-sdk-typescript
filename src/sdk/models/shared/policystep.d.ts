import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Accept, Accept$Outbound } from "./accept.js";
import { Approval, Approval$Outbound } from "./approval.js";
import { Form, Form$Outbound } from "./form.js";
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
export type PolicyStep = {
    accept?: Accept | null | undefined;
    approval?: Approval | null | undefined;
    form?: Form | null | undefined;
    provision?: Provision | null | undefined;
    reject?: Reject | null | undefined;
    wait?: Wait | null | undefined;
};
/** @internal */
export declare const PolicyStep$inboundSchema: z.ZodType<PolicyStep, z.ZodTypeDef, unknown>;
/** @internal */
export type PolicyStep$Outbound = {
    accept?: Accept$Outbound | null | undefined;
    approval?: Approval$Outbound | null | undefined;
    form?: Form$Outbound | null | undefined;
    provision?: Provision$Outbound | null | undefined;
    reject?: Reject$Outbound | null | undefined;
    wait?: Wait$Outbound | null | undefined;
};
/** @internal */
export declare const PolicyStep$outboundSchema: z.ZodType<PolicyStep$Outbound, z.ZodTypeDef, PolicyStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyStep$ {
    /** @deprecated use `PolicyStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyStep$Outbound, z.ZodTypeDef, PolicyStep>;
    /** @deprecated use `PolicyStep$Outbound` instead. */
    type Outbound = PolicyStep$Outbound;
}
export declare function policyStepToJSON(policyStep: PolicyStep): string;
export declare function policyStepFromJSON(jsonString: string): SafeParseResult<PolicyStep, SDKValidationError>;
