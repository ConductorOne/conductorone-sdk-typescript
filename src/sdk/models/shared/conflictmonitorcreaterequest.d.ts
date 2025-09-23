import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { NotificationConfig, NotificationConfig$Outbound } from "./notificationconfig.js";
/**
 * The ConflictMonitorCreateRequest message.
 */
export type ConflictMonitorCreateRequest = {
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName: string;
    notificationConfig?: NotificationConfig | null | undefined;
};
/** @internal */
export declare const ConflictMonitorCreateRequest$inboundSchema: z.ZodType<ConflictMonitorCreateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConflictMonitorCreateRequest$Outbound = {
    description?: string | null | undefined;
    displayName: string;
    notificationConfig?: NotificationConfig$Outbound | null | undefined;
};
/** @internal */
export declare const ConflictMonitorCreateRequest$outboundSchema: z.ZodType<ConflictMonitorCreateRequest$Outbound, z.ZodTypeDef, ConflictMonitorCreateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConflictMonitorCreateRequest$ {
    /** @deprecated use `ConflictMonitorCreateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConflictMonitorCreateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConflictMonitorCreateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConflictMonitorCreateRequest$Outbound, z.ZodTypeDef, ConflictMonitorCreateRequest>;
    /** @deprecated use `ConflictMonitorCreateRequest$Outbound` instead. */
    type Outbound = ConflictMonitorCreateRequest$Outbound;
}
export declare function conflictMonitorCreateRequestToJSON(conflictMonitorCreateRequest: ConflictMonitorCreateRequest): string;
export declare function conflictMonitorCreateRequestFromJSON(jsonString: string): SafeParseResult<ConflictMonitorCreateRequest, SDKValidationError>;
