import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The FunctionsServiceDeleteFunctionResponse message.
 */
export type FunctionsServiceDeleteFunctionResponse = {};
/** @internal */
export declare const FunctionsServiceDeleteFunctionResponse$inboundSchema: z.ZodType<FunctionsServiceDeleteFunctionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceDeleteFunctionResponse$Outbound = {};
/** @internal */
export declare const FunctionsServiceDeleteFunctionResponse$outboundSchema: z.ZodType<FunctionsServiceDeleteFunctionResponse$Outbound, z.ZodTypeDef, FunctionsServiceDeleteFunctionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceDeleteFunctionResponse$ {
    /** @deprecated use `FunctionsServiceDeleteFunctionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceDeleteFunctionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceDeleteFunctionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceDeleteFunctionResponse$Outbound, z.ZodTypeDef, FunctionsServiceDeleteFunctionResponse>;
    /** @deprecated use `FunctionsServiceDeleteFunctionResponse$Outbound` instead. */
    type Outbound = FunctionsServiceDeleteFunctionResponse$Outbound;
}
export declare function functionsServiceDeleteFunctionResponseToJSON(functionsServiceDeleteFunctionResponse: FunctionsServiceDeleteFunctionResponse): string;
export declare function functionsServiceDeleteFunctionResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceDeleteFunctionResponse, SDKValidationError>;
