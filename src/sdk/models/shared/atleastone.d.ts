import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AtLeastOne message.
 */
export type AtLeastOne = {};
/** @internal */
export declare const AtLeastOne$inboundSchema: z.ZodType<AtLeastOne, z.ZodTypeDef, unknown>;
/** @internal */
export type AtLeastOne$Outbound = {};
/** @internal */
export declare const AtLeastOne$outboundSchema: z.ZodType<AtLeastOne$Outbound, z.ZodTypeDef, AtLeastOne>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AtLeastOne$ {
    /** @deprecated use `AtLeastOne$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AtLeastOne, z.ZodTypeDef, unknown>;
    /** @deprecated use `AtLeastOne$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AtLeastOne$Outbound, z.ZodTypeDef, AtLeastOne>;
    /** @deprecated use `AtLeastOne$Outbound` instead. */
    type Outbound = AtLeastOne$Outbound;
}
export declare function atLeastOneToJSON(atLeastOne: AtLeastOne): string;
export declare function atLeastOneFromJSON(jsonString: string): SafeParseResult<AtLeastOne, SDKValidationError>;
