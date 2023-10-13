/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The entitlement owner approval allows configuration of the approval step when the target approvers are the entitlement owners.
 */
export class EntitlementOwnerApproval extends SpeakeasyBase {
    /**
     * Configuration to allow self approval if the target user is an entitlement owner during this step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "allowSelfApproval" })
    allowSelfApproval?: boolean;

    /**
     * Configuration to allow a fallback if the entitlement owner cannot be identified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fallback" })
    fallback?: boolean;

    /**
     * Configuration to specific which users to fallback to if fallback is enabled and the entitlement owner cannot be identified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fallbackUserIds" })
    fallbackUserIds?: string[];
}

/**
 * The entitlement owner approval allows configuration of the approval step when the target approvers are the entitlement owners.
 */
export class EntitlementOwnerApprovalInput extends SpeakeasyBase {}
