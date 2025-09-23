import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The FunctionsServiceInvokeRequest message.
 *
 * @remarks
 *
 * This message contains a oneof named arg. Only a single field of the following list may be set at a time:
 *   - json
 */
export type FunctionsServiceInvokeRequest = {
    /**
     * The commitId field.
     */
    commitId?: string | null | undefined;
    /**
     * The json field.
     *
     * @remarks
     * This field is part of the `arg` oneof.
     * See the documentation for `c1.api.functions.v1.FunctionsServiceInvokeRequest` for more details.
     */
    json?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceInvokeRequest$inboundSchema: z.ZodType<FunctionsServiceInvokeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type FunctionsServiceInvokeRequest$Outbound = {
    commitId?: string | null | undefined;
    json?: string | null | undefined;
};
/** @internal */
export declare const FunctionsServiceInvokeRequest$outboundSchema: z.ZodType<FunctionsServiceInvokeRequest$Outbound, z.ZodTypeDef, FunctionsServiceInvokeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FunctionsServiceInvokeRequest$ {
    /** @deprecated use `FunctionsServiceInvokeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FunctionsServiceInvokeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `FunctionsServiceInvokeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FunctionsServiceInvokeRequest$Outbound, z.ZodTypeDef, FunctionsServiceInvokeRequest>;
    /** @deprecated use `FunctionsServiceInvokeRequest$Outbound` instead. */
    type Outbound = FunctionsServiceInvokeRequest$Outbound;
}
export declare function functionsServiceInvokeRequestToJSON(functionsServiceInvokeRequest: FunctionsServiceInvokeRequest): string;
export declare function functionsServiceInvokeRequestFromJSON(jsonString: string): SafeParseResult<FunctionsServiceInvokeRequest, SDKValidationError>;
