import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * These are actions to happen after a policy is complete.
 *
 * @remarks
 *
 * This message contains a oneof named action. Only a single field of the following list may be set at a time:
 *   - certifyRemediateImmediately
 */
export type PolicyPostActions = {
    /**
     * ONLY valid when used in a CERTIFY Ticket Type:
     *
     * @remarks
     *  Causes any deprovision or change in a grant to be applied when Certify Ticket is closed.
     * This field is part of the `action` oneof.
     * See the documentation for `c1.api.policy.v1.PolicyPostActions` for more details.
     */
    certifyRemediateImmediately?: boolean | null | undefined;
};
/** @internal */
export declare const PolicyPostActions$inboundSchema: z.ZodType<PolicyPostActions, z.ZodTypeDef, unknown>;
/** @internal */
export type PolicyPostActions$Outbound = {
    certifyRemediateImmediately?: boolean | null | undefined;
};
/** @internal */
export declare const PolicyPostActions$outboundSchema: z.ZodType<PolicyPostActions$Outbound, z.ZodTypeDef, PolicyPostActions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyPostActions$ {
    /** @deprecated use `PolicyPostActions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyPostActions, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyPostActions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyPostActions$Outbound, z.ZodTypeDef, PolicyPostActions>;
    /** @deprecated use `PolicyPostActions$Outbound` instead. */
    type Outbound = PolicyPostActions$Outbound;
}
export declare function policyPostActionsToJSON(policyPostActions: PolicyPostActions): string;
export declare function policyPostActionsFromJSON(jsonString: string): SafeParseResult<PolicyPostActions, SDKValidationError>;
