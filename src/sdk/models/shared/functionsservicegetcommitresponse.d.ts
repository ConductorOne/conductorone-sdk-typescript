import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FunctionCommit, FunctionCommit$Outbound } from "./functioncommit.js";
/**
 * The FunctionsServiceGetCommitResponse message.
 */
export type FunctionsServiceGetCommitResponse = {
    commit?: FunctionCommit | null | undefined;
    /**
     * The content field.
     */
    content?: {
        [k: string]: string;
    } | null | undefined;
};
/** @internal */
export declare const FunctionsServiceGetCommitResponse$inboundSchema: z.ZodType<FunctionsServiceGetCommitResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceGetCommitResponse$Outbound = {
    commit?: FunctionCommit$Outbound | null | undefined;
    content?: {
        [k: string]: string;
    } | null | undefined;
};
/** @internal */
export declare const FunctionsServiceGetCommitResponse$outboundSchema: z.ZodType<FunctionsServiceGetCommitResponse$Outbound, z.ZodTypeDef, FunctionsServiceGetCommitResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceGetCommitResponse$ {
    /** @deprecated use `FunctionsServiceGetCommitResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceGetCommitResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceGetCommitResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceGetCommitResponse$Outbound, z.ZodTypeDef, FunctionsServiceGetCommitResponse>;
    /** @deprecated use `FunctionsServiceGetCommitResponse$Outbound` instead. */
    type Outbound = FunctionsServiceGetCommitResponse$Outbound;
}
export declare function functionsServiceGetCommitResponseToJSON(functionsServiceGetCommitResponse: FunctionsServiceGetCommitResponse): string;
export declare function functionsServiceGetCommitResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceGetCommitResponse, SDKValidationError>;
