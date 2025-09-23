import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskAuditAccessRequestOutcome, TaskAuditAccessRequestOutcome$Outbound } from "./taskauditaccessrequestoutcome.js";
import { TaskAuditActionSubmitted, TaskAuditActionSubmitted$Outbound } from "./taskauditactionsubmitted.js";
import { TaskAuditApprovalAutoAcceptedByPolicy, TaskAuditApprovalAutoAcceptedByPolicy$Outbound } from "./taskauditapprovalautoacceptedbypolicy.js";
import { TaskAuditApprovalAutoRejectedByPolicy, TaskAuditApprovalAutoRejectedByPolicy$Outbound } from "./taskauditapprovalautorejectedbypolicy.js";
import { TaskAuditApprovalHappenedAutomatically, TaskAuditApprovalHappenedAutomatically$Outbound } from "./taskauditapprovalhappenedautomatically.js";
import { TaskAuditApprovalInstanceChange, TaskAuditApprovalInstanceChange$Outbound } from "./taskauditapprovalinstancechange.js";
import { TaskAuditBulkActionError, TaskAuditBulkActionError$Outbound } from "./taskauditbulkactionerror.js";
import { TaskAuditCertifyOutcome, TaskAuditCertifyOutcome$Outbound } from "./taskauditcertifyoutcome.js";
import { TaskAuditComment, TaskAuditComment$Outbound } from "./taskauditcomment.js";
import { TaskAuditConditionalPolicyExecutionResult, TaskAuditConditionalPolicyExecutionResult$Outbound } from "./taskauditconditionalpolicyexecutionresult.js";
import { TaskAuditConnectorActionResult, TaskAuditConnectorActionResult$Outbound } from "./taskauditconnectoractionresult.js";
import { TaskAuditEscalateToEmergencyAccess, TaskAuditEscalateToEmergencyAccess$Outbound } from "./taskauditescalatetoemergencyaccess.js";
import { TaskAuditExpressionPolicyStepError, TaskAuditExpressionPolicyStepError$Outbound } from "./taskauditexpressionpolicysteperror.js";
import { TaskAuditExternalTicketCreated, TaskAuditExternalTicketCreated$Outbound } from "./taskauditexternalticketcreated.js";
import { TaskAuditExternalTicketError, TaskAuditExternalTicketError$Outbound } from "./taskauditexternalticketerror.js";
import { TaskAuditExternalTicketProvisionStepResolved, TaskAuditExternalTicketProvisionStepResolved$Outbound } from "./taskauditexternalticketprovisionstepresolved.js";
import { TaskAuditExternalTicketTriggered, TaskAuditExternalTicketTriggered$Outbound } from "./taskauditexternaltickettriggered.js";
import { TaskAuditFinishedConnectorActions, TaskAuditFinishedConnectorActions$Outbound } from "./taskauditfinishedconnectoractions.js";
import { TaskAuditFormInstanceChange, TaskAuditFormInstanceChange$Outbound } from "./taskauditforminstancechange.js";
import { TaskAuditGrantDurationUpdated, TaskAuditGrantDurationUpdated$Outbound } from "./taskauditgrantdurationupdated.js";
import { TaskAuditGrantOutcome, TaskAuditGrantOutcome$Outbound } from "./taskauditgrantoutcome.js";
import { TaskAuditHardReset, TaskAuditHardReset$Outbound } from "./taskaudithardreset.js";
import { TaskAuditMetaData, TaskAuditMetaData$Outbound } from "./taskauditmetadata.js";
import { TaskAuditNewTask, TaskAuditNewTask$Outbound } from "./taskauditnewtask.js";
import { TaskAuditPolicyApprovalReassigned, TaskAuditPolicyApprovalReassigned$Outbound } from "./taskauditpolicyapprovalreassigned.js";
import { TaskAuditPolicyChanged, TaskAuditPolicyChanged$Outbound } from "./taskauditpolicychanged.js";
import { TaskAuditPolicyEvaluationStep, TaskAuditPolicyEvaluationStep$Outbound } from "./taskauditpolicyevaluationstep.js";
import { TaskAuditPolicyProvisionError, TaskAuditPolicyProvisionError$Outbound } from "./taskauditpolicyprovisionerror.js";
import { TaskAuditPolicyProvisionReassigned, TaskAuditPolicyProvisionReassigned$Outbound } from "./taskauditpolicyprovisionreassigned.js";
import { TaskAuditReassignedToDelegate, TaskAuditReassignedToDelegate$Outbound } from "./taskauditreassignedtodelegate.js";
import { TaskAuditReassignmentListError, TaskAuditReassignmentListError$Outbound } from "./taskauditreassignmentlisterror.js";
import { TaskAuditRestart, TaskAuditRestart$Outbound } from "./taskauditrestart.js";
import { TaskAuditRevokeOutcome, TaskAuditRevokeOutcome$Outbound } from "./taskauditrevokeoutcome.js";
import { TaskAuditSLAEscalation, TaskAuditSLAEscalation$Outbound } from "./taskauditslaescalation.js";
import { TaskAuditStartedConnectorActions, TaskAuditStartedConnectorActions$Outbound } from "./taskauditstartedconnectoractions.js";
import { TaskAuditStateChange, TaskAuditStateChange$Outbound } from "./taskauditstatechange.js";
import { TaskAuditStepSkipped, TaskAuditStepSkipped$Outbound } from "./taskauditstepskipped.js";
import { TaskAuditStepUpApproval, TaskAuditStepUpApproval$Outbound } from "./taskauditstepupapproval.js";
import { TaskAuditWaitForAnalysisStepSuccess, TaskAuditWaitForAnalysisStepSuccess$Outbound } from "./taskauditwaitforanalysisstepsuccess.js";
import { TaskAuditWaitForAnalysisStepTimedOut, TaskAuditWaitForAnalysisStepTimedOut$Outbound } from "./taskauditwaitforanalysissteptimedout.js";
import { TaskAuditWaitForAnalysisStepWaiting, TaskAuditWaitForAnalysisStepWaiting$Outbound } from "./taskauditwaitforanalysisstepwaiting.js";
import { TaskAuditWaitStepSuccess, TaskAuditWaitStepSuccess$Outbound } from "./taskauditwaitstepsuccess.js";
import { TaskAuditWaitStepTimedOut, TaskAuditWaitStepTimedOut$Outbound } from "./taskauditwaitsteptimedout.js";
import { TaskAuditWaitStepUntilTime, TaskAuditWaitStepUntilTime$Outbound } from "./taskauditwaitstepuntiltime.js";
import { TaskAuditWaitStepWaiting, TaskAuditWaitStepWaiting$Outbound } from "./taskauditwaitstepwaiting.js";
import { TaskAuditWebhookApprovalAttempt, TaskAuditWebhookApprovalAttempt$Outbound } from "./taskauditwebhookapprovalattempt.js";
import { TaskAuditWebhookApprovalBadResponse, TaskAuditWebhookApprovalBadResponse$Outbound } from "./taskauditwebhookapprovalbadresponse.js";
import { TaskAuditWebhookApprovalFatalError, TaskAuditWebhookApprovalFatalError$Outbound } from "./taskauditwebhookapprovalfatalerror.js";
import { TaskAuditWebhookApprovalSuccess, TaskAuditWebhookApprovalSuccess$Outbound } from "./taskauditwebhookapprovalsuccess.js";
import { TaskAuditWebhookApprovalTriggered, TaskAuditWebhookApprovalTriggered$Outbound } from "./taskauditwebhookapprovaltriggered.js";
import { TaskAuditWebhookAttempt, TaskAuditWebhookAttempt$Outbound } from "./taskauditwebhookattempt.js";
import { TaskAuditWebhookSuccess, TaskAuditWebhookSuccess$Outbound } from "./taskauditwebhooksuccess.js";
import { TaskAuditWebhookTriggered, TaskAuditWebhookTriggered$Outbound } from "./taskauditwebhooktriggered.js";
/**
 * The currentState field.
 */
