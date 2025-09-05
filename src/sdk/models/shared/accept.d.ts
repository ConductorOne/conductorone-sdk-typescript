import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This policy step indicates that a ticket should have an approved outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.
 */
export type Accept = {
    /**
     * An optional message to include in the comments when a task is automatically accepted.
     */
    acceptMessage?: string | null | undefined;
};
/** @internal */
export declare const Accept$inboundSchema: z.ZodType<Accept, z.ZodTypeDef, unknown>;
/** @internal */
export type Accept$Outbound = {
    acceptMessage?: string | null | undefined;
};
/** @internal */
export declare const Accept$outboundSchema: z.ZodType<Accept$Outbound, z.ZodTypeDef, Accept>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Accept$ {
    /** @deprecated use `Accept$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Accept, z.ZodTypeDef, unknown>;
    /** @deprecated use `Accept$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Accept$Outbound, z.ZodTypeDef, Accept>;
    /** @deprecated use `Accept$Outbound` instead. */
    type Outbound = Accept$Outbound;
}
export declare function acceptToJSON(accept: Accept): string;
export declare function acceptFromJSON(jsonString: string): SafeParseResult<Accept, SDKValidationError>;
