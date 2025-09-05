import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The status of the connector sync.
 */
export declare const ConnectorStatusStatus: {
    readonly SyncStatusUnspecified: "SYNC_STATUS_UNSPECIFIED";
    readonly SyncStatusRunning: "SYNC_STATUS_RUNNING";
    readonly SyncStatusDone: "SYNC_STATUS_DONE";
    readonly SyncStatusError: "SYNC_STATUS_ERROR";
    readonly SyncStatusDisabled: "SYNC_STATUS_DISABLED";
};
/**
 * The status of the connector sync.
 */
export type ConnectorStatusStatus = OpenEnum<typeof ConnectorStatusStatus>;
/**
 * The status field on the connector is used to track the status of the connectors sync, and when syncing last started, completed, or caused the connector to update.
 */
export type ConnectorStatus = {
    completedAt?: Date | null | undefined;
    /**
     * The last error encountered by the connector.
     */
    lastError?: string | null | undefined;
    startedAt?: Date | null | undefined;
    /**
     * The status of the connector sync.
     */
    status?: ConnectorStatusStatus | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const ConnectorStatusStatus$inboundSchema: z.ZodType<ConnectorStatusStatus, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ConnectorStatusStatus$outboundSchema: z.ZodType<ConnectorStatusStatus, z.ZodTypeDef, ConnectorStatusStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorStatusStatus$ {
    /** @deprecated use `ConnectorStatusStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorStatusStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorStatusStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorStatusStatus, z.ZodTypeDef, ConnectorStatusStatus>;
}
/** @internal */
export declare const ConnectorStatus$inboundSchema: z.ZodType<ConnectorStatus, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorStatus$Outbound = {
    completedAt?: string | null | undefined;
    lastError?: string | null | undefined;
    startedAt?: string | null | undefined;
    status?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const ConnectorStatus$outboundSchema: z.ZodType<ConnectorStatus$Outbound, z.ZodTypeDef, ConnectorStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorStatus$ {
    /** @deprecated use `ConnectorStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorStatus$Outbound, z.ZodTypeDef, ConnectorStatus>;
    /** @deprecated use `ConnectorStatus$Outbound` instead. */
    type Outbound = ConnectorStatus$Outbound;
}
export declare function connectorStatusToJSON(connectorStatus: ConnectorStatus): string;
export declare function connectorStatusFromJSON(jsonString: string): SafeParseResult<ConnectorStatus, SDKValidationError>;
