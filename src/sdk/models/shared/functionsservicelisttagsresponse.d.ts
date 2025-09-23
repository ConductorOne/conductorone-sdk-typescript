import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FunctionCommit, FunctionCommit$Outbound } from "./functioncommit.js";
/**
 * The FunctionsServiceListTagsResponse message.
 */
export type FunctionsServiceListTagsResponse = {
    /**
     * The tags field.
     */
    tags?: {
        [k: string]: FunctionCommit;
    } | null | undefined;
};
/** @internal */
export declare const FunctionsServiceListTagsResponse$inboundSchema: z.ZodType<FunctionsServiceListTagsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceListTagsResponse$Outbound = {
    tags?: {
        [k: string]: FunctionCommit$Outbound;
    } | null | undefined;
};
/** @internal */
export declare const FunctionsServiceListTagsResponse$outboundSchema: z.ZodType<FunctionsServiceListTagsResponse$Outbound, z.ZodTypeDef, FunctionsServiceListTagsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceListTagsResponse$ {
    /** @deprecated use `FunctionsServiceListTagsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceListTagsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceListTagsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceListTagsResponse$Outbound, z.ZodTypeDef, FunctionsServiceListTagsResponse>;
    /** @deprecated use `FunctionsServiceListTagsResponse$Outbound` instead. */
    type Outbound = FunctionsServiceListTagsResponse$Outbound;
}
export declare function functionsServiceListTagsResponseToJSON(functionsServiceListTagsResponse: FunctionsServiceListTagsResponse): string;
export declare function functionsServiceListTagsResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceListTagsResponse, SDKValidationError>;
