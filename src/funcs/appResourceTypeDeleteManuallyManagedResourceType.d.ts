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
 * Delete Manually Managed Resource Type
 *
 * @remarks
 * Invokes the c1.api.app.v1.AppResourceTypeService.DeleteManuallyManagedResourceType method.
 */
export declare function appResourceTypeDeleteManuallyManagedResourceType(client: ConductoroneSDKTypescriptCore, request: operations.C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeRequest, options?: RequestOptions): APIPromise<Result<operations.C1ApiAppV1AppResourceTypeServiceDeleteManuallyManagedResourceTypeResponse, ConductoroneSDKTypescriptError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
