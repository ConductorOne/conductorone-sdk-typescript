import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ChipsField message.
 */
export type ChipsField = {};
/** @internal */
export declare const ChipsField$inboundSchema: z.ZodType<ChipsField, z.ZodTypeDef, unknown>;
/** @internal */
export type ChipsField$Outbound = {};
/** @internal */
export declare const ChipsField$outboundSchema: z.ZodType<ChipsField$Outbound, z.ZodTypeDef, ChipsField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ChipsField$ {
    /** @deprecated use `ChipsField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ChipsField, z.ZodTypeDef, unknown>;
    /** @deprecated use `ChipsField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ChipsField$Outbound, z.ZodTypeDef, ChipsField>;
    /** @deprecated use `ChipsField$Outbound` instead. */
    type Outbound = ChipsField$Outbound;
}
export declare function chipsFieldToJSON(chipsField: ChipsField): string;
export declare function chipsFieldFromJSON(jsonString: string): SafeParseResult<ChipsField, SDKValidationError>;
