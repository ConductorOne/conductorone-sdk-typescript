import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditExternalTicketTriggered message.
 */
export type TaskAuditExternalTicketTriggered = {
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The connectorId field.
     */
    connectorId?: string | null | undefined;
    /**
     * The externalTicketId field.
     */
    externalTicketId?: string | null | undefined;
    /**
     * The externalTicketProvisionerConfigId field.
     */
    externalTicketProvisionerConfigId?: string | null | undefined;
    /**
     * The externalTicketProvisionerConfigName field.
     */
    externalTicketProvisionerConfigName?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditExternalTicketTriggered$inboundSchema: z.ZodType<TaskAuditExternalTicketTriggered, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditExternalTicketTriggered$Outbound = {
    appId?: string | null | undefined;
    connectorId?: string | null | undefined;
    externalTicketId?: string | null | undefined;
    externalTicketProvisionerConfigId?: string | null | undefined;
    externalTicketProvisionerConfigName?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditExternalTicketTriggered$outboundSchema: z.ZodType<TaskAuditExternalTicketTriggered$Outbound, z.ZodTypeDef, TaskAuditExternalTicketTriggered>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditExternalTicketTriggered$ {
    /** @deprecated use `TaskAuditExternalTicketTriggered$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditExternalTicketTriggered, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditExternalTicketTriggered$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditExternalTicketTriggered$Outbound, z.ZodTypeDef, TaskAuditExternalTicketTriggered>;
    /** @deprecated use `TaskAuditExternalTicketTriggered$Outbound` instead. */
    type Outbound = TaskAuditExternalTicketTriggered$Outbound;
}
export declare function taskAuditExternalTicketTriggeredToJSON(taskAuditExternalTicketTriggered: TaskAuditExternalTicketTriggered): string;
export declare function taskAuditExternalTicketTriggeredFromJSON(jsonString: string): SafeParseResult<TaskAuditExternalTicketTriggered, SDKValidationError>;
