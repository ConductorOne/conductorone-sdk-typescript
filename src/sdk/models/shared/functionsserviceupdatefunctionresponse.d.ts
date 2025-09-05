import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FunctionT, FunctionT$Outbound } from "./function.js";
/**
 * The FunctionsServiceUpdateFunctionResponse message.
 */
export type FunctionsServiceUpdateFunctionResponse = {
    function?: FunctionT | null | undefined;
};
/** @internal */
export declare const FunctionsServiceUpdateFunctionResponse$inboundSchema: z.ZodType<FunctionsServiceUpdateFunctionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceUpdateFunctionResponse$Outbound = {
    function?: FunctionT$Outbound | null | undefined;
};
/** @internal */
export declare const FunctionsServiceUpdateFunctionResponse$outboundSchema: z.ZodType<FunctionsServiceUpdateFunctionResponse$Outbound, z.ZodTypeDef, FunctionsServiceUpdateFunctionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceUpdateFunctionResponse$ {
    /** @deprecated use `FunctionsServiceUpdateFunctionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceUpdateFunctionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceUpdateFunctionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceUpdateFunctionResponse$Outbound, z.ZodTypeDef, FunctionsServiceUpdateFunctionResponse>;
    /** @deprecated use `FunctionsServiceUpdateFunctionResponse$Outbound` instead. */
    type Outbound = FunctionsServiceUpdateFunctionResponse$Outbound;
}
export declare function functionsServiceUpdateFunctionResponseToJSON(functionsServiceUpdateFunctionResponse: FunctionsServiceUpdateFunctionResponse): string;
export declare function functionsServiceUpdateFunctionResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceUpdateFunctionResponse, SDKValidationError>;
