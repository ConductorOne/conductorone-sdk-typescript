import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The FunctionsServiceCommitRequest message.
 */
export type FunctionsServiceCommitRequest = {
    /**
     * The commitMessage field.
     */
    commitMessage?: string | null | undefined;
    /**
     * The content field.
     */
    content?: {
        [k: string]: string;
    } | null | undefined;
};
/** @internal */
export declare const FunctionsServiceCommitRequest$inboundSchema: z.ZodType<FunctionsServiceCommitRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceCommitRequest$Outbound = {
    commitMessage?: string | null | undefined;
    content?: {
        [k: string]: string;
    } | null | undefined;
};
/** @internal */
export declare const FunctionsServiceCommitRequest$outboundSchema: z.ZodType<FunctionsServiceCommitRequest$Outbound, z.ZodTypeDef, FunctionsServiceCommitRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceCommitRequest$ {
    /** @deprecated use `FunctionsServiceCommitRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceCommitRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceCommitRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceCommitRequest$Outbound, z.ZodTypeDef, FunctionsServiceCommitRequest>;
    /** @deprecated use `FunctionsServiceCommitRequest$Outbound` instead. */
    type Outbound = FunctionsServiceCommitRequest$Outbound;
}
export declare function functionsServiceCommitRequestToJSON(functionsServiceCommitRequest: FunctionsServiceCommitRequest): string;
export declare function functionsServiceCommitRequestFromJSON(jsonString: string): SafeParseResult<FunctionsServiceCommitRequest, SDKValidationError>;
