import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CancelledAction, CancelledAction$Outbound } from "./cancelledaction.js";
import { CompletedAction, CompletedAction$Outbound } from "./completedaction.js";
import { ErroredAction, ErroredAction$Outbound } from "./erroredaction.js";
import { Provision, Provision$Outbound } from "./provision.js";
import { ReassignedByErrorAction, ReassignedByErrorAction$Outbound } from "./reassignedbyerroraction.js";
import { SkippedAction, SkippedAction$Outbound } from "./skippedaction.js";
/**
 * This property indicates the current state of this step.
 */
export declare const ProvisionInstanceState: {
    readonly ProvisionInstanceStateUnspecified: "PROVISION_INSTANCE_STATE_UNSPECIFIED";
    readonly ProvisionInstanceStateInit: "PROVISION_INSTANCE_STATE_INIT";
    readonly ProvisionInstanceStateCreateConnectorActionsForTarget: "PROVISION_INSTANCE_STATE_CREATE_CONNECTOR_ACTIONS_FOR_TARGET";
    readonly ProvisionInstanceStateSendingNotifications: "PROVISION_INSTANCE_STATE_SENDING_NOTIFICATIONS";
    readonly ProvisionInstanceStateWaiting: "PROVISION_INSTANCE_STATE_WAITING";
    readonly ProvisionInstanceStateWebhook: "PROVISION_INSTANCE_STATE_WEBHOOK";
    readonly ProvisionInstanceStateWebhookWaiting: "PROVISION_INSTANCE_STATE_WEBHOOK_WAITING";
    readonly ProvisionInstanceStateExternalTicket: "PROVISION_INSTANCE_STATE_EXTERNAL_TICKET";
    readonly ProvisionInstanceStateExternalTicketWaiting: "PROVISION_INSTANCE_STATE_EXTERNAL_TICKET_WAITING";
    readonly ProvisionInstanceStateDone: "PROVISION_INSTANCE_STATE_DONE";
};
/**
 * This property indicates the current state of this step.
 */
export type ProvisionInstanceState = OpenEnum<typeof ProvisionInstanceState>;
/**
 * A provision instance describes the specific configuration of an executing provision policy step including actions taken and notification id.
 *
 * @remarks
 *
 * This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
 *   - completed
 *   - cancelled
 *   - errored
 *   - reassignedByError
 *   - skipped
 */
export type ProvisionInstance = {
    cancelled?: CancelledAction | null | undefined;
    completed?: CompletedAction | null | undefined;
    errored?: ErroredAction | null | undefined;
    /**
     * This indicates the external ticket id for this step.
     */
    externalTicketId?: string | null | undefined;
    /**
     * This indicates the external ticket provisioner config id for this step.
     */
    externalTicketProvisionerConfigId?: string | null | undefined;
    /**
     * This indicates the notification id for this step.
     */
    notificationId?: string | null | undefined;
    provision?: Provision | null | undefined;
    reassignedByError?: ReassignedByErrorAction | null | undefined;
    skipped?: SkippedAction | null | undefined;
    /**
     * This property indicates the current state of this step.
     */
    state?: ProvisionInstanceState | null | undefined;
    /**
     * This indicates the webhook id for this step.
     */
    webhookId?: string | null | undefined;
    /**
     * This indicates the webhook instance id for this step.
     */
    webhookInstanceId?: string | null | undefined;
};
/** @internal */
export declare const ProvisionInstanceState$inboundSchema: z.ZodType<ProvisionInstanceState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ProvisionInstanceState$outboundSchema: z.ZodType<ProvisionInstanceState, z.ZodTypeDef, ProvisionInstanceState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProvisionInstanceState$ {
    /** @deprecated use `ProvisionInstanceState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProvisionInstanceState, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProvisionInstanceState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProvisionInstanceState, z.ZodTypeDef, ProvisionInstanceState>;
}
/** @internal */
export declare const ProvisionInstance$inboundSchema: z.ZodType<ProvisionInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type ProvisionInstance$Outbound = {
    cancelled?: CancelledAction$Outbound | null | undefined;
    completed?: CompletedAction$Outbound | null | undefined;
    errored?: ErroredAction$Outbound | null | undefined;
    externalTicketId?: string | null | undefined;
    externalTicketProvisionerConfigId?: string | null | undefined;
    notificationId?: string | null | undefined;
    provision?: Provision$Outbound | null | undefined;
    reassignedByError?: ReassignedByErrorAction$Outbound | null | undefined;
    skipped?: SkippedAction$Outbound | null | undefined;
    state?: string | null | undefined;
    webhookId?: string | null | undefined;
    webhookInstanceId?: string | null | undefined;
};
/** @internal */
export declare const ProvisionInstance$outboundSchema: z.ZodType<ProvisionInstance$Outbound, z.ZodTypeDef, ProvisionInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ProvisionInstance$ {
    /** @deprecated use `ProvisionInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ProvisionInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `ProvisionInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ProvisionInstance$Outbound, z.ZodTypeDef, ProvisionInstance>;
    /** @deprecated use `ProvisionInstance$Outbound` instead. */
    type Outbound = ProvisionInstance$Outbound;
}
export declare function provisionInstanceToJSON(provisionInstance: ProvisionInstance): string;
export declare function provisionInstanceFromJSON(jsonString: string): SafeParseResult<ProvisionInstance, SDKValidationError>;
