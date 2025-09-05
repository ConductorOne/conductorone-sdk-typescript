import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AgentApproval, AgentApproval$Outbound } from "./agentapproval.js";
import { AppGroupApproval, AppGroupApproval$Outbound } from "./appgroupapproval.js";
import { AppOwnerApproval, AppOwnerApproval$Outbound } from "./appownerapproval.js";
import { EntitlementOwnerApproval, EntitlementOwnerApproval$Outbound } from "./entitlementownerapproval.js";
import { Escalation, Escalation$Outbound } from "./escalation.js";
import { ExpressionApprovalInput, ExpressionApprovalInput$Outbound } from "./expressionapprovalinput.js";
import { ManagerApprovalInput, ManagerApprovalInput$Outbound } from "./managerapprovalinput.js";
import { ResourceOwnerApproval, ResourceOwnerApproval$Outbound } from "./resourceownerapproval.js";
import { SelfApprovalInput, SelfApprovalInput$Outbound } from "./selfapprovalinput.js";
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
export type ApprovalInput = {
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
    entitlementOwners?: EntitlementOwnerApproval | null | undefined;
    escalation?: Escalation | null | undefined;
    /**
     * Whether escalation is enabled for this step.
     */
    escalationEnabled?: boolean | null | undefined;
    expression?: ExpressionApprovalInput | null | undefined;
    group?: AppGroupApproval | null | undefined;
    manager?: ManagerApprovalInput | null | undefined;
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
    self?: SelfApprovalInput | null | undefined;
    users?: UserApproval | null | undefined;
    webhook?: WebhookApproval | null | undefined;
};
/** @internal */
export declare const ApprovalInput$inboundSchema: z.ZodType<ApprovalInput, z.ZodTypeDef, unknown>;
/** @internal */
export type ApprovalInput$Outbound = {
    agent?: AgentApproval$Outbound | null | undefined;
    allowDelegation?: boolean | null | undefined;
    allowReassignment?: boolean | null | undefined;
    allowedReassignees?: Array<string> | null | undefined;
    appOwners?: AppOwnerApproval$Outbound | null | undefined;
    entitlementOwners?: EntitlementOwnerApproval$Outbound | null | undefined;
    escalation?: Escalation$Outbound | null | undefined;
    escalationEnabled?: boolean | null | undefined;
    expression?: ExpressionApprovalInput$Outbound | null | undefined;
    group?: AppGroupApproval$Outbound | null | undefined;
    manager?: ManagerApprovalInput$Outbound | null | undefined;
    requireApprovalReason?: boolean | null | undefined;
    requireDenialReason?: boolean | null | undefined;
    requireReassignmentReason?: boolean | null | undefined;
    requiresStepUpProviderId?: string | null | undefined;
    resourceOwners?: ResourceOwnerApproval$Outbound | null | undefined;
    self?: SelfApprovalInput$Outbound | null | undefined;
    users?: UserApproval$Outbound | null | undefined;
    webhook?: WebhookApproval$Outbound | null | undefined;
};
/** @internal */
export declare const ApprovalInput$outboundSchema: z.ZodType<ApprovalInput$Outbound, z.ZodTypeDef, ApprovalInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ApprovalInput$ {
    /** @deprecated use `ApprovalInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ApprovalInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `ApprovalInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ApprovalInput$Outbound, z.ZodTypeDef, ApprovalInput>;
    /** @deprecated use `ApprovalInput$Outbound` instead. */
    type Outbound = ApprovalInput$Outbound;
}
export declare function approvalInputToJSON(approvalInput: ApprovalInput): string;
export declare function approvalInputFromJSON(jsonString: string): SafeParseResult<ApprovalInput, SDKValidationError>;
