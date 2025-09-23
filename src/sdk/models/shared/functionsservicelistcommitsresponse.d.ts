import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FunctionCommit, FunctionCommit$Outbound } from "./functioncommit.js";
/**
 * The FunctionsServiceListCommitsResponse message.
 */
export type FunctionsServiceListCommitsResponse = {
    /**
     * The list field.
     */
    list?: Array<FunctionCommit> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceListCommitsResponse$inboundSchema: z.ZodType<FunctionsServiceListCommitsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceListCommitsResponse$Outbound = {
    list?: Array<FunctionCommit$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceListCommitsResponse$outboundSchema: z.ZodType<FunctionsServiceListCommitsResponse$Outbound, z.ZodTypeDef, FunctionsServiceListCommitsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceListCommitsResponse$ {
    /** @deprecated use `FunctionsServiceListCommitsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceListCommitsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceListCommitsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceListCommitsResponse$Outbound, z.ZodTypeDef, FunctionsServiceListCommitsResponse>;
    /** @deprecated use `FunctionsServiceListCommitsResponse$Outbound` instead. */
    type Outbound = FunctionsServiceListCommitsResponse$Outbound;
}
export declare function functionsServiceListCommitsResponseToJSON(functionsServiceListCommitsResponse: FunctionsServiceListCommitsResponse): string;
export declare function functionsServiceListCommitsResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceListCommitsResponse, SDKValidationError>;
