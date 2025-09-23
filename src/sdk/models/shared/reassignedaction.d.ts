import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ReassignedAction object describes the outcome of a policy step that has been reassigned.
 */
export type ReassignedAction = {
    /**
     * The ID of the policy step that was created as a result of this reassignment.
     */
    newPolicyStepId?: string | null | undefined;
    reassignedAt?: Date | null | undefined;
    /**
     * The UserID of the person who reassigned this step.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const ReassignedAction$inboundSchema: z.ZodType<ReassignedAction, z.ZodTypeDef, unknown>;
/** @internal */
export type ReassignedAction$Outbound = {
    newPolicyStepId?: string | null | undefined;
    reassignedAt?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const ReassignedAction$outboundSchema: z.ZodType<ReassignedAction$Outbound, z.ZodTypeDef, ReassignedAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReassignedAction$ {
    /** @deprecated use `ReassignedAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReassignedAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReassignedAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReassignedAction$Outbound, z.ZodTypeDef, ReassignedAction>;
    /** @deprecated use `ReassignedAction$Outbound` instead. */
    type Outbound = ReassignedAction$Outbound;
}
export declare function reassignedActionToJSON(reassignedAction: ReassignedAction): string;
export declare function reassignedActionFromJSON(jsonString: string): SafeParseResult<ReassignedAction, SDKValidationError>;
