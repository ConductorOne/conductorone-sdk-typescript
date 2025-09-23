import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Signal the connector to start syncing. This puts the sync on the queue. It does not guarantee immediate sync. Long syncs still take minutes to hours.
 */
export type ForceSyncRequest = {};
/** @internal */
export declare const ForceSyncRequest$inboundSchema: z.ZodType<ForceSyncRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceSyncRequest$Outbound = {};
/** @internal */
export declare const ForceSyncRequest$outboundSchema: z.ZodType<ForceSyncRequest$Outbound, z.ZodTypeDef, ForceSyncRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceSyncRequest$ {
    /** @deprecated use `ForceSyncRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceSyncRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceSyncRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceSyncRequest$Outbound, z.ZodTypeDef, ForceSyncRequest>;
    /** @deprecated use `ForceSyncRequest$Outbound` instead. */
    type Outbound = ForceSyncRequest$Outbound;
}
export declare function forceSyncRequestToJSON(forceSyncRequest: ForceSyncRequest): string;
export declare function forceSyncRequestFromJSON(jsonString: string): SafeParseResult<ForceSyncRequest, SDKValidationError>;
