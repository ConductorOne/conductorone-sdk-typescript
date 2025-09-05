import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DoNotSave message.
 */
export type DoNotSave = {};
/** @internal */
export declare const DoNotSave$inboundSchema: z.ZodType<DoNotSave, z.ZodTypeDef, unknown>;
/** @internal */
export type DoNotSave$Outbound = {};
/** @internal */
export declare const DoNotSave$outboundSchema: z.ZodType<DoNotSave$Outbound, z.ZodTypeDef, DoNotSave>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DoNotSave$ {
    /** @deprecated use `DoNotSave$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DoNotSave, z.ZodTypeDef, unknown>;
    /** @deprecated use `DoNotSave$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DoNotSave$Outbound, z.ZodTypeDef, DoNotSave>;
    /** @deprecated use `DoNotSave$Outbound` instead. */
    type Outbound = DoNotSave$Outbound;
}
export declare function doNotSaveToJSON(doNotSave: DoNotSave): string;
export declare function doNotSaveFromJSON(jsonString: string): SafeParseResult<DoNotSave, SDKValidationError>;
