import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PauseSyncResponse message.
 */
export type PauseSyncResponse = {};
/** @internal */
export declare const PauseSyncResponse$inboundSchema: z.ZodType<PauseSyncResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type PauseSyncResponse$Outbound = {};
/** @internal */
export declare const PauseSyncResponse$outboundSchema: z.ZodType<PauseSyncResponse$Outbound, z.ZodTypeDef, PauseSyncResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PauseSyncResponse$ {
    /** @deprecated use `PauseSyncResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PauseSyncResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `PauseSyncResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PauseSyncResponse$Outbound, z.ZodTypeDef, PauseSyncResponse>;
    /** @deprecated use `PauseSyncResponse$Outbound` instead. */
    type Outbound = PauseSyncResponse$Outbound;
}
export declare function pauseSyncResponseToJSON(pauseSyncResponse: PauseSyncResponse): string;
export declare function pauseSyncResponseFromJSON(jsonString: string): SafeParseResult<PauseSyncResponse, SDKValidationError>;
