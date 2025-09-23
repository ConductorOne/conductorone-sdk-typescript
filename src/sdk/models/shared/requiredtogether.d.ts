import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The RequiredTogether message.
 */
export type RequiredTogether = {};
/** @internal */
export declare const RequiredTogether$inboundSchema: z.ZodType<RequiredTogether, z.ZodTypeDef, unknown>;
/** @internal */
export type RequiredTogether$Outbound = {};
/** @internal */
export declare const RequiredTogether$outboundSchema: z.ZodType<RequiredTogether$Outbound, z.ZodTypeDef, RequiredTogether>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequiredTogether$ {
    /** @deprecated use `RequiredTogether$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequiredTogether, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequiredTogether$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequiredTogether$Outbound, z.ZodTypeDef, RequiredTogether>;
    /** @deprecated use `RequiredTogether$Outbound` instead. */
    type Outbound = RequiredTogether$Outbound;
}
export declare function requiredTogetherToJSON(requiredTogether: RequiredTogether): string;
export declare function requiredTogetherFromJSON(jsonString: string): SafeParseResult<RequiredTogether, SDKValidationError>;
