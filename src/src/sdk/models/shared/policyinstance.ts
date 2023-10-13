/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Policy } from "./policy";
import { PolicyStep } from "./policystep";
import { PolicyStepInstance } from "./policystepinstance";
import { Expose, Type } from "class-transformer";

/**
 * A policy instance is an object that contains a reference to the policy it was created from, the currently executing step, the next steps, and the history of previously completed steps.
 */
export class PolicyInstance extends SpeakeasyBase {
    /**
     * A policy describes the behavior of the ConductorOne system when processing a task. You can describe the type, approvers, fallback behavior, and escalation processes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => Policy)
    policy?: Policy;

    /**
     * The policy step instance includes a reference to an instance of a policy step that tracks state and has a unique ID.
     *
     * @remarks
     *
     * This message contains a oneof named instance. Only a single field of the following list may be set at a time:
     *   - approval
     *   - provision
     *   - accept
     *   - reject
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "current" })
    @Type(() => PolicyStepInstance)
    policyStepInstance?: PolicyStepInstance;

    /**
     * An array of steps that were previously processed by the ticket with their outcomes set, in order.
     */
    @SpeakeasyMetadata({ elemType: PolicyStepInstance })
    @Expose({ name: "history" })
    @Type(() => PolicyStepInstance)
    history?: PolicyStepInstance[];

    /**
     * An array of steps that will be processed by the ticket, in order.
     */
    @SpeakeasyMetadata({ elemType: PolicyStep })
    @Expose({ name: "next" })
    @Type(() => PolicyStep)
    next?: PolicyStep[];
}
