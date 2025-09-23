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
import { PageIterator } from "../sdk/types/operations.js";
/**
 * Search App Resources
 *
 * @remarks
 * Invokes the c1.api.app.v1.AppResourceSearch.SearchAppResources method.
 */
export declare function appResourceSearchSearchAppResources(client: ConductoroneSDKTypescriptCore, request?: shared.SearchAppResourcesRequest | undefined, options?: RequestOptions): APIPromise<PageIterator<Result<operations.C1ApiAppV1AppResourceSearchSearchAppResourcesResponse, ConductoroneSDKTypescriptError | ResponseValidationError | ConnectionError | RequestAbortedError | RequestTimeoutError | InvalidRequestError | UnexpectedClientError | SDKValidationError>, {
    cursor: string;
}>>;
