import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The functionType field.
 */
export declare const FunctionType: {
    readonly FunctionTypeUnspecified: "FUNCTION_TYPE_UNSPECIFIED";
    readonly FunctionTypeAny: "FUNCTION_TYPE_ANY";
};
/**
 * The functionType field.
 */
export type FunctionType = OpenEnum<typeof FunctionType>;
/**
 * Function represents a customer-provided code extension in the API
 */
export type FunctionT = {
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
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
    functionType?: FunctionType | null | undefined;
    /**
     * The head field.
     */
    head?: string | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
    /**
     * The isDraft field.
     */
    isDraft?: boolean | null | undefined;
    /**
     * The publishedCommitId field.
     */
    publishedCommitId?: string | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const FunctionType$inboundSchema: z.ZodType<FunctionType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FunctionType$outboundSchema: z.ZodType<FunctionType, z.ZodTypeDef, FunctionType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionType$ {
    /** @deprecated use `FunctionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionType, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionType, z.ZodTypeDef, FunctionType>;
}
/** @internal */
export declare const FunctionT$inboundSchema: z.ZodType<FunctionT, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionT$Outbound = {
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    functionType?: string | null | undefined;
    head?: string | null | undefined;
    id?: string | null | undefined;
    isDraft?: boolean | null | undefined;
    publishedCommitId?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const FunctionT$outboundSchema: z.ZodType<FunctionT$Outbound, z.ZodTypeDef, FunctionT>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionT$ {
    /** @deprecated use `FunctionT$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionT, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionT$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionT$Outbound, z.ZodTypeDef, FunctionT>;
    /** @deprecated use `FunctionT$Outbound` instead. */
    type Outbound = FunctionT$Outbound;
}
export declare function functionToJSON(functionT: FunctionT): string;
export declare function functionFromJSON(jsonString: string): SafeParseResult<FunctionT, SDKValidationError>;
