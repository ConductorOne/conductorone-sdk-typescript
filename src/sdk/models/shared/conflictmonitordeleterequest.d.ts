import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ConflictMonitorDeleteRequest message.
 */
export type ConflictMonitorDeleteRequest = {};
/** @internal */
export declare const ConflictMonitorDeleteRequest$inboundSchema: z.ZodType<ConflictMonitorDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConflictMonitorDeleteRequest$Outbound = {};
/** @internal */
export declare const ConflictMonitorDeleteRequest$outboundSchema: z.ZodType<ConflictMonitorDeleteRequest$Outbound, z.ZodTypeDef, ConflictMonitorDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConflictMonitorDeleteRequest$ {
    /** @deprecated use `ConflictMonitorDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConflictMonitorDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConflictMonitorDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConflictMonitorDeleteRequest$Outbound, z.ZodTypeDef, ConflictMonitorDeleteRequest>;
    /** @deprecated use `ConflictMonitorDeleteRequest$Outbound` instead. */
    type Outbound = ConflictMonitorDeleteRequest$Outbound;
}
export declare function conflictMonitorDeleteRequestToJSON(conflictMonitorDeleteRequest: ConflictMonitorDeleteRequest): string;
export declare function conflictMonitorDeleteRequestFromJSON(jsonString: string): SafeParseResult<ConflictMonitorDeleteRequest, SDKValidationError>;
