/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Policy } from "./policy";
import { Expose, Type } from "class-transformer";

/**
 * The UpdatePolicyResponse message contains the updated policy object.
 */
export class UpdatePolicyResponse extends SpeakeasyBase {
    /**
     * A policy describes the behavior of the ConductorOne system when processing a task. You can describe the type, approvers, fallback behavior, and escalation processes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => Policy)
    policy?: Policy;
}