export declare const CurrentState: {
    readonly TaskStateUnspecified: "TASK_STATE_UNSPECIFIED";
    readonly TaskStateOpen: "TASK_STATE_OPEN";
    readonly TaskStateClosed: "TASK_STATE_CLOSED";
};
/**
 * The currentState field.
 */
export type CurrentState = OpenEnum<typeof CurrentState>;
/**
 * The eventType field.
 */
export declare const TaskAuditViewEventType: {
    readonly TaskAuditEventTypeUnspecified: "TASK_AUDIT_EVENT_TYPE_UNSPECIFIED";
    readonly TaskAuditEventTypeNeutral: "TASK_AUDIT_EVENT_TYPE_NEUTRAL";
    readonly TaskAuditEventTypeError: "TASK_AUDIT_EVENT_TYPE_ERROR";
};
/**
 * The eventType field.
 */
export type TaskAuditViewEventType = OpenEnum<typeof TaskAuditViewEventType>;
/**
 * The source field.
 */
export declare const Source: {
    readonly SourceUnspecified: "SOURCE_UNSPECIFIED";
    readonly SourceC1: "SOURCE_C1";
    readonly SourceJira: "SOURCE_JIRA";
    readonly SourceSlack: "SOURCE_SLACK";
    readonly SourceCopilotAgents: "SOURCE_COPILOT_AGENTS";
};
/**
 * The source field.
 */
