import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FunctionT, FunctionT$Outbound } from "./function.js";
import { FunctionCommit, FunctionCommit$Outbound } from "./functioncommit.js";
/**
 * The FunctionsServiceCreateFunctionResponse message.
 */
export type FunctionsServiceCreateFunctionResponse = {
    commit?: FunctionCommit | null | undefined;
    function?: FunctionT | null | undefined;
};
/** @internal */
export declare const FunctionsServiceCreateFunctionResponse$inboundSchema: z.ZodType<FunctionsServiceCreateFunctionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceCreateFunctionResponse$Outbound = {
    commit?: FunctionCommit$Outbound | null | undefined;
    function?: FunctionT$Outbound | null | undefined;
};
/** @internal */
export declare const FunctionsServiceCreateFunctionResponse$outboundSchema: z.ZodType<FunctionsServiceCreateFunctionResponse$Outbound, z.ZodTypeDef, FunctionsServiceCreateFunctionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceCreateFunctionResponse$ {
    /** @deprecated use `FunctionsServiceCreateFunctionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceCreateFunctionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceCreateFunctionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceCreateFunctionResponse$Outbound, z.ZodTypeDef, FunctionsServiceCreateFunctionResponse>;
    /** @deprecated use `FunctionsServiceCreateFunctionResponse$Outbound` instead. */
    type Outbound = FunctionsServiceCreateFunctionResponse$Outbound;
}
export declare function functionsServiceCreateFunctionResponseToJSON(functionsServiceCreateFunctionResponse: FunctionsServiceCreateFunctionResponse): string;
export declare function functionsServiceCreateFunctionResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceCreateFunctionResponse, SDKValidationError>;
