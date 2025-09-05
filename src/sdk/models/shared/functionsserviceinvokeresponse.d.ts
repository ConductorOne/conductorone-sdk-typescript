import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The FunctionsServiceInvokeResponse message.
 *
 * @remarks
 *
 * This message contains a oneof named resp. Only a single field of the following list may be set at a time:
 *   - json
 */
export type FunctionsServiceInvokeResponse = {
    /**
     * The json field.
     *
     * @remarks
     * This field is part of the `resp` oneof.
     * See the documentation for `c1.api.functions.v1.FunctionsServiceInvokeResponse` for more details.
     */
    json?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceInvokeResponse$inboundSchema: z.ZodType<FunctionsServiceInvokeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceInvokeResponse$Outbound = {
    json?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceInvokeResponse$outboundSchema: z.ZodType<FunctionsServiceInvokeResponse$Outbound, z.ZodTypeDef, FunctionsServiceInvokeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceInvokeResponse$ {
    /** @deprecated use `FunctionsServiceInvokeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceInvokeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceInvokeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceInvokeResponse$Outbound, z.ZodTypeDef, FunctionsServiceInvokeResponse>;
    /** @deprecated use `FunctionsServiceInvokeResponse$Outbound` instead. */
    type Outbound = FunctionsServiceInvokeResponse$Outbound;
}
export declare function functionsServiceInvokeResponseToJSON(functionsServiceInvokeResponse: FunctionsServiceInvokeResponse): string;
export declare function functionsServiceInvokeResponseFromJSON(jsonString: string): SafeParseResult<FunctionsServiceInvokeResponse, SDKValidationError>;
