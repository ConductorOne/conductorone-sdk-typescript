import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ReassignToApprovers, ReassignToApprovers$Outbound } from "./reassigntoapprovers.js";
import { ReplacePolicy, ReplacePolicy$Outbound } from "./replacepolicy.js";
/**
 * The EscalationInstance message.
 *
 * @remarks
 *
 * This message contains a oneof named escalation_policy. Only a single field of the following list may be set at a time:
 *   - replacePolicy
 *   - reassignToApprovers
 */
export type EscalationInstance = {
    /**
     * The alreadyEscalated field.
     */
    alreadyEscalated?: boolean | null | undefined;
    /**
     * The escalationComment field.
     */
    escalationComment?: string | null | undefined;
    expiresAt?: Date | null | undefined;
    reassignToApprovers?: ReassignToApprovers | null | undefined;
    replacePolicy?: ReplacePolicy | null | undefined;
};
/** @internal */
export declare const EscalationInstance$inboundSchema: z.ZodType<EscalationInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type EscalationInstance$Outbound = {
    alreadyEscalated?: boolean | null | undefined;
    escalationComment?: string | null | undefined;
    expiresAt?: string | null | undefined;
    reassignToApprovers?: ReassignToApprovers$Outbound | null | undefined;
    replacePolicy?: ReplacePolicy$Outbound | null | undefined;
};
/** @internal */
export declare const EscalationInstance$outboundSchema: z.ZodType<EscalationInstance$Outbound, z.ZodTypeDef, EscalationInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EscalationInstance$ {
    /** @deprecated use `EscalationInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EscalationInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `EscalationInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EscalationInstance$Outbound, z.ZodTypeDef, EscalationInstance>;
    /** @deprecated use `EscalationInstance$Outbound` instead. */
    type Outbound = EscalationInstance$Outbound;
}
export declare function escalationInstanceToJSON(escalationInstance: EscalationInstance): string;
export declare function escalationInstanceFromJSON(jsonString: string): SafeParseResult<EscalationInstance, SDKValidationError>;
