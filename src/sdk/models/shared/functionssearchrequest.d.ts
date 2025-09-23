import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export declare const FunctionTypes: {
    readonly FunctionTypeUnspecified: "FUNCTION_TYPE_UNSPECIFIED";
    readonly FunctionTypeAny: "FUNCTION_TYPE_ANY";
};
export type FunctionTypes = OpenEnum<typeof FunctionTypes>;
/**
 * The FunctionsSearchRequest message.
 */
export type FunctionsSearchRequest = {
    /**
     * The functionTypes field.
     */
    functionTypes?: Array<FunctionTypes> | null | undefined;
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * The query field.
     */
    query?: string | null | undefined;
};
/** @internal */
export declare const FunctionTypes$inboundSchema: z.ZodType<FunctionTypes, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FunctionTypes$outboundSchema: z.ZodType<FunctionTypes, z.ZodTypeDef, FunctionTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionTypes$ {
    /** @deprecated use `FunctionTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionTypes, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionTypes, z.ZodTypeDef, FunctionTypes>;
}
/** @internal */
export declare const FunctionsSearchRequest$inboundSchema: z.ZodType<FunctionsSearchRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsSearchRequest$Outbound = {
    functionTypes?: Array<string> | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
};
/** @internal */
export declare const FunctionsSearchRequest$outboundSchema: z.ZodType<FunctionsSearchRequest$Outbound, z.ZodTypeDef, FunctionsSearchRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsSearchRequest$ {
    /** @deprecated use `FunctionsSearchRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsSearchRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsSearchRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsSearchRequest$Outbound, z.ZodTypeDef, FunctionsSearchRequest>;
    /** @deprecated use `FunctionsSearchRequest$Outbound` instead. */
    type Outbound = FunctionsSearchRequest$Outbound;
}
export declare function functionsSearchRequestToJSON(functionsSearchRequest: FunctionsSearchRequest): string;
export declare function functionsSearchRequestFromJSON(jsonString: string): SafeParseResult<FunctionsSearchRequest, SDKValidationError>;
