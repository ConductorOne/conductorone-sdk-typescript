import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { NotificationConfig, NotificationConfig$Outbound } from "./notificationconfig.js";
/**
 * The ConflictMonitor message.
 */
export type ConflictMonitor = {
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    /**
     * The enabled field.
     */
    enabled?: boolean | null | undefined;
    /**
     * The entitlementSetAId field.
     */
    entitlementSetAId?: string | null | undefined;
    /**
     * The entitlementSetBId field.
     */
    entitlementSetBId?: string | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
    notificationConfig?: NotificationConfig | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const ConflictMonitor$inboundSchema: z.ZodType<ConflictMonitor, z.ZodTypeDef, unknown>;
/** @internal */
export type ConflictMonitor$Outbound = {
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    enabled?: boolean | null | undefined;
    entitlementSetAId?: string | null | undefined;
    entitlementSetBId?: string | null | undefined;
    id?: string | null | undefined;
    notificationConfig?: NotificationConfig$Outbound | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const ConflictMonitor$outboundSchema: z.ZodType<ConflictMonitor$Outbound, z.ZodTypeDef, ConflictMonitor>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConflictMonitor$ {
    /** @deprecated use `ConflictMonitor$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConflictMonitor, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConflictMonitor$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConflictMonitor$Outbound, z.ZodTypeDef, ConflictMonitor>;
    /** @deprecated use `ConflictMonitor$Outbound` instead. */
    type Outbound = ConflictMonitor$Outbound;
}
export declare function conflictMonitorToJSON(conflictMonitor: ConflictMonitor): string;
export declare function conflictMonitorFromJSON(jsonString: string): SafeParseResult<ConflictMonitor, SDKValidationError>;
