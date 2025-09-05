import { ConductoroneSDKTypescriptCore } from "../core.js";
import { RequestOptions } from "../lib/sdks.js";
import { ConductoroneSDKTypescriptError } from "../sdk/models/errors/conductoronesdktypescripterror.js";
import { ConnectionError, InvalidRequestError, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../sdk/models/errors/httpclienterrors.js";
import { ResponseValidationError } from "../sdk/models/errors/responsevalidationerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import * as shared from "../sdk/models/shared/index.js";
import { APIPromise } from "../sdk/types/async.js";
import { Result } from "../sdk/types/fp.js";
/**
 * Create App Entitlement Monitor Binding
 *
 * @remarks
 * Invokes the c1.api.accessconflict.v1.AppEntitlementMonitorBindingService.CreateAppEntitlementMonitorBinding method.
 */
export declare function appEntitlementMonitorBindingCreateAppEntitlementMonitorBinding(client: ConductoroneSDKTypescriptCore, request?: shared.CreateAppEntitlementMonitorBindingRequest | undefined, options?: RequestOptions): APIPromise<Result<operations.C1ApiAccessconflictV1AppEntitlementMonitorBindingServiceCreateAppEntitlementMonitorBindingResponse, ConductoroneSDKTypescriptError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>>;
