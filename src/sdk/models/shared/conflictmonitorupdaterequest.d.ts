import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { NotificationConfig, NotificationConfig$Outbound } from "./notificationconfig.js";
/**
 * The ConflictMonitorUpdateRequest message.
 */
export type ConflictMonitorUpdateRequest = {
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    notificationConfig?: NotificationConfig | null | undefined;
};
/** @internal */
export declare const ConflictMonitorUpdateRequest$inboundSchema: z.ZodType<ConflictMonitorUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConflictMonitorUpdateRequest$Outbound = {
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    notificationConfig?: NotificationConfig$Outbound | null | undefined;
};
/** @internal */
export declare const ConflictMonitorUpdateRequest$outboundSchema: z.ZodType<ConflictMonitorUpdateRequest$Outbound, z.ZodTypeDef, ConflictMonitorUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConflictMonitorUpdateRequest$ {
    /** @deprecated use `ConflictMonitorUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConflictMonitorUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConflictMonitorUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConflictMonitorUpdateRequest$Outbound, z.ZodTypeDef, ConflictMonitorUpdateRequest>;
    /** @deprecated use `ConflictMonitorUpdateRequest$Outbound` instead. */
    type Outbound = ConflictMonitorUpdateRequest$Outbound;
}
export declare function conflictMonitorUpdateRequestToJSON(conflictMonitorUpdateRequest: ConflictMonitorUpdateRequest): string;
export declare function conflictMonitorUpdateRequestFromJSON(jsonString: string): SafeParseResult<ConflictMonitorUpdateRequest, SDKValidationError>;
