import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FunctionT, FunctionT$Outbound } from "./function.js";
/**
 * The FunctionsServiceGetFunctionResponse message.
 */
export type FunctionsServiceGetFunctionResponse = {
    function?: FunctionT | null | undefined;
};
/** @internal */
export declare const FunctionsServiceGetFunctionResponse$inboundSchema: z.ZodType<FunctionsServiceGetFunctionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceGetFunctionResponse$Outbound = {
    function?: FunctionT$Outbound | null | undefined;
};
/** @internal */
export declare const FunctionsServiceGetFunctionResponse$outboundSchema: z.ZodType<FunctionsServiceGetFunctionResponse$Outbound, z.ZodTypeDef, FunctionsServiceGetFunctionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceGetFunctionResponse$ {
    /** @deprecated use `FunctionsServiceGetFunctionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceGetFunctionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceGetFunctionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceGetFunctionResponse$Outbound, z.ZodTypeDef, FunctionsServiceGetFunctionResponse>;
    /** @deprecated use `FunctionsServiceGetFunctionResponse$Outbound` instead. */
    type Outbound = FunctionsServiceGetFunctionResponse$Outbound;
}
export declare function functionsServiceGetFunctionResponseToJSON(functionsServiceGetFunctionResponse: FunctionsServiceGetFunctionResponse): string;
export declare function functionsServiceGetFunctionResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceGetFunctionResponse, SDKValidationError>;
