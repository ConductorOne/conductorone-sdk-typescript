import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The FunctionsServiceCreateTagRequest message.
 */
export type FunctionsServiceCreateTagRequest = {
    /**
     * The commitId field.
     */
    commitId?: string | null | undefined;
    /**
     * The name field.
     */
    name?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceCreateTagRequest$inboundSchema: z.ZodType<FunctionsServiceCreateTagRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceCreateTagRequest$Outbound = {
    commitId?: string | null | undefined;
    name?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceCreateTagRequest$outboundSchema: z.ZodType<FunctionsServiceCreateTagRequest$Outbound, z.ZodTypeDef, FunctionsServiceCreateTagRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceCreateTagRequest$ {
    /** @deprecated use `FunctionsServiceCreateTagRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceCreateTagRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceCreateTagRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceCreateTagRequest$Outbound, z.ZodTypeDef, FunctionsServiceCreateTagRequest>;
    /** @deprecated use `FunctionsServiceCreateTagRequest$Outbound` instead. */
    type Outbound = FunctionsServiceCreateTagRequest$Outbound;
}
export declare function functionsServiceCreateTagRequestToJSON(functionsServiceCreateTagRequest: FunctionsServiceCreateTagRequest): string;
export declare function functionsServiceCreateTagRequestFromJSON(jsonString: string): SafeParseResult<FunctionsServiceCreateTagRequest, SDKValidationError>;
