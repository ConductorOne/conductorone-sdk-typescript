import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ForceSyncResponse message.
 */
export type ForceSyncResponse = {};
/** @internal */
export declare const ForceSyncResponse$inboundSchema: z.ZodType<ForceSyncResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceSyncResponse$Outbound = {};
/** @internal */
export declare const ForceSyncResponse$outboundSchema: z.ZodType<ForceSyncResponse$Outbound, z.ZodTypeDef, ForceSyncResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceSyncResponse$ {
    /** @deprecated use `ForceSyncResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceSyncResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceSyncResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceSyncResponse$Outbound, z.ZodTypeDef, ForceSyncResponse>;
    /** @deprecated use `ForceSyncResponse$Outbound` instead. */
    type Outbound = ForceSyncResponse$Outbound;
}
export declare function forceSyncResponseToJSON(forceSyncResponse: ForceSyncResponse): string;
export declare function forceSyncResponseFromJSON(jsonString: string): SafeParseResult<ForceSyncResponse, SDKValidationError>;