export type Source = OpenEnum<typeof Source>;
/**
 * The TaskAuditView message.
 *
 * @remarks
 *
 * This message contains a oneof named typ. Only a single field of the following list may be set at a time:
 *   - comment
 *   - stateChange
 *   - approvalInstanceChange
 *   - connectorActionsStart
 *   - connectorActionsEnd
 *   - actionResult
 *   - taskCreated
 *   - certifyOutcome
 *   - actionSubmitted
 *   - grantOutcome
 *   - revokeOutcome
 *   - approvalReassigned
 *   - taskRestarted
 *   - accessRequestOutcome
 *   - provisionReassigned
 *   - provisionError
 *   - approvedAutomatically
 *   - reassignedToDelegate
 *   - hardReset
 *   - taskEscalated
 *   - conditionalPolicyExecutionResult
 *   - expressionPolicyStepError
 *   - approvalAutoAcceptedByPolicy
 *   - approvalAutoRejectedByPolicy
 *   - bulkActionError
 *   - webhookTriggered
 *   - webhookAttempt
 *   - webhookSuccess
 *   - policyEvaluationStep
 *   - waitStepSuccess
 *   - waitStepWaiting
 *   - waitStepTimedOut
 *   - webhookApprovalTriggered
 *   - webhookApprovalAttempt
 *   - webhookApprovalSuccess
 *   - webhookApprovalBadResponse
 *   - externalTicketTriggered
 *   - externalTicketCreated
 *   - externalTicketError
 *   - waitStepAnalysisSuccess
 *   - waitStepAnalysisWaiting
 *   - waitStepAnalysisTimedOut
 *   - stepUpApproval
 *   - externalTicketProvisionStepResolved
 *   - stepSkipped
 *   - reassignmentListError
 *   - slaEscalation
 *   - policyChanged
 *   - formInstanceChange
 *   - grantDurationUpdated
 *   - waitStepUntilTime
 *   - webhookApprovalFatalError
 */
