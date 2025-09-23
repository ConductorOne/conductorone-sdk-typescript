import { ConductoroneSDKTypescriptCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConductoroneSDKTypescriptError } from "../sdk/models/errors/conductoronesdktypescripterror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../sdk/models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../sdk/models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { APIPromise } from "../sdk/types/async.js";
import { Result } from "../sdk/types/fp.js";
/**
 * Approve With Step Up
 *
 * @remarks
 * Invokes the c1.api.task.v1.TaskActionsService.ApproveWithStepUp method.
 */
export declare function taskActionsApproveWithStepUp(client: ConductoroneSDKTypescriptCore, request: operations.C1ApiTaskV1TaskActionsServiceApproveWithStepUpRequest, options?: RequestOptions): APIPromise<Result<operations.C1ApiTaskV1TaskActionsServiceApproveWithStepUpResponse, ConductoroneSDKTypescriptError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
