import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditExternalTicketCreated message.
 */
export type TaskAuditExternalTicketCreated = {
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
    /**
     * The externalTicketUrl field.
     */
    externalTicketUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditExternalTicketCreated$inboundSchema: z.ZodType<TaskAuditExternalTicketCreated, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditExternalTicketCreated$Outbound = {
    appId?: string | null | undefined;
    connectorId?: string | null | undefined;
    externalTicketId?: string | null | undefined;
    externalTicketProvisionerConfigId?: string | null | undefined;
    externalTicketProvisionerConfigName?: string | null | undefined;
    externalTicketUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditExternalTicketCreated$outboundSchema: z.ZodType<TaskAuditExternalTicketCreated$Outbound, z.ZodTypeDef, TaskAuditExternalTicketCreated>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditExternalTicketCreated$ {
    /** @deprecated use `TaskAuditExternalTicketCreated$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditExternalTicketCreated, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditExternalTicketCreated$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditExternalTicketCreated$Outbound, z.ZodTypeDef, TaskAuditExternalTicketCreated>;
    /** @deprecated use `TaskAuditExternalTicketCreated$Outbound` instead. */
    type Outbound = TaskAuditExternalTicketCreated$Outbound;
}
export declare function taskAuditExternalTicketCreatedToJSON(taskAuditExternalTicketCreated: TaskAuditExternalTicketCreated): string;
export declare function taskAuditExternalTicketCreatedFromJSON(jsonString: string): SafeParseResult<TaskAuditExternalTicketCreated, SDKValidationError>;