export type TaskAuditView = {
    accessRequestOutcome?: TaskAuditAccessRequestOutcome | null | undefined;
    actionResult?: TaskAuditConnectorActionResult | null | undefined;
    actionSubmitted?: TaskAuditActionSubmitted | null | undefined;
    approvalAutoAcceptedByPolicy?: TaskAuditApprovalAutoAcceptedByPolicy | null | undefined;
    approvalAutoRejectedByPolicy?: TaskAuditApprovalAutoRejectedByPolicy | null | undefined;
    approvalInstanceChange?: TaskAuditApprovalInstanceChange | null | undefined;
    approvalReassigned?: TaskAuditPolicyApprovalReassigned | null | undefined;
    approvedAutomatically?: TaskAuditApprovalHappenedAutomatically | null | undefined;
    bulkActionError?: TaskAuditBulkActionError | null | undefined;
    certifyOutcome?: TaskAuditCertifyOutcome | null | undefined;
    comment?: TaskAuditComment | null | undefined;
    conditionalPolicyExecutionResult?: TaskAuditConditionalPolicyExecutionResult | null | undefined;
    connectorActionsEnd?: TaskAuditFinishedConnectorActions | null | undefined;
    connectorActionsStart?: TaskAuditStartedConnectorActions | null | undefined;
    created?: Date | null | undefined;
    /**
     * The currentState field.
     */
    currentState?: CurrentState | null | undefined;
    /**
     * The eventType field.
     */
    eventType?: TaskAuditViewEventType | null | undefined;
    expressionPolicyStepError?: TaskAuditExpressionPolicyStepError | null | undefined;
    externalTicketCreated?: TaskAuditExternalTicketCreated | null | undefined;
    externalTicketError?: TaskAuditExternalTicketError | null | undefined;
    externalTicketProvisionStepResolved?: TaskAuditExternalTicketProvisionStepResolved | null | undefined;
    externalTicketTriggered?: TaskAuditExternalTicketTriggered | null | undefined;
    formInstanceChange?: TaskAuditFormInstanceChange | null | undefined;
    grantDurationUpdated?: TaskAuditGrantDurationUpdated | null | undefined;
    grantOutcome?: TaskAuditGrantOutcome | null | undefined;
    hardReset?: TaskAuditHardReset | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
    metadata?: TaskAuditMetaData | null | undefined;
    policyChanged?: TaskAuditPolicyChanged | null | undefined;
    policyEvaluationStep?: TaskAuditPolicyEvaluationStep | null | undefined;
    provisionError?: TaskAuditPolicyProvisionError | null | undefined;
    provisionReassigned?: TaskAuditPolicyProvisionReassigned | null | undefined;
    reassignedToDelegate?: TaskAuditReassignedToDelegate | null | undefined;
    reassignmentListError?: TaskAuditReassignmentListError | null | undefined;
    revokeOutcome?: TaskAuditRevokeOutcome | null | undefined;
    slaEscalation?: TaskAuditSLAEscalation | null | undefined;
    /**
     * The source field.
     */
    source?: Source | null | undefined;
    stateChange?: TaskAuditStateChange | null | undefined;
    stepSkipped?: TaskAuditStepSkipped | null | undefined;
    stepUpApproval?: TaskAuditStepUpApproval | null | undefined;
    taskCreated?: TaskAuditNewTask | null | undefined;
    taskEscalated?: TaskAuditEscalateToEmergencyAccess | null | undefined;
    taskRestarted?: TaskAuditRestart | null | undefined;
    /**
     * The ticketId field.
     */
    ticketId?: string | null | undefined;
    /**
     * The userId field.
     */
    userId?: string | null | undefined;
    waitStepAnalysisSuccess?: TaskAuditWaitForAnalysisStepSuccess | null | undefined;
    waitStepAnalysisTimedOut?: TaskAuditWaitForAnalysisStepTimedOut | null | undefined;
    waitStepAnalysisWaiting?: TaskAuditWaitForAnalysisStepWaiting | null | undefined;
    waitStepSuccess?: TaskAuditWaitStepSuccess | null | undefined;
    waitStepTimedOut?: TaskAuditWaitStepTimedOut | null | undefined;
    waitStepUntilTime?: TaskAuditWaitStepUntilTime | null | undefined;
    waitStepWaiting?: TaskAuditWaitStepWaiting | null | undefined;
    webhookApprovalAttempt?: TaskAuditWebhookApprovalAttempt | null | undefined;
    webhookApprovalBadResponse?: TaskAuditWebhookApprovalBadResponse | null | undefined;
    webhookApprovalFatalError?: TaskAuditWebhookApprovalFatalError | null | undefined;
    webhookApprovalSuccess?: TaskAuditWebhookApprovalSuccess | null | undefined;
    webhookApprovalTriggered?: TaskAuditWebhookApprovalTriggered | null | undefined;
    webhookAttempt?: TaskAuditWebhookAttempt | null | undefined;
    webhookSuccess?: TaskAuditWebhookSuccess | null | undefined;
    webhookTriggered?: TaskAuditWebhookTriggered | null | undefined;
    /**
     * The workflowStep field.
     */
    workflowStep?: number | null | undefined;
};
/** @internal */
export declare const CurrentState$inboundSchema: z.ZodType<CurrentState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CurrentState$outboundSchema: z.ZodType<CurrentState, z.ZodTypeDef, CurrentState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CurrentState$ {
    /** @deprecated use `CurrentState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CurrentState, z.ZodTypeDef, unknown>;
    /** @deprecated use `CurrentState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CurrentState, z.ZodTypeDef, CurrentState>;
}
/** @internal */
export declare const TaskAuditViewEventType$inboundSchema: z.ZodType<TaskAuditViewEventType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskAuditViewEventType$outboundSchema: z.ZodType<TaskAuditViewEventType, z.ZodTypeDef, TaskAuditViewEventType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditViewEventType$ {
    /** @deprecated use `TaskAuditViewEventType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditViewEventType, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditViewEventType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditViewEventType, z.ZodTypeDef, TaskAuditViewEventType>;
}
/** @internal */
export declare const Source$inboundSchema: z.ZodType<Source, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Source$outboundSchema: z.ZodType<Source, z.ZodTypeDef, Source>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Source$ {
    /** @deprecated use `Source$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Source, z.ZodTypeDef, unknown>;
    /** @deprecated use `Source$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Source, z.ZodTypeDef, Source>;
}
/** @internal */
export declare const TaskAuditView$inboundSchema: z.ZodType<TaskAuditView, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditView$Outbound = {
    accessRequestOutcome?: TaskAuditAccessRequestOutcome$Outbound | null | undefined;
    actionResult?: TaskAuditConnectorActionResult$Outbound | null | undefined;
    actionSubmitted?: TaskAuditActionSubmitted$Outbound | null | undefined;
    approvalAutoAcceptedByPolicy?: TaskAuditApprovalAutoAcceptedByPolicy$Outbound | null | undefined;
    approvalAutoRejectedByPolicy?: TaskAuditApprovalAutoRejectedByPolicy$Outbound | null | undefined;
    approvalInstanceChange?: TaskAuditApprovalInstanceChange$Outbound | null | undefined;
    approvalReassigned?: TaskAuditPolicyApprovalReassigned$Outbound | null | undefined;
    approvedAutomatically?: TaskAuditApprovalHappenedAutomatically$Outbound | null | undefined;
    bulkActionError?: TaskAuditBulkActionError$Outbound | null | undefined;
    certifyOutcome?: TaskAuditCertifyOutcome$Outbound | null | undefined;
    comment?: TaskAuditComment$Outbound | null | undefined;
    conditionalPolicyExecutionResult?: TaskAuditConditionalPolicyExecutionResult$Outbound | null | undefined;
    connectorActionsEnd?: TaskAuditFinishedConnectorActions$Outbound | null | undefined;
    connectorActionsStart?: TaskAuditStartedConnectorActions$Outbound | null | undefined;
    created?: string | null | undefined;
    currentState?: string | null | undefined;
    eventType?: string | null | undefined;
    expressionPolicyStepError?: TaskAuditExpressionPolicyStepError$Outbound | null | undefined;
    externalTicketCreated?: TaskAuditExternalTicketCreated$Outbound | null | undefined;
    externalTicketError?: TaskAuditExternalTicketError$Outbound | null | undefined;
    externalTicketProvisionStepResolved?: TaskAuditExternalTicketProvisionStepResolved$Outbound | null | undefined;
    externalTicketTriggered?: TaskAuditExternalTicketTriggered$Outbound | null | undefined;
    formInstanceChange?: TaskAuditFormInstanceChange$Outbound | null | undefined;
    grantDurationUpdated?: TaskAuditGrantDurationUpdated$Outbound | null | undefined;
    grantOutcome?: TaskAuditGrantOutcome$Outbound | null | undefined;
    hardReset?: TaskAuditHardReset$Outbound | null | undefined;
    id?: string | null | undefined;
    metadata?: TaskAuditMetaData$Outbound | null | undefined;
    policyChanged?: TaskAuditPolicyChanged$Outbound | null | undefined;
    policyEvaluationStep?: TaskAuditPolicyEvaluationStep$Outbound | null | undefined;
    provisionError?: TaskAuditPolicyProvisionError$Outbound | null | undefined;
    provisionReassigned?: TaskAuditPolicyProvisionReassigned$Outbound | null | undefined;
    reassignedToDelegate?: TaskAuditReassignedToDelegate$Outbound | null | undefined;
    reassignmentListError?: TaskAuditReassignmentListError$Outbound | null | undefined;
    revokeOutcome?: TaskAuditRevokeOutcome$Outbound | null | undefined;
    slaEscalation?: TaskAuditSLAEscalation$Outbound | null | undefined;
    source?: string | null | undefined;
    stateChange?: TaskAuditStateChange$Outbound | null | undefined;
    stepSkipped?: TaskAuditStepSkipped$Outbound | null | undefined;
    stepUpApproval?: TaskAuditStepUpApproval$Outbound | null | undefined;
    taskCreated?: TaskAuditNewTask$Outbound | null | undefined;
    taskEscalated?: TaskAuditEscalateToEmergencyAccess$Outbound | null | undefined;
    taskRestarted?: TaskAuditRestart$Outbound | null | undefined;
    ticketId?: string | null | undefined;
    userId?: string | null | undefined;
    waitStepAnalysisSuccess?: TaskAuditWaitForAnalysisStepSuccess$Outbound | null | undefined;
    waitStepAnalysisTimedOut?: TaskAuditWaitForAnalysisStepTimedOut$Outbound | null | undefined;
    waitStepAnalysisWaiting?: TaskAuditWaitForAnalysisStepWaiting$Outbound | null | undefined;
    waitStepSuccess?: TaskAuditWaitStepSuccess$Outbound | null | undefined;
    waitStepTimedOut?: TaskAuditWaitStepTimedOut$Outbound | null | undefined;
    waitStepUntilTime?: TaskAuditWaitStepUntilTime$Outbound | null | undefined;
    waitStepWaiting?: TaskAuditWaitStepWaiting$Outbound | null | undefined;
    webhookApprovalAttempt?: TaskAuditWebhookApprovalAttempt$Outbound | null | undefined;
    webhookApprovalBadResponse?: TaskAuditWebhookApprovalBadResponse$Outbound | null | undefined;
    webhookApprovalFatalError?: TaskAuditWebhookApprovalFatalError$Outbound | null | undefined;
    webhookApprovalSuccess?: TaskAuditWebhookApprovalSuccess$Outbound | null | undefined;
    webhookApprovalTriggered?: TaskAuditWebhookApprovalTriggered$Outbound | null | undefined;
    webhookAttempt?: TaskAuditWebhookAttempt$Outbound | null | undefined;
    webhookSuccess?: TaskAuditWebhookSuccess$Outbound | null | undefined;
    webhookTriggered?: TaskAuditWebhookTriggered$Outbound | null | undefined;
    workflowStep?: number | null | undefined;
};
/** @internal */
export declare const TaskAuditView$outboundSchema: z.ZodType<TaskAuditView$Outbound, z.ZodTypeDef, TaskAuditView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditView$ {
    /** @deprecated use `TaskAuditView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditView, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditView$Outbound, z.ZodTypeDef, TaskAuditView>;
    /** @deprecated use `TaskAuditView$Outbound` instead. */
    type Outbound = TaskAuditView$Outbound;
}
export declare function taskAuditViewToJSON(taskAuditView: TaskAuditView): string;
export declare function taskAuditViewFromJSON(jsonString: string): SafeParseResult<TaskAuditView, SDKValidationError>;
