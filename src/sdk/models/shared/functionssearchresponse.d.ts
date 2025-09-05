import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FunctionT, FunctionT$Outbound } from "./function.js";
/**
 * The FunctionsSearchResponse message.
 */
export type FunctionsSearchResponse = {
    /**
     * The list field.
     */
    list?: Array<FunctionT> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const FunctionsSearchResponse$inboundSchema: z.ZodType<FunctionsSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsSearchResponse$Outbound = {
    list?: Array<FunctionT$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const FunctionsSearchResponse$outboundSchema: z.ZodType<FunctionsSearchResponse$Outbound, z.ZodTypeDef, FunctionsSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsSearchResponse$ {
    /** @deprecated use `FunctionsSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsSearchResponse$Outbound, z.ZodTypeDef, FunctionsSearchResponse>;
    /** @deprecated use `FunctionsSearchResponse$Outbound` instead. */
    type Outbound = FunctionsSearchResponse$Outbound;
}
export declare function functionsSearchResponseToJSON(functionsSearchResponse: FunctionsSearchResponse): string;
export declare function functionsSearchResponseFromJSON(jsonString: string): SafeParseResult<FunctionsSearchResponse, SDKValidationError>;
