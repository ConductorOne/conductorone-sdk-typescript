import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PauseSyncRequest message.
 */
export type PauseSyncRequest = {};
/** @internal */
export declare const PauseSyncRequest$inboundSchema: z.ZodType<PauseSyncRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type PauseSyncRequest$Outbound = {};
/** @internal */
export declare const PauseSyncRequest$outboundSchema: z.ZodType<PauseSyncRequest$Outbound, z.ZodTypeDef, PauseSyncRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PauseSyncRequest$ {
    /** @deprecated use `PauseSyncRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PauseSyncRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `PauseSyncRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PauseSyncRequest$Outbound, z.ZodTypeDef, PauseSyncRequest>;
    /** @deprecated use `PauseSyncRequest$Outbound` instead. */
    type Outbound = PauseSyncRequest$Outbound;
}
export declare function pauseSyncRequestToJSON(pauseSyncRequest: PauseSyncRequest): string;
export declare function pauseSyncRequestFromJSON(jsonString: string): SafeParseResult<PauseSyncRequest, SDKValidationError>;
