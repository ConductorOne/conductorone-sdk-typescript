import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The FunctionsServiceDeleteFunctionRequest message.
 */
export type FunctionsServiceDeleteFunctionRequest = {};
/** @internal */
export declare const FunctionsServiceDeleteFunctionRequest$inboundSchema: z.ZodType<FunctionsServiceDeleteFunctionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceDeleteFunctionRequest$Outbound = {};
/** @internal */
export declare const FunctionsServiceDeleteFunctionRequest$outboundSchema: z.ZodType<FunctionsServiceDeleteFunctionRequest$Outbound, z.ZodTypeDef, FunctionsServiceDeleteFunctionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceDeleteFunctionRequest$ {
    /** @deprecated use `FunctionsServiceDeleteFunctionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceDeleteFunctionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceDeleteFunctionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceDeleteFunctionRequest$Outbound, z.ZodTypeDef, FunctionsServiceDeleteFunctionRequest>;
    /** @deprecated use `FunctionsServiceDeleteFunctionRequest$Outbound` instead. */
    type Outbound = FunctionsServiceDeleteFunctionRequest$Outbound;
}
export declare function functionsServiceDeleteFunctionRequestToJSON(functionsServiceDeleteFunctionRequest: FunctionsServiceDeleteFunctionRequest): string;
export declare function functionsServiceDeleteFunctionRequestFromJSON(jsonString: string): SafeParseResult<FunctionsServiceDeleteFunctionRequest, SDKValidationError>;
