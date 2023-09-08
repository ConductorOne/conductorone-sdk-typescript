/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppGroupApproval, AppGroupApprovalInput } from "./appgroupapproval";
import { AppOwnerApproval, AppOwnerApprovalInput } from "./appownerapproval";
import {
    EntitlementOwnerApproval,
    EntitlementOwnerApprovalInput,
} from "./entitlementownerapproval";
import { ManagerApproval, ManagerApprovalInput } from "./managerapproval";
import { SelfApproval, SelfApprovalInput } from "./selfapproval";
import { UserApproval, UserApprovalInput } from "./userapproval";
import { Expose, Type } from "class-transformer";

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
export class Approval extends SpeakeasyBase {
    /**
     * The AppGroupApproval object provides the configuration for setting a group as the approvers of an approval policy step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => AppGroupApproval)
    appGroupApproval?: AppGroupApproval;

    /**
     * App owner approval provides the configuration for an approval step when the app owner is the target.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appOwners" })
    @Type(() => AppOwnerApproval)
    appOwnerApproval?: AppOwnerApproval;

    /**
     * The entitlement owner approval allows configuration of the approval step when the target approvers are the entitlement owners.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "entitlementOwners" })
    @Type(() => EntitlementOwnerApproval)
    entitlementOwnerApproval?: EntitlementOwnerApproval;

    /**
     * The manager approval object provides configuration options for approval when the target of the approval is the manager of the user in the task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "manager" })
    @Type(() => ManagerApproval)
    managerApproval?: ManagerApproval;

    /**
     * The self approval object describes the configuration of a policy step that needs to be approved by the target of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "self" })
    @Type(() => SelfApproval)
    selfApproval?: SelfApproval;

    /**
     * The user approval object describes the approval configuration of a policy step that needs to be approved by a specific list of users.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "users" })
    @Type(() => UserApproval)
    userApproval?: UserApproval;

    /**
     * Configuration to allow reassignment by reviewers during this step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "allowReassignment" })
    allowReassignment?: boolean;

    /**
     * A field indicating whether this step is assigned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "assigned" })
    assigned?: boolean;

    /**
     * Configuration to require a reason when approving this step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requireApprovalReason" })
    requireApprovalReason?: boolean;

    /**
     * Configuration to require a reason when reassigning this step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requireReassignmentReason" })
    requireReassignmentReason?: boolean;
}

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
export class ApprovalInput extends SpeakeasyBase {
    /**
     * The AppGroupApproval object provides the configuration for setting a group as the approvers of an approval policy step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "group" })
    @Type(() => AppGroupApprovalInput)
    appGroupApproval?: AppGroupApprovalInput;

    /**
     * App owner approval provides the configuration for an approval step when the app owner is the target.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appOwners" })
    @Type(() => AppOwnerApprovalInput)
    appOwnerApproval?: AppOwnerApprovalInput;

    /**
     * The entitlement owner approval allows configuration of the approval step when the target approvers are the entitlement owners.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "entitlementOwners" })
    @Type(() => EntitlementOwnerApprovalInput)
    entitlementOwnerApproval?: EntitlementOwnerApprovalInput;

    /**
     * The manager approval object provides configuration options for approval when the target of the approval is the manager of the user in the task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "manager" })
    @Type(() => ManagerApprovalInput)
    managerApproval?: ManagerApprovalInput;

    /**
     * The self approval object describes the configuration of a policy step that needs to be approved by the target of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "self" })
    @Type(() => SelfApprovalInput)
    selfApproval?: SelfApprovalInput;

    /**
     * The user approval object describes the approval configuration of a policy step that needs to be approved by a specific list of users.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "users" })
    @Type(() => UserApprovalInput)
    userApproval?: UserApprovalInput;
}
