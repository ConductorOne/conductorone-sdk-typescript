import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This policy step indicates that a ticket should have a denied outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.
 */
export type Reject = {
    /**
     * An optional message to include in the comments when a task is automatically rejected.
     */
    rejectMessage?: string | null | undefined;
};
/** @internal */
export declare const Reject$inboundSchema: z.ZodType<Reject, z.ZodTypeDef, unknown>;
/** @internal */
export type Reject$Outbound = {
    rejectMessage?: string | null | undefined;
};
/** @internal */
export declare const Reject$outboundSchema: z.ZodType<Reject$Outbound, z.ZodTypeDef, Reject>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Reject$ {
    /** @deprecated use `Reject$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Reject, z.ZodTypeDef, unknown>;
    /** @deprecated use `Reject$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Reject$Outbound, z.ZodTypeDef, Reject>;
    /** @deprecated use `Reject$Outbound` instead. */
    type Outbound = Reject$Outbound;
}
export declare function rejectToJSON(reject: Reject): string;
export declare function rejectFromJSON(jsonString: string): SafeParseResult<Reject, SDKValidationError>;
