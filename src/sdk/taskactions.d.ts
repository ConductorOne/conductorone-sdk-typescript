import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
export declare class TaskActions extends ClientSDK {
    /**
     * Approve
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.Approve method.
     */
    approve(request: operations.C1ApiTaskV1TaskActionsServiceApproveRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceApproveResponse>;
    /**
     * Approve With Step Up
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.ApproveWithStepUp method.
     */
    approveWithStepUp(request: operations.C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse>;
    /**
     * Close
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.Close method.
     */
    close(request: operations.C1ApiTaskV1TaskActionsServiceCloseRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceCloseResponse>;
    /**
     * Comment
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.Comment method.
     */
    comment(request: operations.C1ApiTaskV1TaskActionsServiceCommentRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceCommentResponse>;
    /**
     * Deny
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.Deny method.
     */
    deny(request: operations.C1ApiTaskV1TaskActionsServiceDenyRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceDenyResponse>;
    /**
     * Escalate To Emergency Access
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.EscalateToEmergencyAccess method.
     */
    escalateToEmergencyAccess(request: operations.C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceEscalateToEmergencyAccessResponse>;
    /**
     * Process Now
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.ProcessNow method.
     */
    processNow(request: operations.C1ApiTaskV1TaskActionsServiceProcessNowRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceProcessNowResponse>;
    /**
     * Reassign
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.Reassign method.
     */
    reassign(request: operations.C1ApiTaskV1TaskActionsServiceReassignRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceReassignResponse>;
    /**
     * Hard Reset
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.HardReset method.
     */
    hardReset(request: operations.C1ApiTaskV1TaskActionsServiceHardResetRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceHardResetResponse>;
    /**
     * Restart
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.Restart method.
     */
    restart(request: operations.C1ApiTaskV1TaskActionsServiceRestartRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceRestartResponse>;
    /**
     * Skip Step
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.SkipStep method.
     */
    skipStep(request: operations.C1ApiTaskV1TaskActionsServiceSkipStepRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceSkipStepResponse>;
    /**
     * Update Grant Duration
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.UpdateGrantDuration method.
     */
    updateGrantDuration(request: operations.C1ApiTaskV1TaskActionsServiceUpdateGrantDurationRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceUpdateGrantDurationResponse>;
    /**
     * Update Request Data
     *
     * @remarks
     * Invokes the c1.api.task.v1.TaskActionsService.UpdateRequestData method.
     */
    updateRequestData(request: operations.C1ApiTaskV1TaskActionsServiceUpdateRequestDataRequest, options?: RequestOptions): Promise<operations.C1ApiTaskV1TaskActionsServiceUpdateRequestDataResponse>;
}
