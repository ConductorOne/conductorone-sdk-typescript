import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The restart action describes the outcome of policy steps for when the task was restarted. This can be applied to multiple steps since restart skips all pending next steps.
 */
export type RestartAction = {
    /**
     * The step ID that was restarted. Potentially multiple "history" steps will reference this ID to indicate by what step they were restarted.
     */
    oldPolicyStepId?: string | null | undefined;
    restartedAt?: Date | null | undefined;
    /**
     * The user that submitted the restart action.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const RestartAction$inboundSchema: z.ZodType<RestartAction, z.ZodTypeDef, unknown>;
/** @internal */
export type RestartAction$Outbound = {
    oldPolicyStepId?: string | null | undefined;
    restartedAt?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const RestartAction$outboundSchema: z.ZodType<RestartAction$Outbound, z.ZodTypeDef, RestartAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RestartAction$ {
    /** @deprecated use `RestartAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RestartAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `RestartAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RestartAction$Outbound, z.ZodTypeDef, RestartAction>;
    /** @deprecated use `RestartAction$Outbound` instead. */
    type Outbound = RestartAction$Outbound;
}
export declare function restartActionToJSON(restartAction: RestartAction): string;
export declare function restartActionFromJSON(jsonString: string): SafeParseResult<RestartAction, SDKValidationError>;
