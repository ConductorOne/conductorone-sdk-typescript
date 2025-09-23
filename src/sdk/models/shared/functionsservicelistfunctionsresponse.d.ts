import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FunctionT, FunctionT$Outbound } from "./function.js";
/**
 * The FunctionsServiceListFunctionsResponse message.
 */
export type FunctionsServiceListFunctionsResponse = {
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
export declare const FunctionsServiceListFunctionsResponse$inboundSchema: z.ZodType<FunctionsServiceListFunctionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceListFunctionsResponse$Outbound = {
    list?: Array<FunctionT$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceListFunctionsResponse$outboundSchema: z.ZodType<FunctionsServiceListFunctionsResponse$Outbound, z.ZodTypeDef, FunctionsServiceListFunctionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceListFunctionsResponse$ {
    /** @deprecated use `FunctionsServiceListFunctionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceListFunctionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceListFunctionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceListFunctionsResponse$Outbound, z.ZodTypeDef, FunctionsServiceListFunctionsResponse>;
    /** @deprecated use `FunctionsServiceListFunctionsResponse$Outbound` instead. */
    type Outbound = FunctionsServiceListFunctionsResponse$Outbound;
}
export declare function functionsServiceListFunctionsResponseToJSON(functionsServiceListFunctionsResponse: FunctionsServiceListFunctionsResponse): string;
export declare function functionsServiceListFunctionsResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceListFunctionsResponse, SDKValidationError>;
