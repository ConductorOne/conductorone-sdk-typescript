import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ConflictMonitorDeleteResponse message.
 */
export type ConflictMonitorDeleteResponse = {};
/** @internal */
export declare const ConflictMonitorDeleteResponse$inboundSchema: z.ZodType<ConflictMonitorDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ConflictMonitorDeleteResponse$Outbound = {};
/** @internal */
export declare const ConflictMonitorDeleteResponse$outboundSchema: z.ZodType<ConflictMonitorDeleteResponse$Outbound, z.ZodTypeDef, ConflictMonitorDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConflictMonitorDeleteResponse$ {
    /** @deprecated use `ConflictMonitorDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConflictMonitorDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConflictMonitorDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConflictMonitorDeleteResponse$Outbound, z.ZodTypeDef, ConflictMonitorDeleteResponse>;
    /** @deprecated use `ConflictMonitorDeleteResponse$Outbound` instead. */
    type Outbound = ConflictMonitorDeleteResponse$Outbound;
}
export declare function conflictMonitorDeleteResponseToJSON(conflictMonitorDeleteResponse: ConflictMonitorDeleteResponse): string;
export declare function conflictMonitorDeleteResponseFromJSON(jsonString: string): SafeParseResult<ConflictMonitorDeleteResponse, SDKValidationError>;
