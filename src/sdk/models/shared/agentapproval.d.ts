import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The action to take if the agent fails to approve, deny, or reassign the task.
 */
export declare const AgentFailureAction: {
    readonly ApprovalAgentFailureActionUnspecified: "APPROVAL_AGENT_FAILURE_ACTION_UNSPECIFIED";
    readonly ApprovalAgentFailureActionReassignToUsers: "APPROVAL_AGENT_FAILURE_ACTION_REASSIGN_TO_USERS";
    readonly ApprovalAgentFailureActionReassignToSuperAdmins: "APPROVAL_AGENT_FAILURE_ACTION_REASSIGN_TO_SUPER_ADMINS";
    readonly ApprovalAgentFailureActionSkipPolicyStep: "APPROVAL_AGENT_FAILURE_ACTION_SKIP_POLICY_STEP";
};
/**
 * The action to take if the agent fails to approve, deny, or reassign the task.
 */
export type AgentFailureAction = OpenEnum<typeof AgentFailureAction>;
/**
 * The mode of the agent, full control, change policy only, or comment only.
 */
export declare const AgentMode: {
    readonly ApprovalAgentModeUnspecified: "APPROVAL_AGENT_MODE_UNSPECIFIED";
    readonly ApprovalAgentModeFullControl: "APPROVAL_AGENT_MODE_FULL_CONTROL";
    readonly ApprovalAgentModeChangePolicyOnly: "APPROVAL_AGENT_MODE_CHANGE_POLICY_ONLY";
    readonly ApprovalAgentModeCommentOnly: "APPROVAL_AGENT_MODE_COMMENT_ONLY";
};
/**
 * The mode of the agent, full control, change policy only, or comment only.
 */
export type AgentMode = OpenEnum<typeof AgentMode>;
/**
 * The agent to assign the task to.
 */
export type AgentApproval = {
    /**
     * The action to take if the agent fails to approve, deny, or reassign the task.
     */
    agentFailureAction?: AgentFailureAction | null | undefined;
    /**
     * The mode of the agent, full control, change policy only, or comment only.
     */
    agentMode?: AgentMode | null | undefined;
    /**
     * The agent user ID to assign the task to.
     */
    agentUserId?: string | null | undefined;
    /**
     * Instructions for the agent.
     */
    instructions?: string | null | undefined;
    /**
     * The allow list of policy IDs to re-route the task to.
     */
    policyIds?: Array<string> | null | undefined;
    /**
     * The users to reassign the task to if the agent failure action is reassign to users.
     */
    reassignToUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const AgentFailureAction$inboundSchema: z.ZodType<AgentFailureAction, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AgentFailureAction$outboundSchema: z.ZodType<AgentFailureAction, z.ZodTypeDef, AgentFailureAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AgentFailureAction$ {
    /** @deprecated use `AgentFailureAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AgentFailureAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `AgentFailureAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AgentFailureAction, z.ZodTypeDef, AgentFailureAction>;
}
/** @internal */
export declare const AgentMode$inboundSchema: z.ZodType<AgentMode, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AgentMode$outboundSchema: z.ZodType<AgentMode, z.ZodTypeDef, AgentMode>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AgentMode$ {
    /** @deprecated use `AgentMode$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AgentMode, z.ZodTypeDef, unknown>;
    /** @deprecated use `AgentMode$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AgentMode, z.ZodTypeDef, AgentMode>;
}
/** @internal */
export declare const AgentApproval$inboundSchema: z.ZodType<AgentApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type AgentApproval$Outbound = {
    agentFailureAction?: string | null | undefined;
    agentMode?: string | null | undefined;
    agentUserId?: string | null | undefined;
    instructions?: string | null | undefined;
    policyIds?: Array<string> | null | undefined;
    reassignToUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const AgentApproval$outboundSchema: z.ZodType<AgentApproval$Outbound, z.ZodTypeDef, AgentApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AgentApproval$ {
    /** @deprecated use `AgentApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AgentApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `AgentApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AgentApproval$Outbound, z.ZodTypeDef, AgentApproval>;
    /** @deprecated use `AgentApproval$Outbound` instead. */
    type Outbound = AgentApproval$Outbound;
}
export declare function agentApprovalToJSON(agentApproval: AgentApproval): string;
export declare function agentApprovalFromJSON(jsonString: string): SafeParseResult<AgentApproval, SDKValidationError>;
