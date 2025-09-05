import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FunctionCommit, FunctionCommit$Outbound } from "./functioncommit.js";
/**
 * The FunctionsServiceCommitResponse message.
 */
export type FunctionsServiceCommitResponse = {
    commit?: FunctionCommit | null | undefined;
};
/** @internal */
export declare const FunctionsServiceCommitResponse$inboundSchema: z.ZodType<FunctionsServiceCommitResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceCommitResponse$Outbound = {
    commit?: FunctionCommit$Outbound | null | undefined;
};
/** @internal */
export declare const FunctionsServiceCommitResponse$outboundSchema: z.ZodType<FunctionsServiceCommitResponse$Outbound, z.ZodTypeDef, FunctionsServiceCommitResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceCommitResponse$ {
    /** @deprecated use `FunctionsServiceCommitResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceCommitResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceCommitResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceCommitResponse$Outbound, z.ZodTypeDef, FunctionsServiceCommitResponse>;
    /** @deprecated use `FunctionsServiceCommitResponse$Outbound` instead. */
    type Outbound = FunctionsServiceCommitResponse$Outbound;
}
export declare function functionsServiceCommitResponseToJSON(functionsServiceCommitResponse: FunctionsServiceCommitResponse): string;
export declare function functionsServiceCommitResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceCommitResponse, SDKValidationError>;
