import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The CancelAccessRequestDefaultsRequest message.
 */
export type CancelAccessRequestDefaultsRequest = {};
/** @internal */
export declare const CancelAccessRequestDefaultsRequest$inboundSchema: z.ZodType<CancelAccessRequestDefaultsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelAccessRequestDefaultsRequest$Outbound = {};
/** @internal */
export declare const CancelAccessRequestDefaultsRequest$outboundSchema: z.ZodType<CancelAccessRequestDefaultsRequest$Outbound, z.ZodTypeDef, CancelAccessRequestDefaultsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelAccessRequestDefaultsRequest$ {
    /** @deprecated use `CancelAccessRequestDefaultsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelAccessRequestDefaultsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelAccessRequestDefaultsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelAccessRequestDefaultsRequest$Outbound, z.ZodTypeDef, CancelAccessRequestDefaultsRequest>;
    /** @deprecated use `CancelAccessRequestDefaultsRequest$Outbound` instead. */
    type Outbound = CancelAccessRequestDefaultsRequest$Outbound;
}
export declare function cancelAccessRequestDefaultsRequestToJSON(cancelAccessRequestDefaultsRequest: CancelAccessRequestDefaultsRequest): string;
export declare function cancelAccessRequestDefaultsRequestFromJSON(jsonString: string): SafeParseResult<CancelAccessRequestDefaultsRequest, SDKValidationError>;
