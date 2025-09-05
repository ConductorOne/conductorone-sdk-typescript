import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ReassignedByErrorAction object describes the outcome of a policy step that has been reassigned because it had an error provisioning.
 */
export type ReassignedByErrorAction = {
    /**
     * The description of the error with more details on why this was reassigned.
     */
    description?: string | null | undefined;
    /**
     * Additional information about the error, like http status codes or error messages from SDKs.
     */
    errorCode?: string | null | undefined;
    /**
     * The UserID of the user who reassigned this due to an error. This will exclusively be the System's UserID.
     */
    errorUserId?: string | null | undefined;
    erroredAt?: Date | null | undefined;
    /**
     * The ID of the policy step that was created by this reassignment.
     */
    newPolicyStepId?: string | null | undefined;
    reassignedAt?: Date | null | undefined;
};
/** @internal */
export declare const ReassignedByErrorAction$inboundSchema: z.ZodType<ReassignedByErrorAction, z.ZodTypeDef, unknown>;
/** @internal */
export type ReassignedByErrorAction$Outbound = {
    description?: string | null | undefined;
    errorCode?: string | null | undefined;
    errorUserId?: string | null | undefined;
    erroredAt?: string | null | undefined;
    newPolicyStepId?: string | null | undefined;
    reassignedAt?: string | null | undefined;
};
/** @internal */
export declare const ReassignedByErrorAction$outboundSchema: z.ZodType<ReassignedByErrorAction$Outbound, z.ZodTypeDef, ReassignedByErrorAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReassignedByErrorAction$ {
    /** @deprecated use `ReassignedByErrorAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReassignedByErrorAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReassignedByErrorAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReassignedByErrorAction$Outbound, z.ZodTypeDef, ReassignedByErrorAction>;
    /** @deprecated use `ReassignedByErrorAction$Outbound` instead. */
    type Outbound = ReassignedByErrorAction$Outbound;
}
export declare function reassignedByErrorActionToJSON(reassignedByErrorAction: ReassignedByErrorAction): string;
export declare function reassignedByErrorActionFromJSON(jsonString: string): SafeParseResult<ReassignedByErrorAction, SDKValidationError>;
