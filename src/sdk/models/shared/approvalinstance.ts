/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Approval } from "./approval";
import { ApprovedAction } from "./approvedaction";
import { DeniedAction } from "./deniedaction";
import { ReassignedAction } from "./reassignedaction";
import { ReassignedByErrorAction } from "./reassignedbyerroraction";
import { RestartAction } from "./restartaction";
import { Expose, Type } from "class-transformer";

/**
 * The state of the approval instance
 */
export enum ApprovalInstanceState {
    ApprovalInstanceStateUnspecified = "APPROVAL_INSTANCE_STATE_UNSPECIFIED",
    ApprovalInstanceStateInit = "APPROVAL_INSTANCE_STATE_INIT",
    ApprovalInstanceStateSendingNotifications = "APPROVAL_INSTANCE_STATE_SENDING_NOTIFICATIONS",
    ApprovalInstanceStateWaiting = "APPROVAL_INSTANCE_STATE_WAITING",
    ApprovalInstanceStateDone = "APPROVAL_INSTANCE_STATE_DONE",
}

/**
 * The approval instance object describes the way a policy step should be approved as well as its outcomes and state.
 *
 * @remarks
 *
 * This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
 *   - approved
 *   - denied
 *   - reassigned
 *   - restarted
 *   - reassignedByError
 *
 */
export class ApprovalInstance extends SpeakeasyBase {
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
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approval" })
    @Type(() => Approval)
    approval?: Approval;

    /**
     * The approved action indicates that the approvalinstance had an outcome of approved.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "approved" })
    @Type(() => ApprovedAction)
    approvedAction?: ApprovedAction;

    /**
     * The denied action indicates that the c1.api.policy.v1.ApprovalInstance had an outcome of denied.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "denied" })
    @Type(() => DeniedAction)
    deniedAction?: DeniedAction;

    /**
     * The ReassignedAction object describes the outcome of a policy step that has been reassigned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reassigned" })
    @Type(() => ReassignedAction)
    reassignedAction?: ReassignedAction;

    /**
     * The ReassignedByErrorAction object describes the outcome of a policy step that has been reassigned because it had an error provisioning.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reassignedByError" })
    @Type(() => ReassignedByErrorAction)
    reassignedByErrorAction?: ReassignedByErrorAction;

    /**
     * The restart action describes the outcome of policy steps for when the task was restarted. This can be applied to multiple steps since restart skips all pending next steps.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "restarted" })
    @Type(() => RestartAction)
    restartAction?: RestartAction;

    /**
     * The state of the approval instance
     */
    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state?: ApprovalInstanceState;
}