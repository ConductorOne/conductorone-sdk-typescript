import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The SkippedAction object describes the outcome of a policy step that has been skipped.
 */
export type SkippedAction = {
    /**
     * The ID of the policy step that was created as a result of this skipping.
     */
    newPolicyStepId?: string | null | undefined;
    skippedAt?: Date | null | undefined;
    /**
     * The UserID of the user who skipped this step.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const SkippedAction$inboundSchema: z.ZodType<SkippedAction, z.ZodTypeDef, unknown>;
/** @internal */
export type SkippedAction$Outbound = {
    newPolicyStepId?: string | null | undefined;
    skippedAt?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const SkippedAction$outboundSchema: z.ZodType<SkippedAction$Outbound, z.ZodTypeDef, SkippedAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SkippedAction$ {
    /** @deprecated use `SkippedAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SkippedAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `SkippedAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SkippedAction$Outbound, z.ZodTypeDef, SkippedAction>;
    /** @deprecated use `SkippedAction$Outbound` instead. */
    type Outbound = SkippedAction$Outbound;
}
export declare function skippedActionToJSON(skippedAction: SkippedAction): string;
export declare function skippedActionFromJSON(jsonString: string): SafeParseResult<SkippedAction, SDKValidationError>;
