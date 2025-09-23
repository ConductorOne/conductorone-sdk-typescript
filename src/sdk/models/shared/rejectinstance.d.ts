import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This policy step indicates that a ticket should have a denied outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.
 *
 * @remarks
 *  The instance is just a marker for it being copied into an active policy.
 */
export type RejectInstance = {
    /**
     * An optional message to include in the comments when a task is automatically rejected.
     */
    rejectMessage?: string | null | undefined;
};
/** @internal */
export declare const RejectInstance$inboundSchema: z.ZodType<RejectInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type RejectInstance$Outbound = {
    rejectMessage?: string | null | undefined;
};
/** @internal */
export declare const RejectInstance$outboundSchema: z.ZodType<RejectInstance$Outbound, z.ZodTypeDef, RejectInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RejectInstance$ {
    /** @deprecated use `RejectInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RejectInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `RejectInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RejectInstance$Outbound, z.ZodTypeDef, RejectInstance>;
    /** @deprecated use `RejectInstance$Outbound` instead. */
    type Outbound = RejectInstance$Outbound;
}
export declare function rejectInstanceToJSON(rejectInstance: RejectInstance): string;
export declare function rejectInstanceFromJSON(jsonString: string): SafeParseResult<RejectInstance, SDKValidationError>;
