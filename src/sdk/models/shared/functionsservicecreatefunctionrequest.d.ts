import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The functionType field.
 */
export declare const FunctionsServiceCreateFunctionRequestFunctionType: {
    readonly FunctionTypeUnspecified: "FUNCTION_TYPE_UNSPECIFIED";
    readonly FunctionTypeAny: "FUNCTION_TYPE_ANY";
};
/**
 * The functionType field.
 */
export type FunctionsServiceCreateFunctionRequestFunctionType = OpenEnum<typeof FunctionsServiceCreateFunctionRequestFunctionType>;
/**
 * The FunctionsServiceCreateFunctionRequest message.
 */
export type FunctionsServiceCreateFunctionRequest = {
    /**
     * The commitMessage field.
     */
    commitMessage?: string | null | undefined;
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    /**
     * The functionType field.
     */
    functionType?: FunctionsServiceCreateFunctionRequestFunctionType | null | undefined;
    /**
     * The initialContent field.
     */
    initialContent?: {
        [k: string]: string;
    } | null | undefined;
};
/** @internal */
export declare const FunctionsServiceCreateFunctionRequestFunctionType$inboundSchema: z.ZodType<FunctionsServiceCreateFunctionRequestFunctionType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FunctionsServiceCreateFunctionRequestFunctionType$outboundSchema: z.ZodType<FunctionsServiceCreateFunctionRequestFunctionType, z.ZodTypeDef, FunctionsServiceCreateFunctionRequestFunctionType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceCreateFunctionRequestFunctionType$ {
    /** @deprecated use `FunctionsServiceCreateFunctionRequestFunctionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceCreateFunctionRequestFunctionType, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceCreateFunctionRequestFunctionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceCreateFunctionRequestFunctionType, z.ZodTypeDef, FunctionsServiceCreateFunctionRequestFunctionType>;
}
/** @internal */
export declare const FunctionsServiceCreateFunctionRequest$inboundSchema: z.ZodType<FunctionsServiceCreateFunctionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceCreateFunctionRequest$Outbound = {
    commitMessage?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    functionType?: string | null | undefined;
    initialContent?: {
        [k: string]: string;
    } | null | undefined;
};
/** @internal */
export declare const FunctionsServiceCreateFunctionRequest$outboundSchema: z.ZodType<FunctionsServiceCreateFunctionRequest$Outbound, z.ZodTypeDef, FunctionsServiceCreateFunctionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceCreateFunctionRequest$ {
    /** @deprecated use `FunctionsServiceCreateFunctionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceCreateFunctionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceCreateFunctionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceCreateFunctionRequest$Outbound, z.ZodTypeDef, FunctionsServiceCreateFunctionRequest>;
    /** @deprecated use `FunctionsServiceCreateFunctionRequest$Outbound` instead. */
    type Outbound = FunctionsServiceCreateFunctionRequest$Outbound;
}
export declare function functionsServiceCreateFunctionRequestToJSON(functionsServiceCreateFunctionRequest: FunctionsServiceCreateFunctionRequest): string;
export declare function functionsServiceCreateFunctionRequestFromJSON(jsonString: string): SafeParseResult<FunctionsServiceCreateFunctionRequest, SDKValidationError>;
