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
 * List Users
 *
 * @remarks
 * List the users, as AppEntitlementUsers objects, of an app entitlement.
 *
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export declare function appEntitlementsListUsers(client: ConductoroneSDKTypescriptCore, request: operations.C1ApiAppV1AppEntitlementsListUsersRequest, options?: RequestOptions): APIPromise<Result<operations.C1ApiAppV1AppEntitlementsListUsersResponse, ConductoroneSDKTypescriptError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
