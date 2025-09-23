import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AgentApproval, AgentApproval$Outbound } from "./agentapproval.js";
import { AppGroupApproval, AppGroupApproval$Outbound } from "./appgroupapproval.js";
import { AppOwnerApproval, AppOwnerApproval$Outbound } from "./appownerapproval.js";
import { EntitlementOwnerApproval, EntitlementOwnerApproval$Outbound } from "./entitlementownerapproval.js";
import { Escalation, Escalation$Outbound } from "./escalation.js";
import { ExpressionApproval, ExpressionApproval$Outbound } from "./expressionapproval.js";
import { ManagerApproval, ManagerApproval$Outbound } from "./managerapproval.js";
import { ResourceOwnerApproval, ResourceOwnerApproval$Outbound } from "./resourceownerapproval.js";
import { SelfApproval, SelfApproval$Outbound } from "./selfapproval.js";
import { UserApproval, UserApproval$Outbound } from "./userapproval.js";
import { WebhookApproval, WebhookApproval$Outbound } from "./webhookapproval.js";
/**
 * The Approval message.
 *
 * @remarks
 *
 * This message contains a oneof named typ. Only a single field of the following list may be set at a time:
 *   - users
 *   - manager
 *   - appOwners
 *   - group
 *   - self
 *   - entitlementOwners
 *   - expression
 *   - webhook
 *   - resourceOwners
 *   - agent
 */
export type Approval = {
    agent?: AgentApproval | null | undefined;
    /**
     * Whether ticket delegation is allowed for this step.
     */
    allowDelegation?: boolean | null | undefined;
    /**
     * Configuration to allow reassignment by reviewers during this step.
     */
    allowReassignment?: boolean | null | undefined;
    /**
     * List of users for whom this step can be reassigned.
     */
    allowedReassignees?: Array<string> | null | undefined;
    appOwners?: AppOwnerApproval | null | undefined;
    /**
     * A field indicating whether this step is assigned.
     */
    assigned?: boolean | null | undefined;
    entitlementOwners?: EntitlementOwnerApproval | null | undefined;
    escalation?: Escalation | null | undefined;
    /**
     * Whether escalation is enabled for this step.
     */
    escalationEnabled?: boolean | null | undefined;
    expression?: ExpressionApproval | null | undefined;
    group?: AppGroupApproval | null | undefined;
    manager?: ManagerApproval | null | undefined;
    /**
     * Configuration to require a reason when approving this step.
     */
    requireApprovalReason?: boolean | null | undefined;
    /**
     * Configuration to require a reason when denying this step.
     */
    requireDenialReason?: boolean | null | undefined;
    /**
     * Configuration to require a reason when reassigning this step.
     */
    requireReassignmentReason?: boolean | null | undefined;
    /**
     * The ID of a step-up authentication provider that will be required for approvals on this step.
     *
     * @remarks
     *  If set, approvers must complete the step-up authentication flow before they can approve.
     */
    requiresStepUpProviderId?: string | null | undefined;
    resourceOwners?: ResourceOwnerApproval | null | undefined;
    self?: SelfApproval | null | undefined;
    users?: UserApproval | null | undefined;
    webhook?: WebhookApproval | null | undefined;
};
/** @internal */
export declare const Approval$inboundSchema: z.ZodType<Approval, z.ZodTypeDef, unknown>;
/** @internal */
export type Approval$Outbound = {
    agent?: AgentApproval$Outbound | null | undefined;
    allowDelegation?: boolean | null | undefined;
    allowReassignment?: boolean | null | undefined;
    allowedReassignees?: Array<string> | null | undefined;
    appOwners?: AppOwnerApproval$Outbound | null | undefined;
    assigned?: boolean | null | undefined;
    entitlementOwners?: EntitlementOwnerApproval$Outbound | null | undefined;
    escalation?: Escalation$Outbound | null | undefined;
    escalationEnabled?: boolean | null | undefined;
    expression?: ExpressionApproval$Outbound | null | undefined;
    group?: AppGroupApproval$Outbound | null | undefined;
    manager?: ManagerApproval$Outbound | null | undefined;
    requireApprovalReason?: boolean | null | undefined;
    requireDenialReason?: boolean | null | undefined;
    requireReassignmentReason?: boolean | null | undefined;
    requiresStepUpProviderId?: string | null | undefined;
    resourceOwners?: ResourceOwnerApproval$Outbound | null | undefined;
    self?: SelfApproval$Outbound | null | undefined;
    users?: UserApproval$Outbound | null | undefined;
    webhook?: WebhookApproval$Outbound | null | undefined;
};
/** @internal */
export declare const Approval$outboundSchema: z.ZodType<Approval$Outbound, z.ZodTypeDef, Approval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Approval$ {
    /** @deprecated use `Approval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Approval, z.ZodTypeDef, unknown>;
    /** @deprecated use `Approval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Approval$Outbound, z.ZodTypeDef, Approval>;
    /** @deprecated use `Approval$Outbound` instead. */
    type Outbound = Approval$Outbound;
}
export declare function approvalToJSON(approval: Approval): string;
export declare function approvalFromJSON(jsonString: string): SafeParseResult<Approval, SDKValidationError>;
