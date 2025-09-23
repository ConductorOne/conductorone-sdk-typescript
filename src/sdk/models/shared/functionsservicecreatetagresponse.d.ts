import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The FunctionsServiceCreateTagResponse message.
 */
export type FunctionsServiceCreateTagResponse = {};
/** @internal */
export declare const FunctionsServiceCreateTagResponse$inboundSchema: z.ZodType<FunctionsServiceCreateTagResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceCreateTagResponse$Outbound = {};
/** @internal */
export declare const FunctionsServiceCreateTagResponse$outboundSchema: z.ZodType<FunctionsServiceCreateTagResponse$Outbound, z.ZodTypeDef, FunctionsServiceCreateTagResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceCreateTagResponse$ {
    /** @deprecated use `FunctionsServiceCreateTagResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceCreateTagResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceCreateTagResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceCreateTagResponse$Outbound, z.ZodTypeDef, FunctionsServiceCreateTagResponse>;
    /** @deprecated use `FunctionsServiceCreateTagResponse$Outbound` instead. */
    type Outbound = FunctionsServiceCreateTagResponse$Outbound;
}
export declare function functionsServiceCreateTagResponseToJSON(functionsServiceCreateTagResponse: FunctionsServiceCreateTagResponse): string;
export declare function functionsServiceCreateTagResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceCreateTagResponse, SDKValidationError>;
