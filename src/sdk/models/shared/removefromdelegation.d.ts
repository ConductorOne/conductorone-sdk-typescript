import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * RemoveFromDelegation: find all users that have the target user as their delegated user, and modify the delegation.
 *
 * @remarks
 *
 * This message contains a oneof named replacement_user. Only a single field of the following list may be set at a time:
 *   - replacementUserIdCel
 *   - replacementUserRef
 */
export type RemoveFromDelegation = {
    /**
     * The user who will replace the target user's delegation
     *
     * @remarks
     * This field is part of the `replacement_user` oneof.
     * See the documentation for `c1.api.automations.v1.RemoveFromDelegation` for more details.
     */
    replacementUserIdCel?: string | null | undefined;
    replacementUserRef?: UserRef | null | undefined;
    /**
     * If true, the step will use the subject user of the automation as the subject.
     */
    useSubjectUser?: boolean | null | undefined;
    /**
     * The userIdCel field.
     */
    userIdCel?: string | null | undefined;
    userRef?: UserRef | null | undefined;
};
/** @internal */
export declare const RemoveFromDelegation$inboundSchema: z.ZodType<RemoveFromDelegation, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveFromDelegation$Outbound = {
    replacementUserIdCel?: string | null | undefined;
    replacementUserRef?: UserRef$Outbound | null | undefined;
    useSubjectUser?: boolean | null | undefined;
    userIdCel?: string | null | undefined;
    userRef?: UserRef$Outbound | null | undefined;
};
/** @internal */
export declare const RemoveFromDelegation$outboundSchema: z.ZodType<RemoveFromDelegation$Outbound, z.ZodTypeDef, RemoveFromDelegation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveFromDelegation$ {
    /** @deprecated use `RemoveFromDelegation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveFromDelegation, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveFromDelegation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveFromDelegation$Outbound, z.ZodTypeDef, RemoveFromDelegation>;
    /** @deprecated use `RemoveFromDelegation$Outbound` instead. */
    type Outbound = RemoveFromDelegation$Outbound;
}
export declare function removeFromDelegationToJSON(removeFromDelegation: RemoveFromDelegation): string;
export declare function removeFromDelegationFromJSON(jsonString: string): SafeParseResult<RemoveFromDelegation, SDKValidationError>;
