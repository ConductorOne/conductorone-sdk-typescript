import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * FunctionCommit represents a single commit in a function's history
 */
export type FunctionCommit = {
    /**
     * The author field.
     */
    author?: string | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The functionId field.
     */
    functionId?: string | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
    /**
     * The message field.
     */
    message?: string | null | undefined;
};
/** @internal */
export declare const FunctionCommit$inboundSchema: z.ZodType<FunctionCommit, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionCommit$Outbound = {
    author?: string | null | undefined;
    createdAt?: string | null | undefined;
    functionId?: string | null | undefined;
    id?: string | null | undefined;
    message?: string | null | undefined;
};
/** @internal */
export declare const FunctionCommit$outboundSchema: z.ZodType<FunctionCommit$Outbound, z.ZodTypeDef, FunctionCommit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionCommit$ {
    /** @deprecated use `FunctionCommit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionCommit, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionCommit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionCommit$Outbound, z.ZodTypeDef, FunctionCommit>;
    /** @deprecated use `FunctionCommit$Outbound` instead. */
    type Outbound = FunctionCommit$Outbound;
}
export declare function functionCommitToJSON(functionCommit: FunctionCommit): string;
export declare function functionCommitFromJSON(jsonString: string): SafeParseResult<FunctionCommit, SDKValidationError>;
