import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FunctionT, FunctionT$Outbound } from "./function.js";
/**
 * The FunctionsServiceUpdateFunctionRequest message.
 */
export type FunctionsServiceUpdateFunctionRequest = {
    function?: FunctionT | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceUpdateFunctionRequest$inboundSchema: z.ZodType<FunctionsServiceUpdateFunctionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceUpdateFunctionRequest$Outbound = {
    function?: FunctionT$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceUpdateFunctionRequest$outboundSchema: z.ZodType<FunctionsServiceUpdateFunctionRequest$Outbound, z.ZodTypeDef, FunctionsServiceUpdateFunctionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceUpdateFunctionRequest$ {
    /** @deprecated use `FunctionsServiceUpdateFunctionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceUpdateFunctionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceUpdateFunctionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceUpdateFunctionRequest$Outbound, z.ZodTypeDef, FunctionsServiceUpdateFunctionRequest>;
    /** @deprecated use `FunctionsServiceUpdateFunctionRequest$Outbound` instead. */
    type Outbound = FunctionsServiceUpdateFunctionRequest$Outbound;
}
export declare function functionsServiceUpdateFunctionRequestToJSON(functionsServiceUpdateFunctionRequest: FunctionsServiceUpdateFunctionRequest): string;
export declare function functionsServiceUpdateFunctionRequestFromJSON(jsonString: string): SafeParseResult<FunctionsServiceUpdateFunctionRequest, SDKValidationError>;
