import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditExternalTicketProvisionStepResolved message.
 */
export type TaskAuditExternalTicketProvisionStepResolved = {
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
     * The externalTicketUrl field.
     */
    externalTicketUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditExternalTicketProvisionStepResolved$inboundSchema: z.ZodType<TaskAuditExternalTicketProvisionStepResolved, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditExternalTicketProvisionStepResolved$Outbound = {
    appId?: string | null | undefined;
    connectorId?: string | null | undefined;
    externalTicketId?: string | null | undefined;
    externalTicketProvisionerConfigId?: string | null | undefined;
    externalTicketUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditExternalTicketProvisionStepResolved$outboundSchema: z.ZodType<TaskAuditExternalTicketProvisionStepResolved$Outbound, z.ZodTypeDef, TaskAuditExternalTicketProvisionStepResolved>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditExternalTicketProvisionStepResolved$ {
    /** @deprecated use `TaskAuditExternalTicketProvisionStepResolved$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditExternalTicketProvisionStepResolved, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditExternalTicketProvisionStepResolved$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditExternalTicketProvisionStepResolved$Outbound, z.ZodTypeDef, TaskAuditExternalTicketProvisionStepResolved>;
    /** @deprecated use `TaskAuditExternalTicketProvisionStepResolved$Outbound` instead. */
    type Outbound = TaskAuditExternalTicketProvisionStepResolved$Outbound;
}
export declare function taskAuditExternalTicketProvisionStepResolvedToJSON(taskAuditExternalTicketProvisionStepResolved: TaskAuditExternalTicketProvisionStepResolved): string;
export declare function taskAuditExternalTicketProvisionStepResolvedFromJSON(jsonString: string): SafeParseResult<TaskAuditExternalTicketProvisionStepResolved, SDKValidationError>;
