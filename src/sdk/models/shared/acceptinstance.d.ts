import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This policy step indicates that a ticket should have an approved outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.
 *
 * @remarks
 *  The instance is just a marker for it being copied into an active policy.
 */
export type AcceptInstance = {
    /**
     * An optional message to include in the comments when a task is automatically accepted.
     */
    acceptMessage?: string | null | undefined;
};
/** @internal */
export declare const AcceptInstance$inboundSchema: z.ZodType<AcceptInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type AcceptInstance$Outbound = {
    acceptMessage?: string | null | undefined;
};
/** @internal */
export declare const AcceptInstance$outboundSchema: z.ZodType<AcceptInstance$Outbound, z.ZodTypeDef, AcceptInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcceptInstance$ {
    /** @deprecated use `AcceptInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcceptInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcceptInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcceptInstance$Outbound, z.ZodTypeDef, AcceptInstance>;
    /** @deprecated use `AcceptInstance$Outbound` instead. */
    type Outbound = AcceptInstance$Outbound;
}
export declare function acceptInstanceToJSON(acceptInstance: AcceptInstance): string;
export declare function acceptInstanceFromJSON(jsonString: string): SafeParseResult<AcceptInstance, SDKValidationError>;
