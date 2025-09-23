import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Approval, Approval$Outbound } from "./approval.js";
import { ApprovedAction, ApprovedAction$Outbound } from "./approvedaction.js";
import { DeniedAction, DeniedAction$Outbound } from "./deniedaction.js";
import { EscalationInstance, EscalationInstance$Outbound } from "./escalationinstance.js";
import { ReassignedAction, ReassignedAction$Outbound } from "./reassignedaction.js";
import { ReassignedByErrorAction, ReassignedByErrorAction$Outbound } from "./reassignedbyerroraction.js";
import { RestartAction, RestartAction$Outbound } from "./restartaction.js";
import { SkippedAction, SkippedAction$Outbound } from "./skippedaction.js";
/**
 * The state of the approval instance
 */
export declare const ApprovalInstanceState: {
    readonly ApprovalInstanceStateUnspecified: "APPROVAL_INSTANCE_STATE_UNSPECIFIED";
    readonly ApprovalInstanceStateInit: "APPROVAL_INSTANCE_STATE_INIT";
    readonly ApprovalInstanceStateSendingNotifications: "APPROVAL_INSTANCE_STATE_SENDING_NOTIFICATIONS";
    readonly ApprovalInstanceStateWaiting: "APPROVAL_INSTANCE_STATE_WAITING";
    readonly ApprovalInstanceStateDone: "APPROVAL_INSTANCE_STATE_DONE";
};
/**
 * The state of the approval instance
 */
export type ApprovalInstanceState = OpenEnum<typeof ApprovalInstanceState>;
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
 *   - skipped
 */
export type ApprovalInstance = {
    approval?: Approval | null | undefined;
    approved?: ApprovedAction | null | undefined;
    denied?: DeniedAction | null | undefined;
    escalationInstance?: EscalationInstance | null | undefined;
    reassigned?: ReassignedAction | null | undefined;
    reassignedByError?: ReassignedByErrorAction | null | undefined;
    restarted?: RestartAction | null | undefined;
    skipped?: SkippedAction | null | undefined;
    /**
     * The state of the approval instance
     */
    state?: ApprovalInstanceState | null | undefined;
};
/** @internal */
export declare const ApprovalInstanceState$inboundSchema: z.ZodType<ApprovalInstanceState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ApprovalInstanceState$outboundSchema: z.ZodType<ApprovalInstanceState, z.ZodTypeDef, ApprovalInstanceState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ApprovalInstanceState$ {
    /** @deprecated use `ApprovalInstanceState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ApprovalInstanceState, z.ZodTypeDef, unknown>;
    /** @deprecated use `ApprovalInstanceState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ApprovalInstanceState, z.ZodTypeDef, ApprovalInstanceState>;
}
/** @internal */
export declare const ApprovalInstance$inboundSchema: z.ZodType<ApprovalInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type ApprovalInstance$Outbound = {
    approval?: Approval$Outbound | null | undefined;
    approved?: ApprovedAction$Outbound | null | undefined;
    denied?: DeniedAction$Outbound | null | undefined;
    escalationInstance?: EscalationInstance$Outbound | null | undefined;
    reassigned?: ReassignedAction$Outbound | null | undefined;
    reassignedByError?: ReassignedByErrorAction$Outbound | null | undefined;
    restarted?: RestartAction$Outbound | null | undefined;
    skipped?: SkippedAction$Outbound | null | undefined;
    state?: string | null | undefined;
};
/** @internal */
export declare const ApprovalInstance$outboundSchema: z.ZodType<ApprovalInstance$Outbound, z.ZodTypeDef, ApprovalInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ApprovalInstance$ {
    /** @deprecated use `ApprovalInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ApprovalInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `ApprovalInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ApprovalInstance$Outbound, z.ZodTypeDef, ApprovalInstance>;
    /** @deprecated use `ApprovalInstance$Outbound` instead. */
    type Outbound = ApprovalInstance$Outbound;
}
export declare function approvalInstanceToJSON(approvalInstance: ApprovalInstance): string;
export declare function approvalInstanceFromJSON(jsonString: string): SafeParseResult<ApprovalInstance, SDKValidationError>;
