import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ReassignToApprovers, ReassignToApprovers$Outbound } from "./reassigntoapprovers.js";
import { ReplacePolicy, ReplacePolicy$Outbound } from "./replacepolicy.js";
/**
 * The Escalation message.
 *
 * @remarks
 *
 * This message contains a oneof named escalation_policy. Only a single field of the following list may be set at a time:
 *   - replacePolicy
 *   - reassignToApprovers
 */
export type Escalation = {
    /**
     * The escalationComment field.
     */
    escalationComment?: string | null | undefined;
    /**
     * The expiration field.
     */
    expiration?: number | null | undefined;
    reassignToApprovers?: ReassignToApprovers | null | undefined;
    replacePolicy?: ReplacePolicy | null | undefined;
};
/** @internal */
export declare const Escalation$inboundSchema: z.ZodType<Escalation, z.ZodTypeDef, unknown>;
/** @internal */
export type Escalation$Outbound = {
    escalationComment?: string | null | undefined;
    expiration?: string | null | undefined;
    reassignToApprovers?: ReassignToApprovers$Outbound | null | undefined;
    replacePolicy?: ReplacePolicy$Outbound | null | undefined;
};
/** @internal */
export declare const Escalation$outboundSchema: z.ZodType<Escalation$Outbound, z.ZodTypeDef, Escalation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Escalation$ {
    /** @deprecated use `Escalation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Escalation, z.ZodTypeDef, unknown>;
    /** @deprecated use `Escalation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Escalation$Outbound, z.ZodTypeDef, Escalation>;
    /** @deprecated use `Escalation$Outbound` instead. */
    type Outbound = Escalation$Outbound;
}
export declare function escalationToJSON(escalation: Escalation): string;
export declare function escalationFromJSON(jsonString: string): SafeParseResult<Escalation, SDKValidationError>;
